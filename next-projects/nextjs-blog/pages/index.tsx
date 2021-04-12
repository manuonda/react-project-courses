import React, { useState} from 'react'
import Head from 'next/head'
import { GetStaticProps } from 'next'

import {Grid, Stack, Text , Button , Link } from "@chakra-ui/react"

// types 
import { Product } from '././product/types';
import api from './product/api';


interface Props {
  products: Product[]
}



const IndexRoute: React.FC<Props> = ({ products }) => {
  const[cart, setCart] = useState<Product[]>([]);
  const text =React.useMemo(() =>{
    return cart.reduce((message, product) => message.concat(`* ${product.title} - $${product.price}\n`)
    , ``).concat(`\nTotal : ${cart.reduce((total, product) => total + product.price, 0)}`);
  }, [cart]); 


  const handleAddToCart = (product: Product) => {
     setCart((cart) => cart.concat(product));
  }
  return (
        <Stack>
           <Grid gridGap="6" templateColumns="repeat(auto-fill, minmax(240px, 1fr)">
           { products.map(product => 
              ( <Stack background="gray.100" key={product.id}>
                <Text>{product.title}</Text>
                <Button onClick={() => handleAddToCart(product)} colorScheme="blue">Agregar</Button>
                </Stack>
              )
            )}       
           </Grid>
        {Boolean(cart.length) && (
             <Button 
                  isExternal
                  as={Link} 
                  colorScheme="whatsapp"
                  href={`https://wa.me/+5493885733589?text=${encodeURIComponent(text)}`}> 
                  Completar Pedido ({cart.length})
            </Button>
           
        )}
        </Stack>
  )
}

// Props para pasar al componente 
export const getStaticProps: GetStaticProps = async() => {
  const products = await api.list();
   return{
       props: {
         products: products
       }
   }
}

export  default IndexRoute;