import { useState } from 'react'
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


const convertReducer = (state: initialState , action: actionConverter ) => {
    
   switch(action.type ) {
     case actions.DECIMAL : 
       return {
         ...state,
         value: 
       }
   }
}


function App() {
  const [count, setCount] = useState(0)
  const [state, dispatch] = useState()
  return (
    <>
    </>  
    )
}

export default App
