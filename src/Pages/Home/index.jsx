import React, { useEffect, useState } from "react";
import Header from "../../Layout/Header";
import AllFilterOptions from "./AllFilterWrapper";
import Products from "./Products";

const Home = () => {
  const [data, setData] = useState([]);
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
      <section className="flex flex-wrap ">
        <div className="w-3/12 bg-[#FAFAFA]">
          <AllFilterOptions />
        </div>
        <div className="w-9/12 bg-[#FAFAFA]">
          <Products content={data} />
        </div>
      </section>
    </>
  );
};

export default Home;
