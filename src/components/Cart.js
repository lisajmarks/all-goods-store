import React, { useContext} from 'react'
import { CartContext } from '../Contexts/CartContext';
import "../styles/ProductCards.css";
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
    
    const totalPrice = cart.reduce((total, product) => {
        return total + (product.price * product.quantity)
    }, 0).toFixed(2)

    cart.map(p => totalItems += p.quantity)
    const history = useHistory();

    return (
        <div className="product-card">
              {

                cart.map(product => 
                    <div className="e-card-cart">
                    <Card style={{ borderColor: `#591527`}}> 
                        <Card.Title className="title">{product.title}</Card.Title>
                        <div style={{ display: `flex`, justifyContent: `space-around`}}>
                        {/* <Card className="cardBody"> */}
                        <Card.Img className="image" src={product.image} />
                        <div className="e-card-stacked">
                        <Card.Text>$ {product.price}</Card.Text>
                        <Card.Text> Quantity: {product.quantity}</Card.Text>
                        <Button onClick={() => deleteItem(product)} style={{backgroundColor: `#591527`}}> Delete Item </Button>
                        </div>
                        </div>
                    </Card>
                </div>
                ) 
              }
            <h4>Total Price: ${totalPrice} </h4>
            <Button onClick={() => history.push('/products')} style={{ margin: `1%`, backgroundColor: `#591527`}}> Add More Items</Button>
            <Button onClick={() => history.push('/checkout')} style={{ margin: `1%`, backgroundColor: `#591527`}}> Check Out </Button>
        </div>
    );
}

export default Cart
