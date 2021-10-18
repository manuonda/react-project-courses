import { useState} from 'react'
import Productos from './components/Productos'
import './App.css';
import Title from './components/Title'
import Navbar from './components/Navbar'





const App = () =>  {
  const [productos, setProductos] = useState([
     { name: 'Tomate',  price: 200, img: '/productos/tomate.jpg'},
     { name: 'Arbejas', price: 300, img: '/productos/arbejas.jpg'},
     { name: 'Lechuga', price: 100, img: '/productos/lechuga.jpg'}
  ]);

  console.log(productos);
  
  const addProducto = () => {

  }

  return (
    <div className="App">
      <Navbar></Navbar>
      <Title></Title>
      <Productos
        addProducto={addProducto}
        productos = {productos}     
      >

      </Productos>
    </div>
  );
}

export default App;
