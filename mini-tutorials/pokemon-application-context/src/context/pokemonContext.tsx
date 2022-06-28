import { createContext ,Dispatch,useState} from "react";
import { ActionTypePokemon, initialStatePokemon, initialStateTypePokemon,  useReducerPokemon } from "../pages/reducers/pokemonReducer";

interface Props {
  children: any
}

export type PokemonContextType = {
  state: any,
  dispatch: any
}


type IContextProps = {
  state:  initialStateTypePokemon,
  dispatch: Dispatch<ActionTypePokemon>;
}
export const PokemonContext = createContext<{ 
      state: initialStateTypePokemon;
      dispatch: Dispatch<ActionTypePokemon>
    }>({ 
         state:  initialStatePokemon , 
         dispatch : () => null 
    });

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

