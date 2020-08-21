import React from "react";
import { Link } from "react-router-dom";
import "./HeaderAccount.css";
import hb from "./hb.jpg";
function HeaderAccount() {
  return (
    <div className="headerAccount">
      <Link to="/restaurant">
        <img src={hb} alt="logo" className="LOGO" />
      </Link>
      <p>Your Food Basket</p>
    </div>
  );
}

export default HeaderAccount;
