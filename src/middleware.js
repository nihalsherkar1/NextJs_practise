import { NextResponse } from "next/server";

export function middleware(request) {
  if (request.nextUrl.pathname == "/about/aboutadmin") {
    return NextResponse.redirect(new URL("/login/userlogin", request.url));
  }
}

export const config = {
  matcher: ["/about/aboutadmin", "/studentlist/:path*"],
};
