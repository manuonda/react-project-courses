import { createContext ,useState} from "react";

interface Props {
  children: any
}

export const PokemonContext = createContext();

export const {Provider} = PokemonContext;

export const PokemonProvider = ( {children} : Props) => {

    const [pokemons, setPokemons] = useState([]);
    const [capturedPokemons, setCapturedPokemons] = useState([]);

    const providerValue = {
     pokemons, 
     setPokemons,
     capturedPokemons,
     setCapturedPokemons 
    };

  return(
      <Provider value={providerValue}>
        {children}
      </Provider>
  )
};

