import React from "react";
import CustomShorting from "../CustomShorting";
import SingleProduct from "./SingleProduct";

const Products = ({ content, handleAddToCart, handleProductSorting }) => {
  return (
    <>
      <div className="flex justify-between items-center px-2 py-2">
        <p className="text-[22px] font-medium">All Items</p>
        <CustomShorting handleProductSorting={handleProductSorting} />
      </div>
      <div className="flex flex-wrap">
        {content?.map((item, idx) => {
          return (
            <SingleProduct
              key={idx}
              content={item}
              handleAddToCart={handleAddToCart}
            />
          );
        })}
      </div>
    </>
  );
};

export default Products;
