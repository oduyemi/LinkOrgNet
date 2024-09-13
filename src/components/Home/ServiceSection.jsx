import React from 'react';
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import SpeakerPhoneIcon from '@mui/icons-material/SpeakerPhone';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsInputAntennaIcon from '@mui/icons-material/SettingsInputAntenna';
import VpnLockIcon from '@mui/icons-material/VpnLock';
// import { LineStyle } from '@mui/icons-material';


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
                  fontSize: "35px",
                  fontWeight: 800,
                  lineHeight: "1.3",
                  fontFamily: "Montserrat",
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
              fontFamily: "Montserrat",
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
                    <Link to='/services/connectivity'>
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
                                        Connectivity Services
                                    </Link>
                                </h3>
                                <Typography
                                variant="body1" 
                                sx={{
                                     fontSize: "14px",
                                     fontWeight: "300",
                                     lineHeight: "1.5", 
                                     fontFamily: "Montserrat"    
                                }}
                                >
                                    Reliable Networks, Anywhere
                                </Typography>
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
                        </Link>
                    </Box>
                 
                    
                    <Box className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                    <Link to='/services/vpn-solutions'>
                        <Box className="service-box-items active">
                            <Box className="icon d-inline">
                                <VpnLockIcon
                                    sx={{
                                        fontSize: 70,
                                        color: "#ffffff"
                                    }}
                                    className="d-inline"
                                />
                            </Box>
                            <Box className="content">
                                <h3>
                                    <Link to="service-details">
                                        VPN
                                    </Link>
                                </h3>
                                <Typography
                                variant="body1" 
                                sx={{
                                     fontSize: "14px",
                                     fontWeight: "300",
                                     lineHeight: "1.5", 
                                     fontFamily: "Montserrat"    
                                }}
                                >
                                    Private &amp; Secure Internet Access
                                </Typography>
                                <Link to="service-details" className="arrow-icon">
                                    <ChevronRightIcon 
                                        sx={{
                                            fontSize: 70,
                                            color: "#010156"
                                        }}
                                    />
                                </Link>
                            </Box>
                        </Box>
                        </Link>
                    </Box>
                  
                    <Box className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                        <Link to='/services/voip-services'>
                        <Box className="service-box-items">
                            <Box className="icon">
                                <SpeakerPhoneIcon 
                                    sx={{
                                        fontSize: 70,
                                        color: "#E65D0F"
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
                                     fontFamily: "Montserrat"    
                                }}
                                >
                                    Crystal Clear Calls, Anywhere
                                </Typography>
                                <Link to="service-details" className="arrow-icon">
                                    <ChevronRightIcon 
                                        sx={{
                                            fontSize: 70,
                                            color: "#010156"
                                        }}
                                    />
                                </Link>
                            </Box>
                        </Box>
                        </Link>

                    </Box>
                    <Box className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".9s">
                        <Link to='/services/satellite'>
                        <Box className="service-box-items">
                            <Box className="icon">
                                <SettingsInputAntennaIcon 
                                    sx={{
                                        fontSize: 70,
                                        color: "#E65D0F"
                                    }}
                                    className="d-inline whitaker"
                                />
                            </Box>
                            <Box className="content">
                                <h3>
                                    <Link to="service-details" className="blutext whitaker">
                                        Satellite Solution
                                    </Link>
                                </h3>
                                <Typography
                                variant="body1" 
                                sx={{
                                     fontSize: "14px",
                                     fontWeight: "300",
                                     lineHeight: "1.5", 
                                     fontFamily: "Montserrat"    
                                }}
                                >
                                    Stay Connected, Even Off-Grid
                                </Typography>
                                <Link to="service-details" className="arrow-icon">
                                    <ChevronRightIcon 
                                        sx={{
                                            fontSize: 70,
                                            color: "#010156"
                                        }}
                                    />
                                </Link>
                            </Box>
                        </Box>
                        </Link>

                    </Box>
                    <Box maxWidth="sm" className="team-button text-center mx-auto mt-5 wow fadeInUp" data-wow-delay=".4s">
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
