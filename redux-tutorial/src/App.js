import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/form/form'
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <Provider store={store}>
     <App></App>
    </Provider>

  );
}

export default App;
