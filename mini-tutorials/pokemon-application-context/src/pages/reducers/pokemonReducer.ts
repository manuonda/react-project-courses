import { useReducer } from "react";
import { TPokemon } from "../../type"

enum PokemonActions  {
    ADD = "ADD",
    UPDATE = "UPDATE",
    FIND = "FIND",
    ALL = "ALL" ,
    REMOVE = "REMOVE"
}


type ActionType = {
    type : PokemonActions.ADD,
    payload: TPokemon
} | {
    type:  PokemonActions.FIND
} | {
    type: PokemonActions.ALL
} |  {
    type: PokemonActions.REMOVE,
    payload : TPokemon
}



interface initState {
    pokemons : Array<TPokemon>
}


const addPokemon  = (state: initState, pokemon: TPokemon) => ({
     ...state,
     pokemons: state.pokemons.push(pokemon)
});

const removePokemon = (state: initState,  pokemon: TPokemon) => {
    const filtrados = state.pokemons.filter(x => x.id !== pokemon.id); 
        return {
            ...state ,
            pokemons : filtrados
        }
}



export const pokemonReducer = ( state: initState, action:ActionType) => {
    const  { type } =  action;
    switch(type) {
       case PokemonActions.ADD :
         return addPokemon(state, action.payload);   
       case PokemonActions.REMOVE : 
         return removePokemon(state, action.payload);      
       default: 
          return state   
    }
}

const INIT_STATE = {
  pokemons: 0 
}

export const usePokemonContext =  () => {
     return useReducer(pokemonReducer, INIT_STATE);
}




