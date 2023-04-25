import React from "react";

const AllFilterOptions = () => {
  const allOptions = [
    {
      title: "Category",
      options: [
        {
          title: "Full Avatar",
          subMenu: [
            { title: "Human based", subMenu: ["Male", "female", "Unisex"] },
            { title: "Animal & mythical creature based" },
            { title: "Robot based" },
          ],
        },
        { title: "Others", subMenu: null },
      ],
    },
    { title: "Content", options: ["VRChat(Quest)", "VRChat(PCVR)", "Others"] },
    {
      title: "Price",
      options: [
        "Under $10",
        "$10 to $20",
        "$20 to $30",
        "$30 to $40",
        "$40 to $50",
        "$60 to $60",
        "$70 & above",
      ],
    },
    {
      title: "Polygon amount",
      options: [
        "Under △7,500",
        "△7,500 to △10,000",
        "△10,000 to △15,000",
        "△15,000 to △20,000",
        "△20,000 to △32,000",
        "△32,000 to △70,000",
        "△70,000 & above",
      ],
    },
    {
      title: "Auto upload support",
      options: ["Supported", "Unsupported"],
    },
  ];
  return (
    <>
      {allOptions?.map((item, idx) => {
        return idx === 0 ? (
          <div className="py-[6px]  pl-[10px]" key={idx}>
            <p className="text-xs font-bold leading-[14.52px] py-[5px]">
              {item?.title}
            </p>
            <ul className="pl-[10px]">
              {item?.options?.map((item, index) => {
                return (
                  <>
                    <li key={index} className="text-xs font-medium">
                      {item?.title}
                    </li>
                    <ul className="pl-[10px]">
                      {item?.subMenu?.map((item, index) => {
                        return (
                          <>
                            <li key={index} className="text-xs font-medium">
                              {item?.title}
                            </li>
                            <ul className="pl-[10px]">
                              {item?.subMenu?.map((item, index) => {
                                return (
                                  <>
                                    <li
                                      key={index}
                                      className="text-xs font-medium"
                                    >
                                      {item}
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
            <p className="text-xs font-bold leading-[14.52px] py-[5px]">
              {item?.title}
            </p>
            <ul>
              {item?.options?.map((item, index) => {
                return (
                  <li
                    className="pl-[10px] text-xs font-medium flex items-center my-[1px]"
                    key={index}
                  >
                    <input
                      id={item}
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-blue-60 rounded   focus:ring-blue-600 ring-offset-gray-800 focus:ring-2 bg-gray-700 border-gray-600 cursor-pointer"
                    />
                    <label
                      htmlFor={item}
                      className="ml-2 text-sm font-medium cursor-pointer"
                    >
                      {item}
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
