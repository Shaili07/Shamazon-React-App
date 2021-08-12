import "./Subtotal.css";
import React from 'react'
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from "../StateProvider";
import { totalPrice } from "../reducer";
import { useHistory } from "react-router-dom";
export default function Subtotal() {
  const [{cart},dispatch]=useStateValue();
  const history=useHistory();
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
  <button onClick={e=>history.push('/payment')}>Proceed to Buy</button> 
            
        </div>
    )
}
