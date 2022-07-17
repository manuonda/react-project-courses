import { useEffect, useState } from "react";
import { QueryClient, useQuery } from "react-query";

import { PostDetail } from "./PostDetail";
const maxPostPage = 10;

async function fetchPosts(pageNumber) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${pageNumber}`
  );
  return response.json();
}

export function Posts() {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedPost, setSelectedPost] = useState(null);

  const queryClient = new QueryClient();

  useEffect(() => {
     const nextPage = currentPage + 1 ;
     queryClient.prefetchQuery(["posts", nextPage], () => fetchPosts(nextPage));


  },[currentPage, queryClient]);

  // replace with useQuery
  const {data ,isError, error, isLoading, isFetching} = useQuery(["posts", currentPage],  
    () => fetchPosts(currentPage) ,{
      keepPreviousData: true
    });
  if(isLoading) return <>Loading...</>

  if(isError) return <>Error something is wrong {error.toString()}</>

  if ( isFetching) return <p> Loadin fetching data...</p>
  return (
    <>
      <ul>
        {data.map((post) => (
          <li
            key={post.id}
            className="post-title"
            onClick={() => setSelectedPost(post)}
          >
            {post.title}
          </li>
        ))}
      </ul>
      <div className="pages">
        <button disabled={currentPage <= 1} onClick={() => setCurrentPage(previousValue => previousValue - 1)}>
          Previous page
        </button>
        <span>Page {currentPage + 1}</span>
        <button disabled={currentPage >= maxPostPage} onClick={() => setCurrentPage(previousValue => previousValue + 1 )}>
          Next page
        </button>
      </div>
      <hr />
      {selectedPost && <PostDetail post={selectedPost} />}
    </>
  );
}
