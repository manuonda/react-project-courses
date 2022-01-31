import logo from './logo.svg';
import './App.css';
import MiComponent from './components/MiComponent';
import Contador from './hook/Contador';
import { useState, useEffect , useReducer} from 'react';

const Interval = ({ contador }) => {
    useEffect(() => {
    
      setInterval(() => console.log(contador), 1000);
    },[contador])

    return(
      <p>Intervalor</p>
    )
}

const App = () => {
  const [contador, incrementar] = Contador(0);
 
  useEffect(() => {
    document.title='soy un contador';
     console.log('SOY UN EFECTO');
  },[contador]);

  return (
      <>
      Contador: {contador}
      <button onClick={incrementar}>Incrementar</button>
      <Interval contador={contador}></Interval>
      </>
    )
}

export default App;
