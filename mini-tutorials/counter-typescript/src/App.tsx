import React , { useReducer, useState} from 'react';
import './App.css';

enum CountActionKIND {
  INCREMENT = 'INCREMENTAR',
  DECREMENTAR = 'DECREMENTAR'
}

type reducerAction = {
  type: CountActionKIND.INCREMENT,
  payload: number
} | {
  type : CountActionKIND.DECREMENTAR,
  payload:number
} 


interface CountState  {
  counter: number
}
 const counterReducer = (state : CountState, action: reducerAction) => {
   switch(action.type) {
     case CountActionKIND.INCREMENT : 
       return {
         ...state,
         counter: state.counter + action.payload 
       }
     case CountActionKIND.DECREMENTAR:
       return {
         ...state,
         counter:state.counter - action.payload
       }  
      default:
        return state;
   }
}

const INITIAL_STATE = {
  counter: 0
}


function App() {




  const [state, dispatch] = useReducer(counterReducer , INITIAL_STATE);

  const handleIncrementar = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        dispatch({ type: CountActionKIND.INCREMENT, payload: 1 })
  }

  const handleDecrementar = (e : React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
       dispatch({ type: CountActionKIND.DECREMENTAR, payload: 1 });
  }

  return (
    <>
    <div style={{}}>
       <button type="button" onClick={handleIncrementar}>+</button>
       <h1>{state.counter}</h1>
        <button type="button" onClick={handleDecrementar}>-</button>
    </div>

    </>
  );
}

export default App;
