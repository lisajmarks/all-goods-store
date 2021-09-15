import React from 'react'
import "../styles/Landing.css";
import { Container, Image, Jumbotron, Row } from 'react-bootstrap';
import shopping from '../images/shopping.png'
import banner from '../images/banner.png'
import 'bootstrap/dist/css/bootstrap.min.css'


const Landing = () => { 
    return (
    <div> 
        <Jumbotron className="jumbo">
            <Image src={banner} />
        </Jumbotron>
            <Container className="landingpage"> 
                <Row> 
                <Image className="shopping-img" fluid src={shopping} />
                </Row>
                <footer>
                <Row>
                        <p>Online Store Copyright 2021</p>  
                </Row>
                </footer>

    </Container>
    </div>
    )}

export default Landing; 