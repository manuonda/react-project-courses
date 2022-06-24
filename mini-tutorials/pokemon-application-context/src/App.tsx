import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { TPokemon } from './type'
import Pokemon from './pages/Pokemon';

function App() {
  const [pokemons, setPokemons] = useState<Array<TPokemon>>([
    {id: 1, name:'David Garcia'},
    {id: 2, name:'Andres Garcia'}
  ]);
  

  
  useEffect(()=>{

  },[]);

  return (
   <>
     <Pokemon listado={pokemons}></Pokemon>    
   </>
  )
}

export default App
