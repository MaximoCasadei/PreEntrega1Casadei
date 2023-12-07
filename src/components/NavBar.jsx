import React from 'react'
import { Image, Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import './styles/NB.css'

const NavBar = () => {
  return (
    <Navbar className="navbar" bg="dark">
    <Container className="navbar">
      <Navbar.Brand className="navbar">
        <Image
          src='https://firebasestorage.googleapis.com/v0/b/react-ecomerce-5a84e.appspot.com/o/logoMate.png?alt=media&token=9ebb3050-410e-40bb-aaac-71d60a1c8f32'
          width="50"
          height="50"
          className="d-inline-block align-top"
          alt="logo" />
        
          <h3>Tienda Mi Mate</h3>
      </Navbar.Brand>
      <Nav className="mr-0">
            <Link className="links" to="/">Catálogo</Link>
            <Link className="links" to="/Categoría/Yerbas">Yerbas</Link>
            <Link className="links" to="/Categoría/Mates">Mates</Link>
            <Link className="links" to="/Categoría/Bombillas">Bombillas</Link>
            <Link className="links" to="/cart">
              <CartWidget/>
            </Link>
      </Nav>
    </Container>
  </Navbar>
  )
}

export default NavBar