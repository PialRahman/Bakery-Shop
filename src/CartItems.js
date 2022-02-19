import React, { useContext,useState } from 'react';
import { useParams } from 'react-router-dom';
import { ItemContext } from './ItemContext';

function CartItems() {
    const [item,setItem]= useContext(ItemContext);
    const [cartitem,setCartitem]= useState([]);
    const {id}=useParams();

  return (
    <div><h4>Cart Items</h4>
      {
        cartitem.map(itemlists=>(
          <>
        
        <h4>{itemlists.name}</h4>
        <h4>{itemlists.price}</h4>
      </>   ) ) 
          }
    </div>
  )
}

export default CartItems