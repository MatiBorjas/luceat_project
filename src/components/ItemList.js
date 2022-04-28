import { useState, useEffect } from "react"
import { products } from "../data/products";
import { Item } from "./Item";
import '../styles/ItemList.css'

export const ItemList = () => {

  const [producto, setProducto] = useState([]);

  useEffect(() => {
    const getProducts = new Promise ((resolve, reject) => {
      setTimeout (() => {resolve(products)}, 2000)
    })

    getProducts.then((result) => {
      setProducto(result)
      console.log('Promesa cumplida exitosamente', result)
    })
      .catch((err) => {console.log ('Hubo un error')})
  
  }, [])

  return (
    <div className='cards'>{producto.map(prod => <Item key={prod.id} products={prod}/>)}</div>
  )
}