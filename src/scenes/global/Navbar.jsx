import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Badge,
  Box,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Tooltip,
  Avatar,
} from "@mui/material";
import { auth } from "../../config/firebase";
import { logout } from "../../state/index";
import { signOut } from "firebase/auth";

import {
  PersonOutline,
  ShoppingBagOutlined,
  MenuOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import { useNavigate , Link} from "react-router-dom";
import { shades } from "../../theme";
import { setIsCartOpen } from "../../state";

function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const cart = useSelector((state) => state.cart.cart);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  //logout
  const signUserOut = () => {
    signOut(auth).then(() => {
      dispatch(logout());
      navigate("/");
    });
  };
  return (
    <Box
      display="flex"
      alignItems="center"
      width="100%"
      height="60px"
      backgroundColor="rgba(255, 255, 255, 0.95)"
      color="black"
      position="fixed"
      top="0"
      left="0"
      zIndex="1"
    >
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box
          onClick={() => navigate("/")}
          sx={{ "&:hover": { cursor: "pointer" } }}
          color={shades.secondary[500]}
        >
          <Typography variant="h3" fontWeight={"bold"}>
            StyleHive
          </Typography>
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          columnGap="20px"
          zIndex="2"
        >
          <IconButton sx={{ color: "black" }}>
            <SearchOutlined />
          </IconButton>
          <IconButton sx={{ color: "black" }}>
            <PersonOutline />
          </IconButton>
          <Badge
            badgeContent={cart.length}
            color="secondary"
            invisible={cart.length === 0}
            sx={{
              "& .MuiBadge-badge": {
                right: 5,
                top: 5,
                padding: "0 4px",
                height: "14px",
                minWidth: "13px",
              },
            }}
          >
            <IconButton
              onClick={() => dispatch(setIsCartOpen({}))}
              sx={{ color: "black" }}
            >
              <ShoppingBagOutlined />
            </IconButton>
          </Badge>
          {/* <IconButton sx={{ color: "black" }}>
            <MenuOutlined />
          </IconButton> */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>    
              <Avatar aria-label="recipe">
                <img
                  style={{ width: "100%" }}
                  src={localStorage.getItem("pic")}
                  alt=""
                />
              </Avatar>
        
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
          
              <MenuItem onClick={signUserOut}>
                <Typography textAlign="center" color={"black"}>
                  Logout
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Box>
      </Box>
     
    </Box>
  );
}

export default Navbar;
