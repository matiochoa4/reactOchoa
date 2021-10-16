import './App.css';
import Navbar from './components/NavBar'
import Items from './container/ItemListContainer'

function App() {
  return (
    <>
      <Navbar />
      <Items titulo="PROYECTO REACTJS"/>
      <Items titulo="e-Commerce MAJUMA"/>
    </>
  );
}

export default App;
