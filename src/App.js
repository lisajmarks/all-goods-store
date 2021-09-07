import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import Default from './components/Default';
import Product from './components/Product';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch> 
          <Route exact path ="/">
            <ProductList />
          </Route> 
          <Route exact path="/allproducts">
            <ProductList />
          </Route>
          <Route exact path="/productdetails"> 
            <ProductDetails />
          </Route> 
          <Route exact path="cart"> 
            <Cart />
          </Route> 

        </Switch>
      </div>
    </Router>
  );
}

export default App;
