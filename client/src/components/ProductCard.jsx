import React from "react";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
  const {product} =props;

  return (
    <>
      <Link to={`/product/details/${product._id}`}>
        <div key={product._id}>
          <img src={product.image} className='h-44 w-56' alt="foods" />
          <div className="text-center">
            <h2 className="text-lg font-bold py-2">{product.name}</h2>
            <span className="bg-gray-200 py-1 rounded-full text-sm px-4">
              {product.category}
            </span>
          </div>
          <div className="flex justify-between items-center mt-4">
            <span className="font-bold">₹{product.price}</span>
            <button
              
              className="py-1 px-4 rounded-full font-bold bg-green-400 hover:bg-green-500"
            >
              ADD
            </button>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ProductCard;
// onClick={() => handleAdd(product)}