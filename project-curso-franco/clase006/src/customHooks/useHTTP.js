import {useState} from 'react'
import axios from 'axios'


const BASE_URL = "http://localhost:8000";

/**
 * Funcion que permite enviar informacion al 
 * servidor
 */
export const usePost = () => {
   const [ response, setResponse] = useState(null)
   const [ fetching, setFetching] =  useState(false);

   const postData = async(endpoint, object ) => {
       try {
           const responseData = await axios.post( `${BASE_URL}/${endpoint}`, object);
           setResponse(responseData);
           setFetching(false); 
        } catch (error) {
           
       }

   }
   return [postData, response, fetching]
}

export const useGet = () => {
    const getData = async (endpoint)=> {}
}