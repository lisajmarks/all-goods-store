import React, { useContext} from 'react'
import { CartContext } from '../Contexts/CartContext';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'


const Cart = () => {
    const { cart, setCart } = useContext(CartContext)
    let totalItems = 0

    const deleteItem = (product) => {
        console.log(cart)
        const updatedCart = cart.filter(p => {
            return p.id !== product.id
        })
        setCart(updatedCart)
        console.log(updatedCart)
    }
    

    cart.map(p => totalItems += p.quantity)
    const history = useHistory();

    return (
        <div>
              {
               cart.map(product => 
                <div className="e-card e-card-horizontal" style={{ width: `400px`, padding:`1%` }}>
                < Card style={{ margin: `1%`, display: `flex`, flexDirection: `row`, justifyContent: `center` }}>
                    <Card.Img src={product.image} style={{ height: `300px` }}/>
                    <div className="e-card-stacked">
                    <Card.Text>{product.title}</Card.Text>
                    <Card.Text>$ {product.price}</Card.Text>
                    <Card.Text> Quantity: {product.quantity}</Card.Text>
                    <Button onClick={() => deleteItem(product)}> Delete Item </Button>
                    </div>
                </Card>
                </div>
                ) 
              }
            <Button onClick={() => history.push('/checkout')}> Check Out </Button>
            <Button onClick={() => history.push('/products')}> Add More Items</Button>
        </div>
    );
}

export default Cart
