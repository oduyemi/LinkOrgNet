import React from "react";
import { Box, Typography, Button, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';

export const Offcanvas = ({ onClose }) => {
  return (
    <Box className="offcanvas-container">
      <Box className="offcanvas-overlay" onClick={onClose} />
      <Box className="fix-area offcanvas-content">
        <Box className="offcanvas__info">
          <Box className="offcanvas__wrapper">
            <Box className="offcanvas__content">
              <Box
                className="offcanvas__top mb-5 d-flex justify-content-between align-items-center"
                component="div"
              >
                <Box className="offcanvas__logo">
                  <RouterLink to="/">
                    <img src={require("../assets/images/logo/logo_whitebg.png")} alt="site logo" />
                  </RouterLink>
                </Box>
                <Box className="offcanvas__close">
                  <Button onClick={onClose}>
                    <i className="fas fa-times"></i>
                  </Button>
                </Box>
              </Box>
              <Typography variant="body1" className="d-none d-xl-block">
                We would love to hear from you! We want to know when things go wrong, so we can put them right as quickly as possible.
              </Typography>
              <Box className="mobile-menu fix mb-3"></Box>
              <Box className="offcanvas__contact">
                <Typography variant="h4">Contact Info</Typography>
                <ul>
                  <li className="d-flex align-items-center">
                    <Box className="offcanvas__contact-icon">
                      <i className="fal fa-map-marker-alt"></i>
                    </Box>
                    <Box className="offcanvas__contact-text">
                      <Link href="#" target="_blank">
                        177B Sinari Daranijo Street, Victoria Island, Lagos
                      </Link>
                    </Box>
                  </li>
                  <li className="d-flex align-items-center">
                    <Box className="offcanvas__contact-icon mr-15">
                      <i className="fal fa-envelope"></i>
                    </Box>
                    <Box className="offcanvas__contact-text">
                      <Link href="mailto:info@netband.com">
                        info@linkorgnet.com
                      </Link>
                    </Box>
                  </li>
                  <li className="d-flex align-items-center">
                    <Box className="offcanvas__contact-icon mr-15">
                      <i className="fal fa-clock"></i>
                    </Box>
                    <Box className="offcanvas__contact-text">
                      <Link href="#" target="_blank">
                        Mon-Friday, 08am - 05pm
                      </Link>
                    </Box>
                  </li>
                  <li className="d-flex align-items-center">
                    <Box className="offcanvas__contact-icon mr-15">
                      <i className="far fa-phone"></i>
                    </Box>
                    <Box className="offcanvas__contact-text">
                      <Link href="tel:+11002345909">+123456789</Link>
                    </Box>
                  </li>
                </ul>
                <Box className="header-button mt-4">
                  <RouterLink to="/contact" className="theme-btn text-center">
                    <Button variant="contained" color="primary">
                      Contact Us
                      <i className="fas fa-chevron-right"></i>
                    </Button>
                  </RouterLink>
                </Box>
                <Box className="social-icon d-flex align-items-center">
                  <Link href="">
                  <FacebookIcon sx={{ fontSize: 20, color: "#000" }} />
                  </Link>
                  <Link href="">
                  <InstagramIcon sx={{ fontSize: 20, color: "#000" }} />

                  </Link>
                  <Link href="">
                  <PinterestIcon sx={{ fontSize: 20, color: "#000" }} />
                  </Link>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
