// Hooks use karenge toh start me "use client"likhna hai

import Link from "next/link";

// naviagtion ke lite next/navigation se import krna hai "useRouter"

export default function Home() {
  // const router = useRouter();
  // const navigate = (name) => {
  //   router.push(name);
  // };

  return (
    <main>
      <h1>Hello </h1>
      <Link href={"/productlist"}>Go to Product List</Link>
      <Link href={"/carts"}>Go to carts List</Link>

      {/* <Link href={"/login"}>Go to Login</Link>
      <br />
      <br />

      <Link href={"/about"}>Go to About</Link>
      <br />
      <br /> */}
      {/* 
          In this line we are using react hook event thast why we first write "cliet side" on top
      */}
      {/* <button onClick={() => navigate("/login")}>Go to Login</button>
      <button onClick={() => navigate("/about")}>Go to About</button> */}
    </main>
  );
}
