/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getAll } from "../api//posts";
import { IPost } from "../type";



export default function Posts({ setPostId}:any) {
  const {data: posts,error, isLoading ,isFetching}  =  useQuery(["posts"], getAll); 

  // const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState(null);
  // const [posts, setPosts] = useState<IPost[]>([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setIsLoading(true);
  //     try {
  //       const data = await getAll();
  //       setPosts(data);
  //       setError(null);
  //     } catch (error:any) {
  //       setError(error);
  //       setPosts([]);
  //     }
  //     setIsLoading(false);
  //   };
  //   fetchData();
  // }, []);


  if (isLoading) {
    return (
      <div>
        <span className="spinner-border"></span> Loading Posts...
      </div>
    );
  }

  if (error) {
    return (
      <section className="alert alert-danger">
        Error fetching posts: {error}
      </section>
    );
  }

  return (
    <section>
      <h2>Posts: {isFetching && <>Loading...</> }</h2>
      <ul>
        {posts.map((post:IPost) => (
          <li key={post.id}>
            <a onClick={() => setPostId(post.id)} href="#">
              {post.title}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}