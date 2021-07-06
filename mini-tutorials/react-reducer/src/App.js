import React , {createContext, useContext , useReducer} from "react";
import logo from './logo.svg';
import './App.css';


export const initialState = {
  counter : 0 
}

export const CounterContext = createContext({
   counter: 0 
});


const reducer = (state , action ) => {
  switch(action.type) {
    case "ADD_TO_COUNTER": {
      return {
        ...state,
        counter: state.counter + action.value
      }
    }
    default : 
     return state;
  }
}

export const CounterContextProvider =  props => {
    const[state, dispatch] = useReducer(reducer, initialState);
    return(
      <CounterContext.Provider value={{state, dispatch}}>
        {props.children}
      </CounterContext.Provider>
    )
}

const Display = () => {
  const { state } = useContext(CounterContext);
  return <h1>Valor del Contador : {state.counter}</h1>
}

const Increment = () => {
   const { dispatch} = useContext(CounterContext);
   return(
     <button
      onClick={ () => 
        dispatch({
          type: "ADD_TO_COUNTER",
          value:1
        })
      }
     >
     Sumar 1
     </button>
   )
}

const Decrement = () => {
  const {dispatch} = useContext(CounterContext);
  return(
    <button
       onClick={ () =>
         dispatch({
           type: "ADD_TO_COUNTER",
           value: -1
         })
      }>
        Decrementar 1
    </button>
  )
}





function App() {
  return (
    <>
     <CounterContextProvider>
       <Display></Display>
       <Increment></Increment>
       <Decrement></Decrement>
     </CounterContextProvider>
    </>
  );
}

export default App;
