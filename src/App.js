import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProductsPage from './pages/ProductsPage';
import Cart from './pages/Cart';
import SingleProduct from './pages/SingleProduct';
import { CartContext } from './CartContext';
import { useEffect, useState } from 'react';
import { getCart, storeCart } from './helpers';

function App() {

  const [cart, setCart] = useState({});

  //Fetch cart from local storage
  useEffect(() => {
    getCart().then(cart => {
      setCart(JSON.parse(cart));
    })

  }, [])

  useEffect(() => {
    storeCart(JSON.stringify(cart))
  }, [cart]);


  return (
    <>
      <Router>
        <CartContext.Provider value={{ cart, setCart }}>
          <Navbar />
          <Routes>

            <Route path="/" element={<Home />} exact></Route>
            <Route path="/products" element={<ProductsPage />} ></Route>
            <Route path="/cart" element={<Cart />} ></Route>
            <Route path="/product/details/:id" exact element={<SingleProduct />} ></Route>

          </Routes>
        </CartContext.Provider>
      </Router>
    </>
  );
}

export default App;
