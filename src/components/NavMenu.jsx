import React, { useState, useEffect } from "react";
import { Box, IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from "react-router-dom";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";


export const NavMenu = ({ onOpenOffcanvas }) => {
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);
  const [servicesAnchorEl, setServicesAnchorEl] = useState(null);
  const [productsAnchorEl, setProductsAnchorEl] = useState(null);

  const handleResize = () => {
    setIsMobileView(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize(); 
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleProductsMenuOpen = (event) => {
    setProductsAnchorEl(event.currentTarget);
  };

  const handleProductsMenuClose = () => {
    setProductsAnchorEl(null);
  };

  const handleServicesMenuOpen = (event) => {
    setServicesAnchorEl(event.currentTarget);
  };

  const handleServicesMenuClose = () => {
    setServicesAnchorEl(null);
  };

  const isProductsMenuOpen = Boolean(productsAnchorEl);
  const isServicesMenuOpen = Boolean(servicesAnchorEl);

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
                              onMouseEnter={handleProductsMenuOpen}
                              onMouseLeave={handleProductsMenuClose}
                            >
                              <Link to="/products">
                                Products
                                <ExpandMoreIcon sx={{ fontSize: 30 }} />
                              </Link>
                              <Menu
                                anchorEl={productsAnchorEl}
                                open={isProductsMenuOpen}
                                onClose={handleProductsMenuClose}
                                PaperProps={{
                                  style: {
                                    width: 200,
                                  },
                                }}
                              >
                                <MenuItem onClick={handleProductsMenuClose}>
                                  <Link to="/products/voip-hardware" className="text-black">
                                    VoIP Hardware
                                  </Link>
                                </MenuItem>
                                <MenuItem onClick={handleProductsMenuClose}>
                                  <Link to="/products/packages" className="text-black">Packages</Link>
                                </MenuItem>
                              </Menu>
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
                                open={isServicesMenuOpen}
                                onClose={handleServicesMenuClose}
                                PaperProps={{
                                  style: {
                                    width: 240,
                                  },
                                }}
                              >
                                <MenuItem onClick={handleServicesMenuClose}>
                                  <Link to="/services/maritime-vsat" className="text-black">
                                    Maritime VSAT
                                  </Link>
                                </MenuItem>
                                <MenuItem onClick={handleServicesMenuClose}>
                                  <Link to="/service/networks" className="text-black">
                                    Network Services
                                  </Link>
                                </MenuItem>
                                <MenuItem onClick={handleServicesMenuClose}>
                                  <Link to="/services/terrestial-comms" className="text-black">
                                    Terrestrial Communication
                                  </Link>
                                </MenuItem>
                                <MenuItem onClick={handleServicesMenuClose}>
                                  <Link to="/service/vpn" className="text-black">VPN Services</Link>
                                </MenuItem>
                              </Menu>
                            </li>
                          </ul>
                        </nav>
                      </Box>
                    </Box>
                  </Box>
                )}
                <Box className="header-right d-flex justify-content-end align-items-center">
                  <Box className="header-button">
                    <Link to="/contact" className="theme-btn theme-btn-2">
                      <span>
                        contact us
                        <ChevronRightIcon
                          sx={{
                            fontSize: 20,
                          }}
                        />
                      </span>
                    </Link>
                  </Box>
                  <IconButton
                    edge="end"
                    color="inherit"
                    aria-label="menu"
                    onClick={onOpenOffcanvas}
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

      {/* Render mobile menu in Offcanvas */}
      {isMobileView && (
        <Box className={`offcanvas__info ${isMobileView ? 'mobile-menu' : ''}`}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </Box>
      )}
    </>
  );
};
