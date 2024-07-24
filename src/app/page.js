// Hooks use karenge toh start me "use client"likhna hai
"use client";

import Link from "next/link";
import { useState } from "react";

// naviagtion ke lite next/navigation se import krna hai "useRouter"
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const navigate = (name) => {
    router.push(name);
  };
  // const [name, setName] = useState("Nihal");
  // console.log("Mount ");

  // const apple = () => {
  //   setName("Nihalahmad");
  // };

  return (
    <main>
      <h1>Hello </h1>

      <Link href={"/login"}>Go to Login</Link>
      <br />
      <br />

      <Link href={"/about"}>Go to About</Link>
      <br />
      <br />
      {/* 
          In this line we are using react hook event thast why we first write "cliet side" on top
      */}
      <button onClick={() => navigate("/login")}>Go to Login</button>
      <button onClick={() => navigate("/about")}>Go to About</button>

      {/* <button onClick={apple}>Click me</button> */}
    </main>
  );
}
