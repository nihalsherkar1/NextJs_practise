import Link from "next/link";

const Login = () => {
  return (
    <div>
      <h1>Normal login</h1>
      <Link href={"/login/userlogin"}>Go to User Login</Link>
      <br />
      <Link href={"/login/adminlogin"}>Go to Admin Login</Link>
      <br />
      <Link href={"/"}>Back Home</Link>
    </div>
  );
};

export default Login;
