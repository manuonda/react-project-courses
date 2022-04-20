import Head from 'next/head'
import Image from 'next/image'
import  Link from 'next/link'
import styles from '../styles/Home.module.css'

const Pokemon =({pokemon}) =>{
   const id = pokemon.url.split("/").filter(x => x).pop();
   return <li>
   <Link href={`pokemons/${id}`}>{pokemon.name}</Link> </li> 
}

export default function Pokemones({ pokemones }) {
  return (
    <div className={styles.container}>
   
        <ul>
        {pokemones.map(pokemon => (
          <Pokemon key={pokemon.name} pokemon={pokemon}></Pokemon>
         ))}
        </ul>
    </div>
  )
}

// permite indiicar a next de manera static
export const getStaticProps = async() => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
  const data = await response.json();
  
  return {
    props: { pokemones:  data.results}
  }
}
