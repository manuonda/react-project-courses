import logo from './logo.svg';
import './App.css';
import {Container} from 'react-bootstrap'

import Header from './components/Header'
import Counter from './components/Counter'

function App() {
  return (
    <Container>
      <Header title="Titulo de Prueba" likes={4}></Header>
      <Counter></Counter>
    </Container>

   
  );
}

export default App;
