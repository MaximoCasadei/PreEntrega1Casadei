import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer'
import Provider from './context/cartContext';
import Cart from './components/cart/Cart';
import Checkout from './components/Checkout';


function App() {
  return (
    <Provider>
    <BrowserRouter>
      <NavBar/>      
      <Routes>
          <Route path="/" element={<ItemListContainer saludo="Bienvenidos a nuestra tienda!"/>}/>
          <Route path="/Categoría/:categoriaId" element={<ItemListContainer/>}/>
          <Route path="/details/:id" element={<ItemDetailContainer/>}/>
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
    </Provider>
    );
}

export default App;
