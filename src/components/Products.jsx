import React from "react";
import ProductCard from "./ProductCard";
import { useState, useEffect } from "react";
// import Carousel from "./Carousel";

const Products = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/products")
      .then((response) => response.json())
      .then((products) => {
        // console.log(products);
        setProducts(products);
      });
  },[]);

  return (
    
    <div className="container mx-auto pb-24 flex ">
      <div className="flex mx-auto flex-col ">
        <h1 className="text-lg font-bold my-8">Products</h1>
        {/* <Carousel /> */}
        <div className="flex mx-auto grid grid-cols-5 my-8 gap-24">
          {
            products.map(product => <ProductCard key={product._id} product={product} />)
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
