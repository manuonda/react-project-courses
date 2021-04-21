import React, { useEffect } from "react";
import { IVideo } from "../../types/IVideo";
import { Grid, Box, Stack, Text, AspectRatio, Button } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
type Props = {
  video: IVideo;
};

const VideoItem: React.FC<Props> = ({ video }) => {
  
  const history = useHistory();
  useEffect(() => {
    console.log("item video");
  }, []);

  const handleSelected = (id: number | string | undefined) => {
     history.push(`/update/${id}`);
  }

  const handleDelete = (id :number | string | undefined ) => {
      try {
        
      } catch (error) {
        
      }
  }
  return (
    <>
      
      <Stack
        borderRadius="md"
        padding={4}
        spacing={3}
        background="gray.100"
        key={video._id}
        onClick={() =>handleSelected(video._id)}
      >
        <Stack spacing={1}>
          <Text fontSize="md" color="gray.900"> {video.title}</Text>
          <Text fontSize="sd"  color="gray.600"> {video.description}</Text>
          <AspectRatio maxW="560px" ratio={1}>
            <iframe
              title="naruto"
              src={video.url}
              allowFullScreen
            />
          </AspectRatio>
        </Stack>
        <Stack>
          <Button

          onClick={() => handleDelete(video._id)}
          >Delete</Button>  
        </Stack> 
      </Stack>
    </>
  );
};

export default VideoItem;
