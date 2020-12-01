import React from 'react';
import styled from 'styled-components'


const Wrapper = styled.div`
    background-color:'#f4f6f4';
    color: '#414141';
    padding: '0.5rem 1rem';
    display: flex;
    align-items: center;
    flex-direction: column;
`

const Header =styled.h1`
    margin: '0 0 0.5rem 0';
    text-align: 'center';
`
const Paragraph = styled.div`
    margin: '0 0 0.5rem 0';
    text-align: 'center';
    font-familiy: 'sans-serif';
`
const Button = styled.button`
 background-color: #ebbf1c;
 border: none;
 text-transform: uppercase;
 font-family; 'Helvetica';
 font-size: 0.75rem;
 border-radius: 0.375rem;
 width: 200rem;
 heigth: 100rem;
`

 

const App = () => {
    return (
        <Wrapper>
            <Header>
              Header
            </Header>
            <Paragraph >
                Really serious
            </Paragraph>
            <Button>
                Useful button(nope)
            </Button>
        </Wrapper>
    );
};

export default App;