/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Header from "../../Layout/Header";
import AllFilterOptions from "./AllFilterWrapper";
import Pagination from "./Pagination";
import Products from "./Products";

const Home = () => {
  const [data, setData] = useState([]);
  const [shortValue, setShortValue] = useState("default");
  const [filterData, setFilterData] = useState([]);
  const [category, setCategory] = useState(null);
  const [price, setPrice] = useState(null);
  const [content, setContent] = useState(null);
  const [polygon, setPolygon] = useState(null);
  const [upload, setUpload] = useState(null);

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
  // all filtering
  const handleFilterSelect = (type, value, checked) => {
    if (type.toLowerCase() === "category") {
      setCategory(value);
    } else if (type.toLowerCase() === "price") {
      console.log("type :", type, "value :", value, "checked :", checked);
      if (checked) {
        if (price?.length && !price.includes(value)) {
          let priceData = [...price, value];
          setPrice(priceData);
        } else {
          setPrice([value]);
        }
      } else {
        let priceData = price.filter((item) => item !== value);
        setPrice(priceData);
      }
    } else if (type.toLowerCase() === "content") {
      if (checked) {
        if (content?.length && !content.includes(value.toLowerCase())) {
          let contentData = [...content, value.toLowerCase()];
          setContent(contentData);
        } else {
          setContent([value.toLowerCase()]);
        }
      } else {
        let contentData = content.filter(
          (item) => item !== value.toLowerCase()
        );
        setContent(contentData);
      }
    } else if (type.toLowerCase() === "polygon amount") {
      if (checked) {
        if (polygon?.length && !polygon.includes(value.toLowerCase())) {
          let polygonData = [...polygon, value.toLowerCase()];
          setPolygon(polygonData);
        } else {
          setPolygon([value.toLowerCase()]);
        }
      } else {
        let polygonData = polygon.filter(
          (item) => item !== value.toLowerCase()
        );
        setPolygon(polygonData);
      }
    } else if (type.toLowerCase() === "auto upload support") {
      if (checked) {
        if (upload?.length && !upload?.includes(value.toLowerCase())) {
          let uploadData = [...upload, value.toLowerCase()];
          setUpload(uploadData);
        } else {
          setUpload([value.toLowerCase()]);
        }
      } else {
        let uploadData = upload?.filter((item) => item !== value.toLowerCase());
        setUpload(uploadData);
      }
    }
  };
  console.log("content :", polygon);
  // product sorting
  const handleProductSorting = () => {
    if (shortValue === "default") {
      getData();
    } else {
      let shorting = shortValue.split(" ");
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

  useEffect(() => {
    shortValue && handleProductSorting();
    paginateCalculation();
  }, [shortValue]);

  return (
    <>
      <Header cart={cart} />

      <section className="flex flex-wrap bg-[#FAFAFA] h-[calc(100vh-10vh)]  overflow-y-auto relative">
        <div className="w-[256px] fixed top-[9vh] left-0 h-full overflow-y-auto  pb-16">
          <AllFilterOptions
            handleFilter={handleFilterSelect}
            category={category}
          />
        </div>
        <div className="w-[calc(100%-256px)]  ml-[256px]">
          <Products
            content={paginateData}
            handleAddToCart={handleAddToCart}
            handleShort={setShortValue}
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
