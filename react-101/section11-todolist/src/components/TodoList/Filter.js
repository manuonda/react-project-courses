import React from 'react'
import styled from 'styled-components/macro'

const Component = styled.div`
 padding: 1rem;
 border-bottom: 1px solid #e2e8f0;
 display:flex;
`

const Button  = styled.button`
  background-color: ${ props => props.selected? '#edf2f7':'#fff'};
  border: 0;
  flex:1;
  font-weight: ${props => props.selected? 500:400};
  padding: 0.75rem;

  transition: all 0.25s ease-in-out;

  &:first-of-type{
    border-radius: 0.375rem 0 0 0 ;
    border-right: 1px solid #e2e8f0;
  }

  &:last-of-type{
    border-radius: 0 0.375rem 0 0;
    border-left: 1px solid #e2e8f0;
  }
   &:hover{
       cursor: pointer;
       background-color: #e2e8f0;
   }
  `

const Filter = () => {
    return (
        <Component>
            <Button selected>All</Button>
            <Button>Active</Button>
            <Button>Completed</Button>
        </Component>
    )
}

export default Filter
