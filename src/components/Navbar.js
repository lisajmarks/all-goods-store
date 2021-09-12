import React, { useContext } from 'react'
import * as ReactBootStrap from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import { CartContext } from '../Contexts/CartContext';
import { Link } from 'react-router-dom';



const Navbar = () => {
  const { cart } = useContext(CartContext)
  let totalItems = 0
  cart.map(p => totalItems += p.quantity)

    return (

<ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="light" variant="light">
  <ReactBootStrap.Container>
  <ReactBootStrap.Navbar.Brand href="/">All Goods</ReactBootStrap.Navbar.Brand>
  <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
    <ReactBootStrap.Nav className="me-auto">
      <ReactBootStrap.NavLink as={Link} to="/products">Products</ReactBootStrap.NavLink>
      <ReactBootStrap.NavLink as={Link} to="/cart">Cart ({totalItems})</ReactBootStrap.NavLink>
    </ReactBootStrap.Nav>
  </ReactBootStrap.Navbar.Collapse>
  </ReactBootStrap.Container>
</ReactBootStrap.Navbar>

    )
}

export default Navbar
