import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled.div`
 font-family: sans-serif
`

const Nav = styled.div`
 & > a::not(::last-of-type){
   margin-right: 1rem;
 }
`
function App() {
  return (
      <Wrapper>
      <Nav>
        <Link to='/'>Home</Link>
        <Link to='/products'>Products</Link>
        <Link to='/about'>About</Link>
      </Nav>
      </Wrapper>
  );
}

export default App;
