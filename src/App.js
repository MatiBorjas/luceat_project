import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemListDetailContainer from './components/ItemListDetailContainer';
import CartContextProvider from './context/CartContext';
import AppContextProvider from './context/AppContext';

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
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </AppContextProvider>
  );
}

export default App;

