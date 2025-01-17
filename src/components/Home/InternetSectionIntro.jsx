import React from "react";
import { Box, Typography } from "@mui/material";
import { InternetServices } from "./InternetServices";
import { Link } from "react-router-dom";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export const InternetSection = ()=> {
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
            </Box>
            <InternetServices />
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
    )
}