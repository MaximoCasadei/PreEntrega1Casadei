import './Nav.css'
import ItemCount from '../ItemCount/ItemCount';
import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';

const ItemDetail = ({id, name, img, price, category, stock, description}) => {

const navigate = useNavigate();
const { addItem } = useContext(CartContext)

const addToCart = () => {
  addItem(itemSelected, count)
};

const handleNavigation = () => {
  navigate('/cart');
};

  return (
    <div className='Article'>
      <header>
        <h2>{name}</h2>
      </header>

      <div>
        <img src={img} alt={name} className='imagen' />
      </div>

      <section className='seccion'>
        <p>
          Categoria: {category}
        </p>
        <p>
          Descripcion: {description}
        </p>
        <p>
          Stock: {stock}
        </p>
        <p>
          Precio: ${price}
        </p>
      </section>

      <footer className='footer'>
        <button onClick={handleNavigation}>Terminar Compra</button>
        <button onClick={addToCart}>Agregar al carrito</button>
        <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad agregada ', quantity)} />
      </footer>
    </div>


  )
}
export default ItemDetail;