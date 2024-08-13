/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Link } from 'react-scroll';
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Mission",
      icon: <InfoIcon />,
    },
    {
      text: "Guides",
      icon: <PhoneRoundedIcon />,
    },
    {
      text: "Services",
      icon: <PhoneRoundedIcon />,
    },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon />,
    },
    {
      text: "NewsLetter",
      icon: <PhoneRoundedIcon />,
    },
    {
      text: "Clients",
      icon: <CommentRoundedIcon />,
    },
  ];
  return (
    <nav>
      <div className="nav-logo-container">
        <h1 style={{ fontSize: '36px', fontWeight: 'bold', margin: 0, padding: 0, color: 'orange' }}>MyET1.com</h1>
      </div>
      <div className="navbar-links-container">
        {/* <a href="">About</a>
        <a href="">ET1 Guides</a>
        <a href="">Services</a>
        <a href="">Contact Us</a>
        <a href="">Testimonials</a> */}
        <Link to="mission" smooth={true} duration={500} offset={-60}>Mission</Link>
        <Link to="guides" smooth={true} duration={500} offset={-60}>ET1 Guides</Link>
        <Link to="services" smooth={true} duration={500} offset={-60}>Services</Link>
        <Link to="contact" smooth={true} duration={500} offset={-60}>Contact Us</Link>
        <Link to="newsletter" smooth={true} duration={500} offset={-180}>Newsletter</Link>
        <Link to="clients" smooth={true} duration={500} offset={-60}>Clients</Link>

      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
