import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
// import Default from './components/Default';
// import Product from './components/Product';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import { CartContext } from './Contexts/CartContext';

function App() {

  const [cart, setCart] = useState([]);

  console.log('app js cart is:')
  console.log(cart)
  return (
      <div className="App">
        <Navbar />
        {/* <Switch>  */}
        <CartContext.Provider value={{ cart, setCart }}>
            <Route path="/productdetails/:id"> 
              <ProductDetails />
            </Route>
            <Route exact path="/cart"> 
              <Cart />
            </Route> 
          </CartContext.Provider>
          <Route exact path="/allproducts">
            <ProductList />
          </Route>
          <Route exact path ="/">
            <ProductList />
          </Route> 
        {/* </Switch> */}
      </div>
  );
}

export default App;
