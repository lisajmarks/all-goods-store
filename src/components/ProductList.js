import React from 'react'
import Product from './Product';
import { useFetch } from "react-async"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card } from 'react-bootstrap'
import "../styles/Box.css"
import { Link } from 'react-router-dom';

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
          <div className="grid">
              {
                  data.map(product =>
                    <div>
                    <Link to={`/productdetails/${product.id}`}>
                    {/* < Card.Link > */}
                    < Card style={{ width: '18rem' }}>
                        <Card.Text>{product.title}</Card.Text>
                        <Card.Img src={product.image} />
                        <Card.Text>{product.price}</Card.Text>
                    </Card>
                    {/* </Card.Link> */}
                    </Link>
                    </div>
                  )
              }
          </div>
      )
}

export default ProductList
