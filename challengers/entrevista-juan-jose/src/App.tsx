import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { SimpleForm } from './components/SimpleForm';
import { SearchComponent } from './components/SearchComponent';

function App() {
  const [count, setCount] = useState(0)
  const [user, setUsers] = useState([]);

 

  return (
    <SearchComponent></SearchComponent>
  )
}

export default App
