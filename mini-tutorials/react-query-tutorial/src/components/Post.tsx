/* eslint-disable jsx-a11y/anchor-is-valid */
import { openStdin } from "process";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getPostById } from "../api/posts";
import { IPost } from "../type";

interface IProps {
  
}

export default function Post({ postId}:any) {
  const {data: post, error, isLoading} = useQuery(["posts",postId], () =>  getPostById(postId));
  // const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState<string | null>(null);
  // const [post, setPost] = useState<IPost| null>(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setIsLoading(true);
  //     try {
  //       const data = await getPostById(postId);
  //       setPost(data);
  //       setError(null);
  //     } catch (error) {
  //       setError(null);
  //       setPost(null);
  //     }
  //     setIsLoading(false);
  //   };
  //   fetchData();
  // }, [postId]);

  if (isLoading) {
    return (
      <div>
        <span className="spinner-border"></span> Loading Post...
      </div>
    );
  }

  if (error) {
    return (
      <div className="alert alert-danger">
        Error fetching post: {error}
      </div>
    );
  }

  return (
    <article>
      <h1>{post?.title}</h1>
      <p>{post?.body}</p>
    </article>
  );
}