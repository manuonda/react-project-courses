
import React, {useState, useEffect} from 'react'
const BASE_URL="https://rickandmortyapi.com/api/character";

function App() {

  const [figures, setFigures] = useState([])
  const[pokemons, setPokemons] = useState([]);
  const[loading, setLoading]  = useState(true);
  const[name, setName] = useState("");

  const getPokemons = async () =>{
    console.log("informacion 23");   
   try {
    const result = await  fetch(BASE_URL);
    const data   = await  result.json();
    const results = data.results;
    console.log(results);
    setPokemons(results); 
    console.log(pokemons);        
    setLoading(false);
    console.log("ifnroma");     
   } catch (error) {
      console.log(error); 
   }
}
  useEffect(() => {
    getPokemons();
  }, [])
  
  return (
    <>
    cantidad :{pokemons.length}
    { pokemons.length > 0 ?
       pokemons.map(pokemon =>(
         <div>
               {pokemon.id}
         </div>
        ))
      :
      <div> No hay Pokemone23s</div>  
    }            
   </>
  );
}

export default App;
