"use client";
import Link from "next/link";
import "./login.css";

import { usePathname } from "next/navigation";

export default function Layout({ children }) {
  const pathName = usePathname();
  return (
    <div>
      {pathName !== "/login/userlogin" ? (
        <ul className="login-menu">
          <li>
            <h4>Navbar</h4>
          </li>
          <li>
            <Link className="link" href={"/login/adminlogin"}>
              Admin Login
            </Link>
          </li>
          <li>
            <Link className="link" href={"/login/userlogin"}>
              User Login
            </Link>
          </li>
          <li>
            <Link className="link" href={"/"}>
              Back Home
            </Link>
          </li>
        </ul>
      ) : (
        <Link style={{ textDecoration: "none" }} href={"/login"}>
          Back To Normal Login
        </Link>
      )}
      {children}
    </div>
  );
}
