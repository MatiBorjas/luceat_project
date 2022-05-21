import bagIcon from '../img/bagIcon.png'
import '../styles/CartWidget.css'


const CartWidget = () => {

    return (
        <>
    <div>
        <img src={bagIcon} className='cart-img' />
    </div>
    <span>{ }</span>
    </>
    )
}

export default CartWidget