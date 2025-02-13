import Typography from '@mui/material/Typography';
import { Toolbar } from '@mui/material';
import {Button , Drawer, List, ListItem, ListItemText, IconButton } from '@mui/material';
import MenuIcon from "@mui/icons-material/Menu";
import {Link} from '@mui/material';
import {useState} from 'react'

function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = window.innerWidth <= 450
  // Toggle drawer function
  const toggleDrawer = (open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setDrawerOpen(open);
  };
  return (
    <>
      <Toolbar className='h-81 flex justify-between bg-white'>
        <Typography variant='h6' className='w-104 h-81 flex justify-between'>
          <strong>GLOW VIBE</strong>
        </Typography>
        <div className='w-575.16 h-81 justify-center mx-auto text-[15px] lg:flex hidden'>
          <Button component={Link} to='/' className='h-[80px] font-normal hover:bg-slate-50 hover:text-fuchsia-400' style={{padding:"15px"}} color='#000000'>SHOP ALL</Button>
          <Button component={Link} to='/' className='h-[80px] font-normal hover:bg-slate-50 hover:text-fuchsia-400' style={{padding:"15px"}} color='#000000'>MAKEUP</Button>
          <Button component={Link} to='/' className='h-[80px] font-normal hover:bg-slate-50 hover:text-fuchsia-400' style={{padding:"15px"}} color='#000000'>SKIN CARE</Button>
          <Button component={Link} to='/' className='h-[80px] font-normal hover:bg-slate-50 hover:text-fuchsia-400' style={{padding:"15px"}} color='#000000'>HAIR CARE</Button>
          <Button component={Link} to='/' className='h-[80px] font-normal hover:bg-slate-50 hover:text-fuchsia-400' style={{padding:"15px"}} color='#000000'>ABOUT</Button>
          <Button component={Link} to='/' className='h-[80px] font-normal hover:bg-slate-50 hover:text-fuchsia-400' style={{padding:"15px"}} color='#000000'>CONTACT</Button>
        </div>
       {/* Cart Price (Hidden on Small Screens) */}
       <div className='flex justify-end items-center'>
       <span className=" hidden lg:block text-black font-bold mr-1">$0.00</span>

        {/* Mobile Menu Icon (Hidden on Large Screens) */}
        <IconButton className="lg:hidden" onClick={toggleDrawer(true)} sx={{
          display: isMobile ? 'flex' : 'none'
        }}>
          <MenuIcon className="text-black" />
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
            width: "100vw", // Full width
            maxHeight: "231.5px", // Adjusts to content height
            backgroundColor: "white",
            marginTop: "64px", // Keeps navbar visible
            paddingTop: "0.01px",
            paddingBottom: "0.01px",
          },
        }}
      >
        <List>
          {["SHOP ALL", "MAKEUP", "SKIN CARE", "HAIR CARE", "ABOUT", "CONTACT"].map((text, index) => (
            <ListItem key={index} button component={Link} to="/" onClick={toggleDrawer(false)}>
              <ListItemText primary={text} primaryTypographyProps={{ fontSize: "13px", color: 'black', height: "11px"}} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}

export default Header;
