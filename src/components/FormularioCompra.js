import React, { useState } from 'react'
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useCartContext } from '../context/CartContext';
import '../styles/FormularioCompra.css';
import Swal from "sweetalert2"

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

  const orderConfirmation = () => {
    Swal.fire({
      title:'Pedido enviado',
      text:'Te contactamos para realizar el envio y resolver el pago',
      icon:'success',
      confirmButtonText: "Excelente!",
      confirmButtonColor: "#e78848",
      }
    )
  };

  function onSubmit(e){
    e.preventDefault();
    let productosCompra = cart.map(e => ({ nombre: e.nombre, precio: e.precio, cantidad:e.quantity }))
    saveToFirestore({user, productosCompra})
    orderConfirmation();
    deleteCart();
  }

  return (
    <div className='contenedor-formulario'>
    <form onSubmit={onSubmit}>
        <fieldset className='contenedor-campos'>
          <div className='cuerpo-formulario'>
            <div className='titulo-formulario'>
              <p>Datos para coordinar envio y pago</p>
            </div>
            <div className='datos-formulario'>
              <label id="name-label">Nombre y Apellido</label>
                <input id="name" autocomplete='off' type="text" placeholder="Ingresa tu nombre completo" onChange={e => onInputChange(e.target) } required/>
              <label id="phone-label">Telefono</label>
                <input id="phone" autocomplete='off' type="text" placeholder="Ingresa tu n° de telefono" onChange={e => onInputChange(e.target) }required/>
              <label id="email-label">E-mail</label>
                <input id="email" autocomplete='off' type="email" placeholder="Ingresa tu email" onChange={e => onInputChange(e.target) }required/>
              </div>
              <input type="submit" value="Enviar" className='btn-submit'/>
              </div>
        </fieldset>
      </form>
    </div>
  )
}

export default FormularioCompra