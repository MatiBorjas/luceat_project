import { doc, getDoc, getFirestore } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import { ItemDetail } from './ItemDetail'

function ItemListDetailContainer() {

  const [detail, setDetail] = useState({})
  const {itemId} = useParams()

  useEffect(() => {
    // const getDetail = new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     resolve(products.find(item => item.id == itemId))
    //   },1000)
    // })
    // getDetail.then((result) => {
    //   setdetail(result)
    // })

    const db = getFirestore();
    const itemsDetail = doc(db, 'items', `${itemId}`);
    getDoc( itemsDetail ).then( snapshot => {
      if(snapshot.exists){
        setDetail(snapshot.data())
      }
    })
        // console.log(detail.stock)
    
  }, [itemId])


  return (
    <>
    <ItemDetail detalles={detail}/>
    </>
  )
}


export default ItemListDetailContainer