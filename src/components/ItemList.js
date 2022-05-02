import { Item } from "./Item";
import '../styles/ItemList.css'

export const ItemList = ({ productos }) => {

  return (
    <div className='cards'> {productos.map(prod => 
      <Item key={prod.id} products={prod}/>
      )}
    </div>
  )
}
