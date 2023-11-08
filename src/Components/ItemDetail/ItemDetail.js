import './Nav.css'
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({id, name, img, price, category, stock, description}) => {
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
        <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad agregada ', quantity)} />
      </footer>
    </div>


  )
}
export default ItemDetail;