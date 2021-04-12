import React from 'react'
// Styles 
import { Wrapper } from './Cart.style'
// Component 
import  CartItem  from '../CartItem/CartItem'
// Types 
import { CartItemType } from '../../type'


type Props = {
   cartItems : CartItemType[] ;
   addToCart :(clickedItem: CartItemType) => void;
   removeFromCart: (id: number ) => void;
}

const Cart:React.FC<Props> = ({ cartItems, addToCart, removeFromCart}) => {
   
   const calculateTotal = ( items: CartItemType[]) : number =>
       items.reduce((ack: number, item) => ack + item.amount *item.price, 0 );
      
   
   return( 
      <Wrapper>
      <h2>Your Shopping Cart</h2>
      { cartItems.length === 0? <p>No Contiente Items in Cart</p> : null}
      { cartItems.map((item: CartItemType) => (
         <CartItem
         key={item.id}
         item={item}
         addToCart={addToCart}
         removeFromCart={removeFromCart}
         >

         </CartItem>      
      ))
       }
       <h2> Total :${calculateTotal(cartItems)} </h2>
      
      </Wrapper>
   )
}

export default Cart;