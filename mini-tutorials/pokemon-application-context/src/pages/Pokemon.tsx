import { TPokemon } from "../type";
import Pokedex from "./components/Pokedex";
import PokemonList from "./components/PokemonList";

interface IProps  {
   listado : Array<TPokemon>
}

const Pokemon =({ listado}: IProps) => {
    
  return(
      <>
       <PokemonList listado={listado}></PokemonList>
       <Pokedex></Pokedex>
      </>
  )
}

export default Pokemon;