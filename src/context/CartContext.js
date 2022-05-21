import { createContext, useContext, useState } from "react";

const CartContext = createContext()

export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({ children }) => {

  const [cart, setCart] = useState([])  

  const isInCart = (id) => cart.find(prod => prod.id === id)

  function addToCart (item, quantity) {
    console.log({item, quantity});

    if(isInCart(item.id)){
      return setCart(
        cart.map((product) => product.id === item.id ?
        {...product, quantity: product.quantity + quantity}
        : product)
      )
    }
    setCart([...cart, {...item, quantity }]);
  }


  const deleteFromCart = (producto) => {
    const newCart = [...cart]

    const productoIsInCart = isInCart(producto.id)

    if(!productoIsInCart){
      return
    }

    const deleteProduct = newCart.filter((prod) => prod.id !== producto.id)

    setCart(deleteProduct)
  }

  console.log(cart);


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