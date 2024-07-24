import { NextResponse } from "next/server";

export function middleware(request) {
  if (request.nextUrl.pathname !== "/register") {
    return NextResponse.redirect(new URL("/register", request.url));
  }
}
