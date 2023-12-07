import React from 'react'
import Item from './Item';
import './styles/IL.css'

const ItemList = ({items}) => {

  return (
    <div className='body'>
        {items.map(item => 
        <Item key={item.id} item={item}/>
        )}
    </div>
  )
}

export default ItemList