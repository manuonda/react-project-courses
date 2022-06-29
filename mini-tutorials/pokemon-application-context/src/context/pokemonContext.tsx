import { createContext ,Dispatch,useState} from "react";
import { ActionTypePokemon, initialStatePokemon, initialStateTypePokemon,  PokemonEnumActions,  useReducerPokemon } from "../pages/reducers/pokemonReducer";
import { TPokemon } from "../type";

interface Props {
  children: any
}

// IContext Props
export type ContextPokemonProps =   {
  state:  initialStateTypePokemon,
  addPokemons: (pokemons: TPokemon[]) => void,
  pruebaMundo : () => void
}

const initStateContext = { 
    state:  initialStatePokemon , 
    addPokemons: () => {},
    pruebaMundo :() => {} 
}

// init createContext with values
export const PokemonContext = createContext<ContextPokemonProps>(initStateContext);

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
 
     const providerValue: initialStateTypePokemon = {
        state,
        addPokemons,
        pruebaMundo
      };
      
  return(
       <PokemonContext.Provider value={providerValue}>
        {children}
      </PokemonContext.Provider>
  )
};

