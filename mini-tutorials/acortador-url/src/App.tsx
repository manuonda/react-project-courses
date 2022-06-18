import { useState } from 'react'
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import Create from './pages/create'
import Redirect from './pages/redirect'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Create></Create>}></Route>
      <Route path='/:id' element={<Redirect></Redirect>}></Route>

    </Routes>
    </BrowserRouter>
  )
}

export default App
