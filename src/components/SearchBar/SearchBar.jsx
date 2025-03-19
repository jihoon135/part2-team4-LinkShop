import React, { memo } from 'react';
import './Search.scss';
import search from '../../assets/images/search.png';

const SearchBar = memo(
  ({ keyword, handleSearchChange, handleSearchSubmit }) => {
    return (
      <form className="search" onSubmit={handleSearchSubmit}>
        <button className="search__image">
          <img src={search} alt="검색" />
        </button>
        <input
          type="text"
          className="search__input"
          placeholder="샵 이름으로 검색해 보세요."
          value={keyword}
          onChange={handleSearchChange}
        />
      </form>
    );
  },
);

export default SearchBar;
