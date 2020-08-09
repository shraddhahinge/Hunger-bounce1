import React from "react";

import hb from "./hb.jpg";
import Search from "./../../Pages/Search/Search";
import Offers from "./../../Pages/Offers/Offers";
import Cart from "./../../Pages/Cart/Cart";
import Signup from "./../../Pages/Signup/Signup";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <img src={hb} alt="logo" className="LOGO" />
      </div>
      <div className="header__inputs">
        <Search />
        <Offers />
        <Signup />
        <Cart />
      </div>
    </div>
  );
}

export default Header;
