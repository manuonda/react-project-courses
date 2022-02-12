import React from 'react'
import { useField } from 'formik';

export const Checkbox = ({children, ...props}) => {
    const [field, meta] = useField({...props, type:'checkbox'});
    console.log('field checkbox : ',field, 'meta : ', meta);
    console.log('props checkbox : ',props);
    return (
        <div>
            <label></label>
            <input type="checkbox"  {...field} {...props}/>
            {children}
            
            {/* {meta.touched && meta.error ? 
            <div>{meta.error}</div> : null } */}
        </div>
    )
}

export default Checkbox;
