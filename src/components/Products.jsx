import React from "react";
import Card from "./Card";
// import Carousel from "./Carousel";

const Products = () => {
  return (
    <div className="container mx-auto pb-24 flex ">
      <div className="flex mx-auto flex-col ">
        <h1 className="text-lg font-bold my-8">Products</h1>
        {/* <Carousel /> */}
        <div className="flex mx-auto grid grid-cols-5 my-8 gap-24">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
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
