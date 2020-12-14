import React from 'react'
import { Component, Wrapper, SubHeader, Header, PlaceHolderImage, Text} from './Components';


const MiddleSection = () => {
    return (
       <Component bg>
           <Wrapper>
               <SubHeader> Innovation in every details</SubHeader>
                   <Header>Super Hero Tasks </Header>
                  <PlaceHolderImage></PlaceHolderImage>
                  <Text>You won't need another To-do List</Text>
           </Wrapper>
       </Component>
    )
}
export default MiddleSection;