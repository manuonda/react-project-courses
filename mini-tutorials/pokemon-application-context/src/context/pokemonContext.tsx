import React, { createContext ,Dispatch,useState} from "react";
import { ActionTypePokemon, initialStatePokemon, initialStateTypePokemon,  PokemonEnumActions,  useReducerPokemon } from "../pages/reducers/pokemonReducer";
import { TPokemon } from "../type";

interface Props {
  children: any
}

// IContext Props
export type  ContextPokemonProps =  {
  state:  initialStateTypePokemon,
  addPokemons: (pokemons: TPokemon[]) => void,
  addPokemon: (pokemon:TPokemon) => void,
}

const contextDefaultValue : ContextPokemonProps = { 
    state:  initialStatePokemon , 
    addPokemons: () => {},
    addPokemon: () => {}
}

// init createContext with values
export const PokemonContext = createContext<ContextPokemonProps>(contextDefaultValue);

export const PokemonProvider = ({children} : Props) => {
      const [state, dispatch] = useReducerPokemon(); 
      
      const pruebaMundo = () => {
        console.log("prueba Mundo");
      }
      const addPokemons = () => {
          console.log('ejecuta pokemons add pokemons');
          console.log('addPokemons : ');
          dispatch({ type: PokemonEnumActions.ADD_ALL, 
                           payload: [{ id:1, name: 'prueba', url:'indefindo'}]
          });
      }

      /** Add Pokemon */
      const addPokemon = (pokemon: TPokemon) => {
        console.log('add pokemon', pokemon);
        dispatch({ type : PokemonEnumActions.ADD, payload: pokemon});
      }
 
     const providerValue = {
        state,
        addPokemons,
        addPokemon
      };
      
  return(
       <PokemonContext.Provider value={providerValue}>
        {children}
      </PokemonContext.Provider>
  )
};

export default PokemonProvider;

