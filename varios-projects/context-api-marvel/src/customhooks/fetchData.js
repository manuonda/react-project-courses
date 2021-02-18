import { useEffect, useState } from "react"
import React, { useEffect } from 'react'
import {BASE_URL} from '../constants'

const fetchData = () => {
    
    const[data, setData] = useState([]);
    const[error, setError] = useState(false);
    const[loading, setLoading] = useState(true); 
    const getData = ({url}) => {
        try {
            const data =    

        } catch (error) {
            
        }
       
       return [ data , error , loading ]; 
    }

    useEffect(() => {
       getData();
    },[url]);
    return (
        <div>
            
        </div>
    )
}
