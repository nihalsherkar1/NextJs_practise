import Link from "next/link";
import "./about.css";

export default function Layout({ children }) {
  return (
    <div>
      <ul className="about-menu">
        <li>
          <h4>
            <Link className="link" href={"/about"}>
              About
            </Link>
          </h4>
        </li>
        <li>
          <Link className="link" href={"/about/aboutuser"}>
            About User
          </Link>
        </li>
        <li>
          <Link className="link" href={"/about/aboutadmin"}>
            About Admin
          </Link>
        </li>
        <li>
          <Link className="link" href={"/"}>
            Back to Home
          </Link>
        </li>
      </ul>
      {children}
    </div>
  );
}
