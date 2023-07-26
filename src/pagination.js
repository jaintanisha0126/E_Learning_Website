import React from "react";
import { useGlobalContext } from "./context";

const Pagination = () => {
  const { page, nbPages, getPrevPage, getNextPage } = useGlobalContext();
  return (
    <>
      <div className="pagination-btn">
        <buttonn onClick={() => getPrevPage()}>PREV</buttonn>
        <p>
          {page + 1} of {nbPages}
        </p>
        <buttonn onClick={() => getNextPage()}>NEXT</buttonn>
      </div>
    </>
  );
};

export default Pagination

