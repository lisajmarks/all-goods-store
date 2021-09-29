import React, { useContext} from 'react'
import { CartContext } from '../Contexts/CartContext';
import "../styles/ProductCards.css";
// import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, Button, Grid, Container, Row, Col } from 'react-bootstrap';
import { CheckoutForm } from './Form'; 
// import styled from 'styled-components';


const Checkout = () => {
    const { cart } = useContext(CartContext)
    // reduce counts total in array 
    const totalPrice = cart.reduce((total, product) => {
        return total + (product.price * product.quantity)
    }, 0).toFixed(2)

    return (
        <div style={{ padding: `5%` }}>
            <div className="grid">
                <Col md={8}> {
                cart.map((product) => (
                <Card style={{marginTop: `3%`, borderColor: `#591527`}}>
                    <Card.Title className="title">{product.title}</Card.Title>
                    <div style={{ display: `flex`, justifyContent: `space-around`}}>
                    <Card.Img className="image" src={product.image} />
                    <div className="e-card-stacked">
                    <Card.Text><h4>${product.price}</h4></Card.Text>
                    <Card.Text><h4> Quantity: {product.quantity} </h4></Card.Text>
                    </div> 
                    </div>
                </Card>)
                )} 
                </Col>
                <Col md={4} style={{ display: `flex`, justifyContent: `space-around`}}> 
            <h3>Total Price: ${totalPrice} </h3>
                </Col> 
            </div>
            <div>
            <Row> 
                <div className="checkout-form"> 
                    <CheckoutForm/>
                </div> 
            </Row> 
            </div>
        </div>
    );
}

export default Checkout
