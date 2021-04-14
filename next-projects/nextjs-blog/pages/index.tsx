import React, { useState} from 'react'
import Head from 'next/head'
import { GetStaticProps } from 'next'

import {Grid, Stack, Text , Button , Link , Box, Flex } from "@chakra-ui/react"

// types 
import { Product } from '././product/types';
import api from './product/api';


interface Props {
  products: Product[]
}


const parseCurrency = (value: Number): string => {
  return value.toLocaleString('es-AR',{
      style:'currency',
      currency: 'ARS'
  });
}


const IndexRoute: React.FC<Props> = ({ products }) => {
  const[cart, setCart] = useState<Product[]>([]);
  const text =React.useMemo(() =>{
    return cart.reduce((message, product) => message.concat(`* ${product.title} - ${parseCurrency(product.price)}\n`)
    , ``).concat(`\nTotal : ${parseCurrency(cart.reduce((total, product) => total + product.price, 0))}`);
  }, [cart]); 


  const handleAddToCart = (product: Product) => {
     setCart((cart) => cart.concat(product));
  }
  return (
        <Stack spacing={6}>
           <Grid gridGap="6" templateColumns="repeat(auto-fill, minmax(240px, 1fr)">
           { products.map(product => 
              ( <Stack
                   borderRadius="md" 
                   padding={4} 
                   spacing={3}
                   background="gray.100" 
                   key={product.id}>
                <Stack spacing={1}>
                <Text>{product.title}</Text>
                <Text 
                   color="green.500"
                   fontSize="sm"
                   fontWeight="50">
                     {parseCurrency(product.price)}
                 </Text>
                </Stack>
                <Button 
                     size="sm"
                     variant="outline" 
                     colorScheme="primary"
                     onClick={() => handleAddToCart(product)} >Agregar</Button>
                </Stack>
              )
            )}       
           </Grid>
        {Boolean(cart.length) && (
             <Flex padding={4} 
                  position="sticky" 
                  alignItems="center" 
                  justifyContent="center">
                <Button 
                  bottom={0}
                  width="fit-content"
                  isExternal
                  as={Link} 
                  colorScheme="whatsapp"
                  href={`https://wa.me/+5493885733589?text=${encodeURIComponent(text)}`}> 
                  Completar Pedido ({cart.length} productos)
              </Button>
            </Flex>
            
        )}
        </Stack>
  )
}

// Props para pasar al componente 
export const getStaticProps: GetStaticProps = async() => {
  const products = await api.list();
   return{
       revalidate: 10,
       props: {
         products: products
       }
   }
}

export  default IndexRoute;