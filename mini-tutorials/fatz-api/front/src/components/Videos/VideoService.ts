import { IVideo } from "../../types/IVideo";
import {BASE_URL} from "../../constants/index";
import axios from "axios";


export const create = async (video: IVideo) : Promise<any> =>{
    let url = `${BASE_URL}/videos/`;  
    try {
           const result = await axios.post( url, video);
           return result;
       } catch (error) {
         console.error(error);
        return error; 
       }
}