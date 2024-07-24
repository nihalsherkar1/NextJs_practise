import Link from "next/link";

const AboutUser = () => {
  return (
    <div>
      <h1>AboutUser</h1>
      <Link href={"/about"}>Back to About</Link>
    </div>
  );
};

export default AboutUser;
