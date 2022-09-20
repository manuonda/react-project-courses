import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Navbar } from './components'
import Home from './pages/Home'
import { LayoutContainer } from './styled-components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <LayoutContainer>
        <Home />
      </LayoutContainer>
    </>
  )
}

export default App
