import React, { useEffect, useState } from "react";
import Header from "../../Layout/Header";
import AllFilterOptions from "./AllFilterWrapper";
import Pagination from "./Pagination";
import Products from "./Products";

const Home = () => {
  const [data, setData] = useState([]);
  // ?pagination Data
  let ParPageData = 10;
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
      <Header />
      <section className="flex flex-wrap h-[calc(100vh-9vh)] overflow-y-auto relative">
        <div className="w-[256px] bg-[#FAFAFA] fixed top-[9vh] left-0 h-[100%]">
          <AllFilterOptions />
        </div>
        <div className="w-[calc(100%-256px)] bg-[#FAFAFA] ml-[256px]">
          <Products content={data} />
          <Pagination
            history={data}
            pageLimit={100}
            setPaginateData={setPaginateData}
            paginateData={paginateData}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            ParPageData={ParPageData}
          />
        </div>
      </section>
    </>
  );
};

export default Home;
