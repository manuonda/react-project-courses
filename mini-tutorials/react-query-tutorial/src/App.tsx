import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Posts from './components/Posts'
import NewPost from './components/NewPost'
import Post from "./components/Post";

function App() {
  const [count, setCount] = useState(0)
  const [postId, setPostId] = useState<number>(-1);

  return (
    <main className="container">
    <h1 className="mb-4">React-Query Demo</h1>
    {postId > -1 && (
      <div>
        <a onClick={() => setPostId(-1)} href="#">
          Back
        </a>
      </div>
    )}
    {postId > -1 ? (
      <Post postId={postId} setPostId={setPostId} />
    ) : (
      <div className="row gap-4">
        <div className="col-md">
          <NewPost />
        </div>
        <div className="col-md">
          <Posts setPostId={setPostId} />
        </div>
      </div>
    )}
  </main>
  )
}

export default App
