import { useState,useEffect } from 'react';

const Pokemon =({pokemon}) =>{
    const id = pokemon.url.split("/").filter(x => x).pop();
    return <li data-testid={id}>
    <Link href={`pokemons/${id}`}>{pokemon.name}</Link> </li> 
 }
 
 export default function Pokemones() {

   const [loading, setLoading] = useState(true);
   const [pokemones, setPokemones] = useState([]);
   useEffect(() => {
    const getPokemones = async () => {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
        const data = await response.json();
        setPokemones(data.results);
        setLoading(false);
    } 
    getPokemones();
    
   },[]);

   if(loading) {
       return (
           <p>Cargando...</p>
       )
   }
   return (
     <div>
         <p data-testid="titulo">Mi App Pokemones</p>
         <ul>
         {pokemones.map(pokemon => (
           <Pokemon key={pokemon.name} pokemon={pokemon}></Pokemon>
          ))}
         </ul>
     </div>
   )
 }