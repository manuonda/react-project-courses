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
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<UserList></UserList>}></Route>
        <Route path="/create-user" element={<UserForm></UserForm>}></Route>
        <Route path="/edit-user/:id" element={<UserForm></UserForm>}></Route> 
      </Routes>
       <App />
      </BrowserRouter>
    
    </Provider>
   
  </React.StrictMode>
)
