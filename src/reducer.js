export const initialState=
{
    cart:[],
    user:null
};

export const totalPrice = (cart) => 
  cart?.reduce((amount, item) => item.price + amount, 0);
  {/*amount is accumulator, item is current value, 0 is initial value*/}


const reducer = (state, action) => {
    console.log(action);
    
    switch(action.type)
    {
        case "ADD_TO_CART":
            return{
                ...state,
                cart:[...state.cart,action.item], // spread operator used to display all stored items plus a new addition
            };

        case "REMOVE_FROM_CART":
            //removes using index and not id, so that on clicking delete for a product,other similar products are not deleted.
            //function returns the first index
            const index=state.cart.findIndex((cartItem)=>cartItem.id===action.id);
            let newCart=[...state.cart];
            if(index>=0)
            {
                newCart.splice(index,1);

            }
          else
          {
              console.warn("Cannot remove the product (id: ${action.id}) as it is not in the basket!");
          }
          return{
              ...state,cart:newCart
          };

          case "SET_USER":
            return{
                ...state,
                user:action.user, // spread operator used to display all stored items plus a new addition
            };


            case "EMPTY_BASKET":
                return {
                    ...state,cart:[] //empty out the cart
                };

        default:
            return state;



    }
      
    
  };

  export default reducer;