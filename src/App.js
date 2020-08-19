import React, { useEffect } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Body from "./Components/Body/Body";
import SearchPage from "./Pages/SearchPage/SearchPage";
import RestaurantDetails from "./Pages/RestaurantDetails/RestaurantDetails";
import Slider from "./Pages/Slider/Slider";
import Login from "./Pages/Login/Login";
import HeaderAccount from "./Components/HeaderAccount/HeaderAccount";
import Checkout from "./Pages/Checkout/Checkout";
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
            <Header />
            <Slider />
            <Body />
          </Route>
          <Route exact path="/search">
            <Header />
            <SearchPage />
          </Route>
          <Route exact path="/restaurant">
            <Header />
            <RestaurantDetails />
          </Route>
          <Route exact path="/checkout">
            <HeaderAccount />
            <Checkout />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
