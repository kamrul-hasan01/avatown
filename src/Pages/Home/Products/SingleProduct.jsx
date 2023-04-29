import React, { useState } from "react";
import { CopyIcon, HeartIcon, ShoppingIcon } from "../../../SVGIcons";
import SafeImage from "../../../SafeImage";

const SingleProduct = ({ content, handleAddToCart }) => {
  const { title, rating, price, img_url, avt_name, likes, category } = content;
  const [empty, setEmpty] = useState(false);
  const handleCopyClick = () => {};

  return (
    <div className="w-full md:w-1/2 lg:w-4/12 xl:w-3/12 2xl:w-2/12 p-[2.5px] ">
      <div className=" bg-[#FFFFFF] rounded-[7px] px-[5px] pb-[5px] relative">
        <div
          className="bg-[#4C45F6] w-[80px] flex items-center  justify-evenly rounded py-1  cursor-pointer absolute right-3 top-2 "
          onClick={() => handleAddToCart(content)}
        >
          <ShoppingIcon />
          <p className="text-white  text-sm font-medium">Add</p>
        </div>
        <SafeImage src={img_url} customStyle="w-full rounded-[7px] " />
        <p className="text-base font-medium leading-[19px] py-2">{title}</p>
        <p className="flex  items-center justify-between">
          <span className="text-[#6A6A6A] text-[11px] font-medium">
            {" "}
            {rating} & {likes}likes
          </span>
          <span className="cursor-pointer" onClick={() => setEmpty(!empty)}>
            <HeartIcon fill={empty} />
          </span>
        </p>
        <div className="flex items-center  gap-x-2 py-1">
          <SafeImage
            src={img_url}
            customStyle="w-[21px] h-[21px] rounded-[50%]"
          />{" "}
          <p className="text-[10px] text-[#6A6A6A] font-medium capitalize">
            {avt_name}
          </p>
        </div>
        <p className="text-[10px] font-semibold">
          $ <span className="text-xl">{parseFloat(price).toFixed(2)}</span>
        </p>
        <p className="flex items-center py-1">
          <span className="bg-[#3CD4F5] w-[17px] h-[17px] block rounded-[50%]" />{" "}
          <span className="text-[11px] font-medium pl-2"> {category}</span>
        </p>

        <p className="flex items-end">
          <span className="text-[11px] leading-4 font-medium">
            Auto upload service ready, you can use this avatar within 24 hours.
          </span>{" "}
          <span className="cursor-pointer">
            <CopyIcon />
          </span>
        </p>
      </div>
    </div>
  );
};

export default SingleProduct;
