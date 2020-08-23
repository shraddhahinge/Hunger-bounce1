import React from "react";
import breakfast from "./breakfast.svg";
import app from "./app.svg";
import mobileapp from "./mobileapp.svg";
import bike from "./bike.svg";
import SearchIcon from "@material-ui/icons/Search";
import MyLocationIcon from "@material-ui/icons/MyLocation";
import card1 from "./card1.jpg";
import card2 from "./card2.jpg";
import card3 from "./card3.jpg";
import card4 from "./card4.jpg";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { GoogleComponent } from "react-google-location";
import collection1 from "./collection1.jpg";
import collection2 from "./collection2.jpg";
import collection3 from "./collection3.jpg";
import collection4 from "./collection4.jpg";
import bag from "./bag.jpg";
import safety from "./safety.jpg";
import time from "./time.jpg";
import map from "./map.jpg";
import applestore from "./applestore.png";
import google from "./google.png";
import facebook from "./facebook.png";
import instagram from "./instagram.png";
import linkedin from "./linkedin.png";
import twitter from "./twitter.png";
import mail from "./mail.jpg";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import LightSpeed from "react-reveal/LightSpeed";
import Bounce from "react-reveal/Bounce";
import Zoom from "react-reveal/Zoom";
import Rotate from "react-reveal/Rotate";

