import React from 'react'
import styled from 'styled-components'


const Component = styled.div`
  margin: 3rem 0 ;
  display: flex;
`


const Input = styled.input`
 padding: 0.75rem 2rem;
 border: 1px solid #cbd5e0;
 border-radius: 0.375rem;
 line-height: 1.25
`
const Submit = styled.button`
  padding: 0.75rem 2rem;
  margin-left: 1rem;
  color: #fff;
  background-color: #68d039;
  border: 1px solid #68d039;
  line-height: 1.25;

  transition : all 0.25s ease-in-out;
`


const Form = () => {
    return ( 
        <Component>
            <Input type="email" placeholder="Input email address"/>
            <Submit type="button">Send</Submit>
        </Component>
     );
}
 
export default Form;