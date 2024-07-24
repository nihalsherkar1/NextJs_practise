import Link from "next/link";

const AdminLogin = () => {
  return (
    <div>
      <h1>Admin Login</h1>
      <Link href={"/login"}>Back to Normal Login</Link>
    </div>
  );
};

export default AdminLogin;
