import React from "react";
import { Link } from "react-router-dom";
import "./HeaderPayment.css";
import hb from "./hb.jpg";
function HeaderPayment() {
  return (
    <div className="headerPayment">
      <Link to="/restaurant">
        <img src={hb} alt="logo" className="LOGO" />
      </Link>
      <p>Payment Details</p>
    </div>
  );
}

export default HeaderPayment;
