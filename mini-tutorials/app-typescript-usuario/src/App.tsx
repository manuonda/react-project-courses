import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List';
import { Usuario } from './types';
import FormUsuario from './components/FormUsuario';


interface AppState {
  usuarios: Array<Usuario>
}


function App() {
  
  const[valor, setValor] = useState<string | number>();
  const[usuarios,setUsuarios] = useState<AppState["usuarios"]>([]);


  const addUser = (usuario:Usuario) => {
     setUsuarios([...usuarios, usuario]);
  }

  useEffect(() => {
     
     const fetchUsuarios = ():Promise<Array<Usuario>> => {
        return fetch('http://localhost:3000/users')
        .then(res => res.json());
     }
     
     fetchUsuarios()
     .then(setUsuarios)
  },[]);

  return (
    <>
     <h1>Listado de Usuarios</h1>
     <List usuarios={usuarios}></List> 
     <FormUsuario onNewUsuario={addUser}></FormUsuario>
    </>
  );
}

export default App;
