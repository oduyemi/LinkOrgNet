import React,{ useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import WOW from 'wowjs';
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo/logo.png"
import {Box} from "@mui/material"

const Footer = () => {

  useEffect(() => {
    // Initialize WOW.js
    new WOW.WOW({
      live: false // Ensures that WOW.js only triggers animations on first load
    }).init();
  }, []);

  return (
     <Box className="footer-section section-bg-3">
      <Box className="container">
        <Box className="footer-top text-center mb-5">
          <Box className="footer-logo wow fadeInUp" data-wow-delay=".3s">
            <a href="index.html">
              <img src={Logo} alt="Footer Logo" style={{width:"50%"}}/>
            </a>
          </Box>
          <ul className="wow fadeInUp" data-wow-delay=".5s">

          <li>
            <i className="fab fa-facebook-f"></i>
            <Link to="#" >Facebook</Link>
          </li>

            <li>
              <i className="fab fa-twitter"></i>
              <Link to="#">Twitter</Link>
            </li>
            <li>
              <i className="fab fa-linkedin-in"></i>
              <Link to="#">LinkedIn</Link>
            </li>
            <li>
              <i className="fab fa-instagram"></i>
              <Link to="#">Instagram</Link>
            </li>
          </ul>
        </Box>
        <Box className="footer-widgets-wrapper">
          <Box className="row">
        <Box className="col-xl-6 col-sm-12 col-md-8 col-lg-6 wow fadeInUp" data-wow-delay=".3s">
            <Box className="single-footer-widget me-4">
              <Box className="widget-head">
              <h3>Subscribe Newsletter</h3>
              </Box>

              <Box className="footer-content">
              <p>
                We understand that every challenge is an opportunity. We are here to seize it with a team of dedicated professionals and a strong culture.
              </p>
              <Box className="newsletter-items">
                <Box className="form-clt">
                <input type="text" name="email" id="email2" placeholder="Email Address" />
                </Box>
               
                <button className="theme-btn hover-white" type="submit">
                 <span>Sign Up <i className="fas fa-chevron-right"></i></span> 
                 </button>
              </Box>
              <h6 className="label-text">
                By subscribing, you accept our <Link to="#" className="text-white">Privacy Policy</Link>
              </h6>
              </Box>
            </Box>
          </Box>
         
          <Box className="col-xl-3 col-sm-6 col-md-6 col-lg-3 mb-4">
            <Box className="single-footer-widget">
              <Box className="widget-head">
              <h5>Services</h5>
              </Box>
       
              <ul className="list-items">
                <li><a href="service-details.html" className="text-white">VSAT</a></li>
                <li><a href="service-details.html" className="text-white">VOIP Services</a></li>
                <li><a href="service-details.html" className="text-white">Marine VSAT</a></li>
                <li><a href="service-details.html" className="text-white">Internet Services</a></li>
                {/* <li><a href="service-details.html" className="text-white">Cloud Computing</a></li>
                <li><a href="service-details.html" className="text-white">Analytic & Engineering</a></li> */}
              </ul>
            </Box>
          </Box>
          <Box className="col-xl-3 col-sm-6 col-md-6 col-lg-3 mb-4">
            <Box className="single-footer-widget">
              <Box className="widget-head">
              <h5>Locations:</h5>
              </Box>
              <Box className="footer-address-text">
              <p>
              177B Sinari Daranijo Street, <br />
              Victoria Island, Lagos
              </p>
              <h5>Contact</h5>
              <a href="mailto:info@example.com" className="text-white">info@linkorgnet.com</a>
              <h5 className="pt-3">
                <a href="tel:+88012345688" className="text-white">+09 354 587 874</a>
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
          <p className="wow fadeInUp color-2" data-wow-delay=".4s">
          Copyright © 2024 <a href="index.html" className="text-white">Linkorg Networks</a>. All Rights Reserved.
          </p>
        </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;

