
// import RESPONSE from '/example-products';

export const getAllProducts = 
fetch('https://fakestoreapi.com/carts')
.then(res=>res.json())
.then(json=>console.log(json))


export const getAllProducts = RESPONSE