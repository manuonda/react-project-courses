import React from 'react'
import styled from 'styled-components/macro'
import Section from '../components/Section'



const Wrapper = styled.div`
 background-color: #fff;
 border-radius: 0.375rem;
 box-shadow: 0 5px 10px 0 rgb;
 min-width: 600px;
`

const Header= styled.div`
 margin: 0;
 font-weight: 300px;
`

const Title = styled.h3``

const Content = styled.div`
 padding: 1rem 2rem;
 display: flex;
 justify-content: flex-end;
`

const Footer = styled.div`
 padding: 1rem;
`

const Button = styled.button`
 border: 1px solid ${props => props.primary ? '#68d391': '#e2e8f0'};
 background-color: ${props => props.primary ? '#68d391': '#fff'};
 box-shadow: 0 5px 10px 0 rgba(0 ,0,0, 0.15);
 color: ${props => props.primary ? '#fff': '#000'};
 padding: 0.5rem 2rem;
 transition: all 0.25s ease-in-out;

 &:focus{
  outline: 0;
 }

 &:hover {
     cursor: pointer;
     border: 1px solid ${(props) =>props.priary? '#9ae6b4' : '#fff'};
     background-color: ${props => props.primary ? '#9ae6b4': '#fff'}
 }


 &:nth-child(2) { 
    margin-left: 1rem;
 }
`


const Form  = () => {
  return(
      <Wrapper>
       <Header>
           <Title> Add a User</Title>
       </Header>
       <Content>
           <Section 
             title="Profile"
             description="Information about the user.Publicity available">
                 <p>Username</p>
                 <p>Bio</p>
           </Section>
           <Section
             title="Information "
             description="Additional Information.Please check out all de data so we can get in touch">
                 <p>First Name</p>
                 <p>Last Name</p>
                 <p>Email</p>
           </Section>
           <Section 
           title="Notifications"
           description="">
          <p>Section 3</p></Section>
       </Content>
       <Footer>
           <Button>Cancel</Button>
           <Button>Add</Button>
       </Footer>
      </Wrapper>
  )
}
export default Form;