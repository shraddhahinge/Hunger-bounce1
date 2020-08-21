import React from "react";
import "./Checkout.css";
import banner from "./banner.png";
import CheckoutProduct from "./../CheckoutProduct/CheckoutProduct";
import Subtotal from "./../Subtotal/Subtotal";
import SentimentVeryDissatisfiedIcon from "@material-ui/icons/SentimentVeryDissatisfied";
import { useStateValue } from "./../../StateProvider";

function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img src={banner} />

        {basket?.length === 0 ? (
          <div>
            <h2>Your Shopping Basket is empty</h2>
            <p>
              <SentimentVeryDissatisfiedIcon className="smiley" />
              <span>
                You have no items in your basket. To buy one or more items,
                click "Add" next to the item.
              </span>
            </p>
            <hr />
          </div>
        ) : (
          <div>
            <h2 className="checkout__title">Your Food Items</h2>

            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                text={item.text}
              />
            ))}
          </div>
        )}
      </div>

      {basket.length > 0 && (
        <div className="checkout__right">
          <Subtotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;
