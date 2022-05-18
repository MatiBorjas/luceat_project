import { Item } from "./Item";
import '../styles/ItemList.css'

export const ItemList = ({ productos, cargando }) => {

  return (
    <>
    {cargando ? 'Cargando...' :
    <div className='cards'> {productos.map(prod => 
      <Item key={prod.id} products={prod}/>
      )}
    </div>
    }
    </>
  )
}
