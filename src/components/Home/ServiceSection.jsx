import React from 'react';
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import CellTowerIcon from '@mui/icons-material/CellTower';
import SpeakerPhoneIcon from '@mui/icons-material/SpeakerPhone';
import SettingsInputAntennaIcon from '@mui/icons-material/SettingsInputAntenna';
import StreamIcon from '@mui/icons-material/Stream';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';


const ServiceSection = () => {
  return (
    <Box className="service-section section-padding fix pt-0">
      <Box className="container">
        <Box className="title-section-area">
          <Box className="section-title">
            <span className="wow fadeInUp"  
              style={{ textDecoration: "none" }}>
              Our Services Area
            </span> 
            <Typography
                variant="h2" 
                className="wow fadeInUp" 
                data-wow-delay=".3s"
                sx={{
                  fontSize: "48px",
                  fontWeight: 300,
                  lineHeight: "1.3",
                  fontFamily: "Museo Slab",
                  color: "#010156"
                }}
            >
                 Best Digital Broadband<br />
                 Service For People
            </Typography> 
             
          </Box>
          <Typography
            variant="body1" 
            className="wow fadeInUp" 
            data-wow-delay=".5s"
            sx={{
              fontFamily: "Museo Sans",
              fontWeight: 300,
              fontSize: "17px",
              marginTop: "-10px"
            }}
          >
            Our support is delivered by a network 
            of skilled and talented engineers 
            and technicians. <br /> 
            We pride ourselves on offering a 
            customer-centric approach, ensuring 
            that each client's unique needs are met 
            with tailored solutions. <br />
            Our state-of-the-art technology and 
            innovative solutions keep us at the 
            forefront of the telecommunications 
            industry.
          </Typography>
        </Box>
        <Box className="row">
          <Box className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
              <Box className="service-box-items">
                  <Box className="icon">
                      <CellTowerIcon 
                              sx={{
                                  fontSize: 70,
                                  color: "#010156",
                                  // paddingTop: "20px"
                              }}
                              className=""
                          />
                  </Box>
                  <Box className="content">
                      <h3>
                          <Link to="">
                              VSAT
                          </Link>
                      </h3>
                      <p>
                          We approached WiaTech with
                          complex project deliver
                      </p>
                      <Link to="" className="arrow-icon">
                          <ChevronRightIcon 
                              sx={{
                                  fontSize: 70,
                                  color: "#010156"
                              }}
                          />
                      </Link>
                  </Box>
              </Box>
          </Box>
          <Box className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
              <Box className="service-box-items active">
                  <Box className="icon d-inline">
                      <SpeakerPhoneIcon 
                          sx={{
                              fontSize: 70,
                              color: "#010156"
                          }}
                          className="d-inline"
                      />
                  </Box>
                  <Box className="content">
                      <h3>
                          <Link to="service-details.html">
                              VOIP Services
                          </Link>
                      </h3>
                      <p>
                          We approached WiaTech with
                          complex project deliver
                      </p>
                      <Link to="service-details.html" className="arrow-icon">
                          <ChevronRightIcon 
                              sx={{
                                  fontSize: 70,
                                  color: "#010156"
                              }}
                          />
                      </Link>
                  </Box>
              </Box>
          </Box>
          <Box className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
              <Box className="service-box-items">
                  <Box className="icon">
                      <StreamIcon 
                          sx={{
                              fontSize: 70,
                              color: "#010156"
                          }}
                          className="d-inline"
                      />
                  </Box>
                  <Box className="content">
                      <h3>
                          <Link to="service-details.html">
                              Maritime VSAT
                          </Link>
                      </h3>
                      <p>
                          We approached WiaTech with
                          complex project deliver
                      </p>
                      <Link to="service-details.html" className="arrow-icon">
                          <ChevronRightIcon 
                              sx={{
                                  fontSize: 70,
                                  color: "#010156"
                              }}
                          />
                      </Link>
                  </Box>
              </Box>
          </Box>
          <Box className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".9s">
              <Box className="service-box-items">
                  <Box className="icon">
                      <SettingsInputAntennaIcon 
                          sx={{
                              fontSize: 70,
                              color: "#010156"
                          }}
                          className="d-inline"
                      />
                  </Box>
                  <Box className="content">
                      <h3>
                          <Link to="service-details.html">
                              Network Services
                          </Link>
                      </h3>
                      <p>
                          We approached WiaTech with
                          complex project deliver
                      </p>
                      <Link to="service-details.html" className="arrow-icon">
                          <ChevronRightIcon 
                              sx={{
                                  fontSize: 70,
                                  color: "#010156"
                              }}
                          />
                      </Link>
                  </Box>
              </Box>
          </Box>
        </Box>
      </Box> 
    </Box>
  );
};

export default ServiceSection;
