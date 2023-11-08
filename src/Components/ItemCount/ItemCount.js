import { useState } from "react"
import './itemcount.css'

const ItemCount = ({stock, initial, onAdd}) => {
    const [ quantity , setQuantity] = useState(initial);

    const increment = () => {
        if(quantity < stock){
            setQuantity(quantity + 1)
        }
    }

    const decrement = () => {
        if(quantity > 1){
            setQuantity(quantity - 1)
        }
    }

  return (
    <div className="footer">
        <div>
            <button onClick={decrement}>-</button>
            <span>{quantity}</span>
            <button onClick={increment}>+</button>
        </div>

        <div>
            <button onClick={() => onAdd(quantity)} disabled={!stock}>
                Agregar al Carrito
            </button>
        </div>
    </div>
  )
}

export default ItemCount