import React from 'react'
import "../styles/Landing.css";
import { Container, Image, Row } from 'react-bootstrap';
import shopping from '../images/shopping.png'
import banner from '../images/banner.png'
import 'bootstrap/dist/css/bootstrap.min.css'


const Landing = () => { 
    return (
    <div> 
        {/* <Jumbotron className="jumbo">
            <Image src={banner} style={{ display: `flex`}} />
        </Jumbotron> */}
        <Container fluid className="jumbo px-0">
            <Image src={banner} className="img-fluid"/>
        </Container> 
            <Container fluid className="landingpage px-0"> 
                <Row> 
                <Image className="shopping-img" fluid src={shopping} />
                </Row>
                <footer className="footer">
                <Row>
                        <p>Online Store Copyright 2021</p>  
                </Row>
                </footer>
        </Container>
    </div>
    )}

export default Landing; 