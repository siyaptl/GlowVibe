import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../Redux/authSlice";
import loginpic from "../../assets/imm.jpeg";
import { useNavigate } from "react-router-dom";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoginPage, setIsLoginPage] = useState(true);
  const [credentials, setCredentials] = useState({
    firstname: "",
    lastname: "",
    username: "",
    contact: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({
    firstname: "",
    lastname: "",
    username: "",
    contact: "",
    password: "",
    confirmPassword: "",
  });
  const [loginError, setLoginError] = useState("");
  const [showWelcome, setShowWelcome] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);

  const validateEmail = (email) =>
    /^[a-zA-Z0-9._%+-]{1,64}@(gmail|yahoo|hotmail|outlook|icloud|protonmail|zoho)\.(com|in|co\.in|org|net)$/.test(
      email
    );
  const validatePassword = (password) =>
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    );

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true); // Start fade-out
      setTimeout(() => {
        setShowWelcome(false); // Hide welcome message after fade-out
      }, 500); // Match duration
    }, 1500); // 2.5s delay before fade-out starts

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!showWelcome) {
      const timer = setTimeout(() => {
        setShowLoginForm(true);
      }, 500); // Small delay to ensure a smooth transition

      return () => clearTimeout(timer);
    }
  }, [showWelcome]); // Depend on showWelcome state

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleLogin = () => {
    let newErrors = {
      firstname: "",
      lastname: "",
      username: "",
      password: "",
      contact: "",
      confirmPassword: "",
    };
    setLoginError("");

    // validations
    if (!credentials.username.trim()) {
      newErrors.username = "Required";
    } else if (!validateEmail(credentials.username)) {
      newErrors.username = "Invalid email";
    }

    if (!credentials.password.trim()) {
      newErrors.password = "Required";
    } else if (!isLoginPage && !validatePassword(credentials.password)) {
      newErrors.password = "Password must be complex";
    }

    if (!isLoginPage) {
      if (!credentials.firstname.trim()) {
        newErrors.firstname = "Required";
      } else if (
        credentials.firstname.length < 2 ||
        !/^[A-Za-z]+$/.test(credentials.firstname)
      ) {
        newErrors.firstname = "At least 2 characters";
      }

      if (!credentials.lastname.trim()) {
        newErrors.lastname = "Required";
      } else if (
        credentials.lastname.length < 2 ||
        !/^[A-Za-z]+$/.test(credentials.lastname)
      ) {
        newErrors.lastname = "At least 2 characters";
      }

      if (!credentials.contact.trim()) {
        newErrors.contact = "Required";
      } else if (!/^\d{10}$/.test(credentials.contact)) {
        newErrors.contact = "Must be a valid 10-digit number";
      }

      if (!credentials.confirmPassword.trim()) {
        newErrors.confirmPassword = "Required";
      } else if (!credentials.password.trim()) {
        newErrors.confirmPassword = "Please enter password first";
      } else if (credentials.password !== credentials.confirmPassword) {
        newErrors.confirmPassword = "Passwords do not match";
      }
    }
    setErrors(newErrors);
    if (Object.values(newErrors).some((error) => error)) return;

    let users = JSON.parse(localStorage.getItem("users")) || [];

    if (isLoginPage) {
      const existingUser = users.find(
        (user) =>
          user.username === credentials.username &&
          user.password === credentials.password
      );

      if (existingUser) {
        dispatch(
          login({
            username: credentials.username,
            password: credentials.password,
          })
        );
        alert("Login successful!");
        navigate("/");
      } else {
        setLoginError("Invalid email or password");
      }
    } else {
      const isUserExists = users.some(
        (user) => user.username === credentials.username
      );

      if (isUserExists) {
        alert("An account with this email already exists.");
      } else {
        users.push({
          firstname: credentials.firstname,
          lastname: credentials.lastname,
          username: credentials.username,
          contact: credentials.contact,
          password: credentials.password,
        });
        localStorage.setItem("users", JSON.stringify(users));
        alert("Signup successful!");
        setIsLoginPage(true);
        setCredentials({
          firstname: "",
          lastname: "",
          username: "",
          password: "",
          contact: "",
          confirmPassword: "",
        });
      }
    }
  };

  return (
    <div
      className={`w-full h-[100vh] mx-auto shadow-md bg-cover bg-center`}
      style={{ backgroundImage: `url(${loginpic})` }}
    >
      {/* <div className="absolute bottom-0 right-0 w-[300px] h-auto max-h-[40vh] sm:max-h-[35vh] lg:max-h-[50vh]"> */}
      {/* <img src={loginpic} alt="Login" className="w-full h-full object-cover" /> */}
      {/* </div> */}

      <ArrowBackOutlinedIcon
        onClick={() => navigate(-1)}
        className="absolute top-8 left-7 text-gray-500 z-50 cursor-pointer hover:text-gray-700 hover:bg-gray-100"
        sx={{ borderRadius: "50%", height: "31px", width: "31px" }}
      />

      {/* welcome message */}
      {showWelcome && (
        <div
          className={`w-[51%] h-[31%] mx-auto flex justify-center items-center transition-opacity duration-500 ${
            fadeOut ? "opacity-0" : "opacity-100"
          }`}
        >
          <h1 className="text-[42px] mt-[25vh] text-center text-gray-700">
            Welcome to the{" "}
            <span className="text-gray-900 font-semibold">GlowVibe</span>
          </h1>
        </div>
      )}

      {/* lofin and signup page */}
      {!showWelcome && (
        <div
          className={`transition-opacity transform duration-1000 ease-in-out ${
            showLoginForm
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-5"
          }`}
        >
          <div className="flex justify-center items-center h-full">
            <div className="flex relative flex-row xl:w-[411px] md:w-[411px] lg:w-[511px] w-[89%] h-[100%] xl:p-0 md:p-0 lg:p-0 p-0 py-1 outline outline-[3px] outline-blue-50 rounded-sm shadow-md xl:mt-[17vh] md:mt-[9vh] lg:mt-[9vh] mt-[111px] justify-center items-start">
              <p className="text-gray-700 absolute -top-[23px] left-[11%] bg-[#d5c1d2] px-[7px] rounded-sm font-semibold text-4xl">
                {isLoginPage ? "Login" : "Signup"}
              </p>
              <div className="w-full flex flex-col justify-center items-left py-7 xl:px-5 md:px-5 lg:px-5 px-3">
                {!isLoginPage && (
                  <div className="flex justify-between">
                    <div className="flex flex-col w-[49%]">
                      <input
                        className="mt-5 h-10 w-[100%] xl:rounded-full lg:rounded-full md:rounded-full rounded-md bg-white text-gray-700 opacity-95 outline-none  pl-[15px] pr-[15px]"
                        type="text"
                        name="firstname"
                        placeholder="First Name"
                        value={credentials.firstname}
                        onChange={handleInputChange}
                      />
                      <div>
                        {errors.firstname && (
                          <p className="text-[11px] text-right pr-[15px] tracking-widest text-red-700">
                            {errors.firstname}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-col w-[49%]">
                      <input
                        className="mt-5 h-10 w-[100%] xl:rounded-full lg:rounded-full md:rounded-full rounded-md bg-white text-gray-700 opacity-95 outline-none  pl-[15px] pr-[15px]"
                        type="text"
                        name="lastname"
                        placeholder="Last Name"
                        value={credentials.lastname}
                        onChange={handleInputChange}
                      />
                      {errors.lastname && (
                        <p className="text-[11px] ml-auto mr-[15px] tracking-widest text-red-700">
                          {errors.lastname}
                        </p>
                      )}
                    </div>
                  </div>
                )}

                <input
                  className="mt-5 h-10 w-full xl:rounded-full lg:rounded-full md:rounded-full rounded-md bg-white text-gray-700 opacity-95 outline-none  pl-[15px]"
                  type="text"
                  name="username"
                  placeholder="Email"
                  value={credentials.username}
                  onChange={handleInputChange}
                />
                {errors.username && (
                  <p className="text-[11px] ml-auto mr-[15px] tracking-widest text-red-700">
                    {errors.username}
                  </p>
                )}

                {!isLoginPage && (
                  <input
                    className="mt-5 h-10 w-full xl:rounded-full lg:rounded-full md:rounded-full rounded-md  bg-white text-gray-700 opacity-95 outline-none pl-[15px]"
                    type="contact"
                    name="contact"
                    placeholder="Contact No"
                    value={credentials.contact}
                    onChange={handleInputChange}
                  />
                )}
                {!isLoginPage && errors.contact && (
                  <p className="text-[11px] ml-auto mr-[15px] tracking-widest text-red-700">
                    {errors.contact}
                  </p>
                )}

                <input
                  className="mt-5 h-10 w-full xl:rounded-full lg:rounded-full md:rounded-full rounded-md  bg-white text-gray-700 opacity-95 outline-none pl-[15px]"
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={credentials.password}
                  onChange={handleInputChange}
                />
                {errors.password && (
                  <p className="text-[11px] ml-auto mr-[15px] tracking-widest text-red-700">
                    {errors.password}
                  </p>
                )}
                {isLoginPage && loginError && (
                  <p className="text-[11px] ml-auto mr-[15px] tracking-widest text-red-700">
                    {loginError}
                  </p>
                )}

                {!isLoginPage && (
                  <>
                    <input
                      className="mt-5 h-10 w-full xl:rounded-full lg:rounded-full md:rounded-full rounded-md bg-white text-gray-700 opacity-95 outline-none pl-[15px]"
                      type="password"
                      name="confirmPassword"
                      placeholder="Confirm Password"
                      value={credentials.confirmPassword}
                      onChange={handleInputChange}
                    />
                    {errors.confirmPassword && (
                      <p className="text-[11px] ml-auto mr-[15px] tracking-widest text-red-700">
                        {errors.confirmPassword}
                      </p>
                    )}
                  </>
                )}
                {isLoginPage ? (
                  <button className="tracking-wider cursor-pointer text-gray-700 text-sm mt-[13px] ml-auto mr-[13px]">
                    Forgot Password?
                  </button>
                ) : (
                  ""
                )}
                <button
                  className="h-10 xl:w-[67%] md:w-[67%] lg:w-[67%] w-[100%] mx-auto bg-[#5A4D66] text-white bg-opacity-75 hover:bg-[#4d3a54] rounded-full mt-5"
                  onClick={handleLogin}
                >
                  {isLoginPage ? "Log In" : "Sign Up"}
                </button>

                {isLoginPage ? (
                  <p className="tracking-wider cursor-pointer text-gray-700 text-sm mt-7">
                    Don't have an account?{" "}
                    <span
                      className="text-[#216395] hover:text-[#4d3a54] tracking-wider underline underline-offset-[1.5px]"
                      onClick={() => {
                        setIsLoginPage(!isLoginPage);
                        setErrors({
                          username: "",
                          password: "",
                          confirmPassword: "",
                        });
                      }}
                    >
                      Sign Up
                    </span>
                  </p>
                ) : (
                  <p className="tracking-wider cursor-pointer text-gray-700 text-sm mt-7">
                    Already a member?{" "}
                    <span
                      className="text-[#216395] hover:text-[#4d3a54] tracking-wider underline underline-offset-[1.5px]"
                      onClick={() => {
                        setIsLoginPage(!isLoginPage);
                        setErrors({
                          username: "",
                          password: "",
                          confirmPassword: "",
                        });
                      }}
                    >
                      Log in
                    </span>
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
