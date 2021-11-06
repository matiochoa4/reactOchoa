import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './container/ItemListContainer'
import ItemDetailContainer  from './container/ItemDetailContainer'
import Navbar from './components/NavBar'

function App() {
  return (
    <>
      <BrowserRouter>
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
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
