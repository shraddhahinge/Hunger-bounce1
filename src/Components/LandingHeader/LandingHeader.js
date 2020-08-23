import React from "react";
import hb from "./hb.jpg";
import { Link } from "react-router-dom";
import "./LandingHeader.css";
import { Button } from "@material-ui/core";

import { styled } from "@material-ui/core/styles";
import { spacing } from "@material-ui/system";
import MuiButton from "@material-ui/core/Button";
function LandingHeader() {
  const Button = styled(MuiButton)(spacing);

  return (
    <div className="header">
      <Link to="/restaurant">
        <img src={hb} alt="logo" className="LOGO" />
      </Link>
      <Link to="/login" style={{ textDecoration: "none" }}>
        <div className="buttons">
          <Button
            variant="contained"
            color="secondary"
            className="first"
            m="1rem"
          >
            Create an account
          </Button>

          <Button variant="contained" color="default" className="second">
            Login
          </Button>
        </div>
      </Link>
    </div>
  );
}

export default LandingHeader;
