import React from 'react'
import * as ReactBootStrap from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
// import { BrowserRouter as Link } from 'react-router-dom';


const Navbar = () => {
    return (

<ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="light" variant="light">
  <ReactBootStrap.Container>
  <ReactBootStrap.Navbar.Brand href="/">All Goods</ReactBootStrap.Navbar.Brand>
  <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
    <ReactBootStrap.Nav className="me-auto">
      <ReactBootStrap.Nav.Link href="/allproducts">Products</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href="/cart">Cart</ReactBootStrap.Nav.Link>
    </ReactBootStrap.Nav>
  </ReactBootStrap.Navbar.Collapse>
  </ReactBootStrap.Container>
</ReactBootStrap.Navbar>

    )
}

export default Navbar
