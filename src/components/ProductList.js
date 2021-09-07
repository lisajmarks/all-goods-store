import React from 'react'
import Product from './Product';
import { useFetch } from "react-async"
import ProductCard from './Cards';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card } from 'react-bootstrap'

//parent container for each and every product 


const ProductList = () => {
    const {data, error} = useFetch(
        'https://fakestoreapi.com/products', 
        {headers: { accept: "application/json" }, method: "GET"},
    )
    
      if (error) return error

      console.log(data)

      if (!data) return null

      return (
          <div>
              {
                  data.map(product =>
                    < Card style={{ width: '18rem' }}>
                        <Card.Text>{product.title}</Card.Text>
                        <Card.Img src={product.image} />
                        <Card.Text>{product.price}</Card.Text>
                    </Card>
                  )
              }
          </div>
      )
}

export default ProductList
