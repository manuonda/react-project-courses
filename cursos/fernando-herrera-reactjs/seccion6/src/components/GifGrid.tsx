import React, {useState, useEffect} from 'react'
import {BASE_URL, KEY } from '../constants/index'
import { Gif , State} from '../types';
import GifGridItem from '../components/GifGridItem';

import { useFetchGifs }  from '../hooks/useFetchGifs';


type Props = {
    category:string;
}

const initState:State = {
   data:[],
   loading:false
}
export const ExpertItem:React.FC<Props> = ({ category }) => {

  
    const {data , loading }= useFetchGifs(category);
    //setState(result);
  
    return (
        <div className="card-grid">
            <h1>{category}</h1>
            <br></br>
          {loading && (
            <h1>Loading</h1>
           )} 
          { data && data.map((image:Gif) => (
            <GifGridItem key={image.id} image={image}/>
          ))}
        </div>
    )
}
