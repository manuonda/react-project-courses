import { useContext } from "react";
import { PokemonContext, PokemonProvider, Provider } from "../context/pokemonContext";
import { TPokemon } from "../type";
import Pokedex from "./components/Pokedex";
import PokemonList from "./components/PokemonList";

interface IProps  {
   listado : Array<TPokemon>
}

const Pokemon =({ listado}: IProps) => {
  
  const context = useContext(PokemonContext);
  const[state, dispatch] = useContext(PokemonContext);
  
  console.log('context');
  console.log(context);
  return(
      <>
      <PokemonProvider>
        <PokemonList listado={state}></PokemonList>
        <Pokedex dispatch={dispatch}></Pokedex>  
      </PokemonProvider>
      </>
  )
}

export default Pokemon;