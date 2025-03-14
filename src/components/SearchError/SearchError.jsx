import React from "react";
import searchError from "../../images/Img_search_null.png";
import "../SearchError/SearchError.css";

function SearchError() {
  return (
    <div>
      <div className="search__error-__container">
        <img
          src={searchError}
          className="search__error__icon"
          alt="search__error__icon"
        />
        <div className="search__error__text">
          검색 결과가 없어요<br></br>
          지금 프로필을 만들고 내 상품을 소개해보세요
        </div>
      </div>
    </div>
  );
}

export default SearchError;
