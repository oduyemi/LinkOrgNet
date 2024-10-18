import React from "react";
import { Box, Typography, Button, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import CloseIcon from "@mui/icons-material/Close";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CallIcon from "@mui/icons-material/Call";
import MailIcon from "@mui/icons-material/Mail";
import ShareLocationIcon from "@mui/icons-material/ShareLocation";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

export const Offcanvas = ({ onClose, isOpen }) => {
  const handleMenuItemClick = () => {
    onClose();
  };

  return (
    <Box className={`offcanvas__info ${isOpen ? "info-open" : ""}`}>
      <Box className="offcanvas__overlay" onClick={onClose} />
      <Box className="fix-area offcanvas-content">
        <Box className="offcanvas__wrapper">
          <Box className="offcanvas__content">
            <Box className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
              <Box className="offcanvas__logo">
                <RouterLink to="/">
                  <img
                    src={require("../assets/images/logo/logo_whitebg.png")}
                    alt="site logo"
                    width="50%"
                  />
                </RouterLink>
              </Box>
              <Box className="offcanvas__close">
                <Button onClick={onClose}>
                  <CloseIcon
                    sx={{
                      color: "#fff",
                      fontSize: 30,
                    }}
                    className="me-4"
                  />
                </Button>
              </Box>
            </Box>
            <Typography
              variant="body1"
              className="d-none d-xl-block"
              sx={{
                fontSize: "18px",
                color: "#010156",
                fontWeight: 200,
                fontFamily: "montesserat",
              }}
            >
              We would love to hear from you!
            </Typography>
            <Box className="mobile-menu fix mb-3"></Box>
            <Box className="offcanvas__contact">
              <Typography
                variant="h4"
                fontSize="x-large"
                sx={{
                  marginTop: "-14px",
                  fontWeight: 600,
                }}
              >
                Contact Info
              </Typography>
              <ul>
                <li className="d-flex align-items-center">
                  <Box className="offcanvas__contact-icon">
                    <ShareLocationIcon
                      sx={{
                        fontSize: 18,
                        color: "#010156",
                        marginLeft: "-14px",
                        marginTop: "-5px",
                      }}
                    />
                  </Box>
                  <Box className="offcanvas__contact-text">
                    <Link
                      href=""
                      className="text-black"
                      style={{ fontSize: "15px" }}
                    >
                      177B Sinari Daranijo Street, VI, Lagos
                    </Link>
                  </Box>
                </li>
                <li className="d-flex align-items-center">
                  <Box className="offcanvas__contact-icon mr-15">
                    <MailIcon
                      sx={{
                        fontSize: 18,
                        color: "#010156",
                        marginLeft: "-14px",
                        marginTop: "-5px",
                      }}
                    />
                  </Box>
                  <Box className="offcanvas__contact-text">
                    <Link
                      href="mailto:info@linkorgnet.com.ng"
                      className="text-black"
                      style={{ fontSize: "15px", textTransform: "lowercase" }}
                    >
                      info@linkorgnet.com.ng
                    </Link>
                  </Box>
                </li>
                <li className="d-flex align-items-center">
                  <Box className="offcanvas__contact-icon mr-15">
                    <AccessTimeIcon
                      sx={{
                        fontSize: 18,
                        color: "#010156",
                        marginLeft: "-14px",
                        marginTop: "-5px",
                      }}
                    />
                  </Box>
                  <Box className="offcanvas__contact-text">
                    <Link
                      href="#"
                      className="text-black"
                      style={{ fontSize: "15px" }}
                    >
                      Mon-Friday, 08am - 05pm
                    </Link>
                  </Box>
                </li>
                <li className="d-flex align-items-center">
                  <Box className="offcanvas__contact-icon mr-15">
                    <CallIcon
                      sx={{
                        fontSize: 18,
                        color: "#010156",
                        marginLeft: "-14px",
                        marginTop: "-5px",
                      }}
                    />
                  </Box>
                  <Box className="offcanvas__contact-text">
                    <Link
                      to="tel:+2349160005465"
                      style={{ color: "#4E4A59", fontSize: "14px" }}
                      className="text-black"
                    >
                      MTN: 091-6000-5465
                    </Link>
                    <br />
                    <Link
                      to="tel:+2349041423631"
                      style={{ color: "#4E4A59", fontSize: "14px" }}
                      className="text-black"
                    >
                      Airtel: 090-4142-3631
                    </Link>
                  </Box>
                </li>
              </ul>
              <Box className="header-button mt-4">
                <RouterLink
                  to="/contact"
                  onClick={handleMenuItemClick}
                  className="theme-btn text-center"
                >
                  Contact Us
                  <ChevronRightIcon />
                </RouterLink>
              </Box>
              <Box className="social-icon d-flex align-items-center">
                <Link href="" target="_blank">
                  <FacebookIcon sx={{ fontSize: 20, color: "#000" }} />
                </Link>
                <Link href="https://instagram.com/linkorgnet" target="_blank">
                  <InstagramIcon sx={{ fontSize: 20, color: "#000" }} />
                </Link>
                <Link href="" target="_blank">
                  <PinterestIcon sx={{ fontSize: 20, color: "#000" }} />
                </Link>
              </Box>
              <Box className="mobile-menu d-md-none">
                <ul>
                  <li>
                    <RouterLink
                      to="/"
                      className="blutext"
                      style={{ fontSize: "15px" }}
                      onClick={handleMenuItemClick}
                    >
                      Home
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink
                      to="/about"
                      className="blutext"
                      style={{ fontSize: "15px" }}
                      onClick={handleMenuItemClick}
                    >
                      About
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink
                      to="/faqs"
                      className="blutext"
                      style={{ fontSize: "15px" }}
                      onClick={handleMenuItemClick}
                    >
                      FAQs
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink
                      to="/services"
                      className="blutext"
                      style={{ fontSize: "15px" }}
                      onClick={handleMenuItemClick}
                    >
                      Services
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink
                      to="/contact"
                      className="blutext"
                      style={{ fontSize: "15px" }}
                      onClick={handleMenuItemClick}
                    >
                      Contact
                    </RouterLink>
                  </li>
                </ul>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
