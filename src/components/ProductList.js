import React from 'react'
import { useFetch } from "react-async"
import "../styles/ProductCards.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card } from 'react-bootstrap'
import "../styles/Box.css"
import { Link } from 'react-router-dom';
import RESPONSE from '../example-products';


//parent container for each and every product 

const ProductList = () => {
    // const {data, error} = useFetch(
    //     'https://fakestoreapi.com/products', 
    //     {headers: { accept: "application/json" }, method: "GET"},
    // )
    
    //   if (error) return error

    //   console.log(data)

    //   if (!data) return null

      const data = RESPONSE

      return (
          <div className="grid">
              {
                  data.map(product =>
                    <div>
                    < Card style={{ width: '18rem', padding:`2%`, margin: `5%`, textAlign: `center` }}>
                        <Card.Title className="title">{product.title}</Card.Title>
                        <Link to={`/products/${product.id}`}>
                        <Card.Img src={product.image} />
                        <Card.Text> $ {product.price}</Card.Text>
                    </Link>

                    </Card>
                    </div>
                  )
              }
          </div>
      )
}

export default ProductList
