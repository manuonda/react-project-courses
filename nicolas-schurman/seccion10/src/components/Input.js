import React from 'react'
import styled from 'styled-components';
import {useField} from 'formik';

const Control = styled.div`
    margin-bottom: 20px;
`;

const Label = styled.label`
   color: #000;
   display: block;
   margin-bottom: 5px;
`;


const MyInput = styled.input`
    outline: none;
    padding: 8px;
    border: solid 1px #b1b3b5;
    width: 100%;
    margin-bottom: 5px;
`;

export const Input = ({label,...props}) => {
    return (
        <div>
            <Control>
             <Label>{label}</Label>
             
            </Control>
             
        </div>
    )
}

export default Input;
