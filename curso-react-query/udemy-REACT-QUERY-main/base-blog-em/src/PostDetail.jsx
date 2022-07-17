import { useQuery ,useMutation} from "react-query";

async function fetchComments(postId) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
  );
  return response.json();
}

async function deletePost(postId) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/postId/${postId}`,
    { method: "DELETE" }
  );
  return response.json();
}

async function updatePost(postId) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/postId/${postId}`,
    { method: "PATCH", data: { title: "REACT QUERY FOREVER!!!!" } }
  );
  return response.json();
}



export function PostDetail({ post }) {
  // replace with useQuery
  const  { data , isError, error, isLoading}  = useQuery( ["comments", post.id], fetchComments);

  const deleteMutation = useMutation((postId) => deletePost(post.id))
  const updateMutation = useMutation((postId) => updatePost(post.id));

  if ( isLoading) {
    return <p>Is Loading...</p>
  }
  if ( isError) {
    return <p> Is error {error.toString()}</p>
  }

  return (
    <>
      <h3 style={{ color: "blue" }}>{post.title}</h3>
      <button onClick={ () => deleteMutation.mutate(post.id)}>Delete</button> 
      <button onClick={() => updateMutation.mutate(post.id)}>Update title</button>
      { deleteMutation && deleteMutation.isError && <p style={{color: 'red'}}>Error deleting</p>}
      { deleteMutation.isLoading && ( <p style={{color: 'gray'}}>Deleting Post</p>)}
      { deleteMutation.isSuccess && (
        <p style={{color: "green"}}>Delete success</p>
      )}
      <p>{post.body}</p>
      <h4>Comments</h4>
      {data.map((comment) => (
        <li key={comment.id}>
          {comment.email}: {comment.body}
        </li>
      ))}
    </>
  );
}
