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
        <div>
            {
                cart.map((product) => (
                < Card style={{ width: '18rem' }}>
                    <Card.Text>{product.title}</Card.Text>
                    <Card.Img src={product.image} />
                    <Card.Text>${product.price}</Card.Text>
                    <Card.Text> Quantity: {product.quantity}</Card.Text>
                </Card>)
                )}
            <h3>Total Price: ${totalPrice} </h3>
            <CheckoutForm/>
        </div>
    );
}

export default Checkout
