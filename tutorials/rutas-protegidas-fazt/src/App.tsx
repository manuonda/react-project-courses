import { BrowserRouter, Link, Route, BrowserRouter as Router, Routes } from "react-router-dom"


import {Admin, Analitycs, Dashboard, Home, Landing}  from "./pages";
import { useState } from "react";
import { User } from "./types";
import { ProtectRouted } from "./components/ProtectRouted";

const App = (): JSX.Element => {
  const[user,setUser] = useState<User|null >({
    id: 0,
    nombre: "",
    permissions:[],
    roles:[]
  });

  const login = () => {
    setUser({
      id: 12,
      nombre:'Jhon',
      permissions:["analize"],
      roles:["admin"]
    });
  }

  const logout = ()=> {
    setUser(null);
  }
  return (
    <BrowserRouter>
            <Navigation />
             {
              user ? (
                <button onClick={logout}>Logout</button>
              ) : (
                <button onClick={login}>Login</button>
              )
             }

      <Routes>
          
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/landing" element={<Landing />} />
         
          {/* Multipe rutas */}
          <Route element={<ProtectRouted isAllowed={!!user}  />}>
              <Route path="/home" element={<Home />}/>
              <Route path="/dashboard" element={<Dashboard />}/>
          </Route>
          
           {/** Un solo componente */}
          <Route path="/analytics" element={
            <ProtectRouted 
              isAllowed={!!user && user.permissions.includes('analize')}
              reidrectTo="/home"
              >
              <Analitycs></Analitycs>
            </ProtectRouted>
          }/>
          <Route path="/admin" element={
            <ProtectRouted isAllowed={!!user && user.roles.includes('admin')}>
              <Admin />
            </ProtectRouted>
          }/>
          
      </Routes>
    </BrowserRouter>
  );
}

function Navigation(){
  return (
    <ul>
      <li>
        <Link to="/landing">Landing</Link>
      </li>
      <li>
        <Link to="/home">Home</Link>
      </li>
      <li>
        <Link to="/dashboard">Dashboard</Link>
      </li>
      <li>
        <Link to="/analytics">Analytics</Link>
      </li>
      <li>
        <Link to="/admin">Admin</Link>
      </li>
    </ul>
  )
}

export default App;
