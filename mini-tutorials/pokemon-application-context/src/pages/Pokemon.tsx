import { useContext, useEffect } from "react";
import { ContextPokemonProps, PokemonContext, PokemonProvider  } from "../context/pokemonContext";
import Pokedex from "./components/Pokedex";
import PokemonList from "./components/PokemonList";

const Pokemon =() => {
  const context = useContext(PokemonContext) as ContextPokemonProps;
  const url = "https://pokeapi.co/api/v2/pokemon";

  console.log('context : ', context);
  if ( context === undefined) {
    return (<div>
      <h1>No se creo context</h1>
    </div> )
  }
  let { state: {pokemons} , addPokemons , pruebaMundo}  = context;
  
  useEffect(() => {
    console.log('useEffect Pokemon');
    const cargarData = async () =>{
       pruebaMundo();
       try {
          const resp = await fetch(url);
          const data = await(resp.json());
          pokemons = [...pokemons ,{id:1, name:"prueba",url: "12313"}];
          addPokemons(data.results);
       } catch (error) {
           console.error(error); 
       }
    }

     cargarData();
  },[pruebaMundo]); 

  return(
      <>
      <PokemonProvider>
        <PokemonList listado={pokemons}></PokemonList>
        <Pokedex></Pokedex>  
      </PokemonProvider>
      </>
  )
}

export default Pokemon;