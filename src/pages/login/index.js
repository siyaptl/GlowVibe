import { useState, useEffect } from "react";
import styled from "styled-components";
import { EmailOutlined, LockOutlined } from "@mui/icons-material";
import RepeatIcon from '@mui/icons-material/Repeat';

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
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
    width: 200vmax;
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
    alert("User signed in successfully!");
  };

  // Function to switch between Sign In and Sign Up
  const toggleSignMode = () => {
    setIsSignIn(!isSignIn);
    localStorage.setItem("isSignIn", JSON.stringify(!isSignIn));
  };

  return (
    <Container onClick={() => setIsActive(!isActive)} className={isActive ? "active" : ""}>
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
          <LockOutlined className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#c27e94]" />
          <input
            type="password"
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
  );
}
