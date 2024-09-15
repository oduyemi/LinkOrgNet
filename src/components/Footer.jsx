import React,{ useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import WOW from 'wowjs';
import { Link } from "react-router-dom";
import { Box, Typography} from "@mui/material"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';

const Footer = () => {

  useEffect(() => {
    new WOW.WOW({
      live: false 
    }).init();
  }, []);

  return (
    <>
      <Box className="footer-section footerbg">
        <Box className="container">
          <Box className="footer-top text-center mb-3">
            <Box 
            className="footer-logo wow fadeInUp text-left" 
            data-wow-delay=".3s" 
            sx={{ textAlign: 'left' }} 
            >
              <Link to="/">
                <img src={require("../assets/images/logo/logo_whitebg.png")} 
                alt="Footer Logo" 
                style={{width:"50%"}}
                className='ms-0'
                />
              </Link >
            </Box>
            <Box>
              <Typography
                variant="body2"
                className="text-left"
                sx={{ color: "black", textAlign: 'left' }}

              >
                Our operational history reflects a continuous 
                pursuit of excellence, resulting in a wealth 
                of industry experience.
                  <Typography
                    variant="body2"
                    className="blutext d-inline"
                    sx={{ fontWeight: 600 }}
                  >
                    &nbsp; Linkorgnet is the trading name for Linkorg Networks.
                  </Typography>
              </Typography>
            </Box>
            <ul className="wow fadeInUp" data-wow-delay=".5s">

            <li>
              <FacebookIcon sx={{ color: "#E65D0F", fontSize: 20}}/>
              <Link to=""className="blutext" > Facebook</Link>
            </li>
              <li>
                <InstagramIcon sx={{ color: "#E65D0F", fontSize: 20}}/>
                <Link to="" className="blutext"> Instagram</Link>
              </li>
              <li>
                <PinterestIcon sx={{ color: "#E65D0F", fontSize: 20}}/>
                <Link to="" className="blutext"> Pinterest</Link>
              </li>
            </ul>
          </Box>
          <Box className="footer-widgets-wrapper">
            <Box className="row">
          <Box className="col-xl-6 col-sm-12 col-md-8 col-lg-6 wow fadeInUp" data-wow-delay=".3s">
              <Box className="single-footer-widget me-4">
                <Box className="widget-head">
                <Typography
                  variant="h3"
                  sx={{
                  }}
                  className="blutext"
                >Subscribe Newsletter
                </Typography>
                </Box>

                <Box className="footer-content">
                <p>
                  We understand that every challenge is an opportunity. We are here to seize it with a team of dedicated professionals and a strong culture.
                </p>
                <Box className="newsletter-items">
                  <Box className="form-clt">
                  <input type="text" name="email" id="email2" className="bg-white" placeholder="Email Address" />
                  </Box>
                
                  <button className="theme-btn hover-black" type="submit">
                  <span>Sign Up <i className="fas fa-chevron-right"></i></span> 
                  </button>
                </Box>
                <h6 className="label-text">
                  By subscribing, you accept our <Link to="" className="text-black">Privacy Policy</Link>
                </h6>
                </Box>
              </Box>
            </Box>
          
            <Box className="col-xl-3 col-sm-6 col-md-6 col-lg-3 mb-4">
              <Box className="single-footer-widget">
                <Box className="widget-head">
                <Typography
                  variant="h5"
                  sx={{
                    color: "#010156"
                  }}
                  className="blutext"
                >
                  Services
                </Typography>
                </Box>
        
                <ul className="list-items">
                  <li><Link to="service-details" className="text-black">VSAT</Link ></li>
                  <li><Link to="service-details" className="text-black">VOIP Services</Link ></li>
                  <li><Link to="service-details" className="text-black">Marine VSAT</Link ></li>
                  <li><Link to="service-details" className="text-black">Internet Services</Link ></li>

                </ul>
              </Box>
            </Box>
            <Box className="col-xl-3 col-sm-6 col-md-6 col-lg-3 mb-4">
              <Box className="single-footer-widget">
                <Box className="widget-head">
                <Typography
                  variant="h5"
                  sx={{
                    color: "#010156"
                  }}
                  className="blutext"
                >
                  Locations:
                </Typography>
                </Box>
                <Box className="footer-address-text">
                <p>
                177B Sinari Daranijo Street, <br />
                Victoria Island, Lagos
                </p>
                <Typography
                  variant="h5"
                  sx={{
                    color: "#010156"
                  }}
                  className="blutext"
                >
                  Contact
                </Typography>
                <Link to="mailto:info@linkorgnet.com.ng" className="text-black">info@linkorgnet.com.ng</Link >
                <h5 className="pt-3">
                  <Link to="tel:+2348034060434" className="blutext">+234 803 406 0434</Link >
                </h5>
              </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        </Box>
        <Box className="footer-bottom style-2">
          <Box className="container">
          <Box className="footer-wrapper d-flex align-items-center justify-content-between">
          <Typography
                  variant="p"
                  sx={{
                    color: "#010156"
                  }}
                  className="blutext"
                >
                 Copyright © 2024 <Link to="index.html" className="orangetext">Linkorg Networks</Link >. All Rights Reserved.
            </Typography>

          </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Footer;

