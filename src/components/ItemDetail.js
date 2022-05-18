
import { useCartContext } from '../context/CartContext';
import '../styles/ItemDetail.css';
import ItemCount from './ItemCount';

export function ItemDetail({ detalles }) {

  const { addToCart } = useCartContext();

  const handleOnAdd = (count) => {
    console.log(count);  
    addToCart(detalles, count);
  }

  return (
    <div className='contenedor-item'>
      <div className='producto'>
        <div className='elementos'>
          <h1>{detalles.nombre}</h1>
          <img src={detalles.imagen} className='imagen-producto' alt={detalles.nombre}/>
          <div className='precio'>${detalles.precio} en efectivo</div>
        </div>
        <div className='descripcion'>
          <div className='texto'>{detalles.descripcion}</div>
        </div>
        <div className='contenedorCompra'>
          <ItemCount initial={1}  stock={detalles.stock} onAdd={handleOnAdd} id={detalles.id}/>
        </div>
      </div>
    </div>
  )
}

