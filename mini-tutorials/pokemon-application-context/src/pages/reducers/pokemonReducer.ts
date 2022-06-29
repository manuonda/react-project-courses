import { useReducer } from "react";
import { TPokemon } from "../../type"
import Pokemon from "../Pokemon";

export enum PokemonEnumActions  {
    ADD = "ADD",
    UPDATE = "UPDATE",
    FIND = "FIND",
    ALL = "ALL" ,
    REMOVE = "REMOVE",
    ADD_ALL = "ADD_ALL",
}


export type ActionTypePokemon = | {
    type : PokemonEnumActions.ADD,
    payload: TPokemon
}| {
    type: PokemonEnumActions.REMOVE,
    payload: TPokemon
} | {
    type: PokemonEnumActions.ALL
} | {
     type: PokemonEnumActions.ADD_ALL,
     payload: TPokemon[]
}


export type initialStateTypePokemon  =  {
  pokemons : TPokemon[],
  limit?: number
}


// actions pokemon
const addPokemon  = (state: initialStateTypePokemon, pokemon: TPokemon): initialStateTypePokemon => {
    return {
        ...state,
        pokemons: [...state.pokemons, pokemon]
    }
}

const addPokemons = (state: initialStateTypePokemon, pokemons:TPokemon[]) => {
     return{
        ...state,
        pokemons: [...state.pokemons, ...pokemons]
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
       case PokemonEnumActions.ADD_ALL:
        return addPokemons(state, action.payload);
       default: 
          return state   
    }
}
export 
const initialStatePokemon  = {
  pokemons: [] as TPokemon[],
  limit:0, 
}

export const useReducerPokemon =  () => {
     return useReducer(pokemonReducer, initialStatePokemon);
}
