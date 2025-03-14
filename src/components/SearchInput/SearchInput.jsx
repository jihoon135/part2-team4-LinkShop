import "../SearchInput/SearchInput.css";
import search from "../../images/search.png";

const SearchInput = () => {
  return (
    <div>
      <form className="search__form">
        <div className="search__container">
          <img src={search} className="search__icon" alt="search-icon" />
          <input
            type="text"
            className="search__input"
            placeholder="샵 이름으로 검색해 보세요."
          />
        </div>
      </form>
    </div>
  );
};

export default SearchInput;
