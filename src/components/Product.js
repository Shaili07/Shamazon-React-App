import React from 'react'
import { useStateValue } from '../StateProvider';
import "./Product.css";
export default function Product({id,title,image,price,rating}) {
 const [{cart},dispatch]=useStateValue();

  const addToCart=()=>
  {
     dispatch({
       type:"ADD_TO_CART",
       item:{
         id:id,
         title:title,
         image:image,
         price:price,
         rating:rating,
       },
     });
  };
    return (
        <div className="product">
            <img src={image} alt="" className="product_img"/>
            <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
        <div className="product__info">
        <p>{title}</p>
        
        <p className="product__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>

        
      </div>

      

      <button onClick={addToCart}>Add to Cart</button>
        </div>
    )
}

