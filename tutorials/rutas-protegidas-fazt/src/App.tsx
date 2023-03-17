import { BrowserRouter, Link, Route, BrowserRouter as Router, Routes } from "react-router-dom"

import {Admin, Analitycs, Dashboard, Home, Landing}  from "./pages";
import { useState } from "react";

const App = (): JSX.Element => {
  const[user,setUser] = useState<User | null >({
    id: 0,
    nombre: ""
  });

  const login = () => {
    setUser({
      id: 12,
      nombre:'Jhon'
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
        <Route path="/" element={<h1>Home</h1>}>
          <Route path="/landing" element={<Landing />}></Route>
          <Route path="/home" element={<Home user={user}/>}/>
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path="/analytics" element={<Analitycs />}/>
          <Route path="/admin" element={<Admin />}/>
          
        </Route>
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
    </ul>
  )
}

export default App;
