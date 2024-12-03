import React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import CheckIcon from '@mui/icons-material/Check';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { ServiceForm } from "./ServiceForm";
import VpnLockIcon from '@mui/icons-material/VpnLock';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import PhoneCallbackIcon from '@mui/icons-material/PhoneCallback';

export const VpnMpls3 = () => {
    return (
        <Box>      
            <Box className="container-xxl py-5">
                <Box className="container">
                    <Box className="row g-5">
                        <Box className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                            <Box className="section-title">
                                <span 
                                    className="wow fadeInUp" 
                                    style={{textDecoration: "none"}}
                                >
                                    VPN Solutions
                                </span>
                                <Typography 
                                    variant="h1" 
                                    className="mb-4 blutext"
                                    sx={{
                                        fontFamily: "montserrat",
                                        fontSize: "32px",
                                        fontWeight: 700
                                    }}
                                > 
                                    MPLS L3VPN
                                </Typography>
                                <Typography 
                                    variant="body1" 
                                    className="mb-4"
                                    sx={{
                                        fontFamily: "montserrat"
                                    }}
                                >
                                    MPLS L3VPN is a type of PE-based L3VPN technology 
                                    for service provider VPN solutions. It uses BGP 
                                    to advertise VPN routes and uses MPLS to forward 
                                    VPN packets on service provider backbones.
                                    <br/><br/>
                                    MPLS L3VPN provides flexible networking modes, 
                                    excellent scalability, and convenient support 
                                    for MPLS QoS and MPLS TE.
                                    <br/><br/>
                                    The MPLS L3VPN model consists of the following types of devices:
                                </Typography>
                                <p className="fw-medium blutext"><CheckIcon /> Customer edge (CE) device</p>
                                <p className="fw-medium blutext"><CheckIcon /> Provider edge (PE) device</p>
                                <p className="fw-medium blutext"><CheckIcon /> Provider (P) device</p>
                                <Box className="blu d-flex align-items-center p-4 mt-5">
                                    <Box className="d-flex flex-shrink-0 align-items-center justify-content-center bg-white" style={{width: "60px", height: "60px"}}>
                                        <PhoneCallbackIcon className="blutext" />
                                    </Box>
                                    <Box className="ms-3">
                                        <p className="fs-5 fw-medium mb-2 text-secondary">Speak To Our Team Now </p>
                                        <Typography
                                            variant="h3" 
                                            className="m-0 text-light"
                                            sx={{
                                                fontSize: "20px"
                                            }}
                                        >
                                            +234 916 000 LINK (5465)
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                        <Box className="col-lg-6 pt-4" style={{minHeight: "500px"}}>
                            <Box className="position-relative h-100 wow fadeInUp" data-wow-delay="0.5s">
                                <img className="position-absolute img-fluid w-100 h-100" src={require("../../assets/images/mplsl3vpn_a.png")} style={{objectFit: "cover", padding: "0 0 50px 100px"}} alt="" />
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
   
            <Box className="container-fluid fact orange my-5 py-5">
                <Box className="container">
                    <Box className="row g-4">
                        <Box className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.1s">
                            <Box className="counter-items text-light">
                                <h2><span className="count">50</span>+</h2>
                                <p>
                                    YEARS OF <br />
                                    <span className="d-inline" style={{ fontSize: "10px" }}>combined<br/></span>EXPERIENCE
                                </p>
                            </Box>
                        </Box>
                        <Box className="col-md-6 col-lg-3 text-center wow fadeIn text-light" data-wow-delay="0.3s">
                            <h2><span className="count">30</span>+</h2>
                            <p>
                                GLOBAL  <br />
                                CLIENTS
                            </p>
                        </Box>
                        <Box className="col-md-6 col-lg-3 text-center wow fadeIn text-light" data-wow-delay="0.5s">
                            <h2><span className="count">2.5</span>k</h2>
                            <p>
                                KILOMETERS <br />
                                OF FIBERS
                            </p>
                        </Box>
                        <Box className="col-md-6 col-lg-3 text-center wow fadeIn text-light" data-wow-delay="0.7s">
                            <p>
                                <br/>
                                SATELLITE <br />
                                CHANNELS
                            </p>
                        </Box>
                    </Box>
                </Box>
            </Box>
     
            <Box className="container-fluid py-5 px-4 px-lg-0">
                <Box className="row g-0">
                    <Box className="col-lg-3 d-none d-lg-flex">
                        <Box className="d-flex align-items-center justify-content-center blu w-100 h-100">
                            <h1 className="display-3 text-white m-0" style={{transform: "rotate(-90deg)"}}>Feel Connected</h1>
                        </Box>
                    </Box>
                    <Box className="col-md-12 col-lg-9">
                        <Box className="ms-lg-5 ps-lg-5">
                            <Box className="text-center text-lg-start wow fadeInUp" data-wow-delay="0.1s">
                                <Box className="section-title">
                                    <span 
                                        className="wow fadeInUp" 
                                        style={{textDecoration: "none"}}
                                    >
                                        specialised services
                                    </span>
                                    <Typography
                                        variant="h1" 
                                        className="mb-4 blutext"
                                        sx={{
                                            fontFamily: "montserrat",
                                            fontSize: "32px",
                                            fontWeight: 700
                                        }}
                                    >
                                        VPN
                                    </Typography>
                                </Box>
                            </Box>
                            <Box className="owl-carousel service-carousel position-relative wow fadeInUp" data-wow-delay="0.1s">
                                <Box className="bg-light p-4">
                                    <Box className="d-flex align-items-center justify-content-center border border-5 border-white mb-4" style={{width: "75px", height: "75px"}}>
                                        <VpnLockIcon className="blutext" />
                                    </Box>
                                    <Typography
                                        variant="h3"
                                        className="mb-3 blutext"
                                        sx={{
                                            fontFamily: "montserrat",
                                            fontSize: "24px",
                                            fontWeight: 600
                                        }}
                                    >
                                        MPLS L3VPN
                                    </Typography>
                                    <p>Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam justo.</p>
                                    <p className="orangetext fw-medium"><CheckIcon className="me-2 orangetext" /> Quality Service</p>
                                    <p className="orangetext fw-medium"><CheckIcon className="me-2 orangetext" /> Customer Satisfaction</p>
                                    <p className="orangetext fw-medium"><CheckIcon className="me-2 orangetext" /> Support 24/7</p>
                                    <Link to="" className="theme-btn theme-btn-2 mt-2">
                                        Learn More
                                        <ChevronRightIcon className="ms-2 text-light" />
                                    </Link>
                                </Box>
                                <Box className="bg-light p-4">
                                    <Box className="d-flex align-items-center justify-content-center border border-5 border-white mb-4" style={{width: "75px", height: "75px"}}>
                                        <VpnKeyIcon className="blutext" />
                                    </Box>
                                    <Typography
                                        variant="h3"
                                        className="mb-3 blutext"
                                        sx={{
                                            fontFamily: "montserrat",
                                            fontSize: "24px",
                                            fontWeight: 600
                                        }}
                                    >
                                        MPLS L2VPN
                                    </Typography>
                                    <p>Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam justo.</p>
                                    <p className="orangetext fw-medium"><CheckIcon className="me-2 orangetext" /> Quality Service</p>
                                    <p className="orangetext fw-medium"><CheckIcon className="me-2 orangetext" /> Customer Satisfaction</p>
                                    <p className="orangetext fw-medium"><CheckIcon className="me-2 orangetext" /> Support</p>
                                    <ServiceForm />
                                  </Box>
                                </Box>
                              </Box>
                            </Box>
                           </Box>
                          </Box> 
                  </Box>
);
}
