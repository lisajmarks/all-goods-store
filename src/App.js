import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
// import Default from './components/Default';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import Checkout from './components/Checkout'; 
import Landing from './components/Landing';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import { CartContext } from './Contexts/CartContext';

function App() {

  const [cart, setCart] = useState([]);

  console.log('app js cart is:')
  console.log(cart)
  return (
      <div className="App">
        <CartContext.Provider value={{ cart, setCart }}>
        <Navbar />
          <Route path="/products/:id"> 
            <ProductDetails />
          </Route>
          <Route expact path="/checkout"> 
            <Checkout />
          </Route>
          <Route exact path="/cart"> 
            <Cart />
          </Route> 
        </CartContext.Provider>
        <Route exact path="/products">
          <ProductList />
        </Route>
        <Route exact path ="/all-goods-store">
          <Landing />
        </Route> 
      </div>
  );
}

export default App;
