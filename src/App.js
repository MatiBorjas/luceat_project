import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemListDetailContainer from './components/ItemListDetailContainer';
import CartContextProvider from './context/CartContext';
import AppContextProvider from './context/AppContext';
import CartList from './components/CartList';
import FormularioCompra from './components/FormularioCompra';

function App() {
  return (
    <AppContextProvider>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/productos' element={<ItemListContainer />} />
            <Route path='/productos/:itemId' element={<ItemListDetailContainer />}></Route>
            <Route path='/categoria/:categoryId' element={<ItemListContainer />}></Route>
            <Route path='/carrito' element={<CartList/>} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </AppContextProvider>
  );
}

export default App;

