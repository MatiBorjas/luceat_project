import React from 'react'
import { useCartContext } from '../context/CartContext'

function CartList() {

  const { cart, addToCart, deleteFromCart, deleteCart, setCart} = useCartContext();

  console.log(cart);

  return (
    <div className='cart-container'>
      <div>Cart List</div>
    </div>
  )
}

export default CartList