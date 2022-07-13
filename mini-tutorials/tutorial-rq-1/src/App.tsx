import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Users from './Users'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Users></Users>
    </>
  )
}

export default App
