import React from "react";
import "./Header.css";

// Using FontAwesome icons
const SearchIcon = () => (
  <i className="fa fa-search" style={{ color: "white" }}></i>
);


const ShoppingBasketIcon = () => (
  <i className="fa fa-shopping-basket" style={{ color: "white" }}></i>
);


function Header() {
  return (
    <div className="header">
      {/* Amazon Logo */}
      <img
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt="Amazon"
        className="header__logo"
      />

      {/* Search Bar */}
      <div className="header__search">
        <input type="text" className="header__searchInput" placeholder="Search Amazon" />
        <div className="header__searchIcon">
          <SearchIcon />
        </div>
      </div>

      {/* Navigation */}
      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">Hello Guest</span>
          <span className="header__optionLineTwo">Sign In</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>

        <div className="header__optionBasket">
          <ShoppingBasketIcon />
          <span className="header__basketCount">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
