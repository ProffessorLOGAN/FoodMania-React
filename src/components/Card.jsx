import React from "react";

const Card = () => {
  return (
    <>
      <div>
        <img src="/images/foods.png" alt="foods" />
        <div className="text-center">
          <h2 className="text-lg font-bold py-2">Strawberry Cake</h2>
          <span className="bg-gray-200 py-1 rounded-full text-sm px-4">
            Cake
          </span>
        </div>
        <div className="flex justify-between items-center mt-4">
          <span className="font-bold">$50</span>
          <button className="py-1 px-4 rounded-full font-bold bg-green-400 hover:bg-green-500">
            ADD
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
