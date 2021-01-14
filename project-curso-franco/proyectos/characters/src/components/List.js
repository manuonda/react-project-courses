import React , {useEffect, useState} from 'react'
import {Row, Col} from "react-bootstrap"
import Item from './Item';

const BASE_URL="https://rickandmortyapi.com/api/character";

const List = () => {
    
    const[pokemons, setPokemons] = useState([]);
    const[loading, setLoading]  = useState(true);
    const[name, setName] = useState("");
  

    console.log(name);
    
    useEffect(() =>{
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
            console.log(loading);     
           } catch (error) {
              console.log(error); 
           }
       }
        getPokemons();
    }, [])

    return (
        <>
         { pokemons && pokemons.length > 0 ?
            pokemons.map(pokemon =>(
              <Item id={pokemon.id} {...pokemon}></Item>  
            ))
           :
           <div> No hay Pokemones</div>  
         }            
        </>
    )
}

export default List;
