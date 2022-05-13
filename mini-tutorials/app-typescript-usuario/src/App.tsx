import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List';
import { Usuario } from './types';


interface AppState {
  usuarios: Array<Usuario>
}


function App() {
  
  const[valor, setValor] = useState<string | number>();
  const[usuarios,setUsuarios] = useState<AppState["usuarios"]>([]);


  useEffect(() => {
     

  },[]);

  return (
    <>
     <h1>Listado de Usuarios</h1>
     <List usuarios={usuarios}></List> 
    </>
  );
}

export default App;
