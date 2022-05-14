import { useState } from 'react';
import '../styles/ItemDetail.css';
import ItemCount from './ItemCount';

export function ItemDetail({ detalles }) {

  const [terminar, setTerminar] = useState(false)
  
  const onAdd = (count) => {
    setTerminar(true)
    console.log(count)
  }

  return (
    <div className='contenedor-item'>
      <div className='producto'>
        <div className='elementos'>
          <h1>{detalles.nombre}</h1>
          <img src={detalles.imagen} className='imagen-producto'/>
          <div className='precio'>${detalles.precio} en efectivo</div>
        </div>
        <div className='descripcion'>
          <div className='texto'>{detalles.descripcion}</div>
        </div>
        <div className='contenedorCompra'>
          {terminar ? (
            <button className='terminarCompra'>Terminar compra</button>
            ) : 
          <ItemCount stock={detalles.stock} onAdd={onAdd} id={detalles.id}/>
          }
        </div>
      </div>
    </div>
  )
}

