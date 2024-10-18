import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import SpeakerPhoneIcon from "@mui/icons-material/SpeakerPhone";
import LanguageIcon from "@mui/icons-material/Language";
import SettingsInputAntennaIcon from "@mui/icons-material/SettingsInputAntenna";
import VpnLockIcon from "@mui/icons-material/VpnLock";
// import { LineStyle } from '@mui/icons-material';

const ServiceSection = () => {
  return (
    <Box className="service-section section-padding fix pt-0">
      <Box className="container">
        <Box className="title-section-area">
          <Box className="section-title">
            <span className="wow fadeInUp" style={{ textDecoration: "none" }}>
              Your Internet Partner
            </span>{" "}
            <br />
            <Typography
              variant="h2"
              // className="wow fadeInUp d-inline"
              data-wow-delay=".3s"
              sx={{
                fontSize: "36px",
                fontWeight: 800,
                lineHeight: "1.3",
                fontFamily: "montserrat",
                color: "#010156",
              }}
            >
              Unlock Seamless{" "}
              <Typography
                className="d-inline"
                variant="h2"
                sx={{
                  fontSize: "36px",
                  fontWeight: 800,
                  fontFamily: "montserrat",
                  color: "#E65D0F",
                }}
              >
                 Connectivity
              </Typography>{" "}
              <br />
              with one of Nigeria&apos;s Leading <br />
              Internet Provider
            </Typography>
          </Box>
          <Typography
            variant="body1"
            className="wow fadeInUp w-75"
            data-wow-delay=".5s"
            sx={{
              fontFamily: "montserrat",
              fontWeight: 300,
              fontSize: "18px",
              maxWidth: "680px",
              margin: "0 auto",
            }}
          >
            Stay connected with one of Nigeria's leading Internet provider.
            As a top IT and networks provider, we specialize in Internet
            services. Our expertise extends beyond Internet service; we offer
            comprehensive services including Satellite , VPN, Voip, IT & Network
            Solutions, Storage Solutions, Collocation & Datacenter, and Software
            services to ensure you stay connected no matter where you are.
            <br />
            <br />
            Whether you're streaming, working, or gaming, our high-speed
            internet solutions guarantee seamless connectivity to the world.
            Enjoy lightning-fast and dependable service designed to meet your
            unique needs, ensuring that your online activities are smooth and
            uninterrupted.
            <br />
          </Typography>
        </Box>
        <Box className="row">
          <Box
            className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay=".3s"
          >
            <Link to="/services/internet">
              <Box className="service-box-items">
                <Box className="icon">
                  <LanguageIcon
                    sx={{
                      fontSize: 70,
                      color: "#E65D0F",
                    }}
                    className="whitaker"
                  />
                </Box>
                <Box className="content">
                  <h3>
                    <Link to="" className="blutext whitaker">
                      Internet Solutions
                    </Link>
                  </h3>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: "14px",
                      fontWeight: "300",
                      lineHeight: "1.5",
                      fontFamily: "montserrat",
                    }}
                  >
                    Reliable Networks, Anywhere
                  </Typography>
                  <Link to="/services/internet" className="arrow-icon">
                    <ChevronRightIcon
                      sx={{
                        fontSize: 70,
                        color: "#010156",
                      }}
                    />
                  </Link>
                </Box>
              </Box>
            </Link>
          </Box>

          <Box
            className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay=".5s"
          >
            <Link to="/services/vpn-solutions">
              <Box className="service-box-items active">
                <Box className="icon d-inline">
                  <VpnLockIcon
                    sx={{
                      fontSize: 70,
                      color: "#ffffff",
                    }}
                    className="d-inline"
                  />
                </Box>
                <Box className="content">
                  <h3>
                    <Link to="/services/vpn-solutions">VPN</Link>
                  </h3>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: "14px",
                      fontWeight: "300",
                      lineHeight: "1.5",
                      fontFamily: "montserrat",
                    }}
                  >
                    Private &amp; Secure Internet Access
                  </Typography>
                  <Link to="/services/vpn-solutions" className="arrow-icon">
                    <ChevronRightIcon
                      sx={{
                        fontSize: 70,
                        color: "#010156",
                      }}
                    />
                  </Link>
                </Box>
              </Box>
            </Link>
          </Box>

          <Box
            className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay=".7s"
          >
            <Link to="/services/voip-services">
              <Box className="service-box-items">
                <Box className="icon">
                  <SpeakerPhoneIcon
                    sx={{
                      fontSize: 70,
                      color: "#E65D0F",
                    }}
                    className="d-inline whitaker"
                  />
                </Box>
                <Box className="content">
                  <h3>
                    <Link to="" className="blutext whitaker">
                      VOIP Solutions
                    </Link>
                  </h3>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: "14px",
                      fontWeight: "300",
                      lineHeight: "1.5",
                      fontFamily: "montserrat",
                    }}
                  >
                    Crystal Clear Calls, Anywhere
                  </Typography>
                  <Link to="/services/voip-services" className="arrow-icon">
                    <ChevronRightIcon
                      sx={{
                        fontSize: 70,
                        color: "#010156",
                      }}
                    />
                  </Link>
                </Box>
              </Box>
            </Link>
          </Box>
          <Box
            className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay=".9s"
          >
            <Link to="/services/satellite">
              <Box className="service-box-items">
                <Box className="icon">
                  <SettingsInputAntennaIcon
                    sx={{
                      fontSize: 70,
                      color: "#E65D0F",
                    }}
                    className="d-inline whitaker"
                  />
                </Box>
                <Box className="content">
                  <h3>
                    <Link to="/services/satellite" className="blutext whitaker">
                      Satellite Solution
                    </Link>
                  </h3>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: "14px",
                      fontWeight: "300",
                      lineHeight: "1.5",
                      fontFamily: "montserrat",
                    }}
                  >
                    Stay Connected, Even Off-Grid
                  </Typography>
                  <Link to="/services/satellite" className="arrow-icon">
                    <ChevronRightIcon
                      sx={{
                        fontSize: 70,
                        color: "#010156",
                      }}
                    />
                  </Link>
                </Box>
              </Box>
            </Link>
          </Box>
          <Box
            maxWidth="sm"
            className="team-button text-center mx-auto mt-5 wow fadeInUp"
            data-wow-delay=".4s"
          >
            <Link to="/services" className="theme-btn theme-btn-2">
              <span>
                Explore Services
                <ChevronRightIcon />
              </span>
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ServiceSection;
