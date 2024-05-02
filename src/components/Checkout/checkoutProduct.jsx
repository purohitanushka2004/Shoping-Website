import React from "react";
import { UseStatevalue } from "../stateProvider";
import "./checkoutProduct.css";

const CheckoutProduct = ({ id, title, price, image, rating }) => {
    const [{basket}, dispatch] = UseStatevalue();

    const removeFromBasket = ()=>{
        //remove the item from basket
        dispatch({
            type : 'REMOVE_FROM_BASKET',
            id : id,
            
        })
    }

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <p className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </p>

        <button onClick={removeFromBasket}>Remove from Basket</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
