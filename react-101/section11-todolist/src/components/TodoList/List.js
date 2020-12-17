import React from 'react'
import styled from 'styled-components/macro'

const Component = styled.div`
 padding: 1rem;
`

const Item = styled.div`
 display:flex;
 align-items: center;
 
  &:not()::last-of-type){
     margin-bottom: 0.5 rem;
 }
`;

const buttonStyles =`
background-color: transparent;
width: 20px;
heigth: 20px;
border-radius: 50%;
display:flex;
align-items:center;
justify-content: center;
padding: 0;
font-size: 0.9rem;

&:focus{
    outline:0
}

&:hover{
    cursor: pointer;
    filter: brightness(105%)
}
`


const Complete = styled.button`
  ${buttonStyles};

  border: ${props => props.completed? 0: '1px solid #e2e'}
`

const Label = styled.p`
  margin: 0 0 0 0.5rem;
  flex: 1;

  text-decoration: ${props => props.completed? 'line-through': 'none'};
  color: ${props => props.completed ? '#4A5568': '#000'}


  /*to edit the item later on*/
  &:hover{
      cursor: pointer;
      color: #4a5568;
  }
`

const Delete = styled.button`
  ${buttonStyles};
  `

const NoItems = styled.p`
 margin:0;
 text-align: center;
 color: #4a5568;
`

const List = ({items, onComplete, onDelete}) => {
    return (
        <Component>
           {items.map(({id, completed, label}) =>(
                <Item key={id}>
                  <Complete completed={completed}
                   onClick={onComplete(id)}
                  >{completed && (
                   <span>
                    selected
                   </span>
                  )} 
                  </Complete>
                  <Label completed={completed}>{label}</Label>
                  <Delete onClick={onDelete(id)}>X</Delete>  
                </Item>
            ))}
            { items.length === 0  && <NoItems>You have No Items</NoItems>}
        </Component>
    )
}

export default List
