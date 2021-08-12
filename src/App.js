
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
           <Payment/>
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
