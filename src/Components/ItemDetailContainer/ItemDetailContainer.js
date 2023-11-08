import ItemDetail from "../ItemDetail/ItemDetail"
import { useEffect, useState } from "react";
import { getProductById } from "../../asyncMock";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {   
  const [producto , setProducto] = useState(null)

  const { itemId } = useParams(null)

  useEffect(() => {
    getProductById(itemId)
    .then(response => {
      setProducto(response)
    })
    .catch(error => {
      console.log(error)
    })
  }, [itemId])
  
  
  return (
    <div>
      <ItemDetail {...producto} />
    </div>
  )
}

export default ItemDetailContainer