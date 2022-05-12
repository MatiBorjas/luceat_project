import { useEffect, useState } from "react";
import { ItemList } from "./ItemList"
import { products } from "../data/products";
import { useParams } from "react-router-dom";
import '../styles/ItemListContainer.css'

function ItemListContainer() {

  const { categoryId } = useParams();
  const [productos, setProductos] = useState([]);

    useEffect(() => {
      const getProducts = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 1000);
    })
    getProducts.then((result) => {
      if (!categoryId) {
        console.log('Promesa cumplida exitosamente', result)
        return setProductos(result)
      
    } else {
      setProductos(result.filter(p => p.categoria == categoryId))
    }
  })

    
    .catch((err) => {
      console.log('Hay habido un error')
    });
    
  }, [categoryId])

    return (
      <div className='products-container'>
        <ItemList productos={productos} />
      </div>  
    )
  
    
}

export default ItemListContainer