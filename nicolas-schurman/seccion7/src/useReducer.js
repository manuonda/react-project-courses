import logo from './logo.svg';
import './App.css';
import MiComponent from './components/MiComponent';
import Contador from './hook/Contador';
import { useState, useEffect , useReducer} from 'react';

// action  = { type: string, payload: any}

const reducer = (state, action)  =>  { 
    
   switch(action.type) {
     case 'incrementar': return  {
       contador: state.contador + 1
     };break;
     case 'decrementar': return{
       contador : state.contador -1
     };break;
     case 'set' :
       return {contador : action.payload};break;
     default: return { state};
   }
}
const inicial = { contador: 0 };
const App = () => {
  //const [contador, incrementar] = Contador(0);
  const [state, dispatch] = useReducer (reducer, inicial);
  const [valor, setValor] = useState(0);

  // useEffect(() => {
  //   document.title='soy un contador';
  //    console.log('SOY UN EFECTO');
  // },[contador]);

  return (
      <>
      Contador : {state.contador}
      <input value={valor} onChange={ e => setValor(e.target.value)}></input>
      <button onClick={ () => dispatch({ type: 'incrementar' })}>Incrementar</button>
      <button onClick={ () => dispatch({ type: 'decrementar' })}>Incrementar</button>
      <button onClick={ () => dispatch({ type: 'set', payload: valor })}>Incrementar</button>
      </>
    )
}

export default App;
