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
          <Box className="footer-top text-center mb-5">
            <Box className="footer-logo wow fadeInUp" data-wow-delay=".3s">
              <Link to="/">
                <img src={require("../assets/images/logo/logo_whitebg.png")} 
                alt="Footer Logo" 
                style={{width:"35%"}}
                className='ms-0'/>
              </Link >
            </Box>
            <Box>
              <Typography
                variant="body2"
                className="text-center"
                sx={{ color: "white"}}

              >
                Our operational history reflects a continuous pursuit of excellence, resulting in a wealth of industry experience.

              </Typography>
            </Box>
            <ul className="wow fadeInUp" data-wow-delay=".5s">

            <li>
              <FacebookIcon sx={{ color: "white", fontSize: 20}}/>
              <Link to="" > Facebook</Link>
            </li>
              <li>
                <InstagramIcon sx={{ color: "white", fontSize: 20}}/>
                <Link to=""> Instagram</Link>
              </li>
              <li>
                <PinterestIcon sx={{ color: "white", fontSize: 20}}/>
                <Link to=""> Pinterest</Link>
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
                  <li><Link to="service-details.html" className="text-white">VSAT</Link ></li>
                  <li><Link to="service-details.html" className="text-white">VOIP Services</Link ></li>
                  <li><Link to="service-details.html" className="text-white">Marine VSAT</Link ></li>
                  <li><Link to="service-details.html" className="text-white">Internet Services</Link ></li>
                  {/* <li><Link to="service-details.html" className="text-white">Cloud Computing</Link ></li>
                  <li><Link to="service-details.html" className="text-white">Analytic & Engineering</Link ></li> */}
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
                <Link to="mailto:info@example.com" className="text-white">info@linkorgnet.com</Link >
                <h5 className="pt-3">
                  <Link to="tel:+88012345688" className="text-white">+09 354 587 874</Link >
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
            Copyright © 2024 <Link to="index.html" className="text-white">Linkorg Networks</Link >. All Rights Reserved.
            </p>
          </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Footer;

