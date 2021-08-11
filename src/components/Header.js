import "./Header.css";
import React from 'react';
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { DragHandle } from "@material-ui/icons";
import { auth } from "../firebase";


export default function Header() {
  const [{cart,user},dispatch]=useStateValue();
  const handleAuthentication=()=>
  {
       if(user)
       {
         auth.signOut();
       }
  }
   const name=user?user.email.match(/^([^@]*)@/)[1]:null;
  
    return (
        <div className="header">
            <Link to="/">
             <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
        </Link>

        <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
         </div>

         <div className="header__nav">

       
          <Link to={!user && "/login"}> 
  
          <div className="header__option" onClick={handleAuthentication}>
          <span className="header__optionLineOne">Hello {user?name:"Guest"} </span>
          <span className="header__optionLineTwo">{user? 'Sign Out': 'Sign In'}</span> </div></Link>
         
       
     
        <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>

        <div className="header__optionBasket">
         <Link to="./checkout">
         <ShoppingCartOutlinedIcon />
            <span className="header__optionLineTwo header__basketCount">
            {cart?.length}
            </span>
         </Link>
         
    
           
        </div>

        </div>
        </div>
    )
}
