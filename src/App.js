import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
// import Default from './components/Default';
// import Product from './components/Product';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {

  return (
      <div className="App">
        <Navbar />
        <Switch> 
          <Route exact path ="/">
            <ProductList />
          </Route> 
          <Route exact path="/allproducts">
            <ProductList />
          </Route>
          <Route path="/productdetails/:id"> 
            <ProductDetails />
          </Route>
          <Route exact path="/cart"> 
            <Cart />
          </Route> 
        </Switch>
      </div>
  );
}

export default App;
