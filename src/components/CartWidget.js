import { useCartContext } from '../context/CartContext'
import bagIcon from '../img/bagIcon.png'
import '../styles/CartWidget.css'


const CartWidget = () => {

  const { cantidadCarrito } = useCartContext();
  console.log(cantidadCarrito());

    return (
      <>
        <div>
          <img src={bagIcon} className='cart-img' />
          <span>{ cantidadCarrito() }</span>
        </div>
      </>
    )
}

export default CartWidget