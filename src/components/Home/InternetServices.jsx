import React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import LanguageIcon from "@mui/icons-material/Language";



export const InternetServices = () => {
    return(
        <Box className="service-section section-padding fix pt-0">
      <Box className="container mx-auto">
        <Box className="title-section-area">
          <Box className="section-title">
            <span className="wow fadeInUp" style={{ textDecoration: "none" }}>
              Your Internet Partner
            </span>{" "}
            <br />
            <Typography
              variant="h2"
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
            LinkOrg Networks is an engineering solution company providing 
            advanced internet solutions, including Fiber to the Home (FTTH), 
            Fiber to the Office (FTTO), wireless internet, and rural 
            telephony. We also offer a range of value-added services such as 
            VoIP solutions, Enterprise VPN, data storage and collocation, 
            IT and network services, and software solutions. Our mission is 
            to deliver reliable, cutting-edge communication services that 
            meet the evolving needs of our clients.
            <br />
          </Typography>
        </Box>
        <Box className="row justify-content-center mx-auto">
            <Box>
                <Typography
                    variant="h2"
                    sx={{
                        fontSize: "24px",
                        fontWeight: 600,
                        textAlign: "center",
                        fontFamily: "montserrat",
                        color: "#010156",
                        marginBottom: "10px",
                    }}
                    className="mt-5"
                >
                    Our Internet Plans
                </Typography>
            </Box>
          <Box
            className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay=".3s"
          >
            <Link to="/services/internet/retail">
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
                <Box className="mt-4">
                    <img src={require("../../assets/images/person.jpg")} width="100%" className="img-responsive" alt="" />
                </Box>
                <Box className="content">
                  <h3>
                    <Link to="" className="blutext whitaker">
                      Retail &amp; SME
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
                    Fiber broadband straight to your door.
                    Suitable for personal use.
                  </Typography>
                  <Link to="/services/internet/retail" className="arrow-icon">
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
            <Link to="/services/internet/enterprise">
              <Box className="service-box-items active">
                <Box className="icon d-inline">
                  <LanguageIcon
                    sx={{
                      fontSize: 70,
                      color: "#ffffff",
                    }}
                    className="d-inline"
                  />
                </Box>
                <Box className="mt-4">
                    <img src={require("../../assets/images/coy.jpg")} width="100%" className="img-responsive" alt="" />
                </Box>
                <Box className="content">
                  <h3>
                    <Link to="/services/internet/enterprise">Enterprise Solutions</Link>
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
                    Reliable and scalable solutions for 
                    businesses of all sizes.
                  </Typography>
                  <Link to="/services/internet/enterprise" className="arrow-icon">
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
            maxWidth="l"
            className="team-button text-center mx-auto mt-5 wow fadeInUp"
            data-wow-delay=".4s"
          >
            <Link to="/services/internet" className="theme-btn theme-btn-2">
              <span>
                Learn More
                <ChevronRightIcon />
              </span>
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
    )
}