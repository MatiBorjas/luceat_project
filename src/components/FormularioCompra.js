import React, { useState } from 'react'
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useCartContext } from '../context/CartContext';
import '../styles/FormularioCompra.css';

function FormularioCompra() {

  const {cart, deleteCart} = useCartContext();

  const [user, setUser] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const saveToFirestore = async (pedidos) => {
    const db = getFirestore();
    const {id} = await addDoc(collection(db,"pedidos"), pedidos) 
  } 


  function onInputChange ({ id, value }){
    setUser({...user, [id]: value })
  }

  function onSubmit(e){
    e.preventDefault();
    let productosCompra = cart.map(e => ({ nombre: e.nombre, precio: e.precio, cantidad:e.quantity }))
    saveToFirestore({user, productosCompra})
    deleteCart();
  }

  return (
    <div className='contenedor-formulario'>
      <form onSubmit={onSubmit}>
        <fieldset className='contenedor-campos'>
          <div className='titulo-formulario'>
            <p>Datos para coordinar envio y pago</p>
          </div>
          <div className='datos-formulario'>
            <label id="name-label">Nombre y Apellido</label>
              <input id="name" type="text" placeholder="Ingresa tu nombre completo" onChange={e => onInputChange(e.target) } required/>
            <label id="phone-label">Telefono</label>
              <input id="phone" type="text" placeholder="Ingresa tu n° de telefono" onChange={e => onInputChange(e.target) }required/>
            <label id="email-label">E-mail</label>
              <input id="email" type="email" placeholder="Ingresa tu email" onChange={e => onInputChange(e.target) }required/>
            </div>
        </fieldset>
            <input type="submit" value="Enviar"/>
      </form>
    </div>
  )
}

export default FormularioCompra