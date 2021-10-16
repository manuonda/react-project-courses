import React from 'react'

const styles = {
    button: {
        backgroundColor: '#0A283E',
        color: '#fff',
        padding: '15px 20px',
        border:'none',
        borderRadius: '5px'
    }
}

export const Button = ({children}) => {
    return (
        <div>
            <button style={styles.button}>
             {children}
            </button>
        </div>
    )
}

export default Button;
