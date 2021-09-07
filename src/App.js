import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar'
import Cart from './components/Cart'
import Default from './components/Default'
import Product from './components/Product'
import ProductList from './components/ProductList'
import Button from 'react-bootstrap/Button'
import ProductDetails from './components/ProductDetails'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <Button>Test Button</Button>
      <Navbar></Navbar>
      <Cart></Cart>
      <Default></Default>
      <Product></Product>
      <ProductList></ProductList>
      <br />
      <br />
      <ProductDetails></ProductDetails>
    </div>
  );
}

export default App;
