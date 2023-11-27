import NavBar from './Components/NavBar/NavBar';
import './App.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemCount from './Components/ItemCount/ItemCount';
import Cart from './Components/Cart/Cart';
import CartProvider from './context/CartProvider';
import ThemeProvider from './context/ThemeProvider';

function App() {

  return (
    <BrowserRouter>
      <ThemeProvider>
        <CartProvider>
          <NavBar/>
            <Routes>
              <Route path='/' element={<ItemListContainer/>}/>
              <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
              <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
              <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
              <Route  path='/cart' element={<Cart />} />
            </Routes> 
        </CartProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
