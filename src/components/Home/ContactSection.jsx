import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography, } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import MailIcon from "@mui/icons-material/Mail";
import ShareLocationIcon from "@mui/icons-material/ShareLocation";
import { EnquiryForm } from "../EnquiryForm";

const ContactSection = () => {
  return (
    <Box
      className="contact-section-2 fix section-padding bg-cover"
      style={{ Padding: "10px" }}
    >
      <Box className="container">
        <Box className="contact-wrapper-2">
          <Box className="row align-items-center">
            <Box className="col-lg-6">
              <Box className="contact-content">
                <Box className="section-title">
                  <span
                    className="wow fadeInUp"
                    style={{
                      textDecoration: "none",
                      position: "relative",
                      top: "-60px",
                    }}
                  >
                    Contact Us
                  </span>
                  <Typography
                    variant="h2"
                    className="wow fadeInUp"
                    data-wow-delay=".3s"
                    sx={{
                      color: "#010156",
                      fontSize: "24px",
                      fontWeight: "600",
                      position: "relative",
                      top: "-50px",
                    }}
                  >
                    We&apos;d Love To Hear From You
                  </Typography>
                </Box>
                <Typography
                  variant="body1"
                  className="mt-4 mt-md-0 wow fadeInUp"
                  data-wow-delay=".5s"
                  sx={{
                    fontSize: "16px",
                    position: "relative",
                    top: "-50px",
                  }}
                >
                  Whether you&apos;re curious about features, a free trial, or
                  even press - we&apos;re ready to answer any and all quetions.
                </Typography>
                <Box className="contact-info-area mt-0">
                  <Box
                    className="contact-info-items mb-4 wow fadeInUp"
                    data-wow-delay=".7s"
                  >
                    <Box className="icon">
                      <CallIcon
                        sx={{
                          fontSize: 16,
                          color: "#010156",
                        }}
                      />
                    </Box>
                    <Box className="content">
                      <Typography
                        variant="body1"
                        sx={{
                          fontSize: "18px",
                          fontWeight: "700",
                        }}
                      >
                        Call For Inquiry
                      </Typography>
                      <Typography variant="h3">
                        <Link
                          to="tel:+2349160005465"
                          style={{ color: "#4E4A59", fontSize: "14px" }}
                        >
                          +234 916 000 LINK (5465)
                        </Link>
                        <br />
                        <Link
                          to="tel:+2349041423631"
                          style={{ color: "#4E4A59", fontSize: "14px" }}
                        >
                          +234 904 1423 631
                        </Link>
                        <br />
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    className="contact-info-items mb-4 wow fadeInUp"
                    data-wow-delay=".8s"
                  >
                    <Box className="icon">
                      <MailIcon
                        sx={{
                          fontSize: 16,
                          color: "#010156",
                        }}
                      />
                    </Box>
                    <Box className="content">
                      <Typography
                        variant="body1"
                        sx={{
                          fontSize: "18px",
                          fontWeight: "700",
                        }}
                      >
                        Send Us Email
                      </Typography>
                      <h3>
                        <Link
                          to="mailto:hello@linkorgnet.com"
                          style={{ color: "#4E4A59", fontSize: "14px" }}
                        >
                          hello@linkorgnet.com
                        </Link>
                        <br />
                        <Link
                          to="mailto:noc@linkorgnet.com"
                          style={{ color: "#4E4A59", fontSize: "14px" }}
                        >
                          noc@linkorgnet.com
                        </Link>
                      </h3>
                    </Box>
                  </Box>
                  <Box
                    className="contact-info-items wow fadeInUp"
                    data-wow-delay=".9s"
                  >
                    <Box className="icon">
                      <ShareLocationIcon
                        sx={{
                          fontSize: 16,
                          color: "#010156",
                        }}
                      />
                    </Box>
                    <Box className="content">
                      <Typography
                        variant="body1"
                        sx={{
                          fontSize: "18px",
                          fontWeight: "700",
                        }}
                      >
                        Location
                      </Typography>
                      <Typography
                        variant="h5"
                        sx={{
                          color: "#4E4A59",
                          fontSize: "14px",
                        }}
                      >
                        177B Sinari Daranijo Street,
                        <br /> Victoria Island, Lagos
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box className="col-lg-6 mt-5 mt-lg-0">
              <EnquiryForm />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactSection;
