import React from 'react'
import Head from 'next/head'
import { GetStaticProps } from 'next'

// types 
import { Product } from '././product/types';
import api from './product/api';


interface Props {
  products: Product[]
}

const IndexRoute: React.FC<Props> = ({ children}) => {
  return <div>IndexRoutes</div>
}

export const getStaticProps: GetStaticProps = async() => {
  const products = await api.list();
   return{
       props: {
         products:[]
       }
   }
}

export  default IndexRoute;