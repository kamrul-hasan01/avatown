import React from "react";
import { CopyIcon } from "../../../SVGIcons";
import SafeImage from "../../../SafeImage";

const SingleProduct = ({ content }) => {
  const { title, rating, price, img_url, avt_name, likes, category } = content;
  return (
    <div className="w-3/12 p-[2.5px] ">
      <div className=" bg-[#FFFFFF] rounded-[7px] px-[5px] pb-[5px]">
        <SafeImage
          src={img_url}
          customStyle="w-full rounded-[7px] cursor-pointer"
        />
        <p className="text-base font-medium leading-[19px] py-2">{title}</p>
        <p>
          <span>
            {" "}
            {rating} & {likes}likes
          </span>
          <span>Heart</span>
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
