import React , {useState , useEffect} from "react";
import CartItem from "./CartItem";
import '../components/Cart.css'

const Cart = ({ initialItems }) => {

  const initialState = JSON.parse(localStorage.getItem('items'))
  const [items, setItems] = useState(initialState || initialItems);
  const [count, setCount] = useState(0) 
  // useEffect permite indicar a que 
  // esta escuchando en este caso a items
  useEffect(() => {
    console.log('Hello from effect');  
    localStorage.setItem('items',JSON.stringify(items));
  },[items])

  const grandTotal = items.reduce((total, item) => total + item.qty * item.price, 0)
    .toFixed(2);

  const updateQty = (id, qty) => {
      const newItems  = items.slice();
      setItems( newItems.filter(item => item.id === id ? item.qty = qty: item.qty))
  }  


  return (
    <div className="Cart">
      <button onClick={() => setCount( count +1 )}>BUTTON</button>
      <h1> I am Cart</h1>
      <ul>
        {items && items.map((item) => 
            <CartItem  updateQuery={updateQty} key={item.id} {...item} />)}
      </ul>
      <h2>Grand Total : ${grandTotal}</h2>
    </div>
  );
};

export default Cart;
