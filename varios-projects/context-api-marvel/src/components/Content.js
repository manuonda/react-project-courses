import React, { useState , useEffect } from 'react'
import axios from 'axios'
import {BASE_URL} from '../constants'
import  useFetch    from '../customhooks/useFetch'
import { CircularProgress} from '@material-ui/core';
import CardContent from './CardCategory';
import CardCategory from './CardCategory';

const Content = ({ menuItem}) => {

    const[url ,  setUrl] =useState("");
    const[datos, setDatos] = useState([]);

    useEffect(() => {
        setUrl(menuItem);
    }, [menuItem]);
    const { result, error, loading } = useFetch(url);
    console.log("resultado => ", result);
    const { data  } = result;
    console.log("in contente  => ", data);
    return (
        <> 
            {
                loading? ( 
                <><CircularProgress color="secondary" />
                </>)
                :
                <> { 
                   data && data.data.results?.map(({ id, title }) => (
                        <>
                        <CardCategory></CardCategory>
                        </>     
                   ))
                  
                }</>

            }
        </>
    )
}

export default Content
