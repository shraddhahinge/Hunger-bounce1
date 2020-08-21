import React, { useEffect } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Body from "./Components/Body/Body";
import SearchPage from "./Pages/SearchPage/SearchPage";
import RestaurantDetails from "./Pages/RestaurantDetails/RestaurantDetails";
import Slide from "./Pages/Slider/Slide";
import Login from "./Pages/Login/Login";
import HeaderAccount from "./Components/HeaderAccount/HeaderAccount";
import Checkout from "./Pages/Checkout/Checkout";
import HeaderPayment from "./Components/HeaderPayment/HeaderPayment";
import PaymentPage from "./Pages/PaymentPage/PaymentPage";
import LandingPage from "./Components/LandingPage/LandingPage";
import LandingHeader from "./Components/LandingHeader/LandingHeader";
import UserHeader from "./Components/UserHeader/UserHeader";
import User from "./Pages/User/User";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "./fireauth";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //the user is logged in...

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //the user is logged out..

        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

    return () => {
      //Any cleanup operations go in here...
      unsubscribe();
    };
  }, []);

  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/">
            <LandingHeader />
            <LandingPage />
          </Route>
          <Route exact path="/restaurant">
            <Header />
            <Slide />
            <Body />
          </Route>
          <Route exact path="/search">
            <Header />
            <SearchPage />
          </Route>
          <Route exact path="/restaurantdetails">
            <Header />
            <RestaurantDetails />
          </Route>
          <Route exact path="/checkout">
            <HeaderAccount />
            <Checkout />
          </Route>
          <Route exact path="/payment">
            <HeaderPayment />
            <PaymentPage />
          </Route>
        </Switch>

        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/userdetails">
            <UserHeader />
            <User />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
