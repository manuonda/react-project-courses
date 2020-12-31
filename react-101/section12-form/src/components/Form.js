import React from 'react'
import styled from 'styled-components/macro'

const Wrapper = styled.div`
 background-color: #fff;
 border-radius: 0.375rem;
 box-shadow: 0 5px 10px 0 rgb

`

const Header= styled.div``

const Title = styled.h3``

const Content = styled.div``

const Footer = styled.div``

const Button = styled.button``


const Form  = () => {
  return(
      <Wrapper>
       <Header>
           <Title> Add a User</Title>
       </Header>
       <Content>
           <div>Section 1</div>
           <div>Section 2</div>
           <div>Seciton 3</div>
       </Content>
       <Footer>
           <Button>Cancel</Button>
           <Button>Add</Button>
       </Footer>
      </Wrapper>
  )
}
export default Form;