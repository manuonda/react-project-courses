import React from 'react'
import { Box, ChakraProvider, Container,Divider,  Image, VStack, Heading , Text } from "@chakra-ui/react"
import { AppProps } from 'next/dist/next-server/lib/router/router'
import theme from "./theme"



const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <Box padding={4}>
      <Container
        borderRadius="sm"
        backgroundColor="white"
        boxShadow="md"
        marginY={4}
        maxWidth="container.xl"
        padding={4}
      >
        <VStack marginBottom={6}> 
          <Image  borderRadius={9999} src="https://place-hold.it/128"/>
          <Heading> Venta de Productos </Heading>
          <Text>El almacen de Manu</Text>
        </VStack>
        <Divider marginY={6}></Divider>
      <Component {...pageProps} />
    
      </Container>
      </Box>
    </ChakraProvider>
  )
}
export default MyApp