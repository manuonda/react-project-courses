import React from 'react'
import Producto from './Producto'
import Button from './Button'
import Layout from './Layout'

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
           <Layout>

           { productos && productos.map(producto => 
              <Producto 
                
                addProducto={addProducto}
                key={producto.name} 
                producto={producto}>
                </Producto>
           )} 
           </Layout>
        </div>
    );
}

export default Productos;