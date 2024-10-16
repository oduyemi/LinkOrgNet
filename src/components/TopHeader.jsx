import React from "react";
import { Box, Link, Typography } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';

export const TopHeader = () => {
  return (
    <Box className="header-top-section-3">
      <Box className="container-fluid">
        <Box className="header-top-wrapper style-2 style-3">
          <Box className="top-left">
            <ul className="contact-list">
              <li>
                <Link to="tel:+2349051187279">
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
                <Link href="mailto:info@linkorgnet.com.ng" className="line-none">
                  info@linkorgnet.com.ng
                </Link>
              </li>
            </ul>
          </Box>
          <Box className="top-right">
            <Box className="social-icon d-flex align-items-center">
                <Link to="" target="_blank">
                    <FacebookIcon sx={{ fontSize: 20, color: "#fff" }} />
                </Link>
                <Link to="https://instagram.com/linkorgnet" target="_blank">
                    <InstagramIcon sx={{ fontSize: 20, color: "#fff" }} />
                </Link>
                <Link to="" target="_blank">
                    <PinterestIcon sx={{ fontSize: 20, color: "#fff" }} />
                </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
