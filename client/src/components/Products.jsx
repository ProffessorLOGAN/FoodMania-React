import React from "react";
import { useState, useEffect } from "react";
import ProductCard from './ProductCard';

const Products = () => {


  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((products) => {
        setProducts(products);
      });
  }, [setProducts]);

  return (
    <div className="container mx-auto pb-24 flex ">
      <div className="flex mx-auto flex-col ">
        
        <div className="flex mx-auto grid grid-cols-5 my-8 gap-24">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;

/*
cake
pizza
pastry
cookies

*/
