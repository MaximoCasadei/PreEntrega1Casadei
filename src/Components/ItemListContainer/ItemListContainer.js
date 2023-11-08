import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList";
import './itemListConteiner.css';
import { getProducts, getProductsByCategory } from "../../asyncMock";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [products, setProducts] = useState([])
  
  const { categoryId } = useParams()

  useEffect(() => {
    const asyncFunc = categoryId ? getProductsByCategory : getProducts

    asyncFunc(categoryId)
    .then(response => {
      setProducts(response)
    })
    .catch(error => {
      console.log(error)
    })
  }, [categoryId])
  
  
  return (
    <div>
      <ItemList products={products}/>
    </div>
  )
}

export default ItemListContainer