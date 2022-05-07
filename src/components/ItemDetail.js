import '../styles/ItemDetail.css';

export function ItemDetail({ detalles }) {


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
      </div>
    </div>
  )
}

