import React, {useEffect, useState} from 'react'
import VideoList from '../components/Videos/VideoList'
import axios from 'axios';


import  { BASE_URL} from '../constants'

import {IVideo} from '../types/IVideo'

const Home: React.FC = ()  => {

   const [videos, setVideos] = useState([]);
   useEffect(() => {
       loadData();
   },[]) 
  
   const loadData = async (): Promise<void> => {
    let api =  `${BASE_URL}videos/`;
    try {
        const result:IVideo[]| null = await axios.get(api);
           
        console.log(result);   
    } catch (error) {
        console.error(error);
    }
   }

   return(
      <div>
          <div> Home que onda </div>
          <VideoList></VideoList>
      </div>
  )
}

export default Home;