import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import { Toolbar, Button, Drawer, List, ListItemButton, ListItemText, IconButton, Divider } from '@mui/material';
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = window.innerWidth <= 450;
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedItem, setSelectedItem] = useState(location.pathname);

  // Toggle drawer function
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

        {/* Cart Price & Mobile Menu Icon */}
        <div className='flex justify-end items-center'>
          <span className="hidden lg:block text-black font-bold mr-1">$0.00</span>

          <IconButton className="lg:hidden" onClick={toggleDrawer(true)} sx={{ display: isMobile ? 'flex' : 'none' }}>
            <MenuIcon className="text-[#e6b4be]" />
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
            marginTop: "64px",
          },
        }}
      >
        {/* Close Button */}
        <IconButton
          onClick={toggleDrawer(false)}
          sx={{ position: "absolute", top: 10, right: 10 }}
        >
          <CloseIcon />
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
                  backgroundColor: selectedItem === item.path ? "#ffe4e6" : "transparent",
                  "&:hover": { backgroundColor: "#fecdd3" },
                }}
              >
                <ListItemText primary={item.text} primaryTypographyProps={{ fontSize: "14px", color: "black" }} />
              </ListItemButton>
              {index !== menuItems.length - 1 && <Divider sx={{ height: "1px" }} />}
            </React.Fragment>
          ))}
        </List>
      </Drawer>
    </>
  );
}

export default Header;
