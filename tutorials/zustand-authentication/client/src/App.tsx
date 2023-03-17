import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import LoginPage from './pages/login/LoginPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <><LoginPage/></>
  )
}

export default App
