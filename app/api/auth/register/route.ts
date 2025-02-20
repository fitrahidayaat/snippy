import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
	const { email, password } = await req.json();

	const existingUser = await prisma.user.findUnique({ where: { email } });
	if (existingUser)
		return NextResponse.json(
			{ error: "Email already exists" },
			{ status: 400 }
		);

	const hashedPassword = await bcrypt.hash(password, 10);
	await prisma.user.create({
		data: { email, password: hashedPassword },
	});

	return NextResponse.json({ message: "User created" }, { status: 201 });
}
