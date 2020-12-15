import React from 'react'
import styled from 'styled-components/macro'

import TodoList from './components/TodoList/TodoList'

const Component =  styled.div`
 display:flex;
 background-color: #fafafa;
 min-heigth: 100vh;
 flex-direction: column;
 justify-content: flex-start;
 align-items: center;
 padding: 1rem;
`

const Wrapper =  styled.div`
  width: 100%;
  max-width: 800px;
  flex-direction: column;
  align-items:center;
`

const Header = styled.h1`
font-weight: 400;
text-transform: uppercase;
font-size: 2.5rem;
`




const App = () => {
    return (
     <Component>
         <Wrapper>
             <Header>
                 <TodoList/>
             </Header>
         </Wrapper>
     </Component>
   )
}

export default App
