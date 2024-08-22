import React, { useState, useEffect, useRef } from "react";
import { Box, IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from "react-router-dom";
import { Offcanvas } from "./Offcanvas";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';



export const NavMenu = () => {
  const [isOffcanvasVisible, setIsOffcanvasVisible] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);
  const [servicesAnchorEl, setServicesAnchorEl] = useState(null);

  const handleResize = () => {
    setIsMobileView(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleOffcanvas = () => {
    setIsOffcanvasVisible(prevState => !prevState);
  };

  const handleServicesMenuOpen = (event) => {
    setServicesAnchorEl(event.currentTarget);
  };

  const handleServicesMenuClose = () => {
    setServicesAnchorEl(null);
  };

  const open = Boolean(servicesAnchorEl);

  return (
    <>
      <header className="header-section-3">
        <Box id="header-sticky" className="header-3">
          <Box className="container-fluid">
            <Box className="mega-menu-wrapper">
              <Box className="header-main d-flex justify-content-between align-items-center">
                <Box className="logo">
                  <Link to="/" className="header-logo">
                    <img
                      src={require("../assets/images/logo/logo_whitebg.png")}
                      alt="Site logo"
                      width="35%"
                    />
                  </Link>
                </Box>
                {!isMobileView && (
                  <Box className="header-left">
                    <Box className="mean__menu-wrapper">
                      <Box className="main-menu">
                        <nav id="desktop-menu">
                          <ul>
                            <li className="menu-thumb">
                              <Link to="/">Home</Link>
                            </li>
                            <li>
                              <Link to="/about">About</Link>
                            </li>
                            <li
                              className="has-dropdown"
                              onMouseEnter={handleServicesMenuOpen}
                              onMouseLeave={handleServicesMenuClose}
                            >
                              <Link to="/services">
                                Services
                                <ExpandMoreIcon sx={{ fontSize: 30 }} />
                              </Link>
                              <Menu
                                anchorEl={servicesAnchorEl}
                                open={open}
                                onClose={handleServicesMenuClose}
                                PaperProps={{
                                  style: {
                                    width: 200, // Adjust width as needed
                                  },
                                }}
                              >
                                <MenuItem onClick={handleServicesMenuClose}>
                                  <Link to="/services/maritime-vsat">
                                    Maritime VSAT
                                  </Link>
                                </MenuItem>
                                <MenuItem onClick={handleServicesMenuClose}>
                                  <Link to="/service/networks">
                                    Network Services
                                  </Link>
                                </MenuItem>
                                <MenuItem onClick={handleServicesMenuClose}>
                                  <Link to="/services/terrestial-comms">
                                    Terrestrial Communication
                                  </Link>
                                </MenuItem>
                                <MenuItem onClick={handleServicesMenuClose}>
                                  <Link to="/service/vpn">VPN Services</Link>
                                </MenuItem>
                                <MenuItem onClick={handleServicesMenuClose}>
                                  <Link to="/service/voip-services">
                                    VOIP Services
                                  </Link>
                                </MenuItem>
                              </Menu>
                            </li>
                          </ul>
                        </nav>
                      </Box>
                    </Box>
                  </Box>
                )}
                <Box class="header-right d-flex justify-content-end align-items-center">
                  <Box className="header-button">
                      <Link to="/contact" className="theme-btn theme-btn-2">
                          <span>
                              contact us
                              <ChevronRightIcon
                                sx={{
                                  fontSize: 20
                                }}
                              />
                          </span>
                        </Link>
                  </Box>
                  <IconButton
                    edge="end"
                    color="inherit"
                    aria-label="menu"
                    onClick={toggleOffcanvas}
                    className="header__hamburger d-xl-block my-auto"
                  >
                    <MenuIcon sx={{ fontSize: 30 }} />
                  </IconButton>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </header>

      {/* Offcanvas and Mobile Menu */}
      {isMobileView && (
        <Box className={`offcanvas__info ${isOffcanvasVisible ? 'info-open' : ''}`}>
          <Offcanvas onClose={toggleOffcanvas} />
        </Box>
      )}
      {isMobileView && (
        <Box className={`offcanvas__overlay ${isOffcanvasVisible ? 'overlay-open' : ''}`} onClick={toggleOffcanvas} />
      )}
    </>
  );
};
