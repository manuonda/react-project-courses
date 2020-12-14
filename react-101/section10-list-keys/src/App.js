import React from 'react'
import styled from 'styled-components'
import Cards from './components/Cards'


const pokemons = [
 { name: 'bulbasur',
   role: 'Anime bulbasur',
   avatar: 'https://img.pokemondb.net/sprites/go/normal/bulbasaur.png'

 },{
     name: 'Charizard',
     role: 'Anime Charizard',
     avatar: 'https://img.pokemondb.net/sprites/home/normal/charizard.png'
 },{
       name: 'Blastoise',
       role: 'Anime Blastoise',
     avatar: 'https://img.pokemondb.net/sprites/home/normal/blastoise.png'
 },{
     name:'Butterfree',
     role:'Anime Butterfree',
     avatar:'https://img.pokemondb.net/sprites/sun-moon/normal/butterfree-f.png'
 },{
     name:'Pidgeot',
     role:'Anime Pidgeot',
     avatar:'https://img.pokemondb.net/sprites/go/shiny/pidgeot.png'
 }
];

const App = () => {
    return (
        <Cards pokemons={pokemons}></Cards>
    )
}

export default App
