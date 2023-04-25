import React from "react";
import SingleProduct from "./SingleProduct";

const Products = ({ content }) => {
  return (
    <>
      <div className="flex flex-wrap">
        {content?.map((item, idx) => {
          return <SingleProduct key={idx} content={item} />;
        })}
      </div>
    </>
  );
};

export default Products;
