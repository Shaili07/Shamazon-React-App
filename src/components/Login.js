import "./Login.css";
import React, { useState } from 'react'
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase";


export default function Login() {

    const [email,setEmail]=useState('');
    const [password, setPassword]=useState('');
    const history=useHistory();
    const signIn=e=>
    {
        e.preventDefault(); //prevents page from refreshing 
        auth.signInWithEmailAndPassword(email,password).then((auth)=>{history.push('/')})
        .catch(error=>alert(error.message));
    }
    const register=e=>
    {
        e.preventDefault();  
        auth.createUserWithEmailAndPassword(email,password).then((auth)=>{
            console.log(auth);
            if(auth)
            {
                history.push('/');  //redirects to home page
            }
        })
        .catch(error=>alert(error.message));
    }
    return (
        <div className="login">
            <Link to="/">
            <img className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"/>
            </Link> 

            <div className="login__container">
            <h2>Sign In</h2>
            <form>
                <h6>E-mail</h6>
                <input type="text" value={email} onChange={e=>setEmail(e.target.value)}/>

                <h6>Password</h6>
                <input type="password" value={password} onChange={e=>setPassword(e.target.value)}/>

                <button className="login__signInButton" type="submit" onClick={signIn}>Continue</button> 
             </form>
             <p>   By signing-in you agree to the SHAILI's AMAZON CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.</p>
        </div>
        <p>New to Amazon?</p>
        <button className="login__registerButton" onClick={register}>Create your Amazon account</button>
        
        </div>

        
    )
}
