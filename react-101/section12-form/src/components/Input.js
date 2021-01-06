import React from 'react'
import styled from 'styled-components/macro'

const Component = styled.div``

const Label = styled.p``

const StyledInput = styled.input``


const Input = ({ name, label, value }) => {
    return (
        <Component>
            <Label>{label}</Label>
            <StyledInput type='text' value={value}></StyledInput>
        </Component>
    )
}

export default Input;
