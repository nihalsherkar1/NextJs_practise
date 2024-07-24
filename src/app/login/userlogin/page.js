"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const UserLogin = () => {
  const router = useRouter();
  return (
    <div>
      <h1 className="heading">User Login</h1>
      <Link href={"/"}>Back to Home</Link>
    </div>
  );
};

export default UserLogin;
