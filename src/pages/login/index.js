import React, { useState } from "react";
import "./Login.css"; // Ensure this CSS file is linked
import loginpic from '../../assets/loginimg.png';

const Login = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isLoginPage, setIsLoginPage] = useState(true);
  
let password = document.querySelector("#pwid")

return (
    <>
      {/* Wrapper for the login section */}
      <div className="wrapper">
        {/* Login Section (Initially hidden, slides down on interaction) */}
        <div className={`login-text ${isExpanded ? "expand" : ""}`}>  
              {/*  on expand  */}
            <div className={`${isExpanded ? "block" : "hidden"}`}>

              {/* Transition container for smooth effect */}
            <div className={`transition-container`}>
              <div className={`form-wrapper ${isLoginPage ? "is-login" : "is-signup"}`}>
              
              {/* login form */} 
              <div className={`textbox `}>
      {/* Container Box */}
      <div className="flex flex-row text-white xl:w-[700px] md:w-[700px] lg:w-[700px] w-[99%] h-[520px] justify-center">
        
        {/* Form Section */}
        <div className="xl:w-1/2 md:w-1/2 lg:w-1/2 flex flex-col justify-center items-left p-6">
          <p className="text-white text-[41px]">{isLoginPage ? "Login" : "Signup"}</p>
          <hr className="w-[71px] mb-5 mt-[3px]"></hr>

          {/* Input Fields */}
          <input
            className="usernamebox"
            type="text"
            placeholder="Username"
          />
          <input
            className="usernamebox"
            type="password"
            placeholder="Password"
            value={password}
          />

          {/* Extra Input for Signup */}
          {!isLoginPage && (
            <input
            className="usernamebox"
              type="password"
              placeholder="Confirm Password"
            />
          )}

          {/* Buttons */}
          <div className="flex">
            <button 
            className="login-btn"
            >
              {isLoginPage ? "Log In" : "Sign Up"}
            </button>
            <button
              className="signup-btn"
              onClick={() => setIsLoginPage(!isLoginPage)}
            >
              {isLoginPage ? "Sign Up" : "Log In"}
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-1/2 hidden justify-center items-center p-4 xl:flex lg:flex md:flex">
          <img src={loginpic} className="h-[301px] w-[323px]" alt="LOGIN" />
        </div>
      </div>
    </div>

                </div>
              </div>
            </div>

              {/* Button to expand form */}
            <button className="cta mx-auto" onClick={() => setIsExpanded(!isExpanded)}>
              <i className="fas fa-chevron-down fa-1x"></i>
            </button>
        </div>

        {/* Call to Action Section */}
        <div className="call-text">
          <h1>
            Welcome to the <span>GlowVibe</span>
          </h1>
        </div>
      </div>
    </>
  );
};

export default Login;
