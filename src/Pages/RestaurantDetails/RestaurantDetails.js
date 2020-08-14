import React, { useState, useEffect } from "react";
import baskin from "./baskin.png";
import { Button, FormControl } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import "./RestaurantDetails.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "150px",
      height: "60px",
    },
  },
}));

function RestaurantDetails() {
  const classes = useStyles();
  // logic
  return (
    <div className="restaurantdetails">
      <div className="restaurantdetails__header">
        <div className="header__img">
          <img src={baskin} className="baskin" />
        </div>
        <div className="header__details">
          <h1>Baskin Robbins</h1>
          <p className="details_cuisine">Ice Cream, Desserts</p>
          <p className="details_address">
            Near Rainbow Plaza,Pimple Saudagar, Pimple Saudagar
          </p>
          <div className="details_feature">
            <h2>⭐4.4</h2>
            <h2>33 mins</h2>
            <h2>$30</h2>
          </div>
        </div>
        <div className="header__offer">
          <FormControl className={`search ${classes.root}`}>
            <Button
              color="default"
              variant="contained"
              startIcon={<SearchIcon />}
              style={{ color: "var(--app-color)" }}
            >
              Search
            </Button>
          </FormControl>
        </div>
      </div>
      <div className="restaurantdetails__body">
        <div className="recommended">
          <p>Recommended</p>
          <br />
          <p>Freshely Scooped HomePacks</p>
          <br />
          <p>Scoops</p>
        </div>
        <div className="dishes">
          <h1>Recommended</h1>
        </div>
      </div>
    </div>
  );
}

export default RestaurantDetails;
