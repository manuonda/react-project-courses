import { FETCHING, FETCH_SUCCESS  , FETCH_ERROR } from './actions/products'

export const initialState = {
    fetching: true,
    products: [], 
    error: false,
    categories : [],
    errors: false
}

/** 
 *  action : {
 *      type,
 *      payload:{
 *       data: products,
 *       categories: categories   
 *     }
 *      
 *   }
 */
export function productsReducer(state =  initialState, action) {
    switch(action.type) {
        case FETCHING: 
            return {
               ...initialState,
               fetching: true,
            };
        case FETCH_SUCCESS: {
            return {
                fetching: false,
                products: action.payload.data,
                categories: action.payload.data | [],
                errors: false
            }
        };
        default: 
          return state;
    }
}




