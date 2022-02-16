import { useField } from 'formik';
import React from 'react'
import styled from 'styled-components';
import Label from './Label';
import MyInput from './MyInput';
import Control from './Control';

const ErrorMessage = styled.div`
    color: #f00;
`;

export const Input = ({label, ...props}) => {
    const[field, meta] = useField(props);

    return (
        <div>
            <Control>
             <Label>{label}</Label>
             <MyInput {...field} {...props}></MyInput>
             { meta.touched && meta.error?
              <ErrorMessage>{meta.error}</ErrorMessage> :
              null
            }
            </Control>
             
        </div>
    )
}

export default Input;
