import React, { useState } from 'react'
import PropTypes from 'prop-types';

type Props = {
    setCategories: any
}

export const AddCategory: React.FC<Props> = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState(''); // ''

    const handleInputChange = ( e: React.ChangeEvent<HTMLInputElement> ) => {
        setInputValue( e.target.value );
        console.log('jhanldeInputChange llamado');
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();

        if ( inputValue.trim().length > 2 ) {
            setCategories( (cats:any) => [ inputValue, ...cats, ] );
            setInputValue('');
        }

    }

    return (
        <form onSubmit={ handleSubmit }>
            <input 
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
            />
        </form>
    )
}


AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
