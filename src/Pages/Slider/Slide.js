import React, { useState, useEffect } from "react";
import food1 from "./food1.png";
import food2 from "./food2.png";
import food3 from "./food3.png";
import food4 from "./food4.png";
import food5 from "./food5.png";
import burger from "./burger.svg";
import "./Slide.css";
import LightSpeed from "react-reveal/LightSpeed";
import Zoom from "react-reveal/Zoom";
import Rotate from "react-reveal/Rotate";

function Slide() {
  return (
    <div className="slide">
      <div className="image_slider">
        <LightSpeed left delay={2000}>
          <img src={food2} />
        </LightSpeed>
        <LightSpeed left delay={1500}>
          <img src={food3} />
        </LightSpeed>
        <LightSpeed left delay={1000}>
          <img src={food4} />
        </LightSpeed>
        <LightSpeed left delay={500}>
          <img src={food5} />
        </LightSpeed>
      </div>
      <div className="slide_text">
        <Zoom left delay={2000}>
          <img src={burger} />
        </Zoom>
        <Rotate right delay={2000}>
          <h2>Bringing Joy of Food</h2>
        </Rotate>
      </div>
    </div>
  );
}

export default Slide;
