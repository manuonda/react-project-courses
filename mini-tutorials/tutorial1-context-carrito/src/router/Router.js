import React from 'react'
import { BrowserRouter , Route , Routes} from 'react-router-dom'
import Home from '../pages/home/Home'
import Login from '../pages/Login/Login'

export const Rutas = () => {
  return (
    <>
    <BrowserRouter>
     <Routes>
         <Route exact path="/" element={<Home/>} ></Route>
         <Route exact path="/login" element={<Login></Login>}></Route>
     </Routes>
    </BrowserRouter>
    </>
  )
}

export default Rutas;


