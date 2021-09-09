import React, { useState } from 'react';
import Product from './Product';
import { useFetch } from "react-async"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, Button } from 'react-bootstrap'
import "../styles/Box.css"
import { useParams } from 'react-router';
//parent container for each and every product 



const ProductDetails = () => {
    // const id = 1

    const [cart, setCart] = useState([]);
    const addToCart = (product) => {
        console.log('in add to cart')
        console.log(product)
        setCart([...cart, product]);
    };
    
    // const setCart = (products) => {
    //     // set state (cart : products)
    //     // setCart([...cart, product]);
    // };

    const { id } = useParams()

    const {data, error} = useFetch(
        `https://fakestoreapi.com/products/${id}`, 
        {headers: { accept: "application/json" }, method: "GET"},
    )
    
      if (error) return error

      console.log(data)

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
