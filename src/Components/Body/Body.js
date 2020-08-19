import React, { useState, useEffect } from "react";
import { Button, FormControl } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import FilterListIcon from "@material-ui/icons/ShoppingCart";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import EcoIcon from "@material-ui/icons/Eco";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import RestaurantItems from "../../Pages/RestaurantItems/RestaurantItems";
import SideBar from "./../../Pages/SideBar/SideBar";

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

function Body() {
  const [coordinates, setCoordinates] = useState({});
  console.log(coordinates.lat, coordinates.lon);
  const [nearByRestaurantArray, setNearByRestaurantArray] = useState([]);
  console.log(nearByRestaurantArray);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      // let coords = {
      //   lat: position.coords.latitude,
      //   lon: position.coords.longitude,
      // };
      setCoordinates(position.coords);
      // getRestaurantList();
    });
  }, []);

  // 18.604433
  // 73.78307459999999

  useEffect(() => {
    if (coordinates) {
      getRestaurantList();
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
    let url = `https://developers.zomato.com/api/v2.1/search?lat=${coordinates.latitude}&lon=${coordinates.longitude}`;
    console.log(url);
    await fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        setNearByRestaurantArray(data.restaurants);
      });
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
      {/* <div className="body__filter">
        <FormControl className={`filter ${classes.root}`}>
          <Button
            variant="contained"
            color="default"
            startIcon={<FilterListIcon />}
          >
            Filters
          </Button>
        </FormControl>
      </div> */}

      <div className="body__top">
        {/* SIDEBAR */}

        <div className="body__sidebar">
          <SideBar active Icon={WhatshotIcon} heading="Top Picks" />
          <SideBar Icon={FastfoodIcon} heading="Hunger Special" />
          <SideBar Icon={EcoIcon} heading="Vegetarian Options" />
          <SideBar Icon={LocalOfferIcon} heading="Offers Near You" />
          {/* <SideBar Icon={ArrowDownwardIcon} heading="See All" /> */}
        </div>

        {/* BODY_LIST */}

        <div className="body__list">
          <h3 className="heading">Top Pick</h3>
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
