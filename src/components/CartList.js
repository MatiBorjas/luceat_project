import React, { useState } from 'react'
import { useCartContext } from '../context/CartContext'
import '../styles/CartList.css'
import FormularioCompra from './FormularioCompra';

function CartList() {

  const { cart, totalCarrito, deleteFromCart, deleteCart } = useCartContext();

  const [finalizar, setFinalizar] = useState(false)

  const handleEnd = () => {
    setFinalizar(true)
  }

  return (
    <div className='cart-container'>
      {cart.length === 0 ? (
      <div className='carrito-vacio'>
        <p>El carrito esta vacio</p>
      </div> )
      : ( 
        <div className='carrito-container'>
          <div className='carrito'>
            {cart.map(item => {
              return (
                <div className='item-carrito' key={item.id}>
                  <div className='img-item'>
                    <img src={item.imagen} alt={item.nombre} />
                  </div>
                  <div className='detalles-item-carrito'>
                    <div className='item-nombre'>
                      <p>{item.nombre}</p>
                    </div>
                    <div className='item-cantidad'>
                      <p>Cantidad: {item.quantity}</p>
                    </div>
                    <div className='item-precio'>
                      <p>Precio: {item.precio}</p>
                    </div>
                  </div>
                  <div className='contenedor-item-total'>
                    <div className='item-total'>
                      <p>Total: ${item.precio * item.quantity}</p>
                    </div>
                    <div className='item-eliminar'>
                      <button className='btn-eliminar' onClick={() => deleteFromCart(item.id)}>Eliminar</button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="vaciar-carrito">
            <div>
              <button className="btn-vaciar" onClick={() => deleteCart()}>Vaciar Carrito</button>
            </div>
          </div>

            {finalizar ? (
              <FormularioCompra /> 
            ) : 
              <div className='contenedor-carrito-total'>
                <div className='total-compra'>
                  <p>Total de compra: ${totalCarrito()}</p>
                </div>
                <div className='finalizar-compra'>
                  <button className='btn-finalizar' onClick={handleEnd}>Finalizar Compra</button>
                </div>
              </div>
            }
          </div>
      )}
      
    </div>
  )
}

export default CartList