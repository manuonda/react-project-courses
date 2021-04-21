import React, {useEffect, useState} from 'react'
import VideoList from '../components/Videos/VideoList'
import axios from 'axios';
import { loadData} from '../components/Videos/VideoService'; 

import {
    Divider, Text
} from "@chakra-ui/react"

import  { BASE_URL} from '../constants'

import {IVideo} from '../types/IVideo'

const Home: React.FC = ()  => {

   const [videos, setVideos] = useState<IVideo[]>([]);
   useEffect(() => {
      load();
   },[]) 
  
   const load  = async () => {
       try{
          const videos: IVideo[] =  await loadData();
          const formatedVideos =  videos.map( video => {
              return {
                  ...video,
                  createdAt: video.createdAt? new Date(video.createdAt): new Date(),
                  updatedAt: video.updatedAt? new Date(video.updatedAt): new Date()
              }
          }).sort((a,b) =>  b.createdAt.getTime() - a.createdAt.getTime())
          setVideos(formatedVideos); 
       }catch(error) {

       }
   } 

   return(
      <div>
          <Text> Home que onda </Text>
          <Divider marginY={6}></Divider>
          <VideoList videos={videos} loadVideos={load}></VideoList>
      </div>
  )
}

export default Home;