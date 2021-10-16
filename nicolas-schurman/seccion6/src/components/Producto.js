import React from 'react'
import Button from './Button'

const styles={
    producto: {
       border: '1px solid #eee',
       boxShadow: '0 5px 5px rgb(0 , 0, 0, 0.4',
       width: '30%',
       padding: '10px 15px',
       borderRadius: '5px'
    },
    img: {
        width: '100%'
    }
}

export const Producto = ({addProducto, producto}) => {
    return (
        <div style={styles.producto}>
            
            <img styles={styles.img} alt={producto.name} src={producto.img}></img>
            <h3>{producto.name}</h3>
            <p>{producto.name}</p>
            <Button onClick= {() =>  addProducto(producto)}>
                Agregar al Carro
            </Button>
        </div>
    )
}

export default Producto;
