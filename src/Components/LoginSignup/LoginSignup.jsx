
import React, { useState } from 'react'; 
import './LoginSignup.css'

import user_icon from '../Assets/user.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/padlock.png'
import phone_icon from '../Assets/phone-call.png'
import dob_icon from '../Assets/calendar.png'
export const LoginSignup = () => {
const [action,setAction] = useState("Sign Up");
  return (
    <div className= 'container'>
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
        {action === "Sign Up" && (
          <div className="underlinetext">
            Enter your details below to create your account and get started.
          </div>
        )}
        
        </div>  
        <div className="inputs">
        {action==="Login"?<div></div>:<div className="input">
          <img src={user_icon} alt="" />  
          <input type="text" placeholder="Name" />
            </div>  }
          
            <div className="input">
          <img src={email_icon} alt="" />  
          <input type="email" placeholder='Email Id' />
            </div> 
            <div className="input">
          <img src={password_icon} alt="" />  
          <input type="password" placeholder='Password' />
            </div>  
            
         {/* Show additional fields only in "Sign Up" mode */}
         {action === "Sign Up" && (
          <>
            <div className="input">
            <img src={phone_icon} alt="" />
              <input type="tel" placeholder="Phone Number" />
            </div>
            
            <div className="input">
            <img src={dob_icon} alt="" />
              <input type="date" placeholder="Date of Birth" />
            </div>
          </>
        )}
        </div>
        {action==="Sign Up"?<div></div>:<div className="forgot-password">Forgot Password? <span>Click Here!</span></div>}
        
        <div className="submit-container">
            <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
            <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
        </div>
    </div>
  )
}
