import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './container/ItemListContainer'
import ItemDetailContainer  from './container/ItemDetailContainer'
import Navbar from './components/NavBar'
import {CartFunction} from './components/CartContext'
import Cart from './components/Cart'

function App() {
  return (
    <>
      <BrowserRouter>
      <CartFunction>
        <Navbar />
          <Routes>
          <Route
            path="/"
            element={<ItemListContainer />}
          />
          <Route
            path="/category/:catId"
            element={<ItemListContainer />}
          />
          <Route path="/cart"
            element={<Cart />}          
          />                      
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          </Routes>
          </CartFunction>
      </BrowserRouter>
    </>
  );
}

export default App;
