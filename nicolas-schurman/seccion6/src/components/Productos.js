import React from 'react'
import Producto from './Producto'
import Button from './Button'

const styles={
    productos: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
}

export const Productos = ({ addProducto, productos=[]}) => {
    console.log(addProducto, productos);
    return (
        <div style={styles.productos}>
           { productos && productos.map(producto => 
              <Producto 
                
                addProducto={addProducto}
                key={producto.name} 
                producto={producto}>
                </Producto>
           )} 
        </div>
    );
}

export default Productos;