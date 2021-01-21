import { Link, Route } from 'react-router-dom'
import styled from 'styled-components'
import About from './components/About';
import Home from './components/Home';
import Products from './components/Products';

const Wrapper = styled.div`
 font-family: sans-serif
`

function App() {
  return (
      <Wrapper>
     
        <Link to='/'>Home</Link>
        <Link to='/products'>Products</Link>
        <Link to='/about'>About</Link>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/products" component={Products}/>
      <Route exact path="/about" component={About}></Route>
  
      </Wrapper>
  );
}

export default App;
