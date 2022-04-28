import '../styles/Item.css'

export const Item = ({ products }) => {
  return (
    <div className='card'>
      <div className='card-gradient'>
        <div className='text'>
          <div className='titulo'>{products.nombre}</div>
          <div>${products.precio}</div>
        </div>
      </div>
    </div>
  )
}
