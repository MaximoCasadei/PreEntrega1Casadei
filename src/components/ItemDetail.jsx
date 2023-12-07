import React, { useContext, useState } from 'react'
import { Image } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { CartContext } from '../context/cartContext';
import ItemCount from './ItemCount';
import './styles/IL.css'


const ItemDetail = ({details}) => {
    const [cantidad, setCantidad] = useState(0);
    const { addToCart } = useContext(CartContext);

    const onAdd = (cantidad) => {
      setCantidad(cantidad);
      addToCart(details, cantidad);
  };

  return (
    <div className='body-2'>
        <div className='col-12 col-md-6 text-center'>
            <Image
             variant="top" 
             src={details.Imagen}
             alt={details.Categoría}
             width={600}
             height={500}
            />
        </div>
        <div className='content-data'>
        <h1>Nombre: {details.Nombre}</h1>
        <h3>Categoría: {details.Categoría}</h3>
        <h3>Precio: ${details.Precio}</h3>
        <h4>Descripción: {details.Descripción}</h4>
        <h4>Stock: {details.Stock}</h4>
        {cantidad === 0 ? (
                    <ItemCount stock={details.Stock} initial={1} onAdd={onAdd} />
                ) : (
                    <Link to="/cart" className='link'>Ir al carrito</Link>
                    )}
                    <br/>
                    <Link to="/" className='link2'>Seguir comprando</Link>
        </div>
    </div>
  )
}

export default ItemDetail