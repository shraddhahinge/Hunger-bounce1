import React from "react";
import "./PaymentPage.css";
import PaymentTwoToneIcon from "@material-ui/icons/PaymentTwoTone";
import FastfoodTwoToneIcon from "@material-ui/icons/FastfoodTwoTone";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import MaskedInput from "react-text-mask";
import { useStateValue } from "./../../StateProvider";
import CartItems from "./../CartItems/CartItems";
import EmojiNatureIcon from "@material-ui/icons/EmojiNature";
import { getBasketTotal } from "./../../Reducer";
import { Link } from "react-router-dom";

function PaymentPage() {
  const [{ basket }] = useStateValue();
  return (
    <div className="paymentPage">
      <div className="paymentPage__left">
        <div className="billingAddress">
          <div>
            <PersonPinIcon className="personPinIcon" />
            <h1>Billing Address</h1>
          </div>

          <form>
            <label>
              <h2>👤Full Name</h2>
              <input type="text" placeholder="e.g John deo" />
            </label>

            <label>
              <h2>📨Delivery Address</h2>
              <textarea
                type="text"
                placeholder="e.g Buld No.C4 Flat No.4 Sunshine Nagar, Rahatani"
              />
            </label>
            <label>
              <h2>🌆City</h2>
              <input type="text" placeholder="e.g Pune" />
            </label>
          </form>
        </div>
        <div className="paymentDetails">
          <div>
            <PaymentTwoToneIcon className="personPinIcon" />
            <h1>Payment</h1>
          </div>
          <div className="paymentCard">
            <div className="cardNumber">
              <h2>Card number:</h2>
              <MaskedInput
                mask={[
                  /\d/,
                  /\d/,
                  /\d/,
                  /\d/,

                  " ",
                  /\d/,
                  /\d/,
                  /\d/,
                  /\d/,
                  " ",
                  /\d/,
                  /\d/,
                  /\d/,
                  /\d/,
                  " ",
                  /\d/,
                  /\d/,
                  /\d/,
                  /\d/,
                ]}
                className="four_digit"
                placeholder="9999 9999 9999 9999"
              />
            </div>
            <div className="card_expiry_cvc">
              <div className="card_expiry">
                <h2>Expiry Date:</h2>
                <MaskedInput
                  mask={[/[0-9]/, /[1-9]/, "/", /[2-9]/, /[0-9]/]}
                  className="two_digit"
                  placeholder="00/00"
                />
              </div>
              <div className="card_cvc">
                <h2>CVC:</h2>
                <MaskedInput
                  mask={[/[0-9]/, /[0-9]/, /[0-9]/]}
                  className="three_digit"
                  placeholder="000"
                />
              </div>
            </div>
            <Link to="/userdetails" className="proceed">
              <button>Proceed to Checkout</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="paymentPage__right">
        <div>
          <FastfoodTwoToneIcon className="personPinIcon" />
          <h1>Cart Items</h1>
          <h2>{basket.length} items</h2>
        </div>
        {basket.map((item) => (
          <CartItems
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
          />
        ))}
        <div className="coupon">
          <EmojiNatureIcon className="coupon_icon" />
          <h2>Apply Coupon</h2>
        </div>
        <div className="getSuper">
          <h3>Become Super & keep saving more😍</h3>
          <h2>GET SUPER 🌟</h2>
        </div>
        <hr />
        <div className="toPay">
          <h2>To Pay</h2>
          <p>
            <small>Rs.</small>
            <strong>{getBasketTotal(basket)}</strong>
          </p>
        </div>
      </div>
    </div>
  );
}

export default PaymentPage;
