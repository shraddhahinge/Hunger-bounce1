import React from "react";
import hb from "./hb.jpg";
import "./UserHeader.css";
import { Link } from "react-router-dom";
function UserHeader() {
  return (
    <div className="userHeader">
      <Link to="/restaurant">
        <img src={hb} alt="logo" className="LOGO" />
      </Link>
      <p>User Details</p>
    </div>
  );
}

export default UserHeader;
