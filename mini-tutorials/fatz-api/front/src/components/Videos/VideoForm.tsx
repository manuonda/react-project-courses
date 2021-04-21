import React, { ChangeEvent, FormEvent, useState, useEffect } from "react";
// types 
import { IVideo } from "../../types/IVideo";
// methods 
import { create, get , update } from "../../components/Videos/VideoService";


import { useHistory, useParams } from "react-router-dom";

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
  Box
} from "@chakra-ui/react";

type inputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;
interface Params {
   id?: string;
}

type Props = {};

const VideoForm: React.FC<Props> = ({}) => {
  const init = {
    title: "",
    description: "",
    url: "",
  };
  const [video, setVideo] = useState<IVideo>(init);
  const history = useHistory();
  const params: Params  = useParams<Params>();
  
  console.log(params.id);

  useEffect(() => {
    console.log("useEffect params.id", params.id);
    if (params.id !== "") {
      console.log('params.id : ', params.id);
      handleLoadData(params.id);
    }
  }, [params.id]);

  const handleLoadData = async (id: any) => {
    try {
      const result = await get(id);
      const data:IVideo = await result.video;
      const { title , description, url } = data;
      setVideo({
         _id: params.id,
         description,
         title,
         url
      });
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  const handleChange = (e: inputChange) => {
    setVideo({
      ...video,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let result: any = "";
    try {
      if ( !params.id) {
        const response = await create(video);
        result = await response.data;
        console.log(result);
  
      } else {
         const response = await update(params.id, video);
         result = await response.data;
         console.log("result update  :  ", result);
      }
      

      if (result.status === "OK") {
           history.push("/");
       } else {
      }

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box
       borderRadius="lg"
    >
      <Stack>
      <Grid>
        <Text>New Video</Text>

        <form onSubmit={handleSubmit}>
          <FormControl id="email">
            <FormLabel>Title</FormLabel>
            <Input name="title" type="text" 
                   autoFocus 
                   onChange={handleChange}
                   value={video.title} />
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
              value={video.url}
            />
            <FormHelperText>We'll never share your email.</FormHelperText>
          </FormControl>
          <FormControl id="description">
            <FormLabel>Description</FormLabel>
            <Textarea 
               onChange={handleChange} 
               name="description"
               value={video.description}/>
          </FormControl>
          { params.id ? (
            <Button size="sm" variant="outline">
              Update Video
            </Button>
          ) : (
            <Button size="sm" variant="outline">
              Create Video
            </Button>
          )}
        </form>
      </Grid>
    </Stack>
  
    </Box>
   );
};

export default VideoForm;
