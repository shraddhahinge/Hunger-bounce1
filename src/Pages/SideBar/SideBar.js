import React from "react";
import "./SideBar.css";

function SideBar({ active, Icon, heading }) {
  return (
    <div className={`sidebar ${active && "sidebar--active"}`}>
      <Icon className="icon" />
      <h5>{heading}</h5>
    </div>
  );
}

export default SideBar;
