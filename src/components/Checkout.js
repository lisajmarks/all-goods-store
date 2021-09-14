import React, { useContext} from 'react'
import { CartContext } from '../Contexts/CartContext';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, Button, Grid, Container, Row, Col } from 'react-bootstrap';
import { CheckoutForm } from './Form'; 
// import styled from 'styled-components';


const Checkout = () => {
    const { cart } = useContext(CartContext)

    const totalPrice = cart.reduce((total, product) => {
        return total + (product.price * product.quantity)
    }, 0)

    return (
        <div className="product-card">
                <Col md={8}> {
                cart.map((product) => (
                <Card>
                    <Card.Title className="title">{product.title}</Card.Title>
                    <Card.Img className="image" src={product.image} />
                    <div className="e-card-stacked">
                    <Card.Text>${product.price}</Card.Text>
                    <Card.Text> Quantity: {product.quantity}</Card.Text>
                    </div> 
                </Card>)
                )} 
                </Col>
                <Col md={4}> 
            <h3>Total Price: ${totalPrice} </h3>
                </Col> 
            <Row>
                <div class = "p-5"> 
                    <CheckoutForm/>
                </div> 
            </Row> 
        </div>
    );
}

export default Checkout
