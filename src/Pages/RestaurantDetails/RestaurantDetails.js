import React, { useState, useEffect } from "react";
import baskin from "./baskin.png";
import DetailsCard from "./../DetailsCard/DetailsCard";
import "./RestaurantDetails.css";
import SearchIcon from "@material-ui/icons/Search";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";

function RestaurantDetails() {
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
            <div className="feature_rating">
              <h2>4.4</h2>
              <StarHalfIcon className="rating_star" />
            </div>
            <span></span>
            <div className="feature_delivery">
              <h2>33 mins</h2>
              <LocalShippingIcon className="delivery_shipping" />
            </div>
            <span></span>
            <div className="feature_cost">
              <h2>Rs.30</h2>
              <AttachMoneyIcon className="cost_icon" />
            </div>
          </div>
          <div className="details_searchAndFavourite">
            <div className="details_search">
              <input
                //onChange={(e) => setInputSearch(e.target.value)}
                //value={inputSearch}
                placeholder="Search for  dishes...."
                type="text"
              />
              <SearchIcon className="details__searchIcon" />
            </div>
            <div className="details_favourite">
              <FavoriteIcon className="details__favouriteIcon" />
              <h2>Favourite</h2>
            </div>
          </div>
        </div>
        <div className="header__offer">
          <h1>offer</h1>
        </div>
      </div>
      <div className="restaurantdetails__body">
        <div className="recommended">
          <p>Recommended</p>
          <p>Freshely Scooped HomePacks</p>
          <p>Scoops</p>
        </div>
        <div className="dishes">
          <h1>Recommended</h1>
          <DetailsCard
            title="Fresh Very Berry Strawberry Ice Cream"
            price={262}
            text="Sublime Strawberry ice cream with real strawberry pieces. This Strawberry ice cream is a childhood favourite. Scrap that actually, it?s an all time favourite! (Contains Milk)"
            image="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_scale,c_fill/pcghcuqybdodz21junhs"
          />
          <DetailsCard
            title="Honey Nut Crunch Ice Cream-450 Ml Family Pack"
            price={334}
            text="Icecream with rich caramel&honey praline almonds. Honey,nutty,crunchy&delightful. What are you waiting for? Get yourself a load of this Honey Nut Crunch ice cream. (Contains milk & tree nuts)
"
            image="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_scale,c_fill/zpv0by7s0cltnfbxa3sa"
          />
          <DetailsCard
            title="Fresh Fruit Chikoo Ice Cream"
            price={301}
            text="Rich natural Chikoo ice cream with real Chikoo pieces (Contains Milk)
"
            image="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_scale,c_fill/sxlvzrm6d47p6lvolmn7"
          />
          <DetailsCard
            id={100}
            title="Fresh Pink Guava Ice Cream"
            price={301}
            text="Luscious Guava ice cream dressed in fresh Guava bits & churned in creamy milk (Contains milk)
"
            image="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_scale,c_fill/t6iz63jtogtrv79pqhfw"
          />
          <DetailsCard
            id={101}
            title="Banana 'n Strawberries Ice Cream"
            price={329}
            text="Ice cream with real banana and strawberries with strawberry ribbon. This Banana and Strawberry ice cream combination has stood the test of time.
"
            image="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_scale,c_fill/wt6clbdhm5j8prwzikpu"
          />
          <DetailsCard
            id={102}
            title="Roasted Californian Almond Ice Cream"
            price={329}
            text="Vanilla ice cream with caramel ribbon&almond praline. Weve put together 2classics flavours with caramel ribbon stitching them together. This Almond Praline Gold proves sometime old is truly gold!
"
            image="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_scale,c_fill/wt6clbdhm5j8prwzikpu"
          />
          <DetailsCard
            id={103}
            title="Honey Nut Crunch Ice Cream"
            price={353}
            text="Ice cream with rich caramel and honey praline almonds. Honey, its nutty, its crunchy and its delightful. What are you waiting for? Get yourself a load of this Honey Nut Crunch ice cream. (Contains milk & tree nuts)
"
            image="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_scale,c_fill/t1fiyimetylm77uslvhf"
          />
        </div>
      </div>
    </div>
  );
}

export default RestaurantDetails;
