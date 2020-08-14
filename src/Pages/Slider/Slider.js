import React from "react";
import food1 from "./food1.png";
import food2 from "./food2.png";
import food3 from "./food3.png";
import food4 from "./food4.png";
import food5 from "./food5.png";
import "./Slider.css";
function Slider() {
  return (
    <div className="slider middle">
      <div className="slides">
        <input type="radio" name="r" id="r1" />
        <input type="radio" name="r" id="r2" />
        <input type="radio" name="r" id="r3" />
        <input type="radio" name="r" id="r4" />
        <input type="radio" name="r" id="r5" />
        <div className="slide s1">
          <img src={food1} className="food1" />
        </div>
        <div className="slide">
          <img src={food2} className="food1" />
        </div>
        <div className="slide">
          <img src={food3} className="food1" />
        </div>
        <div className="slide">
          <img src={food4} className="food1" />
        </div>
        <div className="slide">
          <img src={food5} className="food1" />
        </div>
      </div>
      <div className="slider__navigation">
        <label htmlFor="r1" className="bar"></label>
        <label htmlFor="r2" className="bar"></label>
        <label htmlFor="r3" className="bar"></label>
        <label htmlFor="r4" className="bar"></label>
        <label htmlFor="r5" className="bar"></label>
      </div>
    </div>
  );
}

export default Slider;
