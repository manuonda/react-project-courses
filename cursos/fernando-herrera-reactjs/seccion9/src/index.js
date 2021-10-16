import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import { HookApp } from './HookApp';

ReactDOM.render(
  <React.StrictMode>
   <HookApp></HookApp>
  </React.StrictMode>,
  document.getElementById('root')
);


=======
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
>>>>>>> af42fbd0e5c028c0eaa36d27d42fb238136b7fd9
