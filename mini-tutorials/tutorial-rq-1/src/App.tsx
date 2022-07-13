import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Users from './Users'

function App() {
  const [count, setCount] = useState(0)
  const [ userId, setUserId] = useState();


  return (
    <>
     <div style={{ padding: 20, width:'30%'}}>

     </div>
     <Users setUserId={setUserId}></Users>
     {userId}
    </>
  )
}

export default App
