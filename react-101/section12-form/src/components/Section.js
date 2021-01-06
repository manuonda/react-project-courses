import React from 'react'
import styled from 'styled-components/macro'

const Component = styled.div`
border: 1px solid red;

`
const Title = styled.h4`
margin: 0 0 0.5rem 0;
`

const Description = styled.p`
 margin: 0 ;
 padding-bottom: 0.5 rem;
 border-bottom: 1px solid #e2e8f0;
`



const Section = ({ title, description, children }) => {
    return (
        <Component>
            <Title>{title}</Title>
            <Description>{description}</Description>
            {children}
        </Component>
    )
}

export default Section