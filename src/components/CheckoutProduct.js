import "./CheckoutProduct.css";
import React from 'react'
import { DeleteOutlineTwoTone } from "@material-ui/icons";
import { useStateValue } from "../StateProvider";

export default function CheckoutProduct({id,image,title,price,rating,hideButton}) {
    const [{cart},dispatch]=useStateValue();
    const deleteItem=()=>
   {
dispatch({
    type:"REMOVE_FROM_CART",
    id:id,
})
   }
    return (
        <div className="checkoutproduct">
           <img className="checkoutproduct__image" src={image}/>
           <div className="checkoutproduct__info">
               <p className="checkoutproduct__title">{title}</p>
               <p className="checkoutproduct__price">
                   <strong>₹</strong>
                  <strong> {price}</strong>
                   </p>
                <div className="checkoutproduct__rating">
                {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
                </div>
                {!hideButton && (
                <button className="checkoutproduct__button" onClick={deleteItem}>Delete</button> 
                )}
                </div>
        
        </div>
    )
}
