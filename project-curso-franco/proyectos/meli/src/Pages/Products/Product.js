import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../../constants';

const Product = () => {
    const {id} = useParams();
    console.log("product detail : ", id);
    const [product, setProduct] = useState({}); 
    const getProduct = async() => {
        

        try {
            const data = axios.get(`${BASE_URL}`)          
        } catch (error) {
            
        }
    }

    useEffect(() => {
        getProduct();
    },[id])

    return (
        <div>
            Detail
        </div>
    )
}

export default Product;
