import React, { useState, useContext } from 'react';
import { useFetch } from "react-async"
import "../styles/ProductCards.css";
// import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, Button, Row, Col } from 'react-bootstrap'
import "../styles/Box.css"
import { useParams, useHistory } from 'react-router';
import { CartContext } from '../Contexts/CartContext';
import NumericInput from 'react-numeric-input';
// import RESPONSE from '../example-products';

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

    const {data, error} = useFetch(
        `https://fakestoreapi.com/products/${id}`, 
        {headers: { accept: "application/json" }, method: "GET"},
    )
    
      if (error) return error

      if (!data) return null

    //   const data = RESPONSE[id-1]

      return (
          <div>
              {
                <div>
                <Card className="product-details-card">
                <Row> 
                    <Col>
                    <Card.Title className='title'>{data.title}</Card.Title>
                    <Card.Img style={{ width: `75%`, margin:`10%` }} src={data.image} />
                    </Col> 
                    <Col style={{ margin:`10%` }} > 
                    <Card.Text> <h5> <b>Category:</b> {data.category} </h5></Card.Text> <br /> 
                    <Card.Text> <h5> <b>Description:</b>  {data.description} </h5></Card.Text> <br />
                    <Card.Text> <h5> $ {data.price} </h5> </Card.Text> <br />
                    </Col>
                </Row>
                <Row>
                    <Col style={{ margin: `5%`}}> 
                    Quantity: <NumericInput style={{ width: `25%`}} min={1} max={100} value={quantity} onChange={(valueAsNumber) => quantity=valueAsNumber} />
                    <br />
                    <Button style={{ width: `25%`, position: `center`, backgroundColor: `#591527` }} onClick={() => addToCart(data)}>Add To Cart</Button>
                    </Col>
                </Row>
                </Card>
                </div>
              }
          </div>
      )
}

export default ProductDetails
