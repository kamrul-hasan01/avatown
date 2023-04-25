import React from "react";
import Header from "../../Layout/Header";
import AllFilterOptions from "./AllFilterWrapper";

const Home = () => {
  return (
    <>
      <Header />
      <section>
        <div className="w-3/12">
          <AllFilterOptions />
        </div>
      </section>
    </>
  );
};

export default Home;
