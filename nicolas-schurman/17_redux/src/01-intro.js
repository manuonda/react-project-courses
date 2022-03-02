
import { useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';

// reducer  state, action 
// action : { type, payload }
export const reducer = (state = 0, action) => {
  console.log({ state, action });
    switch(action.type) {
      case 'incrementar': {
         return state + 1 ;
      };
      case 'decrementar': {
        return state - 1 ;
      }
      case 'set' :
        return action.payload;
      default : return state;
    }

}

function App() {
  const[valor, setValor] = useState('');
  // obtenemos indicar la action 
  const dispatch = useDispatch();
  // permite obtener el estado del redux 
  const state = useSelector(state => state);

   const set = () => {
     dispatch({ type : 'set', payload:0 });
     setValor('');
   }

  return (
    <div className="App">
     <p>Contador{ state } </p>
     <button onClick={() => dispatch({ type:'incrementar'})} >Incrementar</button>
     <button onClick={() => dispatch({ type: 'decrementar'})}>Decrementar</button>
     <button onClick={set}>Set</button>
     <input value={valor} onChange={(e) => setValor(Number(e.target.value))}></input>
    </div>
  );
}

export default App;
