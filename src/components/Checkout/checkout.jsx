import React from "react";
import "./checkout.css";
import ads from "../../Assets/ad.jpg";
import Subtotal from "./subtotal";
import CheckoutProduct from "./checkoutProduct";
import { UseStatevalue } from "../stateProvider";

const checkout = () => {
  const [{ basket, user }, dispatch] = UseStatevalue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img src={ads} className="checkout__ad" />

        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className="checkout__title">Your Shopping Basket</h2>

          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              price={item.price}
              image={item.image}
              rating={item.rating}
            />
          ))}

          {/* checkoutProduct */}
          {/* checkoutProduct */}
          {/* checkoutProduct */}
          {/* checkoutProduct */}
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
        
        {/* <h2>The Subtotal will go here</h2> */}
      </div>
    </div>
  );
};

export default checkout;
