import { Link } from 'react-router-dom';
import './style.css';

const Item = ({id, name, img, price, stock, description}) => {
  return (
    <article className='CardConteiner'>
      <header>
        <h2>{name}</h2>
      </header>

      <div>
        <img src={img} alt={name} className='imagenes'/>
      </div>

      <section>
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

      <footer>
        <Link to={`/item/${id}`}>Ver detalle</Link>
      </footer>
    </article>


  )
}

export default Item;