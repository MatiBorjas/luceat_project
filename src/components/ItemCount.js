import React, { useState } from 'react'
import { useAppContext } from '../context/AppContext'
import { useCartContext } from '../context/CartContext'
import '../styles/ItemCount.css'

function ItemCount({stock, onAdd, id}) {
  const [count, setCount] = useState(0)

  const { addToCart } = useCartContext()
  const { productos } = useAppContext()

  const handleAdd = () => {
    if(count < stock) {
      setCount(count + 1)
    }
  }

  const handleRemove = () => {
    if(count > 0) {
      setCount(count - 1)
    }
  }

  const handleClick = (id, cantidad) => {

    const findProduct = productos.find((producto) => producto.id == id)

    if(!findProduct){
      alert('No existe ese producto')
      return
    }
    addToCart(findProduct, cantidad)
    onAdd(count)
  }

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
          onClick={() => handleClick(id, count)}>
            Agregar
          </button>
        </div>
    </div>
  )
}

export default ItemCount