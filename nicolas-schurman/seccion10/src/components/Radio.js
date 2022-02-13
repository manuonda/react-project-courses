import React from 'react'
import { useField } from 'formik';

export const Radio = ({label, ...props}) => {
    const [field, meta] = useField({...props, type:'radio'});
    console.log('field checkbox : ',field, 'meta : ', meta);
    console.log('props checkbox : ',props);
    return (
        <div>
            <input type="radio"  {...field} {...props}/>
            {label}
            
            {meta.touched && meta.error ? 
            <div>{meta.error}</div> : null }
        </div>
    )
}

export default Radio;
