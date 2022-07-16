import { useState } from 'react'
import logo from './logo.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Users from './Users'
import UserDetail from './components/UserDetail'
import UserForm from './components/UserForm'


function App() {
  const [count, setCount] = useState(0)
  const [ userId, setUserId] = useState();


  return (
    <>
       <BrowserRouter>
    <Routes>
     <Route path='/' element={<Users></Users>}></Route>
     <Route path="/user-detail/:id" element={<UserDetail/>}></Route>
     <Route path="/create-user" element={<UserForm></UserForm>}></Route>
     </Routes>
     </BrowserRouter>

    
    </>
  )
}

export default App
