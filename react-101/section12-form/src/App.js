import React from "react-dom"
import styled from 'styled-components/macro'

import Form from './components/Form'

const Component = styled.div`
  display:flex;
  background-color: #fafafa;
  min-height: 100vh;
  flex-direction: column;
  justify-content: flex-start;
  align-items:center;
  padding: 1rem;
`
const Wrapper = styled.div`
 width: 100%;
 max-width: 800px;
 display: flex;
 flex-direction: column;
 align-items: center;
`


const App = () => {

    return(
        <Component>
            <Wrapper>
            <Form></Form>
            </Wrapper>
        </Component>
    )
}

export default App;