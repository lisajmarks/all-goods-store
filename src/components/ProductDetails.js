import React from 'react'
import Product from './Product';
import { useFetch } from "react-async"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card } from 'react-bootstrap'
import "../styles/Box.css"
//parent container for each and every product 


const ProductDetails = () => {
    const id = 1
    
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
                    </Card>
                    </div>
              }
          </div>
      )
}

export default ProductDetails
