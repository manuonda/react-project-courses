import './App.css';
import Navbar from './components/Navbar';
import Greeter from './components/Greeter';
import Counter from './components/Counter';
import MoodToggler from './components/MoodToggler';
import Cart from './components/Cart';

const items = [
  { id: 1 ,  name:'Taco1', price:2.1, qty: 1},
  { id: 2 ,  name:'Taco2', price:2.2, qty: 2},
  { id: 3 ,  name:'Taco3', price:2.3, qty: 3},
]

function App() {
  return (
      <div>
        <Cart initialItems = {items}></Cart>
       {/* <Navbar></Navbar>
       <Greeter age={23} name={"david"}></Greeter>
       <Greeter age="25" name="gordo"></Greeter>
       <Greeter age={23} ></Greeter> */}
       <Counter></Counter>
       <MoodToggler></MoodToggler>
      </div>
  );
}

export default App;
