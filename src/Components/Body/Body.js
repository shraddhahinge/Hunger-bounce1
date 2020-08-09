import React, { useState, useEffect } from "react";
import { Button, FormControl } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import FilterListIcon from "@material-ui/icons/ShoppingCart";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import EcoIcon from "@material-ui/icons/Eco";
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
      let coords = {
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      };
      setCoordinates(coords);
      getRestaurantList();
    });
  }, []);

  const getRestaurantList = async () => {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("user-key", "0bdb56635f92b3041fec1b29008f466a");
    let options = {
      method: "GET",
      headers: headers,
    };
    console.log(coordinates.lat, coordinates.lon);
    let url = `https://developers.zomato.com/api/v2.1/search?lat=18.6054025$&lon=73.7830977&sort=real_distance`;
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
      <div className="body__sidebar">
        <SideBar active Icon={WhatshotIcon} heading="Top Picks" />
        <SideBar Icon={FastfoodIcon} heading="Hunger Special" />
        <SideBar Icon={EcoIcon} heading="Vegetarian Options" />
        {/* <SideBar
          Icon={FiberManualRecordIcon}
          heading="Non-vegetarian Options"
        /> */}
        <SideBar Icon={LocalOfferIcon} heading="Offers Near You" />
      </div>
      <div className="body__list">
        <h3 className="heading">Top Pick</h3>
        <div className="restaurant">
          {nearByRestaurantArray
            ? nearByRestaurantArray.map((listofrestaurants) => {
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
            ? nearByRestaurantArray.map((listofrestaurants) => {
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
            ? nearByRestaurantArray.map((listofrestaurants) => {
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
            ? nearByRestaurantArray.map((listofrestaurants) => {
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
  );
}

export default Body;
