import React, { useState, useEffect } from "react";
import { Box, IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link, useNavigate } from "react-router-dom";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export const NavMenu = ({ onOpenOffcanvas }) => {
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);
  const [servicesAnchorEl, setServicesAnchorEl] = useState(null);
  const [faqsAnchorEl, setFaqsAnchorEl] = useState(null);
  const navigate = useNavigate();  // useNavigate hook to programmatically navigate

  const handleResize = () => {
    setIsMobileView(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize(); 
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleFaqsMenuOpen = (event) => {
    setFaqsAnchorEl(event.currentTarget);
  };

  const handleFaqsMenuClose = () => {
    setFaqsAnchorEl(null);
  };

  const handleServicesMenuOpen = (event) => {
    setServicesAnchorEl(event.currentTarget);
  };

  const handleServicesMenuClose = () => {
    setServicesAnchorEl(null);
  };

  const isFaqsMenuOpen = Boolean(faqsAnchorEl);
  const isServicesMenuOpen = Boolean(servicesAnchorEl);

  // Handle services link click
  const handleServicesClick = (event) => {
    // Check if the dropdown is open, if not, navigate to /services
    if (!isServicesMenuOpen) {
      navigate("/services");
    }
  };

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
                              onMouseEnter={handleFaqsMenuOpen}
                              onMouseLeave={handleFaqsMenuClose}
                            >
                              <Link to="/faqs">
                                FAQs
                                <ExpandMoreIcon sx={{ fontSize: 30 }} />
                              </Link>
                              <Menu
                                anchorEl={faqsAnchorEl}
                                open={isFaqsMenuOpen}
                                onClose={handleFaqsMenuClose}
                                PaperProps={{
                                  style: {
                                    width: 240,
                                  },
                                }}
                              >
                                {/* FAQs Dropdown Menu */}
                                <MenuItem onClick={handleFaqsMenuClose}>
                                  <Link to="/faqs" className="text-black">
                                    General Questions
                                  </Link>
                                </MenuItem>
                                <MenuItem onClick={handleFaqsMenuClose}>
                                  <Link to="/faqs/collocation-data-center" className="text-black">
                                    Collocation &amp; Data Center
                                  </Link>
                                </MenuItem>

                                <MenuItem onClick={handleFaqsMenuClose}>
                                  <Link to="/faqs/internet-connectivity" className="text-black">
                                    Internet Connectivity
                                  </Link>
                                </MenuItem> 
                                <MenuItem onClick={handleFaqsMenuClose}>
                                  <Link to="/faqs/it-networks" className="text-black">
                                    IT &amp; Networks Solutions
                                  </Link>
                                </MenuItem> 
                                <MenuItem onClick={handleFaqsMenuClose}>
                                  <Link to="/faqs/software-services" className="text-black">
                                    Software Services
                                  </Link>
                                </MenuItem> 
                                <MenuItem onClick={handleFaqsMenuClose}>
                                  <Link to="/faqs/storage-services" className="text-black">
                                    Storage Services
                                  </Link>
                                </MenuItem> 
                                <MenuItem onClick={handleFaqsMenuClose}>
                                  <Link to="/faqs/vpn" className="text-black">
                                    VPN Solutions
                                  </Link>
                                </MenuItem>
                                <MenuItem onClick={handleFaqsMenuClose}>
                                  <Link to="/faqs/voip" className="text-black">
                                    VOIP Solutions
                                  </Link>
                                </MenuItem>  
                                <MenuItem onClick={handleFaqsMenuClose}>
                                  <Link to="/faqs/vsat-satelite" className="text-black">
                                    VSAT/Satelite Services
                                  </Link>
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
                                  <Link to="/services/connectivity" className="text-black">
                                    Connectivity Services
                                  </Link>
                                </MenuItem>
                                <MenuItem onClick={handleServicesMenuClose}>
                                  <Link to="/services/satellite" className="text-black">
                                    Satellite Solution
                                  </Link>
                                </MenuItem>
                                <MenuItem onClick={handleServicesMenuClose}>
                                  <Link to="/services/vpn-solutions" className="text-black">
                                    VPN Solutions
                                  </Link>
                                </MenuItem>
                                <MenuItem onClick={handleServicesMenuClose}>
                                  <Link to="/services/voip-services" className="text-black">
                                    VOIP Solutions
                                  </Link>
                                </MenuItem>
                                <MenuItem onClick={handleServicesMenuClose}>
                                  <Link to="/services/it-networks" className="text-black">
                                    IT &amp; Network Solutions
                                  </Link>
                                </MenuItem>
                                <MenuItem onClick={handleServicesMenuClose}>
                                  <Link to="/services/storage-solutions" className="text-black">
                                    Storage Solutions
                                  </Link>
                                </MenuItem>
                                <MenuItem onClick={handleServicesMenuClose}>
                                  <Link to="/services/collocation-and-data-center" className="text-black">
                                    Collocation &amp; Datacenter
                                  </Link>
                                </MenuItem>
                                <MenuItem onClick={handleServicesMenuClose}>
                                  <Link to="/services/software-services" className="text-black">
                                    Software Services
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
              <Link to="/faqs">FAQs</Link>
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
