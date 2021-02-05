import React ,{ useState, useEffect, useReducer } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import { productsReducer , initialState } from '../../reducers/products'
import { FETCHING, FETCH_SUCCESS, FETCH_ERROR } from "../../reducers/actions/products"
import {BASE_URL} from '../../constants/index'
import {Container, Row, Col ,Image} from 'react-bootstrap'
import { Link } from 'react-router-dom'



const Products = ({ search }) => {


    const [state, dispatch] = useReducer(productsReducer, initialState);
    console.log("state: ", state);
    const getProducts = async () => {
        try {
            const {data : info } = await axios.get(`${BASE_URL}/search?q=${search}&limit=4`,{});
            console.log("information",info.results);
            dispatch({ type: FETCH_SUCCESS, 
                       payload: {
                         products: info.results,
                         
                      }
            });
            console.log("after", state);
        } catch (error) {
           dispatch({type:
              FETCH_ERROR,
              payload: {

              } 
            }); 
        }
    }


    useEffect(() => {
       getProducts();
    },[search])
    return (
        <>
        
         <Container>
             {
                 state.products.length ?
                 state.products.map((product) => (
                     <Col md={12}>
                         <Row>
                             <Col md={4} key={product.id}>
                                 <Image src={product.thumbnail} rounded></Image>
                                 <p>{product.title}</p>
                                 <p>${product.price}</p>
                               <Link to={`/products/detail/${product.id}`}>Detail</Link>
                             </Col>
                         </Row>
                     </Col>
                 ))
                 :
                 <h3>Cargando...</h3>
             }
         </Container>  
        </>
    )
}

Products.propTypes = {
    search: PropTypes.string
}

export default Products 
