import React, { useState } from "react";
import "./Login.css"; // Ensure this CSS file is linked

const Login = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isloginpage , setIsLoginPage] = useState(true)

  
let user = document.querySelector("#userid")
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
            <div className={`form-wrapper ${isloginpage ? "is-login" : "is-signup"}`}>
            {/* login form */}  
              { isloginpage ? (
                // login
                <div className={`form-box ${isloginpage ? "" : "hidden"}`}>
                <div className=" ml-[5%] w-[51%] mt-[41px] p-5">
                <p className="text-white text-[41px]">Login</p>
                <hr className="w-[71px]  mb-5 mt-[3px]"></hr>
                <input className="usernamebox" type="text" id="userid" placeholder="Username" />
                <br></br>
                <input className="usernamebox passwordbox" type="password" id="pwid" placeholder="Password" />
                <br />
                <button className="login-btn">Log In</button>
                <button className="signup-btn" onClick={() => {setIsLoginPage(false); user.value = ""; password.value=""}}>Sign Up</button> 
              </div>
              </div>
              ):(
                // signup
                <div className=" ml-[71%] w-[51%] mt-[41px] p-5">
                <p className="text-white text-[41px]">SignUp</p>
                <hr className="w-[71px]  mb-5 mt-[3px]"></hr>
                <input className="usernamebox" type="text"  id="userid" placeholder="Username" />
                <br></br>
                <input className="usernamebox" type="password"  id="pwid" placeholder="Password" />
                <br />
                <button className="login-btn"  onClick={() => {setIsLoginPage(true);user.value = ""; password.value=""}}>Log In</button>
              <button className="signup-btn">Sign Up</button> 
              </div>
              )}
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
