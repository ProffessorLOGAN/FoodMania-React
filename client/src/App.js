import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProductsPage from './pages/ProductsPage';
import Cart from './pages/Cart';
import SingleProduct from './pages/SingleProduct';

function App() {
  return (
    <>
        <Router>
          <Navbar />
          <Routes>

            <Route path="/" element={<Home />} exact></Route>
            <Route path="/products" element={<ProductsPage />} ></Route>
            <Route path="/cart" element={<Cart />} ></Route>
            <Route path="/product/details/:id" exact element={<SingleProduct />} ></Route>

          </Routes>

        </Router>
    </>
  );
}

export default App;
