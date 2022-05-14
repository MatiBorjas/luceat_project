import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import { ItemDetail } from './ItemDetail'

function ItemListDetailContainer() {

  const [detail, setdetail] = useState({})
  const {itemId} = useParams()

  useEffect(() => {
    const getDetail = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products.find(item => item.id == itemId))
      },1000)
    })
    getDetail.then((result) => {
      setdetail(result)
    })
    
  }, [itemId])


  return (
    <>
    <ItemDetail detalles={detail}/>
    </>
  )
}


export default ItemListDetailContainer