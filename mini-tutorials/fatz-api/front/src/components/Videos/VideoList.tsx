import React ,{useEffect, useState} from  'react'
import { IVideo } from '../../types/IVideo';
import VideoItem from '../../components/Videos/VideoItem';


type Props = {
  videos: Array<IVideo>;
}

const VideoList :React.FC<Props> = ({ videos }) => {

    useEffect(() => {
       console.log("video list");
    },[]);
    return (
        <div>
            { videos.map((video:IVideo) => (
                 <VideoItem key={video._id} video={video}>{video.title}</VideoItem>
               ))
            }
        </div>
    )
}
export default VideoList;
