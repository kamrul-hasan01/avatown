import React from "react";
import SingleProduct from "./SingleProduct";

const Products = ({ content }) => {
  return (
    <>
      <div className="flex justify-between items-center px-2 py-2">
        <p className="text-[22px] font-medium">All Items</p>
        <select class=" border-[1px] border-[#6A6A6A] px-2 py-1 rounded text-xs font-medium">
          <option selected>Featured</option>
          <option value="low">Price: Low to High</option>
          <option value="high">Price: High to Low</option>
          <option value="rating">Customer Review</option>
          <option value="low">Polygon: Low to high</option>
          <option value="high">Polygon: High to Low</option>
        </select>
      </div>
      <div className="flex flex-wrap">
        {content?.map((item, idx) => {
          return <SingleProduct key={idx} content={item} />;
        })}
      </div>
    </>
  );
};

export default Products;
