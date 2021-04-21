import React, { useEffect} from 'react'
import { IVideo } from '../../types/IVideo'

type Props = {
    video:IVideo;
}

const VideoItem:React.FC<Props> = ({ video}) => {
    
    useEffect(() => {
        console.log("item video");
    }, [])
    return (
        <>
           Item Video 
        </>
    )
}

export default VideoItem
