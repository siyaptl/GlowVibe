import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import {
  Toolbar,
  Button,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  IconButton,
  Divider,
  Badge,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ShopTwoRoundedIcon from "@mui/icons-material/ShopTwoRounded";
import { ShoppingCart } from "lucide-react";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [cartVisible, setCartVisible] = useState(false); // State for cart visibility
  const isMobile = window.innerWidth <= 450;
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedItem, setSelectedItem] = useState(location.pathname);
  const [cartItemCount, setCartItemCount] = useState(3);
  const [totalPrice, setTotalCartPrice] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [open, setOpen] = useState(false);

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  if (currentUser) {
    console.log("Name:", currentUser.firstname + " " + currentUser.lastname);
    console.log("Email:", currentUser.username);
  } else {
    console.log("No user is currently logged in.");
  }

  const user = JSON.parse(localStorage.getItem("currentUser"));

  useEffect(() => {
    const handleCartUpdate = () => {
      const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
      const totalQuantity = cartItems.reduce(
        (total, item) => total + (item.quantity || 1),
        0
      );
      setCartItemCount(totalQuantity);
      const totalPrice = cartItems.reduce(
        (total, item) => total + (item.quantity || 1) * item.price,
        0
      );
      setTotalCartPrice(totalPrice); // Assuming you have a state to store total price
      setCartItems(cartItems);
    };

    // Fetch the cart count when the component mounts
    handleCartUpdate();

    // Listen for custom cart update events
    window.addEventListener("cartUpdated", handleCartUpdate);

    // Listen for localStorage changes (detects cart updates from anywhere in the app)
    const handleStorageChange = (event) => {
      if (event.key === "cart") {
        handleCartUpdate();
      }
    };
    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("cartUpdated", handleCartUpdate);
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const menuItems = [
    { text: "HOME", path: "/" },
    { text: "SHOP ALL", path: "/shopall" },
    { text: "MAKEUP", path: "/makeup" },
    { text: "SKIN CARE", path: "/skincare" },
    { text: "ABOUT", path: "/about" },
    { text: "CONTACT", path: "/contact" },
  ];
  useEffect(() => {
    if (cartVisible) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = "auto"; // Enable scrolling
    }

    return () => {
      document.body.style.overflow = "auto"; // Cleanup function to ensure scrolling is restored
    };
  }, [cartVisible]);

  function cartSection() {
    setCartVisible(true); // This correctly updates the state
  }

  return (
    <>
      {cartVisible && (
        <>
          {/* Backdrop to disable the rest of the page */}
          <div
            className="fixed inset-0 bg-black opacity-50 z-40 h-screen"
            onClick={() => setCartVisible(false)} // Click on the backdrop to close the cart
          ></div>

          {/* Cart Section */}
          <div
            id="cartparent"
            className="fixed top-0 bg-white h-[100%] right-0 lg:w-[25%] md:w-[41%] w-[81%] py-3 text-center shadow-md z-50"
          >
            <div className="flex justify-between px-5 py-[3px]">
              <p className="tracking-wider text-xl flex items-center gap-2">
                <ShoppingCart size={23} className="mr-1" />
                Shopping Cart
              </p>{" "}
              <button
                className="text-3xl text-gray-500 hover:text-gray-700"
                onClick={() => setCartVisible(false)}
              >
                &times;
              </button>
            </div>
            <hr></hr>

            <div className="overflow-y-scroll h-[63%]">
              {cartItems.length === 0 ? (
                <div className="flex items-center justify-center h-64 text-gray-500 text-[23px] tracking-widest font-medium">
                  Your cart is empty
                </div>
              ) : (
                cartItems.map((item, index) => (
                  <div key={item.id} className="h-28 border-t-[1px] pt-[15px]">
                    <div className="px-5">
                      <div className="flex items-center space-x-4">
                        {/* Product Image */}
                        <img
                          src={item.innerimage1}
                          alt="Product"
                          className="w-[71px] h-[71px] object-cover border"
                        />

                        {/* Product Name and Price */}
                        <div className="flex justify-between w-full">
                          <div className="w-full">
                            <div className="flex flex-col text-left">
                              <span className="text-sm font-medium tracking-widest w-[91%]">
                                {item.name}
                              </span>
                              <span className="text-sm text-gray-700 mt-[7px] tracking-wider flex">
                                {item.quantity}
                                <p
                                  className="mx-[7px] my-auto"
                                  style={{ height: "28px" }}
                                >
                                  &times;
                                </p>
                                ${item.price}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}

              {/* footer */}

              <div className="border-gray-200 p-4 w-[100%] px-5 absolute bottom-0">
                {cartItems.length === 0 ? (
                  <button
                    onClick={() => {
                      setCartVisible(false);
                      navigate("/shopall"); // Navigate to shopall page
                    }}
                    className="w-[100%] bg-black text-white border-t-0 py-3 px-7 my-3 font-medium hover:bg-[#c27e94] hover:text-black transition-colors"
                  >
                    CONTINUE TO SHOPPING
                  </button>
                ) : (
                  <>
                    <div className="flex justify-between items-center mb-4 border-t pt-5">
                      <span className="text-base font-medium text-gray-900">
                        Subtotal:
                      </span>
                      <span className="text-base font-medium text-gray-900">
                        ${totalPrice.toFixed(2)}
                      </span>
                    </div>

                    <button
                      onClick={() => {
                        setCartVisible(false); // Close the cart
                        navigate("/cart");
                        window.scrollTo(0, 0); // Navigate after closing
                      }}
                      className="w-[100%] bg-gray-700 text-white py-3 px-5 font-medium mb-2 hover:bg-gray-800 transition-colors"
                    >
                      VIEW CART
                    </button>

                    <button className="w-[100%] bg-gray-700 text-white py-3 px-5 font-medium hover:bg-gray-800 transition-colors">
                      CHECKOUT
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </>
      )}

      <Toolbar className="h-81 flex justify-between bg-white">
        <Typography
          variant="h6"
          className="lg:w-[21%] md:w-[21%] w-[45%] h-81 flex justify-between cursor-pointer"
        >
          <strong onClick={() => navigate(`/`)}>GLOW VIBE</strong>
        </Typography>

        {/* Desktop Menu */}
        <div className="w-[51%] h-81 justify-center mx-auto xl:space-x-5 lg:space-x-1 text-[15px] lg:flex hidden">
          {menuItems.map((item) => (
            <Button
              key={item.text}
              onClick={() => navigate(item.path)}
              className="h-[80px] font-normal hover:bg-slate-50 hover:text-[#D999A0]"
              style={{ padding: "px", color: "#000000" }}
            >
              {item.text}
            </Button>
          ))}
        </div>

        {/* Cart Price, Account Icon & Mobile Menu Icon */}
        <div className="flex justify-end items-center w-[15%] mx-auto space-x-3 mr-1">
          {/* Account Icon */}
          <div className="relative group inline-block cursor-pointer">
            <AccountCircleIcon
              onClick={() => navigate("/login")}
              className="lg:block hidden hover:md:text-[#C8A2C8] md:text-gray-700 lg:text-[#1f1d1f] text-gray-700"
            />

            {/* Tooltip */}
            {/* <div className="absolute flex space-x-3 left-1/2 -translate-x-1/2 mt-[5px] bg-pink-100 rounded-md text-gray-900 py-5 px-5 z-10 shadow-lg">
                <div>
                  <AccountBoxIcon className="text-gray-700 w-[71px] h-[51px]" />
                </div>
                {/* User Info */}
            {/* <div className="flex flex-col ml-3 flex-grow">
                  <span className="font-semibold text-sm">
                    {user?.firstname} {user?.lastname}
                  </span>
                  <span className="text-xs text-gray-500">
                    {user?.username}
                  </span>
                  <button onClick={() => navigate("/login")}>Login</button>
                </div>
              // </div> */}
          </div>

          <span className="hidden lg:block text-black font-bold">
            ${totalPrice.toFixed(2)}
          </span>

          <Badge
            onClick={cartSection}
            badgeContent={cartItemCount}
            sx={{
              "& .MuiBadge-badge": {
                backgroundColor: "black", // Set badge background color to black
                color: "white", // Set text color to white
                fontSize: "11px", // Adjust font size
                width: "17px", // Set width of the badge
                height: "17px", // Set height of the badge
                minWidth: "17px",
                borderRadius: "50%", // Make it a circle
                top: -3, // Adjust vertical position
                right: -3, // Adjust horizontal position
              },
            }}
            className="lg:block hidden"
            overlap="circular"
          >
            <ShopTwoRoundedIcon className="lg:text-[#1f1d1f] hover:md:text-[#C8A2C8] md:text-gray-700 text-gray-700" />
          </Badge>

          <MenuIcon
            onClick={toggleDrawer(true)}
            className="lg:hidden text-gray-700 hover:text-[#C8A2C8]"
            sx={{ display: isMobile ? "flex" : "none" }}
          />
        </div>
      </Toolbar>

      {/* Drawer (Sidebar Menu) for Mobile View */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        sx={{
          "& .MuiDrawer-paper": {
            width: "100vw",
            height: "auto",
            marginTop: "61px",
          },
        }}
      >
        {/* Close Button */}
        <IconButton
          onClick={toggleDrawer(false)}
          sx={{ position: "absolute", top: 10, right: 10 }}
        ></IconButton>

        {/* Menu Items */}
        <List className="bg-[#fff5f7]">
          {menuItems.map((item, index) => (
            <React.Fragment key={index}>
              <ListItemButton
                component={Link}
                to={item.path}
                onClick={() => {
                  setSelectedItem(item.path);
                  toggleDrawer(false)();
                }}
                sx={{
                  backgroundColor:
                    selectedItem === item.path ? "#E6D0E6" : "transparent",
                  "&:hover": { backgroundColor: "#FFF0F5" },
                }}
              >
                <ListItemText
                  primary={item.text}
                  primaryTypographyProps={{ fontSize: "14px", color: "black" }}
                />
              </ListItemButton>
              {index !== menuItems.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </List>
      </Drawer>
    </>
  );
}

export default Header;
