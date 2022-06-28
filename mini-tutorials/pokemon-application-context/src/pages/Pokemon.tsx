import { useContext, useEffect } from "react";
import { PokemonContext, PokemonContextType, PokemonProvider, Provider } from "../context/pokemonContext";
import { TPokemon } from "../type";
import Pokedex from "./components/Pokedex";
import PokemonList from "./components/PokemonList";

const Pokemon =() => {
  const context = useContext(PokemonContext);
  console.log('context : ', context);
  if ( context === undefined) {
    return (<div>
      <h1>No se creo context</h1>
    </div> )
  }
  const {state , dispatch }  = context;
  
  console.log('context : ', context);
  console.log(state, dispatch);
  
  useEffect(() => {
    
  }); 

  return(
      <>
      <PokemonProvider>
        <PokemonList listado={state.pokemons}></PokemonList>
        <Pokedex></Pokedex>  
      </PokemonProvider>
      </>
  )
}

export default Pokemon;