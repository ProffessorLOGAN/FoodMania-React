import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext";

const Navbar = () => {
  const { cart } = useContext(CartContext);
  return (
    <>
      <nav className="container mx-auto flex items-center justify-between py-4">
        <Link to="/">
          <div className="flex items-center">
            <img
              style={{ height: 45 }}
              src="https://www.clker.com/cliparts/r/u/L/I/q/1/no-background-green-md.png"
              alt="logo"
            />
            <p className="ml-2 text-xl font-bold text-green-500">Food-Mania</p>
          </div>
        </Link>

        <ul className="flex items-center font-bold text-green-400">
          <li className="hover:text-green-500">
            <Link to="/">Home</Link>
          </li>
          <li className="ml-2 hover:text-green-500">
            <Link to="/products">Products</Link>
          </li>
          <li className="ml-4 ">
            <Link to="/cart">
              <div className="flex items-center bg-green-400 py-0.5 px-3 rounded-3xl hover:bg-green-500">
                <span className="text-black font-normal">{ cart.totalItems ? cart.totalItems : 0 }</span>
                <img
                  className="h-5 ml-2 "
                  src="https://i.pinimg.com/originals/04/e9/fa/04e9faefec96d862d481efc5703d8b3f.png"
                  alt="cart"
                />
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
