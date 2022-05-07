import React from 'react'
import { BrowserRouter , Route , Routes} from 'react-router-dom'
import Home from '../pages/home/Home'
import Login from '../pages/Login/Login'

export const Rutas = () => {
  return (
    <>
    <BrowserRouter>
     <Routes>
         <Route exact path="/" element={<Login/>} ></Route>
         <Route exact path="/home" element={<Home/>}></Route>
     </Routes>
    </BrowserRouter>
    </>
  )
}

export default Rutas;


