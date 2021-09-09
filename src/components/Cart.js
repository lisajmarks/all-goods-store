import React, {useState} from 'react'

const Cart = () => {
    const [cart, setCart] = useState([]);
    console.log(cart)
    const addToCart = (product) => {
    setCart([...cart, product]);
    };

    return (
        <div>
            <h1>Hello from Cart</h1>
            <button>Go to Cart ({cart.length})</button>
        </div>
    );
}

export default Cart
