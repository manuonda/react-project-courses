import { IVideo } from "../../types/IVideo";
import {BASE_URL} from "../../constants/index";
import axios from "axios";


export const create = async (video: IVideo) : Promise<any> =>{
    let url = `${BASE_URL}videos/`;  
    console.log(url);
    try {
           const result = await axios.post( url, video);
           return result;
       } catch (error) {
         console.error(error);
        return error; 
       }
}


export const loadData = async (): Promise<IVideo[] | any > => {
  let api =  `${BASE_URL}videos/`;
  try {
      const result = await axios.get(api);
      const videos:IVideo[] | any  = await result.data;
      return Promise.resolve(videos.videos);

  } catch (error) {
      return Promise.reject(error);
      console.error(error);
  }
 }

 export const get = async( id: number) : Promise<any> => {
    console.log("id received : ", id);
    let api = `${BASE_URL}videos/${id}`;  

    try {
      const result = await axios.get<IVideo>(api);
      const video:IVideo = result.data;
      return Promise.resolve(video);
    } catch (error) {
      return Promise.reject(error);
    }
 }

 export const update = async (id: number | string , video: IVideo) : Promise<any> =>{
  let url = `${BASE_URL}videos/${id}`;  
  console.log(url);
  try {
         const result = await axios.put( url, video);
         return result;
     } catch (error) {
       console.error(error);
      return error; 
     }
}

export const remove = async ( id:number | string) : Promise<void> => {
   
}