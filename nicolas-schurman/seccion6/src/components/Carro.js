import { NoEncryption } from '@material-ui/icons';
import React from 'react'
import BubbleAlert  from './BubbleAlert';


const styles = {
    carro: {
       backgroundColor: '#359AC',
       color: '#fff',
       border: 'none',
       padding: '15px',
       borderRadius: '15px',
       cursor: 'pointer'
    },
    buble: {}
}
export const Carro = () => {
    return (
        <div>
            <span style={styles.bubble}>
            <BubbleAlert></BubbleAlert>
            <button style={styles.carro}>
                Carro
            </button>  
            </span>
        </div>
    )
}

export default Carro;

