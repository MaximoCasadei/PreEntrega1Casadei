import { useState } from "react"

const ItemCount = () => {
    const [ count , Setcount] = useState(0);
    const stock = 5;

    const onAdd = () => {
        if(count === stock){
            return;
        }
        Setcount(count + 1);
    }

    
    const onSubstract = () => {
        if(count === 0) {
            return;
        }
        Setcount(count - 1);
    }

  return (
    <div>
        <button onClick={onSubstract}>-</button>
        <span>{count}</span>
        <button onClick={onAdd}>+</button>
    </div>
  )
}

export default ItemCount