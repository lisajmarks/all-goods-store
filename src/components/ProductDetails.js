import React, { useState, useContext } from 'react';
import Product from './Product';
import { useFetch } from "react-async"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, Button } from 'react-bootstrap'
import "../styles/Box.css"
import { useParams } from 'react-router';
import { CartContext } from '../Contexts/CartContext';

//parent container for each and every product 



const ProductDetails = () => {
    const { setCart, cart } = useContext(CartContext)

    // const id = 1
    const addToCart = (product) => {
        setCart([...cart, product]);
        console.log('cart is...:')
        console.log(cart)
    };

    const { id } = useParams()

    const {data, error} = useFetch(
        `https://fakestoreapi.com/products/${id}`, 
        {headers: { accept: "application/json" }, method: "GET"},
    )
    
      if (error) return error

      if (!data) return null

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
                        <Button onClick={() => addToCart(data)}>Add To Cart</Button>
                    </Card>
                    </div>
              }
          </div>
      )
}

export default ProductDetails
