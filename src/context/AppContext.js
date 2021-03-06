import { collection, getDocs, getFirestore } from 'firebase/firestore'
import React, { createContext, useContext, useEffect, useState } from 'react'

const AppContext = createContext()

export const useAppContext = () => useContext(AppContext)

function AppContextProvider({ children}) {

  const [productos, setProductos] = useState([])

  useEffect(() => {
  
  const db = getFirestore();
    const itemsCollection = collection(db, 'items');
    getDocs(itemsCollection).then((snapshot) => {
      if(snapshot.size > 0){
        const productosData = snapshot.docs.map(d =>({'id': d.id, ...d.data()}))
        setProductos(productosData)
      }
    
  })

},[])

  
  return <AppContext.Provider value={{ productos }}>
    {children}
  </AppContext.Provider>
}

export default AppContextProvider