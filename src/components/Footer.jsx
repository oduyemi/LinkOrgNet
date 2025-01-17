import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import WOW from "wowjs";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  useEffect(() => {
    new WOW.WOW({
      live: false,
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
              sx={{ textAlign: "left" }}
            >
              <Link to="/">
                <img
                  src={require("../assets/images/logo/logo_whitebg.png")}
                  alt="Footer Logo"
                  style={{ width: "50%" }}
                  className="ms-0"
                />
              </Link>
            </Box>
            <Box>
              <Typography
                variant="body2"
                className="text-left"
                sx={{ color: "black", textAlign: "left" }}
              >
                Our operational history reflects a continuous pursuit of
                excellence, resulting in a wealth of industry experience.
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
              <Link to="https://www.facebook.com/profile.php?id=61568155119100" target="_blank">
                    <FacebookIcon sx={{ color: "#010156", fontSize: "24px", marginTop: "8px" }}  />
                    <Link to="" className="blutext" target="_blank">
                      {" "}
                      Facebook
                    </Link>
                </Link>
              </li>
              <li>
              <Link to="https://www.x.com/linkorgnet" target="_blank"><XIcon sx={{ color: "#010156", fontSize: 17, marginTop: "2px" }} /></Link>
                <Link to="" className="blutext" target="_blank">
                  {" "}
                  X
                </Link>
              </li>
              <li>
              <Link to="https://www.instagram.com/linkorgnet" target="_blank>"><InstagramIcon sx={{ color: "#010156", fontSize: 20 }} /></Link>
                <Link
                  to="https://instagram.com/linkorgnet"
                  target="_blank"
                  className="blutext"
                >
                  {" "}
                  Instagram
                </Link>
              </li>
              <li>
              <Link to="https://www.linkedin.com/company/linkorgnet" target="_blank"><LinkedInIcon sx={{ color: "#010156", fontSize: 22 }} /></Link>
                <Link to="https://www.linkedin.com/company/linkorgnet" className="blutext" target="_blank">
                  {" "}
                  LinkedIn
                </Link>
              </li>
            </ul>
          </Box>
          <Box className="footer-widgets-wrapper" style={{marginTop: "0px", marginBottom: "50px", paddingTop: "0px", paddingBottom: "0px", height: "fitContent"}}>
            <Box className="row">
              <Box
                className="col-xl-6 col-sm-12 col-md-8 col-lg-6 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <Box className="single-footer-widget me-4">
                  <Box className="widget-head">
                    <Typography variant="h3" sx={{}} className="blutext">
                      Subscribe Newsletter
                    </Typography>
                  </Box>

                  <Box className="footer-content">
                    <p>
                      We understand that every challenge is an opportunity. We
                      are here to seize it with a team of dedicated
                      professionals and a strong culture.
                    </p>
                    <Box className="newsletter-items">
                      <Box className="form-clt">
                        <input
                          type="text"
                          name="email"
                          id="email2"
                          className="bg-white"
                          placeholder="Email Address"
                        />
                      </Box>

                      <button className="theme-btn hover-black" type="submit">
                        <span>
                          Sign Up <i className="fas fa-chevron-right"></i>
                        </span>
                      </button>
                    </Box>
                    <h6 className="label-text">
                      By subscribing, you accept our{" "}
                      <Link to="" className="text-black">
                        Privacy Policy
                      </Link>
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
                        color: "#010156",
                      }}
                      className="blutext"
                    >
                      Services
                    </Typography>
                  </Box>

                <ul className="list-items">
                  <li><Link to="/services/internet" className="text-black">Internet Solutions</Link ></li>
                  <li><Link to="/services/satellite" className="text-black">Satellite Solution</Link ></li>
                  <li><Link to="/services/vpn-solutions" className="text-black">VPN Solutions</Link ></li>
                  <li><Link to="/services/voip-services" className="text-black">VoIP Solutions</Link ></li>
                  <li><Link to="/services/it-networks" className="text-black">IT & Network Solutions</Link ></li>
                  <li><Link to="/services/storage-solutions" className="text-black">Storage Solutions</Link ></li>
                  <li><Link to="/services/collocation-and-data-center" className="text-black">Collocation &amp; Datacenter Services</Link ></li>
                  <li><Link to="/services/software-services" className="text-black">Software Services</Link ></li>
                 

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
                  <Link to="tel:+2349160005465)" className="blutext">+234 916 000 LINK (5465)</Link >
                </h5>
                <h5 style={{ marginTop: "-40px"}}>
                  <Link to="tel:+2349041423631" className="blutext">+234 904 1423 631</Link >
                </h5>
              </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        </Box>
        <Box className="footer-bottom style-2" >
          <Box className="container" >
            <Box className="footer-wrapper d-flex align-items-center justify-content-between">
              <Typography
                variant="p"
                sx={{
                  color: "#010156",
                }}
                className="blutext"
              >
                Copyright © 2024{" "}
                <Link to="/" className="orangetext">
                  Linkorg Networks
                </Link>
                . All Rights Reserved.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
