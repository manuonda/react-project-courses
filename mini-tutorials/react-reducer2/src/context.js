import {createContext, useReducer} from 'react'
import  {reducer} from "./reducer"

const User = {
    nombre: String,
    password: String,
    edad: Number
}

const initialState = {
     user: User 
  }
  
  export const CounterContext = createContext({
    initialState
  })
  

  export const CounterContextProvider =  props => {
    const[state, dispatch] = useReducer(reducer,initialState);
    return(
      <CounterContext.Provider value={{state, dispatch}}>
        {props.children}
      </CounterContext.Provider>
    )
  }
  