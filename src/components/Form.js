import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { CartContext } from '../Contexts/CartContext';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Form, Button } from 'react-bootstrap'


export const CheckoutForm = () => {
    const history = useHistory();
    const { setCart } = useContext(CartContext)

    const submitClick = () => {
        console.log('LOGGING')
        setCart([]) 
        history.push("")

    }

    return (
        <div> 
            <Form>
                <Form.Group>
                    <Form.Label> First Name </Form.Label>
                    <Form.Control type="text" placeholder="First Name" /> 
                </Form.Group>
                <Form.Group>
                    <Form.Label> Last Name </Form.Label>
                    <Form.Control type="text" placeholder="Last Name" /> 
                </Form.Group>
                <Form.Group>
                    <Form.Label> Shipping Address </Form.Label>
                    <Form.Control type="text" placeholder="Street Address" /> 
                    <Form.Control type="text" placeholder="City" /> 
                    <Form.Control type="text" placeholder="Postal/Zip Code" /> 
                    <Form.Control type="text" placeholder="State/Providence" /> 
                </Form.Group>
                <Form.Group>
                    <Form.Label> Billing Address </Form.Label>
                    <Form.Control type="text" placeholder="Street Address" /> 
                    <Form.Control type="text" placeholder="City" /> 
                    <Form.Control type="text" placeholder="State/Providence" /> 
                    <Form.Control type="text" placeholder="Postal/Zip Code" /> 
                </Form.Group>
                <Form.Group>
                    <Form.Label> Payment Information </Form.Label>
                    Credit Card Number
                    <Form.Control type="number" placeholder="5555 5555 5555 5555"/>
                    Expiry Month
                    <Form.Control type="number" placeholder="11"/>
                    Expiry Year
                    <Form.Control type="number" placeholder="2055"/>
                    CCV
                    <Form.Control type="number" placeholder="123"/>
                </Form.Group>
                <Form.Group>
                    <Button onClick={submitClick} style={{backgroundColor: `#591527`, marginTop:`2%`}}>Confirm order</Button>
                </Form.Group>
            </Form>
        </div>
    )
}

export default CheckoutForm
