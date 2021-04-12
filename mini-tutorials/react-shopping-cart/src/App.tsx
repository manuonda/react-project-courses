import React, {useState } from 'react'
import {useQuery} from 'react-query'
// components 
import { Drawer , LinearProgress, Grid , Badge } from '@material-ui/core'
import AddShoppingCart from '@material-ui/icons/AddShoppingCart';
// Sytles 
import {Wrapper , StyledButton} from './App.style'
// types
import { CartItemType } from './type';
import Item from './components/Item';

// components 
import Cart from './components/Cart/Cart';



const getProducts = async (): Promise<CartItemType[]> => {
   return  await( await fetch('https://fakestoreapi.com/products')).json();
}

const App = () => {
  const [cartOpen, setCartOpen] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);
  const { data, isLoading , error } = useQuery<CartItemType[]>('products', getProducts);
  console.log(data, isLoading, error );

  const getTotalItems = (items: CartItemType[]) => {
     return items.reduce((ack: number, item) => ack + item.amount, 0 );
  }

  const handleAddToCart = (clickedItem: CartItemType) => {
     const isItemCart = cartItems.find( item => item.id ===  clickedItem.id);
     if( isItemCart) {
       cartItems.map( item => 
          item.id === clickedItem.id ? 
          {...item, amount: item.amount + 1 } :
          item
       );
       setCartItems(cartItems);
     } else {
       clickedItem.amount = 1 ;
       cartItems.push(clickedItem);   
     }
     
  }

  const handleRemoveFromCart = (id: number) => {
      setCartItems( prev => 
         prev.reduce((ack, item) => {
             if(item.id === id) {
               if( item.amount === 1) return ack;
               return[...ack,{...item, amount: item.amount - 1}];
             } else {
               return [...ack, item];
             }     
        }, [] as CartItemType[])
      );
  }; 

  if ( isLoading ) return <LinearProgress></LinearProgress>
  if ( error) return <div>Shomething error </div>

  return (
   <Wrapper>
     <Drawer anchor='right' 
             open={cartOpen}
             onClose ={() => setCartOpen(false)}>
             <Cart cartItems={cartItems} 
                   addToCart={handleAddToCart} 
                   removeFromCart={handleRemoveFromCart}/>  
             </Drawer>

             <StyledButton onClick={() => setCartOpen(true)}>
               <Badge badgeContent={getTotalItems(cartItems)} color='error'>
                 <AddShoppingCart/>
               </Badge>
             </StyledButton>
        <Grid container spacing={3}>
       { data?.map( item => (
          <Grid item key={item.id} xs={6} sm={4}>
            <Item item={item} 
             handleAddToCart={handleAddToCart}/>
          </Grid>
       ))}
     </Grid>
   </Wrapper>
  );
}

export default App;
