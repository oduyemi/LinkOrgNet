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
                <Typography component="span">Call</Typography>
                Consult With IT Advisor?{" "}
                <Link to="/contact">Click Now</Link>
              </li>
              <li>
                <i className="fas fa-map-marker-alt"></i>
                177B, Sinari Daranijo Street, Victoria Island, Lagos
              </li>
              <li>
                <i className="fas fa-envelope"></i>
                <Link href="mailto:info@linkorgnet.com" className="line-none">
                  info@linkorgnet.com
                </Link>
              </li>
            </ul>
          </Box>
          <Box className="top-right">
            <Box className="social-icon d-flex align-items-center">
                <Link to="">
                    <FacebookIcon sx={{ fontSize: 20, color: "#fff" }} />
                </Link>
                <Link to="">
                    <InstagramIcon sx={{ fontSize: 20, color: "#fff" }} />
                </Link>
                <Link to="">
                    <PinterestIcon sx={{ fontSize: 20, color: "#fff" }} />
                </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
