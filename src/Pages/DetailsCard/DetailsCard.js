import React from "react";
import { useStateValue } from "./../../StateProvider";
import "./DetailsCard.css";

function DetailsCard({ id, title, price, text, image }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    //add item to basket...
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        text: text,
      },
    });
  };
  return (
    <div className="detailscard">
      <div className="detailscard__content">
        <h3 className="content_header">{title}</h3>
        <p className="content_price">RS.{price}</p>
        <p className="content_line">{text}</p>
      </div>
      <div className="detailscard__image">
        <img src={image} className="card__image" />
        <button onClick={addToBasket} className="card__add">
          Add
        </button>
      </div>
    </div>
  );
}

export default DetailsCard;
