export default async function postData() {
  let data = await fetch("https://dummyjson.com/posts");
  data = await data.json();

  return data.posts;
}
