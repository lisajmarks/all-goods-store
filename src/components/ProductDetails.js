import React, { useState, useContext } from 'react';
import { useFetch } from "react-async"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, Button } from 'react-bootstrap'
import "../styles/Box.css"
import { useParams, useHistory } from 'react-router';
import { CartContext } from '../Contexts/CartContext';
import NumericInput from 'react-numeric-input';
import RESPONSE from '../example-products';

const ProductDetails = () => {

    let quantity = 1 
    const history = useHistory();
    const { setCart, cart } = useContext(CartContext)

    // const id = 1
    const addToCart = (product) => {
        // if product already in the cart, update quantity
        const existingProductIndex = cart.findIndex((p) => p.id === product.id)
        if (existingProductIndex !== -1) {
            const updatedCart = cart.map((p) => {
                if (p.id === product.id) {
                    p.quantity += quantity 
                }
                return p 
            })
            setCart(updatedCart)
        } else {
            const productWithQuanity = {...product, quantity}
            setCart([...cart, productWithQuanity]);
        }
        history.push('/cart')
    };

    const { id } = useParams()

    // const {data, error} = useFetch(
    //     `https://fakestoreapi.com/products/${id}`, 
    //     {headers: { accept: "application/json" }, method: "GET"},
    // )
    
    //   if (error) return error

    //   if (!data) return null

      const data = RESPONSE[id-1]

      return (
          <div>
              {
                <div>
                < Card style={{ width: '35rem' }}>
                    <Card.Text>{data.title}</Card.Text>
                    <Card.Img src={data.image} />
                    <Card.Text>{data.price}</Card.Text>
                    <Card.Text>{data.category}</Card.Text>
                    <Card.Text>{data.description}</Card.Text>
                    <NumericInput min={1} max={100} value={quantity} onChange={(valueAsNumber) => quantity=valueAsNumber} />
                    <Button onClick={() => addToCart(data)}>Add To Cart</Button>
                </Card>
                </div>
              }
          </div>
      )
}

export default ProductDetails
