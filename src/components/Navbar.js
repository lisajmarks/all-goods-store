import React, { useContext } from 'react'
import "../styles/Landing.css";
import * as ReactBootStrap from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css'
import { CartContext } from '../Contexts/CartContext';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { cart } = useContext(CartContext)
  let totalItems = 0
  cart.map(p => totalItems += p.quantity)

    return (
<div className="navbar-custom" >
<ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="transparent">
  <ReactBootStrap.Container>
  <ReactBootStrap.Navbar.Brand href="/all-goods-store">All Goods Store</ReactBootStrap.Navbar.Brand>
  <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <ReactBootStrap.Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
    <ReactBootStrap.Nav>
      <ReactBootStrap.NavLink as={Link} to="/products">Products</ReactBootStrap.NavLink>
        <ReactBootStrap.NavLink as={Link} to="/cart"> Cart ({totalItems})</ReactBootStrap.NavLink>
    </ReactBootStrap.Nav>
  </ReactBootStrap.Navbar.Collapse>
  </ReactBootStrap.Container>
</ReactBootStrap.Navbar>
</div>
    )
}

export default Navbar
