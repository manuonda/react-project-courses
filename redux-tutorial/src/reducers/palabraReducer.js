import { UPDATE_WORD } from '../constants'

const initialState = {
    palabra: ""
}

const  palabraReducer = ( state = initialState , action ) => {
    switch (action.type) {
      case  UPDATE_WORD : {
          return{
              ...state,
              palabra: action.payload
          }
      }   
    }

    return state
}

export default palabraReducer;

