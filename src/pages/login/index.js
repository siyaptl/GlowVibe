import { useState, useEffect } from "react";
import styled from "styled-components";
import { EmailOutlined, LockOutlined } from "@mui/icons-material";
import LockOpenIcon from '@mui/icons-material/LockOpen';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';import RepeatIcon from '@mui/icons-material/Repeat';
import {  Card } from "@mui/material";
import img from '../../assets/loginlogo.jpg'
import bg from '../../assets/loginbg.jpeg';
import { useNavigate } from "react-router-dom";

// for lg screen
const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: visible;
  font-family: "Raleway", sans-serif;
  min-height: 100vh;

  &:hover,
  &:active {
    .top,
    .bottom {
      &:before,
      &:after {
        margin-left: 200px;
        transform-origin: -200px 50%;
        transition-delay: 0s;
      }
    }

    .center {
      opacity: 1;
      transition-delay: 0.2s;
    }
  }
`;

const Layer = styled.div`
  &:before,
  &:after {
    content: "";
    display: block;
    position: absolute;
    width: 100vmax;
    height: 200vmax;
    top: 50%;
    left: 50%;
    margin-top: -100vmax;
    transform-origin: 0 50%;
    transition: all 0.5s cubic-bezier(0.445, 0.05, 0, 1);
    z-index: 10;
    opacity: 0.65;
    transition-delay: 0.2s;
  }
`;

const Top = styled(Layer)`
  &:before {
    transform: rotate(45deg);
    background: #e46569;
  }
  &:after {
    transform: rotate(135deg);
    background: #ecaf81;
  }
`;

const Bottom = styled(Layer)`
  &:before {
    transform: rotate(-45deg);
    background: #60b8d4;
  }
  &:after {
    transform: rotate(-135deg);
    background: #3745b5;
  }
`;

const Center = styled.div`
  position: absolute;
  width: 400px;
  height: 400px;
  top: 50%;
  left: 50%;
  margin-left: -200px;
  margin-top: -200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  opacity: 0;
  transition: all 0.5s cubic-bezier(0.445, 0.05, 0, 1);
  transition-delay: 0s;
  color: #333;

  input {
    width: 100%;
    padding: 15px;
    margin: 5px;
    border-radius: 1px;
    border: 1px solid #ccc;
    font-family: inherit;
  }
