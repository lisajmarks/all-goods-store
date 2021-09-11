import React, { useContext} from 'react'
import { CartContext } from '../Contexts/CartContext';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, Button } from 'react-bootstrap'


const Cart = () => {
    const { cart } = useContext(CartContext)
    let totalItems = 0
    cart.map(p => totalItems += p.quantity)

    return (
        <div>
              {
               cart.map(product => 
                < Card style={{ width: '18rem' }}>
                    <Card.Text>{product.title}</Card.Text>
                    <Card.Img src={product.image} />
                    <Card.Text>{product.price}</Card.Text>\
                </Card>
                ) 

              }
            <button>Cart Items ({totalItems})</button>
        </div>
    );
}

export default Cart
