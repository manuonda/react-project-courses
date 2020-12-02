import React from 'react';
import styled from 'styled-components'

const Component = styled.div`
  display: flex;
  flex-direction: column;
  justity-content: center;
  align-items: center;
  padding: 1rem;
  min-heigth: 50vh;
  border: 1px solid red;
`

const Wrapper = styled.div`
    width: 100%;
    max-width: 800px;
    display: flex;
    flex-direction: column;
    align-items:center;
    border: 1px solid;
`

const Slogan = styled.h1`
  font-family;: 'Raleway', sans-serif;
  margin: 0;
  font-size: 3rem;
  max-width: 25rem;
  text-align: center;
  margin-bottom: 2rem;
  font-weight: 600;
`

const Text = styled.p`
  margin: 0;
  font-size: 1.25rem;
   &:nth-of-type(1) {
    margin-bottom: 0.5rem;
  }   
`
const Hero = () => {
    return (
      <Component>
       <Wrapper>
         <Slogan>Make your tasks unique
         </Slogan>
         <Text>
          Superhero To-Do List helps you solve the problems
         </Text>
      </Wrapper>
      </Component>
    );
};

export default Hero;