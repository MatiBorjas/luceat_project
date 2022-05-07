import { Link } from 'react-router-dom'
import '../styles/Item.css'

export const Item = ({ products }) => {
  return (
    <Link to={`/productos/${products.id}`}>
      <div className='card'> 
        <img className='card-image' src={products.imagen} alt={products.name}/>
          <div className='text'>
            <div className='titulo'>{products.nombre}</div>
            <div>${products.precio}</div>
          </div>
        </div>
      </Link>
  )
}
