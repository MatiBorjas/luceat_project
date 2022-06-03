
import { useCartContext } from '../context/CartContext';
import React, { useState } from 'react'
import '../styles/ItemDetail.css';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';

export function ItemDetail({ detalles }) {
  const [terminar, setTerminar] = useState(false)

  const { addToCart } = useCartContext();

  const handleOnAdd = (count) => {
    setTerminar(true)
    
    addToCart(detalles, count);
  }

  return (
    <div className='contenedor-item'>
      <div className='producto'>
        <div className='detalle-titulo'>
          <h1>{detalles.nombre}</h1>
        </div>
        <div className='elementos'>
          <img src={detalles.imagen} className='imagen-producto' alt={detalles.nombre}/>
          <div className='descripcion-precio'>
            <div className='descripcion'>
              <div className='texto'>{detalles.descripcion}</div>
            </div>
            <div className='valor'>
              <div className='precio'>${detalles.precio} en efectivo</div>
            </div>
          </div>
        </div>
        <div className='contenedorCompra'>
        {terminar ? (
          <button><Link to={'/carrito'} className='terminarCompra'>Ir al carrito</Link></button>
          ) :
          <ItemCount initial={1}  stock={detalles.stock} onAdd={handleOnAdd} id={detalles.id}/>
        }
        </div>
      </div>
    </div>
  )
}

