import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/productSlice";
import { STATUSES } from "../store/productSlice";
import { Link } from "react-router-dom";
import { add } from "../store/cartSlice";

const Products = () => {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
  },[dispatch]);

  const handleAdd = (product) => {
    dispatch(add(product));
  };


  if (status === STATUSES.LOADING) {
    return <h2>Loading ...</h2>;
  }

  if (status === STATUSES.ERROR) {
    return <h2>Something went wrong !!</h2>;
  }

  return (
    <div className="container mx-auto pb-24 flex ">
      <div className="flex mx-auto flex-col ">
        <h1 className="text-lg font-bold my-8">Products</h1>
        <div className="flex mx-auto grid grid-cols-5 my-8 gap-24">
          {
            // products.map(product => <ProductCard key={product._id} product={product} />)
            products.map((product) => (
              <div key={product._id}>
                  <Link to={`/product/details/${product._id}`}>
                  <img src={product.image} alt="foods" />
                  <div className="text-center">
                    <h2 className="text-lg font-bold py-2">{product.name}</h2>
                    <span className="bg-gray-200 py-1 rounded-full text-sm px-4">
                      {product.category}
                    </span>
                  </div>
                  </Link>
                  <div className="flex justify-between items-center mt-4">
                    <span className="font-bold">₹{product.price}</span>
                    <button
                      onClick={() => handleAdd(product)}
                      className="py-1 px-4 rounded-full font-bold bg-green-400 hover:bg-green-500"
                    >
                      ADD
                    </button>
                  </div>
                </div>
              
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Products;

/*
cake
cold drinks
pizza
ice cream
pastry

*/
