import { createContext, useContext, useState } from "react";

const CartContext = createContext()

export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({ children }) => {

  const [cart, setCart] = useState([])  

  function addToCart (item, quantity) {
    
    if(isInCart(item.id)){
      return setCart(
        cart.map((product) => product.id === item.id 
        ? { ...product, quantity: product.quantity + quantity }
        : { product, quantity: quantity }
        )
        )
      }
      setCart([...cart, {...item, quantity }]);
    }
    
  const isInCart = (id) => cart.some(prod => prod.id === id)

  const deleteFromCart = (producto) => {
    const newCart = [...cart]

    const productoIsInCart = isInCart(producto.id)

    if(!productoIsInCart){
      return
    }

    const deleteProduct = newCart.filter((prod) => prod.id !== producto.id)

    setCart(deleteProduct)
  }

  // console.log(cart);


  const deleteCart = () => setCart([])

  return <CartContext.Provider value={{
    cart,
    addToCart,
    deleteFromCart,
    deleteCart,
    setCart
  }}>
    {children}
  </CartContext.Provider>
    
}

export default CartContextProvider