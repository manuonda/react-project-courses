import React from 'react'
// Styles 
import { Wrapper } from './Cart.style'
// Component 
import  CartItem  from '../CartItem/CartItem'
// Types 
import { CartItemType } from '../../type'
import CartItem from '../CartItem/CartItem'


type Props = {
   cartItems : CartItemType[] ;
   addToCart :(clickedItem: CartItemType) => void;
   removeFromCart: (id: number ) => void;
}

const Cart:React.FC<Props> = ({ cartItems, addToCart, removeFromCart}) => {
   return( 
      <Wrapper>
      <h2>Your Shopping Cart</h2>
      { cartItems.length === 0? <p>No Contiente Items in Cart</p> : null}
      { cartItems.map((item: CartItemType) => (
         <CartItem></CartItem>      
      ))}
      </Wrapper>
   )
}

export default Cart;