import React ,{ useState, useEffect, useReducer } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import { productsReducer , initialState } from '../../reducers/products'
import { FETCHING, FETCH_SUCCESS, FETCH_ERROR } from "../../reducers/actions/products"
import {BASE_URL} from '../../constants/index'

const Products = ({ search }) => {


    const [state, dispatch] = useReducer(productsReducer, initialState);
    const getProducts = async () => {
        try {
            const {data : info } = await axios.get(`${BASE_URL}/search?search=${search}&limit=4`,{});
            console.log(info);
            dispatch({type: FETCH_SUCCESS, 
                      payload: {
                        products: info.products 
                      }
            });
            console.log(info)
        } catch (error) {
           dispatch({type:
              FETCH_ERROR,
              payload: {

              } 
            }); 
        }
    }


    useEffect(() => {
       // peticion http 
    },[search])
    return (
        <div>
            Products a traer: ${search}
        </div>
    )
}

Products.propTypes = {
    search: PropTypes.string
}

export default Products 
