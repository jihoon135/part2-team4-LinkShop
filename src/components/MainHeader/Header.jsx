import React from "react";
import { Link } from "react-router-dom";
import "../MainHeader/Header.css";
import logo from "../../images/logo.png";

const Header = ({ buttonName, onButtonClick }) => {
  return (
    <div>
      <header className="header">
        <div className="header__container">
          <div className="logo__container">
            <Link to="/list">
              <img src={logo} className="logo" alt="Logo" />
            </Link>
          </div>
          <button className="header__button" onClick={onButtonClick}>
            {buttonName}
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
