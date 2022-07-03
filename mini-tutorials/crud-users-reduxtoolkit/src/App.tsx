import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import './index.css';
import UserList from './components/UserList';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <UserList></UserList>
    </>
  )
}

export default App
