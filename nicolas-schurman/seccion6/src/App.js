import { useState} from 'react'
import Productos from './components/Productos'
import './App.css';






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
      <Productos
        addProducto={addProducto}
        productos = {productos}     
      >

      </Productos>
    </div>
  );
}

export default App;
