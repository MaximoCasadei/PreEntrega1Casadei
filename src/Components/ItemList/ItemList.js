
import Item from "../Item/Item"
import './itemList.css'

const ItemList = ({products }) => {
  return (
    <div className="ConteinarAll">
      {products.map(prod => <Item key={prod.id} {...prod} /> )}
    </div>
  );
};

export default ItemList