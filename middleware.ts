import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const { pathname } = req.nextUrl;

  // Redirect unauthenticated users trying to access /section/*
  if (!token && pathname.startsWith("/section")) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // Redirect authenticated users away from /, /login, and /signup to /section/dashboard
  if (token && ["/", "/login", "/signup"].includes(pathname)) {
    return NextResponse.redirect(new URL("/section/dashboard", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/login", "/signup", "/section/:path*"],
};
