import React from "react";

const AllFilterOptions = ({ handleFilter, category }) => {
  const allOptions = [
    {
      title: "category",
      options: [
        {
          title: "full avatar",
          subMenu: [
            { title: "human based", subMenu: ["male", "female", "unisex"] },
            { title: "animal & mythical creature based" },
            { title: "robot based" },
          ],
        },
        { title: "others", subMenu: null },
      ],
    },
    {
      title: "content",
      options: [
        {
          name: "VRChat(Quest)",
          value: "Quest",
        },
        {
          name: "VRChat(PCVR)",
          value: "PCVR",
        },
        {
          name: "Others",
          value: "Others",
        },
      ],
    },
    {
      title: "price",
      options: [
        { name: "Under $10", value: "0, 10" },
        { name: "$10 to $20", value: "10, 20" },
        { name: "$20 to $30", value: "20, 30" },
        { name: "$30 to $40", value: "30, 40" },
        { name: "$40 to $50", value: "40, 50" },
        { name: "$60 to $70", value: "60, 70" },
        { name: "$70 & above", value: "70, 1000" },
      ],
    },
    {
      title: "polygon amount",
      options: [
        { name: "Under △7,500", value: "0, 7500" },
        { name: "△7,500 to △10,000", value: "7500, 10000" },
        { name: "△10,000 to △15,000", value: "10000, 15000" },
        { name: "△15,000 to △20,000", value: "15000, 20000" },
        { name: "△20,000 to △32,000", value: "20000, 32000" },
        { name: "△32,000 to △70,000", value: "32000, 70000" },
        { name: "△70,000 & above", value: "70000, 100000000" },
      ],
    },
    {
      title: "auto upload support",
      options: [
        {
          name: "supported",
          value: "supported",
        },
        {
          name: "unsupported",
          value: "unsupported",
        },
      ],
    },
  ];
  return (
    <>
      {allOptions?.map((item, idx) => {
        return idx === 0 ? (
          <div className="py-[6px]  pl-[10px]" key={idx}>
            <p className="text-xs font-bold leading-[14.52px] py-[5px] ">
              {item?.title}
            </p>
            <ul className="pl-[10px]">
              {item?.options?.map((singleItem, index) => {
                return (
                  <>
                    <li
                      key={index}
                      className={`text-xs font-medium  cursor-pointer capitalize ${
                        singleItem?.title === category ? "underline" : ""
                      }`}
                      onClick={() =>
                        handleFilter(item?.title, singleItem?.title)
                      }
                    >
                      {singleItem?.title}
                    </li>
                    <ul
                      className={`pl-[10px]  ${
                        category === "full avatar" ||
                        category === "human based" ||
                        category === "male" ||
                        category === "female" ||
                        category === "unisex" ||
                        category === "animal & mythical creature based" ||
                        category === "robot based"
                          ? "block"
                          : "hidden"
                      }`}
                    >
                      {singleItem?.subMenu?.map((item2, index) => {
                        return (
                          <>
                            <li
                              key={index}
                              className={`text-xs font-medium cursor-pointer capitalize  ${
                                item2?.title === category ? "underline" : ""
                              }`}
                              onClick={() =>
                                handleFilter(item?.title, item2?.title)
                              }
                            >
                              {item2?.title}
                            </li>
                            <ul
                              className={`pl-[10px]  ${
                                category === "human based" ||
                                category === "male" ||
                                category === "female" ||
                                category === "unisex"
                                  ? "block "
                                  : "hidden"
                              }`}
                            >
                              {item2?.subMenu?.map((item3, index) => {
                                return (
                                  <>
                                    <li
                                      key={index}
                                      className={`text-xs font-medium cursor-pointer capitalize ${
                                        item3 === category ? "underline" : ""
                                      }`}
                                      onClick={() =>
                                        handleFilter(item?.title, item3)
                                      }
                                    >
                                      {item3}
                                    </li>
                                  </>
                                );
                              })}
                            </ul>
                          </>
                        );
                      })}
                    </ul>
                  </>
                );
              })}
            </ul>
          </div>
        ) : (
          <div className="py-[6px]  pl-[10px]" key={idx}>
            <p className="text-xs font-bold leading-[14.52px] py-[5px] capitalize">
              {item?.title}
            </p>
            <ul>
              {item?.options?.map((singleItem, index) => {
                return (
                  <li
                    className="pl-[10px] text-xs font-medium flex items-center my-[1px]"
                    key={index}
                  >
                    <input
                      id={singleItem.value}
                      onClick={(e) =>
                        handleFilter(
                          item?.title,
                          singleItem.value,
                          e.target.checked
                        )
                      }
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-blue-60 rounded   focus:ring-blue-600 ring-offset-gray-800 focus:ring-2 bg-gray-700 border-gray-600 cursor-pointer"
                    />
                    <label
                      htmlFor={singleItem.value}
                      className="ml-2 text-sm font-medium cursor-pointer capitalize"
                    >
                      {singleItem.name}
                    </label>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </>
  );
};

export default AllFilterOptions;
