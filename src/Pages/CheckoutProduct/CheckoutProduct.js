import React from "react";
import { useStateValue } from "./../../StateProvider";
import "./CheckoutProduct.css";

function CheckoutProduct({ id, image, title, price, text }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkoutProduct">
      <img src={image} alt="" className="checkoutProduct__image" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p>
          <small>Rs.</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__text">{text}</div>
        <button onClick={removeFromBasket}>Remove from basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
