import React from 'react'
import Card from './Card'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2rem;
  justify-items: center;
  max-width: 1000px;
  margin: 0 auto;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
}

`



const Cards = ({ pokemons }) => {
    return (
        <Wrapper>  
           { pokemons.map((pokemon,index) => (
               <Card  
                key={index + pokemon.name}
                name={pokemon.name}
                role={pokemon.role}
                avatar={pokemon.avatar}>
                </Card>)
            )}

        </Wrapper>
             
    )
}

export default Cards
