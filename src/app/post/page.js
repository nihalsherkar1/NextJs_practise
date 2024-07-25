import Link from "next/link";
import getPosts from "../../../services/getPost";

export default async function Post() {
  const data = getPosts();
  const result = await data;
  console.log(result);
  return (
    <div>
      <h1>Posts</h1>
      {result.map((item) => (
        <div key={item.id}>
          <ul>
            <li>
              <Link href={`/post/${item.id}`}> {item.title}</Link>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "Post",
    description: "This is Post section",
  };
}
