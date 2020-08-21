import React from "react";
import "./CartItems.css";
import { useStateValue } from "./../../StateProvider";

function CartItems({ id, title, price, image }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="cartitems">
      <img src={image} alt="" className="cartitems__image" />
      <div className="cartitems__info">
        <p className="cartitems__title">{title}</p>
        <p>
          <small>Rs.</small>
          <strong>{price}</strong>
        </p>
        <button onClick={removeFromBasket}>Remove</button>
      </div>
    </div>
  );
}

export default CartItems;
