import React from 'react'
import styled from 'styled-components/macro'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUsers, faTerminal, faUniversity, faPenAlt,faBuilding, faRobot, faFileExcel} from '@fortawesome/free-solid-svg-icons'

const Component = styled.div`
 color: #a0aec0M;
`

const Text = styled.p`
  margin: 0 0 3rem 0;
  text-align:center;
  font-weight: 600;
`

const Wrapper=  styled.div`
 display: flex;
 flex-wrap: wrap;
 juntify-content:center;
`
const Item = styled.div`
   display:flex;
   align-items:center;
   border: 1px solid #d2d6cc;
   padding: 0.5rem;
   border-radius: 0.375rem;
   margin-botton: 1rem;
   box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.5);
`

const Type= styled.p`
   margin: 0 0 0 0:
   font-size: 0.85rem;
`


// regular people

const Addition = () => {
    
    return (
       <Component>
           <Text>
               Used by
           </Text>
           <Wrapper>
               <Item>
               <FontAwesomeIcon icon={faUsers}></FontAwesomeIcon>
               <Type>Regular People</Type>
               </Item>
               <Item>
               <FontAwesomeIcon icon={faTerminal}></FontAwesomeIcon>
               <Type>Terminal</Type>
               </Item>

               <Item>
               <FontAwesomeIcon icon={faUniversity}></FontAwesomeIcon>
               <Type>University</Type>
                   
               </Item>

               <Item>
               <FontAwesomeIcon icon={faPenAlt}></FontAwesomeIcon>
               <Type>Pencil Alt</Type>
               </Item>
               <Item>
               <FontAwesomeIcon icon={faBuilding}></FontAwesomeIcon>
                <Type>Building</Type>
               </Item>
           </Wrapper>
       </Component>
      );
}
 
export default Addition;