import React, { useState } from 'react'
import '../styles/ItemCount.css'

function ItemCount({initial, stock, onAdd}) {
  const [count, setCount] = useState(initial);

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