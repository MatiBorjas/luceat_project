import { useEffect, useState } from "react";
import { ItemList } from "./ItemList"
import { products } from "../data/products";
import '../styles/ItemListContainer.css'

function ItemListContainer() {

    const [productos, setProductos] = useState([]);

    useEffect(() => {
      const getProducts = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 1000);
    })

    getProducts.then((result) => {
      setProductos(result)
      console.log('Promesa cumplida exitosamente', result)
    })
    .catch((err) => {
      console.log('Hay habido un error')
    });

  }, [])

    return (
      <div className='products-container'>
        <ItemList productos={productos} />
      </div>  
    )
  
    
}

export default ItemListContainer