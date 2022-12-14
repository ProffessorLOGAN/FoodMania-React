import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>

          <Route path="/" element={<Home />} exact></Route>
          <Route path="/products" element={<Products />} ></Route>
          <Route path="/cart" element={<Cart />} ></Route>

        </Routes>

      </Router>
    </>
  );
}

export default App;
