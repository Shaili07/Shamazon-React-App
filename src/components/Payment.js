import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "./axios";
import React, { useState } from "react";
import { useEffect } from "react";
import CurrencyFormat from "react-currency-format";
import { Link, useHistory } from "react-router-dom";
import { totalPrice } from "../reducer";
import { useStateValue } from "../StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import "./Payment.css";
import { db } from "../firebase";
export default function Payment() {
  const [{ cart, user }, dispatch] = useStateValue();
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [processing, setProcessing] = useState("");
  const [succeeded, setSucceeded] = useState(false);
  const [clientSecret, setClientSecret] = useState(true);
  const history = useHistory();
  useEffect(() => {
    //generates the stripe secret that allows to charge a customer
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        //url from which you want to request data
        url: `/payments/create?total=${totalPrice(cart) * 100}`, //stripe needs total in subunits (paise)
        //total is query parameter
      });
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [cart]); //called when there is change in cart

  console.log("Secret is>>", clientSecret);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true); //disallows to hit submit button again
    const payload = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement)
        }
      })
      .then(({ paymentIntent }) => {
        db.collection('users').doc(user?.uid).collection('orders').doc(paymentIntent.id).set({
          cart:cart,
          amount:paymentIntent.amount,
          created:paymentIntent.created
        })
        //payment confirmation
        setSucceeded(true);
        setError(null);
        setProcessing(false);
        dispatch({
          type: "EMPTY_BASKET",
        });
        history.replace("/orders"); //to move users to orders page after successful page
      });
  };

  const handleChange = (event) => {
    setDisabled(event.empty); //disable the submit button if event is empty
    setError(event.error ? event.error.message : ""); //if error exists, display error or else nothing
  };
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
            {cart.map((item) => (
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
            <h4>Payment Method</h4>
          </div>
          <div className="payment__details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => <h4>Order total: {value}</h4>}
                  decimalScale={2}
                  value={totalPrice(cart)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"₹"}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
