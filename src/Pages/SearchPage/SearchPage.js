import React, { useState, useEffect } from "react";
import "./SearchPage.css";
import SearchIcon from "@material-ui/icons/Search";
import RestaurantItems from "./../RestaurantItems/RestaurantItems";

function SearchPage(props) {
  const [inputSearch, setInputSearch] = useState("");
  const [searchedRestaurantArray, setSearchedRestaurantArray] = useState([]);
  console.log("🍕🍕", searchedRestaurantArray);
  const [lat_long, setLat_Long] = useState({});
  console.log("🍄🍄", lat_long);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLat_Long(position.coords);
    });
  }, []);

  const handleSubmit = async () => {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("user-key", "0bdb56635f92b3041fec1b29008f466a");
    let options = {
      method: "GET",
      headers: headers,
    };

    let url = `https://developers.zomato.com/api/v2.1/search?entity_type=landmark&q=${inputSearch}&start=0&count=20&lat=${props.lat}&lon=${props.lng}`;
    await fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        setSearchedRestaurantArray(data.restaurants);
        setInputSearch("");
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

  return (
    <div className="searchpage">
      <div className="searchpage__input">
        <input
          onChange={(e) => setInputSearch(e.target.value)}
          value={inputSearch}
          placeholder="Search for your favourite restaurants, cuisines, dishes...."
          type="text"
        />
        <SearchIcon className="searchpage__icon" onClick={handleSubmit} />
      </div>
      <hr />
      <div className="searchpage__body">
        {searchedRestaurantArray
          ? searchedRestaurantArray.map((listofsearch) => {
              randomImage =
                randomImageNames[Math.floor(Math.random() * (20 - 0) + 0)];
              return (
                <RestaurantItems
                  image={`https://source.unsplash.com/500x300/?${randomImage}`}
                  key={listofsearch.restaurant.R.res_id}
                  data={listofsearch.restaurant}
                />
              );
            })
          : "no results"}
      </div>
    </div>
  );
}

export default SearchPage;
