import React from "react";

const CartItem = ({ id, name, price, qty, updateQuery }) => {
  
    const addOne = () => {
        updateQuery(id, qty + 1 );
    }
    const substractOne = () => {
        updateQuery(id, qty - 1 );
    }

    return (
    <div key={id}>
        <li>Id :  {id}</li>
        <li>Name :  {name}</li>
        <li>Price :  {price}</li>
        <li>Quantity : ${qty}</li>
        <li> Actions 
            <button onClick={substractOne} disabled={qty <= 1 }>-</button>
            {qty}
            <button onClick={addOne}>+</button>
        </li>
        <li>Total Price Item: {(price * qty).toFixed(2)}</li>
        <li>****************</li>
    </div>
  );
};

export default CartItem;
