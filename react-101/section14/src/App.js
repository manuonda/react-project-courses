import { Link, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import About from "./components/About";
import FOF from "./components/FOF";
import Home from "./components/Home";
import Products from "./components/Products";

const Wrapper = styled.div`
  font-family: sans-serif;
`;

function App() {
  return (
    <Wrapper>
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/about">About</Link>

      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/products" component={Products} />
        <Route path="/about" component={About}></Route>
        <Route component={FOF}></Route>
      </Switch>
    </Wrapper>
  );
}

export default App;
