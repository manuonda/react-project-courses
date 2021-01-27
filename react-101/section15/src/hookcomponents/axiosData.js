import React, {useEffect, useState} from 'react'
import { BASE_URL } from '../constants';
import axios from 'axios'

const axiosData = (url, initialState={}) => {

   // eslint-disable-next-line react-hooks/rules-of-hooks
   const[data, setData] = useState([])
   // eslint-disable-next-line react-hooks/rules-of-hooks
   const[fetching, setFetching] = useState(true); 
   // eslint-disable-next-line react-hooks/rules-of-hooks
   const[error, setError] = useState(false)
   
   const getData = async () => {
       try {
           const response = await fetch(`${BASE_URL}/${url}`,{ method: 'GET',
           mode: 'no-cors', // <---
           cache: 'default'
          });
           console.log(data)
           const json =  await response.json();
           console.log(json);
           setData(json)
           setFetching(false)
           setError(false)
       } catch (error) {
           setData(initialState) 
           setFetching(false)
           setError(true)

       }
   } 
   

   // eslint-disable-next-line react-hooks/rules-of-hooks
   useEffect(() => {
      getData();
   },[url])

   return [data, fetching, error]

}

export default axiosData;