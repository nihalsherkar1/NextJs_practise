"use client";
import Link from "next/link";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <Link href={"/about/aboutuser"}>About User</Link>
      <br />
      <br />

      <Link href={"/about/aboutadmin"}>About Admin</Link>
      <br />

      <Link href={"/"}>Back to Home</Link>
    </div>
  );
};

export default About;
