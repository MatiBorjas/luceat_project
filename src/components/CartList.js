import React from 'react'
import { useCartContext } from '../context/CartContext'
import '../styles/CartList.css'

function CartList() {

  const { cart, totalCarrito, deleteFromCart, deleteCart } = useCartContext();

  return (
    <div className='cart-container'>
      {cart.length === 0 ? (
      <div>El carrito esta vacio</div> )
      : ( 
        <div className='carrito-container'>
          <div className='carrito'>
            {cart.map(item => {
              return (
                <div className='item-carrito' key={item.id}>
                  <div className='img-item'>
                    <img src={item.imagen} alt={item.nombre} />
                  </div>
                  <div className='item-nombre'>
                    <p>{item.nombre}</p>
                  </div>
                  <div className='item-cantidad'>
                    <p>Cantidad: {item.quantity}</p>
                  </div>
                  <div className='item-precio'>
                    <p>Precio: {item.precio}</p>
                  </div>
                  <div className='item-total'>
                    <p>Total: ${item.precio * item.quantity}</p>
                  </div>
                  <div className='item-eliminar'>
                    <button className='btn-eliminar' onClick={() => deleteFromCart(item.id)}>Eliminar</button>
                  </div>
                </div>
              )
            })}
          </div>

            <div className='contenedor-carrito-total'>
              <div className='total-compra'>
                <p>Total de compra: ${totalCarrito()}</p>
              </div>
              <div className='finalizar-compra'>
                <button className='btn-finalizar'>Finalizar Compra</button>
              </div>
            </div>

            <div className="vaciar-carrito">
              <div>
                <button className="btn-vaciar" onClick={() => deleteCart()}>Vaciar Carrito</button>
              </div>
            </div>
        </div>
      )}
      
    </div>
  )
}

export default CartList