import React from "react";
import "./Cart.css";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "./../../StateProvider";

function Cart() {
  const [{ basket }] = useStateValue();
  return (
    <Link to="/checkout" style={{ textDecoration: "none" }}>
      <div className="cart">
        <ShoppingCartIcon className="cart__icon" />
        <span>{basket?.length}</span>
      </div>
    </Link>
  );
}

export default Cart;
