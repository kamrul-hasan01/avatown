import React from "react";

const CustomShorting = ({ handleProductSorting }) => {
  return (
    <select
      onChange={(e) => handleProductSorting(e.target.value)}
      className=" border-[1px] border-[#6A6A6A] px-2 py-1 rounded text-xs font-medium"
    >
      <option value="default" selected>
        Featured
      </option>
      <option value="price low">Price: Low to High</option>
      <option value="price high">Price: High to Low</option>
      <option value="rating high">Customer Review</option>
      <option value="polygon low">Polygon: Low to high</option>
      <option value="polygon high">Polygon: High to Low</option>
    </select>
  );
};

export default CustomShorting;
