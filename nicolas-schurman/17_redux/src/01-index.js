import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StayCurrentLandscape } from '@material-ui/icons';


const store = createStore((state = 0, action) => { //es un reducer!
     // action = { type : 'tipo de accion', payload: any}
     console.log({state, action});
     switch( action.type) {
       case 'incrementar': {
         return    state + 1;
       }
       case 'decrementar' :{
         return state  - 1;
       };
       case 'set' :
         return action.payload;
      default: return state;
     
      }
});

//console.log(store);

//store.dispatch : se ejecuta la function reducer
store.dispatch({ type: 'accion'});
console.log(store.getState());
store.dispatch({ type: 'incrementar'});
console.log(store.getState());
store.dispatch({ type: 'decrementar'});
console.log(store.getState());
store.dispatch({ type: 'set', payload: 15});
console.log(store.getState());


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