`;

export default function SignIn() {
  const [isActive, setIsActive] = useState(false);
  const [isSignIn, setIsSignIn] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showpassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const [confirmpassword, setConfirmPassword] = useState("");

  // Load stored state from localStorage
  useEffect(() => {
    const storedSignInState = localStorage.getItem("isSignIn");
    if (storedSignInState !== null) {
      setIsSignIn(JSON.parse(storedSignInState));
    }

    const storedEmail = localStorage.getItem("email");
    if (storedEmail) setEmail(storedEmail);

    const storedPassword = localStorage.getItem("password");
    if (storedPassword) setPassword(storedPassword);

    const storedConfirmPassword = localStorage.getItem("confirm password");
    if (storedConfirmPassword) setPassword(storedConfirmPassword);
     }, []);
    

  // Function to handle sign in
  const handleSignIn = () => {
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    localStorage.setItem("confirmpassword", confirmpassword);
    localStorage.setItem("isLoggedIn", true);
    alert(`User ${isSignIn ? "signed in" : "signed up"} successfully!`);
  };

  // Function to switch between Sign In and Sign Up
  const toggleSignMode = () => {
    setIsSignIn(!isSignIn);
    localStorage.setItem("isSignIn", JSON.stringify(!isSignIn));
  };
  const passwordvisibility = () => {
    console.log("ok")
    setShowPassword((prev)=>!prev)

  }

  return (
    <>
    <Container onClick={() => setIsActive(!isActive)} className={`${isActive ? "active" : ""} lg:flex md:hidden hidden relative`}>
    <ArrowBackOutlinedIcon onClick={()=>{navigate(-1)}} className="absolute top-5 left-5 text-white z-50 cursor-pointer hover:bg-[#8a5067] transition-all duration-300 ease-in-out" sx={{borderRadius:"50%", height:"31px", width:"31px"}}></ArrowBackOutlinedIcon>
      <Top className="top" />
      <Bottom className="bottom" />
      <Center className="center">
        {isSignIn ? (
          <h2 className="text-[27px] mb-5 mt-16 text-[#A3677D] font-semibold tracking-wider uppercase">
            Sign In
          </h2>
        ) : (
          <h2 className="text-[27px] mb-5 mt-16 text-[#A3677D] font-semibold tracking-wider uppercase">
            Sign Up
          </h2>
        )}
        <div className="relative w-full">
          <EmailOutlined className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#c27e94]" />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 pl-12 border border-gray-300 rounded-md font-inherit focus:outline-none focus:ring-2 focus:ring-[#c27e94] focus:border-transparent shadow-sm transition-all duration-300"
          />
        </div>

        <div className={`relative w-full my-${isSignIn ? '5' : '0'}`}>
        {showpassword ? <LockOpenIcon onClick={passwordvisibility} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#c27e94]" /> : <LockOutlined onClick={passwordvisibility} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#c27e94]" />}
          <input 
          id="pw"
            type={showpassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 pl-12 border border-gray-300 rounded-md font-inherit focus:outline-none focus:ring-2 focus:ring-[#c27e94] focus:border-transparent shadow-sm transition-all duration-300"
          />
        </div>

   {/* confirm password */}
   {!isSignIn && (
          <div className="relative w-full">
            <RepeatIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#c27e94]" />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmpassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-4 pl-12 my-2 border border-gray-300 rounded-md font-inherit focus:outline-none focus:ring-2 focus:ring-[#c27e94] focus:border-transparent shadow-sm transition-all duration-300"
            />
          </div>
        )}

        <button
          className="w-[50%] py-3 mt-3 text-lg font-semibold text-white bg-[#A3677D] rounded-sm shadow-md transition-all duration-300 hover:bg-[#3B658D] focus:outline-none focus:ring-2 focus:ring-[#8B5668]"
          onClick={handleSignIn}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="mt-[5px] text-gray-500 font-medium">Or</p>

        <p
          className="w-[50%] text-center text-lg font-semibold text-[#A3677D] hover:text-[#3B658D] cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#A3677D]"
          onClick={toggleSignMode}
        >
          {isSignIn ? "Sign Up" : "Sign In"}
        </p>
        <h2>&nbsp;</h2>
      </Center>
    </Container>

   {/* mobile and tablet view */}
        <Card className="px-7 pt-[73px] w-full h-screen shadow-xl rounded-2xl bg-white bg-cover bg-center lg:hidden" style={{ backgroundImage: `url(${bg})` }}>
          <ArrowBackOutlinedIcon className="absolute top-5 left-5 text-white z-50 cursor-pointer hover:bg-[#8a5067] transition-all duration-300 ease-in-out" onClick={()=>navigate(-1)} sx={{borderRadius:"50%", height:"25px", width:"25px"}}></ArrowBackOutlinedIcon>
        <div className="flex justify-center items-center h-fit mb-[-41px]">
            {/* Placeholder for Logo */}
<div className="flex justify-center">
  <img 
    src={img} 
    alt="Logo" 
    width="101" 
    height="101" 
    className="w-[101px] h-[101px] rounded-full object-cover border border-gray-300 shadow-md"
  />
</div>

          </div>
          {isSignIn ? (
          <h2 className="text-[31px] mb-5 mt-16 text-[#A3677D] font-semibold tracking-wider uppercase text-center">
            Sign In
          </h2>
        ) : (
          <h2 className="text-[31px] mb-5 mt-16 text-[#A3677D] font-semibold tracking-wider uppercase text-center">
            Sign Up
          </h2>
        )}
         <div className="relative md:w-[75%] my-5 mx-auto">
          <EmailOutlined className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#c27e94]" />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 pl-3 border border-gray-300 rounded-md font-inherit focus:outline-none focus:ring-2 focus:ring-[#c27e94] focus:border-transparent shadow-sm transition-all duration-300"
          />
        </div>

        <div className={`relative md:w-[75%] my-${isSignIn ? '5' : '0'} mx-auto`}>
        {showpassword ? <LockOpenIcon onClick={passwordvisibility} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#c27e94]" /> : <LockOutlined onClick={passwordvisibility} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#c27e94]" />}
          <input 
          id="pw"
            type={showpassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 pl-3 border border-gray-300 rounded-md font-inherit focus:outline-none focus:ring-2 focus:ring-[#c27e94] focus:border-transparent shadow-sm transition-all duration-300"
          />
          </div>

   {/* confirm password */}
   {!isSignIn && (
          <div className="relative md:w-[75%] my-3 mx-auto">
            <RepeatIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#c27e94]" />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmpassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-3 pl-3 my-2 border border-gray-300 rounded-md font-inherit focus:outline-none focus:ring-2 focus:ring-[#c27e94] focus:border-transparent shadow-sm transition-all duration-300"
            />
          </div>
        )}

      <div className="flex justify-center">
        <button
          className="w-[41%] py-[13px] mb-3 mt-3 text-lg font-semibold text-white bg-[#A3677D] rounded-md shadow-md transition-all duration-300 hover:bg-[#3B658D] focus:outline-none focus:ring-2 focus:ring-[#8B5668]"
          onClick={handleSignIn}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
      </div>

        <p className="mt-[5px] mb-[7px] md:text-gray-500 text-white md:bg-white w-[51px] mx-auto rounded-sm font-medium text-center">Or</p>

        <p
          className="md:w-[15%] w-[31%] mx-auto text-center text-lg font-semibold md:bg-[#A3677D] rounded-md md:mt-5 md:p-3 md:text-white text-[#A3677D] hover:text-[#3B658D] cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#A3677D]"
          onClick={toggleSignMode}
        >
          {isSignIn ? "Sign Up" : "Sign In"}
        </p>
        <h2>&nbsp;</h2>
        </Card>

      </>
    
  );
}
