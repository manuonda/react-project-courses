import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import App from './App'
import { store } from './app/store'
import UserForm from './components/UserForm'
import UserList from './components/UserList'
import './index.css'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
     <App></App>
    
    </Provider>
   
  </React.StrictMode>
)
