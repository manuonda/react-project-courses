import React, {useEffect, useState} from 'react'
import VideoList from '../components/Videos/VideoList'
import axios from 'axios';


import  { BASE_URL} from '../constants'

import {IVideo} from '../types/IVideo'

const Home: React.FC = ()  => {

   const [videos, setVideos] = useState<IVideo[]>([]);
   useEffect(() => {
       loadData();
   },[]) 
  
   const loadData = async (): Promise<void> => {
    let api =  `${BASE_URL}videos/`;
    try {
        const result = await axios.get(api);
        const videos:IVideo[] | any  = result.data;
        console.log(videos);  
        setVideos(videos.videos);
        console.log(videos);
    } catch (error) {
        console.error(error);
    }
   }

   return(
      <div>
          <div> Home que onda </div>
          <VideoList videos={videos}></VideoList>
      </div>
  )
}

export default Home;