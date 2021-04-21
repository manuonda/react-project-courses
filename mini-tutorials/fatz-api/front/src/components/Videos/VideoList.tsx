import React ,{useEffect, useState} from  'react'
import { IVideo } from '../../types/IVideo';
import VideoItem from '../../components/Videos/VideoItem';

import  {Stack, Grid, Text } from '@chakra-ui/react';


type Props = {
  videos: Array<IVideo>;
  loadVideos: () => void;
}

const VideoList :React.FC<Props> = ({ videos , loadVideos  }) => {

    useEffect(() => {
       console.log("video list");
    },[]);
    return (
        <div>
          <Stack spacing={6} >
            <Grid gridGap="6">
            { videos.map((video:IVideo) => (
                 <VideoItem key={video._id} video={video}>{video.title}</VideoItem>
               ))
            } 
            </Grid>
          </Stack>
            
        </div>
    )
}
export default VideoList;
