
import './App.css';
import Home from "./components/Home";
import Header from './components/Header';
import Checkout from "./components/Checkout";
import Subtotal from './components/Subtotal';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './components/Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import { useEffect } from 'react';
import Payment from './components/Payment';
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";
import Orders from './components/Orders';

const promise=loadStripe("pk_test_51JNjaXSD8eZo8TTULDws5mE3c6hJvLmiO5eQKiu8tZaVNOnQPCzx79DxKrTeCqEAsLGKnveUiEJnRsFE2zpW93LU00MS4dwDOG");
function App() {
  const [{},dispatch]=useStateValue();
  //runs only once when app component loads
  useEffect(() => {
   auth.onAuthStateChanged(authUser=>{
     console.log('The user is ',authUser);
     if(authUser) //user is logged in
     {
      dispatch({
        type:"SET_USER",
        user:authUser
      })
     }
     else //user is logged out
     {
      dispatch({
        type:"SET_USER",
        user:null
      })
     }
   })
  }, [])
  return (
    <div className="App">
      <Router>
        
        <Switch>
        <Route path="/checkout">
        <Header/>
            <Checkout/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/payment">
            <Header/>
            <Elements stripe={promise}>
            <Payment/>
              </Elements>

           
          </Route>
          <Route path="/orders">
            <Header/>
            <Orders/>
          </Route>
          <Route path="/"> {/*default route*/}
          <Header/>
          <Home/>
          </Route>
         

        </Switch>
      </Router>
     
    </div>
  );
}

export default App;
