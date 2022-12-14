import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>

          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />} ></Route>

        </Routes>

      </Router>
    </>
  );
}

export default App;
