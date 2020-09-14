import React from 'react';
import logo from './logo.svg';
import './App.css';
import  CantidadPokemon from './components/cantidadPokemon'
import  ComprarPokemon from './components/comprarPokemon'

function App() {
  return (
    <div className="App">
      <CantidadPokemon></CantidadPokemon>
      <ComprarPokemon></ComprarPokemon> 
    </div>
  );
}

export default App;
