import React from 'react';
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import CellTowerIcon from '@mui/icons-material/CellTower';
import SpeakerPhoneIcon from '@mui/icons-material/SpeakerPhone';
import SettingsInputAntennaIcon from '@mui/icons-material/SettingsInputAntenna';
import StreamIcon from '@mui/icons-material/Stream';

const ServiceSection = () => {
  return (
    <Box className="service-section section-bg-4 fix section-padding">
      <Box className="container">
        <Box className="title-section-area">
          <Box className="section-title style-2">
            <span className="wow fadeInUp">Our Services Area</span> 
            <Typography
                variant="h2" 
                className="wow fadeInUp" 
                data-wow-delay=".3s"
                sx={{
                    color: "#010156"
                }}
            >
                 Best Digital Broadband<br />
                 Service For People
            </Typography> 
             
          </Box>
          <p className="wow fadeInUp" data-wow-delay=".5s">
          Our support is delivered by a network of skilled and talented engineers and technicians. <br /> We pride ourselves on offering a customer-centric approach, ensuring that each client's unique needs are met with tailored solutions. <br />
          Our state-of-the-art technology and innovative solutions keep us at the forefront of the telecommunications industry.
          </p>
        </Box>
        <Box className="service-wrapper-3">
          <Box className="service-box-items style-2 wow fadeInUp" data-wow-delay=".3s">
            <Box className="icon">
            <CellTowerIcon 
                sx={{
                    fontSize: 70,
                    color: "orange"
                    // paddingTop: "20px"
                }}
                className=""
            />
              {/* <i className="flaticon-wifi-router-2"></i> */}
            </Box>
            <Box className="content">
              <h6>
                <Link to="/service-details">
                 VSAT
                </Link>
              </h6>
            </Box>
          </Box>
          <Box className="service-box-items style-2 active wow fadeInUp" data-wow-delay=".5s">
            <Box className="icon">
            <SpeakerPhoneIcon 
                  sx={{
                      fontSize: 70,
                      color: "orange"
                  }}
                  className="d-inline"
              />
            </Box>
            <Box className="content">
              <h6>
                <Link to="/service-details">
                 VOIP Services
                </Link>
              </h6>
            </Box>
          </Box>
          <Box className="service-box-items style-2 wow fadeInUp" data-wow-delay=".7s">
            <Box className="icon">                              
            <StreamIcon 
                  sx={{
                      fontSize: 70,
                      color: "orange"
                  }}
                  className="d-inline"
              />
            </Box>
            <Box className="content">
              <h6>
                <Link to="/service-details">
                Maritime VSAT
                </Link>
              </h6>
            </Box>
          </Box>
          <Box className="service-box-items style-2 wow fadeInUp" data-wow-delay=".8s">
            <Box className="icon">                              
            <SettingsInputAntennaIcon 
                  sx={{
                      fontSize: 70,
                       color: "orange"
                  }}
                  className="d-inline"
              />
            </Box>
            <Box className="content">
              <h6>
                <Link to="/service-details">
                 Network Services
                </Link>
              </h6>
            </Box>
          </Box>
        </Box>
        <Box className="service-text-area text-center mt-5 wow fadeInUp" data-wow-delay=".4s">
          <h5>
            Bring them together and you overcome the ordinary.
            <Link to="/service" className="link-btn link-btn-2">
              <span>View More Service</span>
              <i className="fal fa-plus"></i>
            </Link>
          </h5>
        </Box>
      </Box>
    </Box>
  );
};

export default ServiceSection;
