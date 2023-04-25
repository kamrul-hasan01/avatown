import React, { useEffect, useState } from "react";
import { LeftAngleIcon, RightAngleIcon } from "../../../SVGIcons";

const Pagination = ({
  pageLimit,
  history,
  ParPageData,
  currentPage,
  setCurrentPage,
}) => {
  const [paginationArr, setPaginationArr] = useState([]);

  let totalPage = Math.ceil(history.length / ParPageData);
  //handle next page
  function goToNextPage() {
    if (currentPage < totalPage) {
      setCurrentPage(currentPage + 1);
    }
  }

  //handle previous page
  function goToPreviousPage() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  // change page number
  function changePage(event) {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  }

  // create arrays of data for pagination
  const getPaginationGroup = () => {
    if (totalPage < pageLimit) {
      pageLimit = Math.ceil(history.length / ParPageData);
    }

    let start;
    if (currentPage >= totalPage) {
      start = 0;
      //   dispatch(updatePageNumber(1));
    } else {
      start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    }

    return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
  };

  useEffect(() => {
    setPaginationArr(getPaginationGroup());
  }, [totalPage, history]);

  return (
    <div className="container !px-4 lg:!px-12 ">
      <div className="pagination">
        {/* go to previous page button */}
        <button
          onClick={goToPreviousPage}
          className={`btn ${currentPage == 1 && "!cursor-not-allowed"}`}
        >
          <LeftAngleIcon />
        </button>
        {/* go to previous page button */}

        {/* pagination number array */}
        {paginationArr.map((item, index) => (
          <button
            key={index}
            onClick={changePage}
            className={`btn ${
              currentPage == item && "!bg-[purple] !text-white"
            }`}
          >
            <span>{item}</span>
          </button>
        ))}
        {/* pagination number array */}

        {/* go to next page button */}
        <button
          onClick={goToNextPage}
          className={`btn ${currentPage == totalPage && "!cursor-not-allowed"}`}
        >
          <RightAngleIcon />
        </button>
        {/* go to next page button */}
      </div>
    </div>
  );
};

export default Pagination;
