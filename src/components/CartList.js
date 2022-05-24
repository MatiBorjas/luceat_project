import React from 'react'
import { useCartContext } from '../context/CartContext'

function CartList() {

  const { cart, cantidadCarrito, addToCart, deleteFromCart, deleteCart } = useCartContext();

  return (
    <div className='cart-container'>
      {cart.length === 0}
      <div>Cart List</div>
    </div>
  )
}

export default CartList