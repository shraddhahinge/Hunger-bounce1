import React, { useState, useEffect, useRef } from "react";
import { Button, FormControl } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import FilterListIcon from "@material-ui/icons/ShoppingCart";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import EcoIcon from "@material-ui/icons/Eco";

import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import RestaurantItems from "../../Pages/RestaurantItems/RestaurantItems";
import SideBar from "./../../Pages/SideBar/SideBar";
import ScrollIntoView from "react-scroll-into-view";
import "./Body.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "150px",
      height: "60px",
    },
  },
}));

function Body(props) {
  const [coordinates, setCoordinates] = useState({});
  console.log(coordinates.lat, coordinates.lon);
  const [nearByRestaurantArray, setNearByRestaurantArray] = useState([]);
  console.log(nearByRestaurantArray);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setCoordinates(position.coords);
    });
  }, []);

  // 18.604433
  // 73.78307459999999

  useEffect(() => {
    if (coordinates) {
      getRestaurantList();
    } else {
      onCostLowToHigh();
    }
  }, [coordinates]);

  const getRestaurantList = async () => {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("user-key", "0bdb56635f92b3041fec1b29008f466a");
    let options = {
      method: "GET",
      headers: headers,
    };
    // console.log(coordinates.lat, coordinates.lon);
    let url = `https://developers.zomato.com/api/v2.1/search?lat=${props.lat}&lon=${props.lng}`;
    console.log(url);
    await fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        setNearByRestaurantArray(data.restaurants);
      });
  };

  const TopRatings = () => {
    setNearByRestaurantArray([
      ...nearByRestaurantArray.sort(
        (a, b) =>
          parseInt(a.restaurant.user_rating.votes) -
          parseInt(b.restaurant.user_rating.votes)
      ),
    ]);
  };

  const onCostHighToLow = () => {
    setNearByRestaurantArray([
      ...nearByRestaurantArray.sort(
        (b, a) =>
          parseInt(a.restaurant.average_cost_for_two) -
          parseInt(b.restaurant.average_cost_for_two)
      ),
    ]);
  };
  const onCostLowToHigh = () => {
    setNearByRestaurantArray([
      ...nearByRestaurantArray.sort(
        (a, b) =>
          parseInt(a.restaurant.average_cost_for_two) -
          parseInt(b.restaurant.average_cost_for_two)
      ),
    ]);
  };

  let randomImageNames = [
    "cuisine",
    "dishes",
    "food",
    "delicious",
    "restaurant",
    "gourmet",
    "foodies",
    "meat",
    "bread",
    "fruit",
    "pizza",
    "burguer",
    "juice",
    "coke",
    "salad",
    "snack",
    "drink",
    "coffee",
    "cheese",
    "tea",
  ];
  let randomImage;

  const classes = useStyles();
  return (
    <div className="body">
      <div className="body_filter">
        <Button
          className="filter_button"
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          Filters
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={TopRatings && handleClose}>Top Ratings</MenuItem>
          <MenuItem onClick={onCostHighToLow && handleClose}>
            Cost High to Low
          </MenuItem>
          <MenuItem onClick={onCostLowToHigh && handleClose}>
            Cost Low to High
          </MenuItem>
        </Menu>
      </div>
      <hr />
      <div className="body__top">
        {/* SIDEBAR */}

        <div className="body__sidebar">
          <ScrollIntoView selector="#pick">
            <SideBar active Icon={WhatshotIcon} heading="Top Picks" />
          </ScrollIntoView>

          <ScrollIntoView selector="#hunger">
            <SideBar Icon={FastfoodIcon} heading="Hunger Special" />
          </ScrollIntoView>
          <ScrollIntoView selector="#vegetarian">
            <SideBar Icon={EcoIcon} heading="Vegetarian Options" />
          </ScrollIntoView>
          <ScrollIntoView selector="#offers">
            <SideBar Icon={LocalOfferIcon} heading="Offers Near You" />
          </ScrollIntoView>
        </div>

        {/* BODY_LIST */}

        <div className="body__list">
          <h3 className="heading" id="pick">
            Top Pick
          </h3>
          <div className="restaurant">
            {nearByRestaurantArray
              ? nearByRestaurantArray.slice(0, 6).map((listofrestaurants) => {
                  randomImage =
                    randomImageNames[Math.floor(Math.random() * (20 - 0) + 0)];
                  return (
                    <RestaurantItems
                      image={`https://source.unsplash.com/500x300/?${randomImage}`}
                      key={listofrestaurants.restaurant.R.res_id}
                      data={listofrestaurants.restaurant}
                    />
                  );
                })
              : "there are no nearby restaurants"}
          </div>
          <hr id="hunger" />
          <h3 className="heading">Hunger Special</h3>
          <div className="restaurant">
            {nearByRestaurantArray
              ? nearByRestaurantArray.slice(6, 12).map((listofrestaurants) => {
                  randomImage =
                    randomImageNames[Math.floor(Math.random() * (20 - 0) + 0)];
                  return (
                    <RestaurantItems
                      image={`https://source.unsplash.com/500x300/?${randomImage}`}
                      key={listofrestaurants.restaurant.R.res_id}
                      data={listofrestaurants.restaurant}
                    />
                  );
                })
              : "there are no nearby restaurants"}
          </div>
          <hr id="vegetarian" />
          <h3 className="heading">Vegetarian Options</h3>
          <div className="restaurant">
            {nearByRestaurantArray
              ? nearByRestaurantArray.slice(12, 17).map((listofrestaurants) => {
                  randomImage =
                    randomImageNames[Math.floor(Math.random() * (20 - 0) + 0)];
                  return (
                    <RestaurantItems
                      image={`https://source.unsplash.com/500x300/?${randomImage}`}
                      key={listofrestaurants.restaurant.R.res_id}
                      data={listofrestaurants.restaurant}
                    />
                  );
                })
              : "there are no nearby restaurants"}
          </div>
          <hr id="offers" />
          <h3 className="heading">Offers Near You</h3>
          <div className="restaurant">
            {nearByRestaurantArray
              ? nearByRestaurantArray.slice(10, 16).map((listofrestaurants) => {
                  randomImage =
                    randomImageNames[Math.floor(Math.random() * (20 - 0) + 0)];
                  return (
                    <RestaurantItems
                      image={`https://source.unsplash.com/500x300/?${randomImage}`}
                      key={listofrestaurants.restaurant.R.res_id}
                      data={listofrestaurants.restaurant}
                    />
                  );
                })
              : "there are no nearby restaurants"}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
