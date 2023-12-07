import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/cartContext'

const Cart = () => {

const {cart, deleteAll, deleteOne, totalCart} = useContext(CartContext)



    if (cart.length === 0) {
        return (
            <h2>
                Aún no hay productos seleccionados, volver al <Link to="/">Catálogo</Link>
            </h2>
        )
    }

  return (
    <div>
            {cart.map((prod) => (
                <div key={prod.id} className="m-5 d-flex row text-center" >
                  <div className='col-2'>
                        <img src={prod.Imagen} width="120px" height="120px" alt={prod.Nombre} />
                  </div>
                    <div className='col-3'>
                        <h2>{prod.Nombre}</h2>
                        <br />
                        <p>{prod.Descripción}</p>
                    </div> 
                    <div className='col-3'>
                        <h2>Cantidad: {prod.cantidad}</h2>
                    </div>
                    <div className='col-2'>
                        <h2>$ {prod.Precio}</h2>
                    </div>
                    <div className='col-2'>
                        <button onClick={() => deleteOne(prod.id)}>Eliminar</button>
                    </div>
                </div>
            ))}
            <div className='d-flex row m-5'>
              <div className='col-3'>
            <button onClick={deleteAll}>Eliminar todos los productos</button>
              </div>
              <div className='col-3'>
            <h3>Total: $ {totalCart()}</h3>
              </div>
            <Link to='/checkout'>Finalizar Compra</Link>
            </div>
        </div>
  )
}

export default Cart