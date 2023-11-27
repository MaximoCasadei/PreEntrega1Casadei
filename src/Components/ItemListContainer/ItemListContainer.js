import { useState, useEffect, useContext } from "react"
import ItemList from "../ItemList/ItemList";
import './itemListConteiner.css';
import { getProducts, getProductsByCategory } from "../../asyncMock";
import { useParams } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";

const ItemListContainer = () => {
  const ColorTheme = useContext(ThemeContext);
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
    <div style={{backgroundColor: ColorTheme.theme === 'light' ? 'white' : 'black'}}>
      <ItemList products={products}/>
    </div>
  )
}

export default ItemListContainer