import Subtotal from "./Subtotal"
import React from 'react'
import "./Checkout.css"
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "../StateProvider";


export default function Checkout() {
    const [{cart,user},dispatch]=useStateValue();
    const name=user?user.email.match(/^([^@]*)@/)[1]:null;
    return (
        <div className="checkout">
            <div className="checkout__left">
                <h6>Hello, {name} </h6>
                <h2 className="checkout__title">Shopping Cart</h2>
                {cart.map(item =>(
                    <CheckoutProduct 
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
/>
                )
                )}
            </div>
            <div className="checkout__right">
                <Subtotal/>
            </div>
        </div>
    )
}

