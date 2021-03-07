import React, { useEffect, useState } from 'react'
import {BASE_URL , API_PUBLIC_KEY,HASH, TS} from '../constants'
import axios from 'axios';

const useFetch = (menuItem) => {
    
    console.log("----------------");
    console.log("fetchData url => ", menuItem);
    const[result, setResult] = useState([]);
    const[error, setError] = useState(false);
    const[loading, setLoading] = useState(false);

    useEffect(() => {
        console.log("S ejecuta in Conte useEffect");
        const getData = async() => {
            if ( menuItem) {
                setLoading(true);
                const URL_DATA = `${BASE_URL}/${menuItem}?ts=${TS}&apikey=${API_PUBLIC_KEY}&hash=${HASH}`;
                console.log(`Pedido URL_DATA: ${URL_DATA}`);
                try {
                    const resultado = await axios.get(URL_DATA); 
                    console.log(resultado);
                    setResult(resultado); 
                    setLoading(false);
                } catch (error) {
                    console.error(error);
                    setError(error);
                    setLoading(false);
                }
                
            }
           
        }
       getData();
    }, [menuItem]);

    return { result , error , loading }; 
}

export default useFetch;

