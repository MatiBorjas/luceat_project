import { useEffect, useState } from "react";
import { ItemList } from "./ItemList"
import { products } from "../data/products";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import '../styles/ItemListContainer.css'

function ItemListContainer() {

  const { categoryId } = useParams();
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true)

    useEffect(() => {
  
    const db = getFirestore();
    const itemsCollection = collection(db, 'items');
    getDocs(itemsCollection).then((snapshot) => {
      setLoading(false)
      if(snapshot.size > 0){
        const productosData = snapshot.docs.map(d =>({'id': d.id, ...d.data()}))
        if (!categoryId) {
                return setProductos(productosData)
            } else {
              setProductos(productosData.filter(p => p.categoria == categoryId))
            }
      }
    })
    
  }, [categoryId])

    return (
      <div className='products-container'>
        <ItemList productos={productos} cargando={loading}/>
      </div>  
    )
  
    
}

export default ItemListContainer