import React from "react";
import SearchError from "../SearchError/SearchError";
import Product from "../MainProduct/Product";
import "../ShopList/ShopList.css";

function ShopList() {
  return (
    <div className="shop__list__flex">
      <div className="shop__list">
        {/* <상품리스트> */}
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>

    /* 검색결과 없을떄 */
    /* <SearchError /> */
  );
}

export default ShopList;
