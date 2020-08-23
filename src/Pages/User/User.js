import React from "react";
import { useStateValue } from "./../../StateProvider";
import { getBasketTotal } from "./../../Reducer";
import bike from "./bike.svg";
import "./User.css";
function User() {
  const [{ basket }] = useStateValue();

  return (
    <div className="user">
      <img src={bike} />
      <div className="userdetails">
        <h1>Shraddha</h1>
        <h2>Hurray!!!!</h2>
        <p>Your delicious food is on your way😍</p>
        <p>Sunshine Nagar, Rahatani, Nakhate Vasti, Pune-411017</p>
        <p>Paid: Rs.{getBasketTotal(basket)}</p>
      </div>
    </div>
  );
}

export default User;
