import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import openModal from './components/openModal'

function App() {
  const [count, setCount] = useState(0)


  const handleOpenModal = () => {
     openModal();
  }
  return (
    <div className="App">
      <button onClick={handleOpenModal}>Abrir Modal</button>
    </div>
  )
}

export default App
