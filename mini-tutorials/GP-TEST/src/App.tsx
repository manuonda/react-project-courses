import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Navbar} from './components'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
     <>
     <Navbar />
     <Home />
     </>
  )
}

export default App
