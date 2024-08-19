import React from "react";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export const NavMenu = () => {
  return (
    <header className="header-section-3">
      <Box id="header-sticky" className="header-3">
        <Box className="container-fluid">
          <Box className="mega-menu-wrapper">
            <Box className="header-main">
              <Box className="logo">
                <Link to="/" className="header-logo">
                  <img
                    src={require("../assets/images/logo/logo_whitebg.png")}
                    alt="Site logo"
                    width="35%"
                  />
                </Link>
              </Box>
              <Box className="header-left">
                <Box className="mean__menu-wrapper">
                  <Box className="main-menu">
                    <nav id="mobile-menu">
                      <ul>
                        <li className="has-dropdown active menu-thumb">
                          <Link to="/">Home</Link>
                        </li>
                        <li>
                          <Link to="/about">About</Link>
                        </li>
                        <li className="has-dropdown">
                          <Link to="/services">
                            Services
                            <ExpandMoreIcon sx={{ fontSize: 40 }} />
                          </Link>
                          <ul className="submenu">
                            <li>
                              <Link to="/services/maritime-vsat">
                                Maritime VSAT
                              </Link>
                            </li>
                            <li>
                              <Link to="/service/networks">Network Services</Link>
                            </li>
                            <li>
                              <Link to="/services/terrestial-comms">
                                Terrestrial Communication
                              </Link>
                            </li>
                            <li>
                              <Link to="/service/vpn">VPN Services</Link>
                            </li>
                            <li>
                              <Link to="/service/voip-services">
                                VOIP Services
                              </Link>
                            </li>
                          </ul>
                        </li>
                        {/* <li>
                          <Link to="/contact">Contact</Link>
                        </li> */}
                      </ul>
                    </nav>
                  </Box>
                </Box>
              </Box>
              <Box className="header-right d-flex justify-content-end align-items-center">
                <Box className="header-button">
                  <Link to="/contact" className="theme-btn theme-btn-2">
                    <span>
                      contact us
                      <ChevronRightIcon sx={{ fontSize: 40 }} />
                    </span>
                  </Link>
                </Box>
                <Box className="header__hamburger d-xl-block my-auto">
                  <Box className="sidebar__toggle">
                    <Box className="header-bar">
                      <span></span>
                      <span></span>
                      <span></span>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </header>
  );
};