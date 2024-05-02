import React from "react";
import CurrencyFormat from "react-currency-format";
import "./subtotal.css";
import { UseStatevalue } from "../stateProvider";
import { getBasketTotal } from "../../reducer";
import { useHistory } from "react-router-dom";
// import payment from "../payment/Payment";

const Subtotal = () => {
  const history = useHistory();
  const [{ basket }, dispatch] = UseStatevalue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              subtotal ({basket.length} items) : <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />
      <button onClick={e=>history.push('/payment')}>Proceed to Checkout</button>
    </div>
  );
};

export default Subtotal;
