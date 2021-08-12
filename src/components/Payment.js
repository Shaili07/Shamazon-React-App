import React from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import "./Payment.css";
export default function Payment() {
    const [{cart,user},dispatch]=useStateValue();
  return (
    <div className="payment">
      <div className="payment__container">
      <h2>
          Checkout(<Link to="/checkout">{cart?.length} Items</Link>)
      </h2>
      <div className="payment__section">
        <div className="payment__title">
          <h4>Delivery Address</h4>
        </div>
        <div className="payment__address">
            <p>{user?.email}</p> 
            <p>420, Haveli</p>
            <p>Dholakpur, India</p>
        </div>
      </div>
      <div className="payment__section">
          <div className="payment__title">
              <h4>Review Items and Delivery</h4>
          </div>
          <div className="payment__items">
              {cart.map(item=>
              (
                  <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                  />
              ))}
          </div>
      </div>
      <div className="payment__section">
      <div className="payment__title">
          <h4>Payment Method</h4></div>
      <div className="payment__details"></div>
      </div>
     
      </div>
      
    </div>
  );
}
