import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import hero0 from "../../assets/images/hero0.jpg";
import "./Animation.css";
// import ITSolution2 from "../../assets/images/ITSolution2.jpg";
import CheckIcon from "@mui/icons-material/Check";

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState("internet");

  const renderBulletPoints = () => {
    switch (activeTab) {
      case "internet":
        return (
          <Box>
            <Typography
              variant="body1"
              className="wow fadeInUp"
              data-wow-delay=".4s"
              sx={{
                fontSize: "16px",
                fontWeight: "400",
                fontFamily: "Montserrat",
              }}
            >
              Experience lightning-fast, reliable internet tailored just for
              you. Whether you're streaming, working, or gaming, our high-speed
              connectivity keeps you seamlessly connected to the world.
            </Typography>
            <ul>
              <li>
                <CheckIcon sx={{ fontSize: 14 }} /> Reliable, high-speed
                internet for seamless online experiences.
              </li>
              <li>
                <CheckIcon sx={{ fontSize: 14 }} /> Scalable bandwidth options
                to match your business or personal needs.
              </li>
              <li>
                <CheckIcon sx={{ fontSize: 14 }} /> Consistent connectivity for
                remote work, streaming, and more.
              </li>
              <li>
                <CheckIcon sx={{ fontSize: 14 }} /> Dedicated support to ensure
                uninterrupted service.
              </li>
            </ul>
          </Box>
        );
      case "vpn":
        return (
          <Box>
            <Typography
              variant="body1"
              className="wow fadeInUp"
              data-wow-delay=".4s"
              sx={{
                fontSize: "16px",
                fontWeight: "400",
                fontFamily: "Montserrat",
              }}
            >
              Protect your data and privacy with our top-tier VPN services.
              Access your network securely from anywhere in the world, ensuring
              your sensitive information stays safe and your online activities
              remain private.
            </Typography>
            <ul>
              <li>
                <CheckIcon sx={{ fontSize: 14 }} /> Secure access to your
                network from any location.
              </li>
              <li>
                <CheckIcon sx={{ fontSize: 14 }} /> Protect sensitive data with
                encrypted connections.
              </li>
              <li>
                <CheckIcon sx={{ fontSize: 14 }} /> Ensure privacy while
                browsing or conducting business online.
              </li>
              <li>
                <CheckIcon sx={{ fontSize: 14 }} /> Custom VPN solutions for
                individual users and corporate teams.
              </li>
            </ul>
          </Box>
        );
      case "voip":
        return (
          <Box>
            <Typography
              variant="body1"
              className="wow fadeInUp"
              data-wow-delay=".4s"
              sx={{
                fontSize: "16px",
                fontWeight: "400",
                fontFamily: "Montserrat",
              }}
            >
              Revolutionize your communication with our crystal-clear VoIP
              solutions. Say goodbye to traditional phone lines and enjoy
              cost-effective, feature-rich calls that enhance your personal or
              business communication.
            </Typography>
            <ul>
              <li>
                <CheckIcon sx={{ fontSize: 14 }} /> Clear, cost-effective
                communication via internet calls.
              </li>
              <li>
                <CheckIcon sx={{ fontSize: 14 }} /> Scalable VoIP systems for
                businesses of all sizes.
              </li>
              <li>
                <CheckIcon sx={{ fontSize: 14 }} /> Advanced features like call
                forwarding, voicemail, and conferencing.
              </li>
              <li>
                <CheckIcon sx={{ fontSize: 14 }} /> Easy integration with
                existing communication tools.
              </li>
            </ul>
          </Box>
        );
      case "vsat":
        return (
          <Box>
            <Typography
              variant="body1"
              className="wow fadeInUp"
              data-wow-delay=".4s"
              sx={{
                fontSize: "16px",
                fontWeight: "400",
                fontFamily: "Montserrat",
              }}
            >
              Stay connected no matter where you are with our cutting-edge VSAT
              services. Perfect for remote and maritime locations, our satellite
              solutions ensure uninterrupted internet and communication, even in
              the most challenging environments.
            </Typography>
            <ul>
              <li>
                <CheckIcon sx={{ fontSize: 14 }} /> Reliable satellite internet
                for remote and maritime locations.
              </li>
              <li>
                <CheckIcon sx={{ fontSize: 14 }} /> Consistent connectivity
                where traditional internet isn’t available.
              </li>
              <li>
                <CheckIcon sx={{ fontSize: 14 }} /> Custom VSAT setups for
                individual needs and corporate operations.
              </li>
              <li>
                <CheckIcon sx={{ fontSize: 14 }} /> 24/7 support for continuous
                communication, no matter the location.
              </li>
            </ul>
          </Box>
        );
      default:
        return null;
    }
  };

  return (
    <Box className="about-section section-padding">
      <Box className="container">
        <Box className="about-wrapper-2">
          <Box className="row">
            <Box
              className="col-lg-6"
            >
              <Box
                className="about-image-1 wow fadeInLeft"
                data-wow-delay=".3s"
                style={{
                  backgroundImage: `url(${hero0})`,
                  backgroundSize: "cover",
                  width: "100%",
                  height: "50vh", // Responsive height based on the viewport height
                  maxWidth: "100%", // Ensure it doesn't exceed the parent's width
                  objectFit: "cover",
                  borderRadius: "0.75rem",
                  transition: "box-shadow 0.3s ease",
                }}
              ></Box>
              {/* <Box 
              className="about-image-items"
              style={{
                background: "red",
                width: "100%",
              }}
              >
           <Box
                className="about-image-1 wow fadeInLeft"
                data-wow-delay=".3s"
                style={{
                  backgroundImage: `url(${hero0})`, 
                  backgroundSize: "cover", 
                  width: "100%",
                  objectFit: "contain", 
                  borderRadius: "0.75rem", 
                  transition: "box-shadow 0.3s ease", 
                }}
              >
            </Box>

              </Box> */}
            </Box>
            <Box className="col-lg-6 mt-5 mt-lg-0">
              <Box className="about-content">
                <Box className="section-title">
                  <span
                    className="wow fadeInUp"
                    style={{ textDecoration: "none" }}
                  >
                    Leading IT &amp; Telecom Services
                  </span>
                  <Typography
                    variant="h2"
                    className="wow fadeInUp"
                    data-wow-delay=".3s"
                    sx={{
                      color: "#010156",
                      fontWeight: 800,
                      fontSize: "30px",
                      fontFamily: "Montserrat",
                    }}
                  >
                    Empower Your{" "}
                    <span style={{ textDecoration: "none", fontWeight: 800 }}>
                      Digital Presence{" "}
                    </span>
                    with LinkOrg Networks
                  </Typography>
                </Box>
                <Typography
                  variant="body1"
                  className="mt-4 mt-md-0 wow fadeInUp"
                  data-wow-delay=".5s"
                  style={{
                    fontWeight: 300,
                    fontFamily: "Montserrat",
                    fontSize: "17px",
                  }}
                >
                  We are your trusted partner for all things IT and
                  telecommunications. From VoIP and VPN services to ISP
                  solutions, VSAT hardware for both terrestrial and maritime
                  needs, and robust terrestrial communications, we provide the
                  technology and expertise you need to succeed. Our dedicated
                  team delivers reliable and efficient Field Telecommunication
                  Engineering Support Services, ensuring your operations run
                  smoothly, no matter the scale. Let us transform your ideas
                  into powerful digital experiences.
                </Typography>
                <Box className="single-tab-items">
                  <ul className="nav mb-4" role="tablist">
                    <li
                      className="nav-item wow fadeInUp"
                      data-wow-delay=".3s"
                      role="presentation"
                    >
                      <Link
                        to="#"
                        className={`nav-link ${
                          activeTab === "internet" ? "active" : ""
                        }`}
                        onClick={() => setActiveTab("internet")}
                        style={{ fontFamily: "Montserrat", fontSize: "11px" }}
                      >
                        Internet
                      </Link>
                    </li>
                    <li
                      className="nav-item wow fadeInUp"
                      data-wow-delay=".5s"
                      role="presentation"
                    >
                      <Link
                        to="#"
                        className={`nav-link ${
                          activeTab === "vpn" ? "active" : ""
                        }`}
                        onClick={() => setActiveTab("vpn")}
                        style={{ fontFamily: "Montserrat", fontSize: "11px" }}
                      >
                        VPN
                      </Link>
                    </li>
                    <li
                      className="nav-item wow fadeInUp"
                      data-wow-delay=".7s"
                      role="presentation"
                    >
                      <Link
                        to="#"
                        className={`nav-link ${
                          activeTab === "voip" ? "active" : ""
                        }`}
                        onClick={() => setActiveTab("voip")}
                        style={{ fontFamily: "Montserrat", fontSize: "11px" }}
                      >
                        VoIP Solutions
                      </Link>
                    </li>
                    <li
                      className="nav-item wow fadeInUp"
                      data-wow-delay=".5s"
                      role="presentation"
                    >
                      <Link
                        to="#"
                        className={`nav-link ${
                          activeTab === "vsat" ? "active" : ""
                        }`}
                        onClick={() => setActiveTab("vsat")}
                        style={{ fontFamily: "Montserrat", fontSize: "11px" }}
                      >
                        VSAT
                      </Link>
                    </li>
                  </ul>
                </Box>
                <Box className="tab-content">
                  <Box
                    className={`tab-pane fade ${
                      activeTab === "internet" ? "show active" : ""
                    }`}
                    role="tabpanel"
                  >
                    {renderBulletPoints()}
                  </Box>
                  <Box
                    className={`tab-pane fade ${
                      activeTab === "vpn" ? "show active" : ""
                    }`}
                    role="tabpanel"
                  >
                    {renderBulletPoints()}
                  </Box>
                  <Box
                    className={`tab-pane fade ${
                      activeTab === "voip" ? "show active" : ""
                    }`}
                    role="tabpanel"
                  >
                    {renderBulletPoints()}
                  </Box>
                  <Box
                    className={`tab-pane fade ${
                      activeTab === "vsat" ? "show active" : ""
                    }`}
                    role="tabpanel"
                  >
                    {renderBulletPoints()}
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutSection;
