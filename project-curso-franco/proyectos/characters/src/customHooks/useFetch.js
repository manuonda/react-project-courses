// custom hook es una funcion personalizada que involucra u o mas hooks 
import React,{useState,useEffect} from 'react'
const BASE_URL="https://rickandmortyapi.com/api";

const useFetch = (url , initialState={}) => {
    const [data, setData] = useState(initialState);
    const [fetching, setFetching] = useState(true);
    const [error, setError] = useState(false);

    const fetchData = async () => {
       try {
           const result = await fetch(`${BASE_URL}/${url}`)
           const data = await result.json();
           console.log(data);
           setData(data)
           setFetching(false);
           setError(false);
       } catch (error) {
           console.log(error);
           setData(initialState)
           setFetching(false)
           setError(true)
           
       } 
    }

    useEffect(() => {
       fetchData() 
    }, [])

  
    return [data,fetching, error];
}

export default useFetch
