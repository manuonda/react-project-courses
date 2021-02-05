import { FETCHING, FETCH_SUCCESS, FETCH_ERROR } from "./actions/products";

export const initialState = {
  fetching: true,
  products: [],
  error: false,
  categories: [],
  errors: false,
};

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
export function productsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCHING:
      console.log("fetching");
      return {
        ...initialState,
        fetching: true,
      };
    case FETCH_SUCCESS: {
      console.log("fetch_success");
      console.log("action : => ", action.payload.products);
      let variable = action.payload.products;
      console.log("onda variable => ", variable);
      state = {
        ...initialState,
        fetching: false,
        valores: action.payload.products,
        products: action.payload.products ,
        categories: action.payload.data | [],
        errors: false,
      }; 
      console.log("state after : ", state);
      return state;
    }
    default:
      return state;
  }
}
