import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import './index.css';
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';
import UserList from './components/UserList';
import UserForm from './components/UserForm';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<UserList></UserList>}></Route>
        <Route path="/create-user" element={<UserForm></UserForm>}></Route>
        <Route path="/edit-user/:id" element={<UserForm></UserForm>}></Route> 
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
