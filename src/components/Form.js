import React from 'react'

export const Form = () => {
    return (
        <div>
        <form class="checkout__form">
        <h4 class="checkout__subheading">Customer information</h4>
            <label class="checkout__label" for="fisrstName">First name</label>
            <input class="checkout__input" type="text" name="firstName" placeholder="Enter your first name" required="" value="Jane" />
            <br /> 
            <label class="checkout__label" for="lastName">Last name</label>
            <input class="checkout__input" type="text" name="lastName" placeholder="Enter your last name" required="" value="Doe" />
            <br /> 
            <label class="checkout__label" for="email">Email</label>
            <input class="checkout__input" type="text" name="email" placeholder="Enter your email" required="" value="janedoe@email.com" />
            <br /> 
        <h4 class="checkout__subheading">Shipping details</h4>
            <label class="checkout__label" for="shippingName">Full name</label>
            <input class="checkout__input" type="text" name="shippingName" placeholder="Enter your shipping full name" required="" value="Jane Doe" />
            <br /> 
            <label class="checkout__label" for="shippingStreet">Street address</label>
            <input class="checkout__input" type="text" name="shippingStreet" placeholder="Enter your street address" required="" value="123 Fake St" />
            <br /> 
            <label class="checkout__label" for="shippingCity">City</label>
            <input class="checkout__input" type="text" name="shippingCity" placeholder="Enter your city" required="" value="" />
            <br /> 
            <label class="checkout__label" for="shippingPostalZipCode">Postal/Zip code</label>
            <input class="checkout__input" type="text" name="shippingPostalZipCode" placeholder="Enter your postal/zip code" required="" value="" />
            <br /> 
            <label class="checkout__label" for="shippingCountry">Country</label>
            <select name="shippingCountry" class="checkout__select">
                <option disabled="">Country</option>
                <option value="CA">Canada</option>
                <option value="MX">Mexico</option>
                <option value="US">United States</option>;
            </select>
            <br /> 
            <label class="checkout__label" for="shippingStateProvince">State/province</label>
            <select name="shippingStateProvince" class="checkout__select">
            <option class="checkout__option" disabled="">State/province</option>;
            </select>
            <br /> 
        <h4 class="checkout__subheading">Payment information</h4>
            <label class="checkout__label" for="cardNum">Credit card number</label>
            <input class="checkout__input" type="text" name="cardNum" placeholder="Enter your card number" value="4242 4242 4242 4242" />
            <br /> 
            <label class="checkout__label" for="expMonth">Expiry month</label>
            <input class="checkout__input" type="text" name="expMonth" placeholder="Card expiry month" value="11" />
            <br /> 
            <label class="checkout__label" for="expYear">Expiry year</label>
            <input class="checkout__input" type="text" name="expYear" placeholder="Card expiry year" value="2023" />
            <br /> 
            <label class="checkout__label" for="ccv">CCV</label>
            <input class="checkout__input" type="text" name="ccv" placeholder="CCV (3 digits)" value="123" />
            <br /> 

        <button class="checkout__btn-confirm">Confirm order</button>
        </form>
        </div>
    )
}

export default Form
