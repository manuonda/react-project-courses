import { useReducer } from "react";
import { TPokemon } from "../../type"

enum PokemonActions  {
    ADD = "ADD",
    UPDATE = "UPDATE",
    FIND = "FIND",
    ALL = "ALL" ,
    REMOVE = "REMOVE"
}


type ActionType = | {
    type : PokemonActions.ADD,
    payload: TPokemon
}| {
    type: PokemonActions.REMOVE,
    payload: TPokemon
} | {
    type: PokemonActions.ALL
}



type initState  =  {
  pokemons : Array<TPokemon>
}


const addPokemon  = (state: initState, pokemon: TPokemon): initState => {
    return {
        ...state,
        pokemons: [...state.pokemons, pokemon]
    }
}

const removePokemon = (state: initState,  pokemon: TPokemon) => {
    const filtrados = state.pokemons.filter(x => x.id !== pokemon.id); 
        return {
            ...state ,
            pokemons : filtrados
        }
}

const findAll  = (state: initState) => {
    return {
        ...state
    }
}



export const pokemonReducer = ( state: initState, action:ActionType) : initState => {
    const  { type } =  action;
    switch(type) {
       case PokemonActions.ADD :
         return addPokemon(state, action.payload);
       case PokemonActions.REMOVE:
         return removePokemon(state, action.payload);
       case PokemonActions.ALL :
         return findAll(state);
       default: 
          return state   
    }
}

const INIT_STATE  = {
  pokemons: [] as TPokemon[] 
}

export const usePokemonContext =  () => {
     return useReducer(pokemonReducer, INIT_STATE);
}




