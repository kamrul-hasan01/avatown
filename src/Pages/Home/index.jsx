/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Header from "../../Layout/Header";
import AllFilterOptions from "./AllFilterWrapper";
import Pagination from "./Pagination";
import Products from "./Products";

const Home = () => {
  const [data, setData] = useState([]);
  console.log("data :", data);
  const [filterData, setFilterData] = useState([]);
  console.log("filterData :", filterData);
  const [cart, setCart] = useState([]);
  // cart add to cart
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
  // product sorting
  const handleProductSorting = (shoringValue) => {
    if (shoringValue === "default") {
      getData();
    } else {
      let shorting = shoringValue.split(" ");

      let type = shorting[0];
      let order = shorting[1];
      let shortedData = data?.sort((a, b) => {
        if (type === "price") {
          if (order === "low") {
            return a.price - b.price;
          } else {
            return b.price - a.price;
          }
        } else if (type === "polygon") {
          if (order === "low") {
            return a.polygon - b.polygon;
          } else {
            return b.polygon - a.polygon;
          }
        } else if (type === "rating") {
          if (order === "low") {
            return a.rating - b.rating;
          } else {
            return b.rating - a.rating;
          }
        }
      });
      setFilterData(shortedData);
      paginateCalculation();
    }
  };

  // ?pagination  info
  let ParPageData = 12;
  const [paginateData, setPaginateData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(0);
  const paginateCalculation = () => {
    // set starting index
    setStartIndex(currentPage * ParPageData - ParPageData);
    //  set end index
    setEndIndex(startIndex + ParPageData);

    // set current page data
    setPaginateData(filterData?.slice(startIndex, endIndex));
  };
  useEffect(() => {
    paginateCalculation();
  }, [startIndex, endIndex, data, currentPage, filterData]);
  const getData = async () => {
    const response = await fetch("./data/products.json");
    const result = await response.json();

    setData(result);
    setFilterData(result);
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
          <Products
            content={paginateData}
            handleAddToCart={handleAddToCart}
            handleProductSorting={handleProductSorting}
          />
          {filterData?.length > 10 && (
            <Pagination
              history={filterData}
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
