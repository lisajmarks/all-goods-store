import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar'
import Cart from './components/Cart'
import Default from './components/Default'
import Product from './components/Product'
import ProductList from './components/ProductList'


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Cart></Cart>
      <Default></Default>
      <Product></Product>
      <ProductList></ProductList>
    </div>
  );
}

export default App;
