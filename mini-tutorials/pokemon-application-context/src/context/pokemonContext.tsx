import { createContext ,Dispatch,useState} from "react";
import { ActionTypePokemon, initStatePokemon, useReducerPokemon } from "../pages/reducers/pokemonReducer";

interface Props {
  children: any
}

export type PokemonContextType = {
  state: any,
  dispatch: any
}


interface IContextProps{
  state: initStatePokemon,
  dispatch: Dispatch<ActionTypePokemon>;
}
export const PokemonContext = createContext({} as IContextProps);

export const {Provider} = PokemonContext;

export const PokemonProvider = ( {children} : Props) => {
    const [state, dispatch] = useReducerPokemon(); 
    const providerValue = {
      state,
      dispatch 
    };

  return(
       <PokemonContext.Provider value={providerValue}>
        {children}
      </PokemonContext.Provider>
  )
};

