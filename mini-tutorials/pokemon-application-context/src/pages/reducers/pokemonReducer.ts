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



export type initialStateTypePokemon  =  {
  pokemons : Array<TPokemon>
}

const addPokemon  = (state: initialStateTypePokemon, pokemon: TPokemon): initialStateTypePokemon => {
    return {
        ...state,
        pokemons: [...state.pokemons, pokemon]
    }
}

const removePokemon = (state: initialStateTypePokemon,  pokemon: TPokemon) => {
    const filtrados = state.pokemons.filter(x => x.id !== pokemon.id); 
        return {
            ...state ,
            pokemons : filtrados
        }
}

const findAll  = (state: initialStateTypePokemon) => {
    return {
        ...state
    }
}


export const pokemonReducer = ( state: initialStateTypePokemon, action:ActionTypePokemon) : initialStateTypePokemon => {
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
export 
const initialStatePokemon  = {
  pokemons: [] as TPokemon[] 
}

export const useReducerPokemon =  () => {
     return useReducer(pokemonReducer, initialStatePokemon);
}




