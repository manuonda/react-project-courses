import React from 'react'
import styled from 'styled-components'

const Component  = styled.div`
background-color: #1a202c;
color: #fff;
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 2rem
`

const Wrapper = styled.div`
 width: 100%;
 max-width: 800px;
 display:grid;
 grid-template-columns: 1fr 1fr 1fr;
 grid-template-rows:  2fr 1fr;
`
const Header = styled.h3`
  margin: 0;
`

const SmallText = styled.p`
margin:0;
`

const Row = styled.div`
 display: flex;
 flex-direction: column;
`

const Link = styled.a`
 color : #fff;
 text-decoration: none;
 font-size: 0.85 rem;
`


const Footer = () => {
    return (
     <Component>
         <Wrapper>
             <Header> SuperHero Inc. is a company that makes people</Header>
             <Row>
                 <Link href="#">About us</Link>
                 <Link href="#">Our Vision</Link>
                 <Link href="#">Products</Link>
                 <Link href="#">Contact us</Link>
             </Row>
             <Row>
                 <Link href="#">Github</Link>
                 <Link href="#">Facebook</Link>
                 <Link href="#">Linkedin</Link>
             </Row>
             <h1>One</h1>
             <h1>Two</h1>
             <h1>Three</h1>
             <h1>Four</h1>
         </Wrapper>
     </Component>
        )
}

export default Footer
