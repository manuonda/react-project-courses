import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Pokemon } from './type'

function App() {
  const [pokemons, setPokemons] = useState<Array<Pokemon>>([
    {id: 1, name:'David Garcia'},
    {id: 2, name:'Andres Garcia'}
  ]);
  

  
  useEffect(()=>{

  },[]);

  return (
   <>
    
   </>
  )
}

export default App
