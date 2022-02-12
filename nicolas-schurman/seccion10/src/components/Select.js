import React from 'react'
import { useField} from 'formik';


export const Select = ({children, props}) => {
    const [field, meta] = useField({...props, type:'select'});
    console.log('field select', field, 'meta : ', meta);
    return (
        <div>
            <label></label>
            <select  {...field} {...props}>
                {children}
            </select>
        </div>
    )
}

export default Select;
