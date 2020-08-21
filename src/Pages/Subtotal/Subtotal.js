import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./../../StateProvider";
import { getBasketTotal } from "./../../Reducer";
import { Link } from "react-router-dom";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  console.log("basket", basket);
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p className="subtotal__text">
              Subtotal ({basket.length} items): <strong>{`${value}`}</strong>
            </p>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"Rs."}
      />
      <Link to="/payment" className="pay_link">
        <button>Proceed to Pay</button>
      </Link>
    </div>
  );
}

export default Subtotal;
