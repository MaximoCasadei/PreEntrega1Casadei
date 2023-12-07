import React from 'react'
import {Card, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import './styles/item.css'

const Item = ({item}) => {
    
    const {Nombre, Precio, Imagen, Categoría, id} = item

  return (
    <Card className="Content-body" style={{ width: '20rem', height:'25em'}}>
      <Card.Img 
        variant="top" 
        src={Imagen}
        alt={Categoría}
        width={100}
        height={250}
        />
      <Card.Body className='Content-body'>
        <Card.Title>{Nombre}</Card.Title>
        <Card.Text>${Precio}</Card.Text>
        <Button  className='button-detalle'><Link className='detalle' to={`/details/${id}`}>Más info</Link></Button>
      </Card.Body>
    </Card>
  )
}

export default Item