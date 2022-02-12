import React from 'react'
import {useField} from 'formik';

 const TextInput = ({ label, ...props}) => {
    
    const[field, meta] = useField(props);
    console.log({field, meta});
    return (
        <div>
           <label className="">{label}</label> 
           <input className="" {...field}></input>
           {meta.touched && meta.error ? <div className="error">{meta.error}</div>: null}

        </div>
    )
}


export default TextInput;