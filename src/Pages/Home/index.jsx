/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Header from "../../Layout/Header";
import AllFilterOptions from "./AllFilterWrapper";
import Pagination from "./Pagination";
import Products from "./Products";

const Home = () => {
  const [data, setData] = useState([]);

  const [cart, setCart] = useState([]);

  const handleAddToCart = (item) => {
    const exist = cart.find((x) => x.id === item.id);
    if (exist) {
      setCart(
        cart.map((x) =>
          x.id === item.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCart([...cart, { ...item, qty: 1 }]);
    }
  };
  // ?pagination  info
  let ParPageData = 12;
  const [paginateData, setPaginateData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(0);
  useEffect(() => {
    //! set starting index
    setStartIndex(currentPage * ParPageData - ParPageData);
    //! set end index
    setEndIndex(startIndex + ParPageData);

    //! set current page data
    setPaginateData(data?.slice(startIndex, endIndex));
  }, [startIndex, endIndex, data, currentPage]);
  const getData = async () => {
    const response = await fetch("./data/products.json");
    const result = await response.json();

    setData(result);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Header cart={cart} />

      <section className="flex flex-wrap bg-[#FAFAFA] h-[calc(100vh-9vh)]  overflow-y-auto relative">
        <div className="w-[256px] fixed top-[9vh] left-0 h-full overflow-y-auto  pb-16">
          <AllFilterOptions />
        </div>
        <div className="w-[calc(100%-256px)]  ml-[256px]">
          <Products content={paginateData} handleAddToCart={handleAddToCart} />
          {data?.length > 10 && (
            <Pagination
              history={data}
              pageLimit={100}
              setPaginateData={setPaginateData}
              paginateData={paginateData}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
              ParPageData={ParPageData}
            />
          )}
        </div>
      </section>
    </>
  );
};

export default Home;
