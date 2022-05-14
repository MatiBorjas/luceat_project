import React, { createContext, useContext, useEffect, useState } from 'react'
import { products } from '../data/products'

const AppContext = createContext()

export const useAppContext = () => useContext(AppContext)

function AppContextProvider({ children}) {

  const [productos, setProductos] = useState([])

  useEffect(() => {
    const getProducts = new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve(products)
      }, 1000);
  })
  getProducts.then((result) => setProductos(result))
    
  })
  
  return <AppContext.Provider value={{ productos }}>
    {children}
  </AppContext.Provider>
}

export default AppContextProvider