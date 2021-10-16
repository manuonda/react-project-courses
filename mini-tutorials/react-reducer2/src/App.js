import logo from './logo.svg';
import './App.css';
import { createContext , useReducer , useContext} from 'react';
import { CounterContext, CounterContextProvider } from "./context";

import Modal from 'react-modal';


export const Display = () => {
  const { state } = useContext(CounterContext);
  return (
    <h1>{state.counter}</h1>
  )
}

export const Increment = () => {
  const {dispatch} =  useContext(CounterContext);
  return (
    <button
      onClick={ () => 
        dispatch({
          type:'ADD_TO_COUNTER',
          value: 1
        })
      }
    >
      Incrementar
    </button>
  )
}


function App() {
  return (
    <div className="App">
      <CounterContextProvider>
        <Display></Display>
        <Increment></Increment>
      </CounterContextProvider>
    </div>
  );
}

export default App;
