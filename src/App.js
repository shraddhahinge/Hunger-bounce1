import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Body from "./Components/Body/Body";
import SearchPage from "./Pages/SearchPage/SearchPage";
import RestaurantDetails from "./Pages/RestaurantDetails/RestaurantDetails";
import Slider from "./Pages/Slider/Slider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Slider />
            <Body />
          </Route>
          <Route exact path="/search">
            <SearchPage />
          </Route>
          <Route exact path="/restaurant">
            <RestaurantDetails />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
