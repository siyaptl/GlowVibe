import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import { Toolbar, Button, Drawer, List, ListItemButton, ListItemText, IconButton, Divider, Badge } from '@mui/material';
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import ShopTwoRoundedIcon from '@mui/icons-material/ShopTwoRounded';

function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = window.innerWidth <= 450;
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedItem, setSelectedItem] = useState(location.pathname);
  const [cartItemCount, setCartItemCount] = useState(3); 

  const updateCartCount = () => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    const totalQuantity = cartItems.reduce((total, item) => total + (item.quantity || 1), 0);
    setCartItemCount(totalQuantity);
  };  

  useEffect(() => {
    const handleCartUpdate = () => {
      const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
      const totalQuantity = cartItems.reduce((total, item) => total + (item.quantity || 1), 0);
      setCartItemCount(totalQuantity);
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

  return (
    <>
      <Toolbar className='h-81 flex justify-between bg-white'>
        <Typography variant='h6' className='w-104 h-81 flex justify-between'>
          <strong>GLOW VIBE</strong>
        </Typography>

        {/* Desktop Menu */}
        <div className='w-575.16 h-81 justify-center mx-auto text-[15px] lg:flex hidden'>
          {menuItems.map((item) => (
            <Button
              key={item.text}
              onClick={() => navigate(item.path)}
              className='h-[80px] font-normal hover:bg-slate-50 hover:text-[#D999A0]'
              style={{ padding: "15px", color: "#000000" }}
            >
              {item.text}
            </Button>
          ))}
        </div>

        {/* Cart Price, Account Icon & Mobile Menu Icon */}
        <div className='flex justify-end items-center'>

          {/* Account Icon */}
          <IconButton onClick={() => navigate("/login")} className="lg:block hidden">
            <AccountCircleIcon className="lg:text-[#1f1d1f] md:text-[#C8A2C8] text-[#C8A2C8]" />
          </IconButton>

          <span className="hidden lg:block text-black font-bold mr-1 ml-1">$0.00</span>
          
          <IconButton onClick={() => navigate("/cart")} className="lg:block hidden">
          <Badge 
              badgeContent={cartItemCount} 
              sx={{
                '& .MuiBadge-badge': {
                  backgroundColor: 'black',  // Set badge background color to black
                  color: 'white',            // Set text color to white
                  fontSize: '13px',          // Adjust font size
                  width: '19px',             // Set width of the badge
                  height: '19px',            // Set height of the badge
                  minWidth: '19px',
                  borderRadius: '50%',       // Make it a circle
                  top: -3,                    // Adjust vertical position
                  right: -3,                  // Adjust horizontal position
                }
              }}
              overlap="circular"
            >       
           <ShopTwoRoundedIcon className="lg:text-[#1f1d1f] md:text-[#C8A2C8] text-[#C8A2C8]" sx={{width:"21px", height:"21px"}} />
            </Badge>
          </IconButton>

          <IconButton className="lg:hidden" onClick={toggleDrawer(true)} sx={{ display: isMobile ? 'flex' : 'none' }}>
            <MenuIcon className="text-[#C8A2C8]" />
          </IconButton>
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
        >
        </IconButton>

        {/* Menu Items */}
        <List className='bg-[#fff5f7]'>
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
                  backgroundColor: selectedItem === item.path ? "#E6D0E6" : "transparent",
                  "&:hover": { backgroundColor: "#FFF0F5" },
                }}
              >
                <ListItemText primary={item.text} primaryTypographyProps={{ fontSize: "14px", color: "black" }} />
              </ListItemButton>
              {index !== menuItems.length - 1 && <Divider  />}
            </React.Fragment>
          ))}
        </List>
      </Drawer>
    </>
  );
}

export default Header;