import "./LandingPage.css";
const API_KEY = "AIzaSyDo6TAihyVcLfi24e3Jym11WQR0Iv6CvEU";
function LandingPage(props) {
  let history = useHistory();
  const [place, setplace] = useState({});
  const [current, setCurrent] = useState({});
  console.log("current", current);
  function cor() {
    props.lat(place.coordinates.lat);
    props.lng(place.coordinates.lng);
    console.log(place.coordinates);
    history.push("/Restaurant");

    //
    //
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setCurrent(position.coords);
    });
  }, []);
  function currentlocation() {
    history.push("/Restaurant");
  }

  return (
    <div className="landingPage">
      <div className="landingPage_header">
        <div className="landingPage_headerTitle">
          <h1>Hunger Bounce</h1>
          <h2>Let the deliciousness twril in your mouth😋</h2>
          <div className="landingPage_input">
            <div className="autocomplete">
              <GoogleComponent
                apiKey={API_KEY}
                language={"en"}
                country={"country:in"}
                coordinates={true}
                placeholder={
                  "Search by location or your favourite restaurant..."
                }
                onChange={(e) => {
                  setplace(e);
                  if (place.coordinates) {
                    cor();
                  }
                }}
              />
            </div>
            <MyLocationIcon
              onChange={(e) => {
                if (current) {
                  currentlocation();
                }
              }}
              className="mylocation_icon"
            />
            <SearchIcon className="landing_searchIcon" />
          </div>
        </div>
        <img src={breakfast} alt="" className="breakfast" />
      </div>
      <div className="landingPage_cards">
        <div className="landing_cards">
          <Fade left delay={4000}>
            <img src={card4} id="card1" className="landing_card" />
          </Fade>
          <Fade left delay={3000}>
            <img src={card1} id="card2" className="landing_card" />
          </Fade>
          <Fade left delay={2000}>
            <img src={card2} id="card3" className="landing_card" />
          </Fade>
          <Fade left delay={1000}>
            <img src={card3} id="card4" className="landing_card" />
          </Fade>
        </div>
      </div>
      <div className="landingPage_collections">
        <div className="collections_Title">
          <h2>Collections</h2>
          <h3>
            Explore curated lists of top restaurants, cafes, pubs, and bars in
            your near by location, based on trends
          </h3>
        </div>
        <div className="collections_cards">
          <Slide bottom>
            <img src={collection4} className="collection_card" />
          </Slide>
          <Slide top>
            <img src={collection1} className="collection_card" />
          </Slide>
          <Slide bottom>
            <img src={collection2} className="collection_card" />
          </Slide>
          <Slide top>
            <img src={collection3} className="collection_card" />
          </Slide>
        </div>
      </div>
      <div className="about_app">
        <LightSpeed left>
          <img src={app} className="about_appImage" />
        </LightSpeed>

        <div className="about_appText">
          <LightSpeed right delay={1000}>
            <p>
              <strong>Hunger bounce</strong>detects your near by location and
              shows best restaurants around you, where you can order your
              favourite dishes in less than 5mins. Just go and search and all
              your orders are on your door step with less than 45 mins delivery.
            </p>
          </LightSpeed>
        </div>
      </div>
      <div className="landingPage_features">
        <Bounce left>
          <h2 className="feature_heading">We Care About you...</h2>
        </Bounce>

        <div className="features_cards">
          <Zoom right>
            <div className="feature1">
              <img src={bag} className="feature_image" />
              <div className="feature_text">
                <h2>No minimum order</h2>
                <p>Deliveries with no minimum order value</p>
              </div>
            </div>
          </Zoom>
          <Zoom right>
            <div className="feature1">
              <img src={time} className="feature_image" />
              <div className="feature_text">
                <h2>Delivered in 45 mins</h2>
                <p>The quickest way to get things delivered</p>
              </div>
            </div>
          </Zoom>
          <Zoom left delay={1000}>
            <div className="feature1">
              <img src={safety} className="feature_image" />
              <div className="feature_text">
                <h2>Safety First</h2>
                <p>
                  Ensuring best practices to keep you and our partners safe at
                  every step!!
                </p>
              </div>
            </div>
          </Zoom>
          <Zoom left delay={1000}>
            <div className="feature1">
              <img src={map} className="feature_image" />
              <div className="feature_text">
                <h2>Available 24x7</h2>
                <p>Day or Night, get it delivered</p>
              </div>
            </div>
          </Zoom>
        </div>
      </div>
      <div className="landingPage_getTheApp">
        <div className="getTheApp_text">
          <h1>One app for your cravings😋</h1>
          <h2>Get the App!!</h2>
          <div className="getTheApp_images">
            <img src={google} />
            <img src={applestore} />
          </div>
        </div>
        <img src={mobileapp} className="mobileApp" />
      </div>
      <div className="landingPage_Tagline">
        <Bounce top>
          <h2 className="tag1">Food</h2>
        </Bounce>
        <Bounce top delay={500}>
          <h2 className="tag2">For</h2>
        </Bounce>
        <Bounce top delay={1000}>
          <h2 className="tag3">Good, Mood</h2>
        </Bounce>
      </div>
      <div className="landingPage_Tagline2">
        <Rotate bottom right delay={1000}>
          <h2 className="tag4">It, is CHEAT day,</h2>
        </Rotate>
        <Rotate bottom left delay={1500}>
          <h2 className="tag5">do not shy away</h2>
        </Rotate>
      </div>
      <div className="landingPage_footer">
        <div className="footer_text">
          <h2>You can't stop time, but you can save it</h2>
          <p>
            Living in the city with our busy schedules, there is never enough
            time to grab or to cook food and wade through traffic on the way
            back home. How about we take care of your hunger and cravings? What
            if we can give you all that time back? Send deliveries across the
            city and get everything from your favourite cuisines delivered right
            to your doorstep. From any restaurant to your door, just make a food
            items list and within less than 45 mins, grab your hunger.
          </p>
        </div>
        <hr />
        <div className="footer_services">
          <h2>Services we offer</h2>
          <p>
            Send Deliveries in Banglore | Send Deliveries in Pune | Send
            Deliveries in Mumbai | Send Deliveries in New Delhi | Send
            Deliveries in Chennai | Send Deliveries in Gurgaon | Send Deliveries
            in Hyderabad
          </p>
        </div>
        <hr />
        <div className="footer_aboutUs">
          <div className="about_us">
            <h2>Hunger Bounce</h2>
            <div className="about_usList">
              <p>About</p>
              <p>Contact</p>
              <p>Terms & Conditions</p>
              <p>Privacy Policy</p>
              <p>Hunger Bounce for partner</p>
              <p>Hunger Bounce for Business</p>
            </div>
          </div>
          <div className="about_us_Cities">
            <h2>Serviceable Cities</h2>
            <div className="cities_List">
              <p>Banglore</p>
              <p>Pune</p>
              <p>Gurgaon</p>
              <p>Hyderabad</p>
              <p>New Delhi</p>
              <p>Chennai</p>
              <p>Jaipur</p>
              <p>Mumbai</p>
            </div>
          </div>
          <div className="about_usGetInTouch">
            <h2>Get In Touch</h2>
            <div className="getInTouch_List">
              <img src={mail} />
              <img src={facebook} />
              <img src={instagram} />
              <img src={linkedin} />
              <img src={twitter} />
            </div>
          </div>
          <div className="about_us_image">
            <img src={bike} />
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
}

export default LandingPage;
