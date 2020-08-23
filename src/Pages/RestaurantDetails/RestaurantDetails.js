import React, { useState, useEffect } from "react";
import baskin from "./baskin.png";
import { Link } from "react-router-dom";
import DetailsCard from "./../DetailsCard/DetailsCard";
import "./RestaurantDetails.css";
import axios from "axios";
import SearchIcon from "@material-ui/icons/Search";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";

function RestaurantDetails() {
  const [Resto, setResto] = useState({});
  const [info, setinfo] = useState({});
  let a = [];
  var resto = [];
  let k = 0;
  var List = [];
  var nameArr = [];
  useEffect(() => {
    const timer = setTimeout(() => {
      axios.get(`https://hb-visit.firebaseio.com/.json`).then((res) => {
        setResto(res.data);
      });
    }, 2000);
  }, []);
  function np() {
    let i = "";
    console.log(Resto);
    for (i in Resto) {
      console.log(i);
    }
    a = Resto[i];
    console.log(Resto[i]);
    console.log(a);
    for (let i in a) {
      resto[k] = a[i];
      k++;
    }
    k = 0;
    nameArr = resto[2];
  }
  function Rec() {
    var NameArr = "";
    console.log(nameArr);
    let c = 1.0;
    for (let i in nameArr) {
      let pc = (resto[3] / 2) * 1.0;
      pc = pc * c;
      c = c + 0.01;
      pc = parseInt(pc);
      if (nameArr[i] === ",") {
        NameArr = NameArr.toString();
        console.log(NameArr);
        let url = `https://source.unsplash.com/500x300/?${NameArr},food`;
        List.push(
          <DetailsCard
            title={NameArr}
            price={pc}
            text="Our Special Menu"
            image={url}
          />
        );

        NameArr = "";
        continue;
      } else if (nameArr[i] !== " ") {
        NameArr = NameArr.concat(nameArr[i]);
      }
    }

    return List;
  }

  return (
    <>
      {np()}

      <div className="restaurantdetails">
        <div className="restaurantdetails__header">
          <div className="header__img">
            <img
              src={`https://source.unsplash.com/500x300/?${resto[0]},food`}
              className="baskin"
            />
          </div>
          <div className="header__details">
            <h5>{resto[0]}</h5>
            <p className="details_cuisine">{resto[2]}</p>
            <p className="details_address">{resto[1]}</p>
            <div className="details_feature">
              <div className="feature_rating">
                <h2>{resto[4]}</h2>
                <StarHalfIcon className="rating_star" />
              </div>
              <span></span>
              <div className="feature_delivery">
                <h2>33 mins</h2>
                <LocalShippingIcon className="delivery_shipping" />
              </div>
              <span></span>
              <div className="feature_cost">
                <h2>Rs.{resto[3]}</h2>
              </div>
            </div>
            <div className="details_searchAndFavourite">
              <div className="details_search">
                <Link to="/search" className="searchdish">
                  <input
                    //onChange={(e) => setInputSearch(e.target.value)}
                    //value={inputSearch}
                    placeholder="Search for  dishes...."
                    type="text"
                  />
                </Link>
                <SearchIcon className="details__searchIcon" />
              </div>
              <div className="details_favourite">
                <FavoriteIcon className="details__favouriteIcon" />
                <h2>Favourite</h2>
              </div>
            </div>
          </div>
          <div className="header__offer"></div>
        </div>
        <div className="restaurantdetails__body">
          <div className="recommended">
            <p>Recommended</p>
            <p>Freshely Scooped HomePacks</p>
            <p>Scoops</p>
          </div>
          <div className="dishes">
            <h1>Menu list</h1>
            {Rec()}
          </div>
        </div>
      </div>
    </>
  );
}

export default RestaurantDetails;
