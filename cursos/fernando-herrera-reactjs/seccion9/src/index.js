import React from 'react';
import ReactDOM from 'react-dom';
import { SimpleForm } from './components/02 - useEffect/SimpleForm.js';
import { CounterApp } from './components/CounterApp.js';
import { CounterWithCustomHook } from './components/CounterWithCustomHook.js';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    {/* <CounterApp></CounterApp>   */}
   {/* <CounterWithCustomHook></CounterWithCustomHook> */}
  {/* <SimpleForm></SimpleForm> */}
  <FormWithCustomHook></FormWithCustomHook>
  </React.StrictMode>,
  document.getElementById('root')
);
