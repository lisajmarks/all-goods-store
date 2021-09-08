import React from 'react'
import Product from './Product';
import { useFetch } from "react-async"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, } from 'react-bootstrap'
import "../styles/Box.css"
import { useParams } from 'react-router';
//parent container for each and every product 


const ProductDetails = () => {
    // const id = 1
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
                    <Container>
                    <Row>
                        <Col>{data.title}</Col>
                    </Row>
                    <Row>
                        <Col>
                            <picture>
                                <img src= {data.image} />
                            </picture>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={{ order:'last'}} md={4}>
                        <Row>{data.category}</Row>
                        <Row>{data.description}</Row>
                        <Row>{data.price}</Row>
                        </Col>
                    </Row>
                    </Container>
                    </div>
              }
          </div>


        //   <div>
        //       {
        //             <div>
        //             < Card style={{ width: '35rem' }}>
        //                 <Card.Text>{data.title}</Card.Text>
        //                 <Card.Img src={data.image} />
        //                 <Card.Text>{data.price}</Card.Text>
        //                 <Card.Text>{data.category}</Card.Text>
        //                 <Card.Text>{data.description}</Card.Text>
        //             </Card>
        //             </div>
        //       }
        //   </div>
      )
}

export default ProductDetails
