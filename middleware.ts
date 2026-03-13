import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "@/lib/auth";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow the login page, auth API, and Vercel Blob upload callback without a token
  if (
    pathname === "/admin/login" ||
    pathname === "/api/admin/auth" ||
    pathname === "/api/admin/upload"
  ) {
    return NextResponse.next();
  }

  const token = request.cookies.get("admin-token")?.value;

  if (!token || !(await verifyToken(token))) {
    if (pathname.startsWith("/api/")) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/api/admin/:path*"],
};
