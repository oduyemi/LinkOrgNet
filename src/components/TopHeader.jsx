import React from "react";
import { Box, Link, Typography } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


export const TopHeader = () => {
  return (
    <Box className="header-top-section-3">
      <Box className="container-fluid">
        <Box className="header-top-wrapper style-2 style-3">
          <Box className="top-left">
            <ul className="contact-list">
              <li>
                <Link to="tel:+2349160005465">
                  <Typography component="span">
                    Call
                  </Typography>
                </Link>
                Want to know more about us?{" "}
                <Link to="/about" className="orangetext">Click Now</Link>
              </li>
              <li>
                <i className="fas fa-map-marker-alt"></i>
                177B, Sinari Daranijo Street, Victoria Island, Lagos
              </li>
              <li>
                <i className="fas fa-envelope"></i>
                <Link href="mailto:hello@linkorgnet.com" className="line-none">
                  hello@linkorgnet.com
                </Link>
              </li>
            </ul>
          </Box>
          <Box className="top-right">
            <Box className="social-icon d-flex align-items-center">
                <Link to="https://www.facebook.com/profile.php?id=61568155119100" target="_blank">
                    <FacebookIcon sx={{ fontSize: 20, color: "#fff" }} />
                </Link>
                <Link to="https://twitter.com/linkorgnet" target="_blank">
                    <XIcon sx={{ fontSize: 20, color: "#fff" }} />
                </Link>
                <Link to="https://instagram.com/linkorgnet" target="_blank">
                    <InstagramIcon sx={{ fontSize: 20, color: "#fff" }} />
                </Link>
                <Link to="https://www.linkedin.com/company/linkorgnet/" target="_blank">
                    <LinkedInIcon sx={{ fontSize: 20, color: "#fff" }} />
                </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
