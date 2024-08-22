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
              Your IT & Telecom Partner
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
                 Unlock Seamless<br />
                 Connectivity and Innovation
            </Typography> 
             
          </Box>
          <Typography
            variant="body1" 
            className="wow fadeInUp w-75" 
            data-wow-delay=".5s"
            sx={{
              fontFamily: "Museo Sans",
              fontWeight: 300,
              fontSize: "18px",
            }}
          >
            We don't just provide IT and telecom solutions — we 
            revolutionize your digital experience. Whether 
            you&apos;re an individual or a business, our 
            cutting-edge services, from ultra-fast internet to 
            secure VPNs and reliable VoIP, empower you to stay 
            connected and thrive in a constantly evolving digital world. 
            <br/><br/>With over a decade of expertise, we&apos;re 
            committed to delivering flexible, scalable solutions 
            that grow with you. Let us be your partner in 
            driving your digital future.
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
            <Box maxWidth="sm" className="team-button text-center mx-auto mt-5 wow fadeInUp" data-wow-delay=".4s">
                <Link to="/services" className="theme-btn theme-btn-2">
                    <span>
                    Explore Services
                    <i className="fas fa-chevron-right"></i>
                    </span>
                </Link>
                </Box>
            </Box>
      </Box> 
    </Box>
  );
};

export default ServiceSection;
