import React, { useState } from 'react'
import { useAppContext } from '../context/AppContext'
import { useCartContext } from '../context/CartContext'
import '../styles/ItemCount.css'

function ItemCount({initial, stock, onAdd}) {
  const [count, setCount] = useState(initial);

  // const { addToCart } = useCartContext()
  // const { productos } = useAppContext()

  const handleRemove = () => {
    if(count > 1) {
      setCount(count => count - 1)
    }
  }

  const handleAdd = () => {
    if(count < stock) {
      setCount(count => count + 1)
    }
  }

  // const handleClick = (id, cantidad) => {

  //   const findProduct = productos.find((producto) => producto.id == id)

  //   if(!findProduct){
  //     alert('No existe ese producto')
  //     return
  //   }
    
  //   addToCart(findProduct, cantidad)
  //   onAdd(count)
  // }

  return (

    <div className='contenedorCount'>
      <div className='contador'>
        <button 
          className='eliminarItem'
          onClick={handleRemove}>
          -
        </button>
        <span>{count}</span>
        <button 
          className='agregarItem'
          onClick={handleAdd}>
          +
        </button>
      </div>
        <div className='botonAgregar'>
        <button 
          className='agregarAlCarrito'
          onClick={() => onAdd(count)}>
            Agregar
          </button>
        </div>
    </div>
  )
}

export default ItemCount