import { useReducer, useState } from 'react'
import logo from './logo.svg'
import './App.css'

enum actions  {
   DECIMAL, 
   HEXADECIMAL

}

type actionConverter  = {
   type: actions.DECIMAL 
   payload: number
} | {
  type: actions.HEXADECIMAL,
  payload: number
}

type  initialState {
  value: number
}


export const convertReducer = (state: initialState , action: actionConverter ) => {
    
   switch(action.type ) {
     case actions.DECIMAL : 
       return {
         ...state,
         value: parseInt(action.payload.toString(),16) 
       };
      case actions.HEXADECIMAL : 
      return{
        ...state,
        value: action.payload.toString(16)
      }
      default: return state; 
   }
}


function App() {
  const [count, setCount] = useState(0)
  const [state, dispatch] = useReducer(convertReducer,{ value: 0 });
  return (
    <>
    </>  
    )
}

export default App
