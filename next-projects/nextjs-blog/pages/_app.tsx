import React from 'react'
import { ChakraProvider } from "@chakra-ui/react"
import { AppProps } from 'next/dist/next-server/lib/router/router'



const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
export default MyApp