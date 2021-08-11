import "./Subtotal.css";
import React from 'react'
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from "../StateProvider";
import { totalPrice } from "../reducer";
export default function Subtotal() {
  const [{cart},dispatch]=useStateValue();
  
    return (
        <div className="subtotal">
             <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
             
              Subtotal ({cart?.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={totalPrice(cart)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />
  <button>Proceed to Buy</button> 
            
        </div>
    )
}
