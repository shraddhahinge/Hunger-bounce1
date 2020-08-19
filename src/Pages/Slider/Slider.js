import React from "react";
import food1 from "./food1.png";
import food2 from "./food2.png";
import food3 from "./food3.png";
import food4 from "./food4.png";
import food5 from "./food5.png";
import "./Slider.css";
import Bounce from "react-reveal/Bounce";

function Slider() {
  return (
    <div className="slider">
      <Bounce left>
        <div className="slider__images"></div>
      </Bounce>
    </div>
  );
}

export default Slider;
