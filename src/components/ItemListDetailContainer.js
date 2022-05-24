import { doc, getDoc, getFirestore } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import { ItemDetail } from './ItemDetail'

function ItemListDetailContainer() {

  const [detail, setDetail] = useState({})
  const {itemId} = useParams()

  useEffect(() => {

    const db = getFirestore();
    const itemsDetail = doc(db, 'items', `${itemId}`);
    getDoc( itemsDetail ).then( snapshot => {
      if(snapshot.exists){
        const productDetail = {...snapshot.data(), 'id': itemId}
        setDetail(productDetail)
      }
    })

    
  }, [itemId])


  return (
    <>
    <ItemDetail detalles={detail}/>
    </>
  )
}

export default ItemListDetailContainer