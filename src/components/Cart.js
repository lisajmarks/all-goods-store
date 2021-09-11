import React, { useContext} from 'react'
import { CartContext } from '../Contexts/CartContext';


const Cart = () => {
    const { cart } = useContext(CartContext)
    console.log(cart)

    return (
        <div>
            <h1>Hello from Cart</h1>
            <h1>{cart}</h1>
            <button>Go to Cart ({cart.length})</button>
        </div>
    );
}

export default Cart
