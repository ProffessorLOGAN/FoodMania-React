import React, { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext";

const ProductCard = (props) => {
  const [isAdding, setIsAdding] = useState(false);

  const { cart, setCart } = useContext(CartContext);

  const { product } = props;

  const addToCart = (event, product) => {
    event.preventDefault();

    let _cart = { ...cart }; //{} --emptyobject

    if (!_cart.items) {
      _cart.items = {};
    }

    if (_cart.items[product._id]) {
      _cart.items[product._id] += 1;
    } else {
      _cart.items[product._id] = 1;
    }

    if (!_cart.totalItems) {
      _cart.totalItems = 0;
    }

    _cart.totalItems += 1;

    setCart(_cart);
    
    setIsAdding(true);
    setTimeout(() => {
      setIsAdding(false);
    }, 1000);

    // const cart = {
    //   items: {
    //     itemkey: 2,
    //     itemkey2: 5,
    //   },
    //   totalItems: 7,
    // };
  };

  return (
    <>
      <Link to={`/product/details/${product._id}`}>
        <div key={product._id}>
          <img src={product.image} className="h-44 w-56" alt="foods" />
          <div className="text-center">
            <h2 className="text-lg font-bold py-2">{product.name}</h2>
            <span className="bg-gray-200 py-1 rounded-full text-sm px-4">
              {product.category}
            </span>
          </div>
          <div className="flex justify-between items-center mt-4">
            <span className="font-bold">₹{product.price}</span>
            <button
              disabled={isAdding}
              onClick={(e) => addToCart(e, product)}
              className={`${
                isAdding ? "bg-yellow-400" : "bg-green-400"
              } py-1 px-4 rounded-full font-bold bg-green-400 `}
            >
              ADD{isAdding ? "ED" : ""}
            </button>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ProductCard;
// onClick={() => handleAdd(product)}
