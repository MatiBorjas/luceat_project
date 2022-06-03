import { useCartContext } from '../context/CartContext'
import bagIcon from '../img/bagIcon.png'
import '../styles/CartWidget.css'


const CartWidget = () => {

  const { cantidadCarrito } = useCartContext();

    return (
      <>
        <div>
          <img src={bagIcon} className='cart-img' />
          <span className='contador'>{ cantidadCarrito() }</span>
        </div>
      </>
    )
}

export default CartWidget