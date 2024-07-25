import getPosts from "../../../../services/getPost";

export default async function postList(props) {
  const data = getPosts();
  const result = await data;
  const currentId = props.params.posts;
  const postDetail = result[currentId - 1];

  return (
    <div>
      <h1>Post List</h1>
      <div>
        <ul>
          <li>ID: {postDetail.id} </li>
          <li>Title: {postDetail.title} </li>
          <li>Body: {postDetail.body} </li>
          <li>
            <span>Tages</span>
            {postDetail.tags.map((no) => (
              <div key={no.id}>
                <ul>
                  <li>{no}</li>
                </ul>
              </div>
            ))}
          </li>
          <li>Views: {postDetail.views}</li>
        </ul>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const data = await getPosts();
  return data.map((p) => ({
    posts: p.id.toString(), // Convert the ID to a string
  }));
}
