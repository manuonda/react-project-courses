import React from 'react';
import styled from 'styled-components'

const Component = styled.div`
border: 1px solid red;
display: flex;
justify-content: center;
padding: 1rem;
`
const Wrapper = styled.div`
  display: flex;
`

const Button = styled.button`
  background-color: transparent;
  border: 0;
  padding: 0.5rem 1.25rem;
  border-radius: 3.75rem;
  font-size: 0.85rem;
  transition: background-color 0.25s easi-in;
  &:not(:last-of-type){
    margin-right: 1rem;
}
&:hover{
    cursor: pointer;
    background-color
}

`


const Header = () => {
    return (
     <Component>
         <Wrapper>
          <Button></Button>
          <Button></Button>
          <Button></Button>
         </Wrapper>
     </Component>
    );
};

export default Header;