import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartProvider from './context/CartContext';
import Cart from './components/Cart/Cart';


function App() {

  return (
    <>
    <BrowserRouter>
    
        <CartProvider>
        
        <NavBar />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalogo" element={<ItemListContainer />} />
          <Route path="/categoria/:categoria" element={<ItemListContainer />} />
          <Route path="/catalogo/:detalle" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>



        </CartProvider>
    </BrowserRouter>
    </>
  );
}

export default App;

