import React from 'react'
import { TPokemon } from '../../type';

interface Props {
  listado:Array<TPokemon> 
}

export const PokemonList = ({listado}:Props) => {
  return (
    <div>
        {listado && listado.map(pokemon => (
          <>
          <div key={pokemon.id}>
           <h1>{pokemon.name}</h1>
          </div>
          </>   
        ))
      }
    </div>
  )
}

export default PokemonList;
