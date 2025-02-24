import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma"; // Adjust path to your Prisma instance
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const search = searchParams.get("search") || "";

    const links = await prisma.link.findMany({
      where: {
        OR: [
          { title: { contains: search, mode: "insensitive" } },
          { originalLink: { contains: search, mode: "insensitive" } },
          { shortLink: { contains: search, mode: "insensitive" } },
        ],
      },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(links, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch links" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { title, originalLink, shortLink } = await req.json();

    const existingLink = await prisma.link.findFirst({
      where: { shortLink },
    });

    if (existingLink) {
      return NextResponse.json(
        { error: "Short link already exists" },
        { status: 400 }
      );
    }

    const newLink = await prisma.link.create({
      data: {
        userId: session.user.id,
        title,
        originalLink,
        shortLink,
      },
    });

    return NextResponse.json(newLink, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create link" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: Request) {
  try {
    const { id } = await req.json();

    if (!id) {
      return NextResponse.json({ error: "ID is required" }, { status: 400 });
    }

    const existingLink = await prisma.link.findUnique({
      where: { id },
    });

    if (!existingLink) {
      return NextResponse.json({ error: "Link not found" }, { status: 404 });
    }

    await prisma.link.delete({ where: { id } });

    return NextResponse.json(
      { message: "Link deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete link" },
      { status: 500 }
    );
  }
}

export async function PUT(req: Request) {
  try {
    const { id, title, originalLink, shortLink } = await req.json();

    if (!id) {
      return NextResponse.json({ error: "ID is required" }, { status: 400 });
    }

    // ✅ Check if the provided short link already exists (excluding the current link)
    const existingLink = await prisma.link.findFirst({
      where: { shortLink, NOT: { id } },
    });

    if (existingLink) {
      return NextResponse.json(
        { error: "Short link already exists" },
        { status: 400 }
      );
    }

    const updatedLink = await prisma.link.update({
      where: { id },
      data: { title, originalLink, shortLink },
    });

    return NextResponse.json(updatedLink, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update link" },
      { status: 500 }
    );
  }
}