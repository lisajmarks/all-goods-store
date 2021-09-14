import React from 'react'
import "../styles/Landing.css";
import { Container, Image } from 'react-bootstrap';
import shopping from '../images/shopping.png'
import 'bootstrap/dist/css/bootstrap.min.css'


const Landing = () => { 
    return (
    <Container className="landingpage"> 
        <h1>All Goods Store</h1>      
        <p>Your one stop shop for all the goods!</p>
    <Image src={shopping} fluid />

    <div className="container-fluid text-center">
        <h3>What Am I?</h3>
        <p>Lorem ipsum..</p>
    </div>

    {/* <div className="container-fluid text-center">
        <h3>Where To Find Me?</h3>
        <p>Lorem ipsum..</p>
    </div>  */}

    <footer class="container-fluid bg-4 text-center">
        <p>Online Store Copyright 2021</p>  
    </footer>
    </Container>
    )}

export default Landing; 