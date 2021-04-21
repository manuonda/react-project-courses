import React, {ChangeEvent, FormEvent, useState} from "react";

import { IVideo }  from '../../types/IVideo';
import  {create} from '../../components/Videos/VideoService';

import {
  Container,
  Stack,
  Grid,
  Text,
  Textarea,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  FormHelperText,
  Button,
} from "@chakra-ui/react";

type inputChange =  ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

type Props = {};
const VideoForm: React.FC<Props> = ({}) => {

  const init = {
      title: "",
      description :"",
      url: ""
  };
  const[video, setVideo] = useState<IVideo>(init);
  
  const handleChange = (e: inputChange)  => {
    console.log(e.target.name);
    console.log(e.target.value);
    setVideo({
        ...video,
        [e.target.name]:e.target.value
    })
  }
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
     e.preventDefault();
     try {
         const result = await  create(video);
     } catch (error) {
         console.error(error);
     }
     
  }

  return (
    <Stack>
      <Grid>
        <Text>New Video</Text>

        <form onSubmit={handleSubmit}>
         <FormControl id="email">
           <FormLabel>Title</FormLabel>
           <Input 
           name="title"
           type="text"
           autoFocus 
           onChange={handleChange}
           />
           <FormHelperText>We'll never share your email.</FormHelperText>
        </FormControl> 

        <FormControl id="url">
           <FormLabel>URL</FormLabel>
           <Input 
           name="url"
           type="text"
           autoFocus 
           onChange={handleChange}
           placeholder="http://somesite.com"
           />
           <FormHelperText>We'll never share your email.</FormHelperText>
        </FormControl> 
        <FormControl id="description">
            <FormLabel>Description</FormLabel>
            <Textarea
             onChange={handleChange}
             name="description"
            >
           </Textarea>
        </FormControl>
        <Button
          size="sm"
          variant="outline">
          Create Video
        </Button>
        </form>
       
      </Grid>
    </Stack>
  );
};

export default VideoForm;
