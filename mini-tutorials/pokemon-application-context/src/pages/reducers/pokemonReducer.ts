import { useReducer } from "react";
import { TPokemon } from "../../type"

enum PokemonEnumActions  {
    ADD = "ADD",
    UPDATE = "UPDATE",
    FIND = "FIND",
    ALL = "ALL" ,
    REMOVE = "REMOVE"
}


export type ActionTypePokemon = | {
    type : PokemonEnumActions.ADD,
    payload: TPokemon
}| {
    type: PokemonEnumActions.REMOVE,
    payload: TPokemon
} | {
    type: PokemonEnumActions.ALL
}



export type initStatePokemon  =  {
  pokemons : Array<TPokemon>
}


const addPokemon  = (state: initStatePokemon, pokemon: TPokemon): initStatePokemon => {
    return {
        ...state,
        pokemons: [...state.pokemons, pokemon]
    }
}

const removePokemon = (state: initStatePokemon,  pokemon: TPokemon) => {
    const filtrados = state.pokemons.filter(x => x.id !== pokemon.id); 
        return {
            ...state ,
            pokemons : filtrados
        }
}

const findAll  = (state: initStatePokemon) => {
    return {
        ...state
    }
}


export const pokemonReducer = ( state: initStatePokemon, action:ActionTypePokemon) : initStatePokemon => {
    const  { type } =  action;
    switch(type) {
       case PokemonEnumActions.ADD :
         return addPokemon(state, action.payload);
       case PokemonEnumActions.REMOVE:
         return removePokemon(state, action.payload);
       case PokemonEnumActions.ALL :
         return findAll(state);
       default: 
          return state   
    }
}

const INIT_STATE  = {
  pokemons: [] as TPokemon[] 
}

export const useReducerPokemon =  () => {
     return useReducer(pokemonReducer, INIT_STATE);
}




