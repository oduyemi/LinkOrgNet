import React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import CheckIcon from '@mui/icons-material/Check';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { ServiceForm } from "./ServiceForm";
import VpnLockIcon from '@mui/icons-material/VpnLock';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import PhoneCallbackIcon from '@mui/icons-material/PhoneCallback';
import LeasedLineIcon from '@mui/icons-material/SettingsInputHdmi';

export const EstateConnect = () => {
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
                                    Internet Solutions
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
                                  Estate Connect
                                </Typography>
                                <Typography 
                                    variant="body1" 
                                    className="mb-4"
                                    sx={{
                                        fontFamily: "montserrat"
                                    }}
                                >
                                   Estate Connect Internet refers to a dedicated internet service specifically 
                                   designed for residential estates or gated communities.
                                    <br/><br/>
                                    It provides high-speed, reliable internet connectivity to multiple homes or 
                                    apartments within an estate through a centralized network infrastructure. 
                                    <br/><br/>
                                    Key Features of Estate Connect Internet:
                                </Typography>
                                <p className="fw-medium blutext"><CheckIcon /> Centralized Network: A single ISP sets up a network for the entire estate, providing consistent coverage and speed across all homes.</p>
                                <p className="fw-medium blutext"><CheckIcon /> High-Speed Connectivity: Delivers fast internet for activities like streaming, gaming, and remote work.</p>
                                <p className="fw-medium blutext"><CheckIcon /> Shared Infrastructure: A shared backbone network connects all homes, reducing installation needs and costs.</p>
                                <p className="fw-medium blutext"><CheckIcon /> Customizable Plans: Offers flexible internet plans based on residents' usage, from basic to high-speed options.</p>
                                <p className="fw-medium blutext"><CheckIcon /> Enhanced Security: Features centralized security measures like firewalls and secure access points to protect the network.</p>
                                <p className="fw-medium blutext"><CheckIcon /> Convenience: Includes professional network management and support, minimizing downtime and ensuring quick issue resolution.</p>
                                <Box className="blu d-flex align-items-center p-4 mt-5">
                                    <Box className="d-flex flex-shrink-0 align-items-center justify-content-center bg-white" style={{width: "60px", height: "60px"}}>
                                        <PhoneCallbackIcon className="blutext" />
                                    </Box>
                                    <Box className="ms-3">
                                        <p className="fs-5 fw-medium mb-2 text-secondary">Got Questions? </p>
                                        <Typography
                                            variant="h3" 
                                            className="m-0 text-light"
                                            sx={{
                                                fontSize: "20px"
                                            }}
                                        >
                                            +234 803 406 0434
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                        <Box className="col-lg-6 pt-4" style={{minHeight: "300px"}}>
                            <Box 
                            className="position-relative h-100 wow fadeInUp" 
                            data-wow-delay="0.5s"
                            sx={{
                                width: "100%",
                                height: "fitContent"
                            }}
                            >
                                <img className="position-absolute img-fluid" src={require("../../assets/images/subservice/estate.jpg")} style={{width: "100%", objectFit: "contain", paddingTop: "50px"}} alt="" />
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
                                        specialized services
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
                                        Internet
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
                                        Hign Speed Wireless
                                    </Typography>
                                    <p>High-speed wireless internet is an essential technology for modern internet connectivity, supporting mobile users, home networks, and underserved areas without wired infrastructure.</p>
                                    <p className="orangetext fw-medium"><CheckIcon className="me-2 orangetext" /> Quality Service</p>
                                    <p className="orangetext fw-medium"><CheckIcon className="me-2 orangetext" /> Customer Satisfaction</p>
                                    <p className="orangetext fw-medium"><CheckIcon className="me-2 orangetext" /> Support 24/7</p>
                                    <Link to="/services/internet/highspeed" className="theme-btn theme-btn-2 mt-2">
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
                                       Fiber To Home
                                    </Typography>
                                    <p>FTTH delivers cutting-edge internet performance directly to homes, making it one of the most advanced and reliable options for residential internet access.</p>
                                    <p className="orangetext fw-medium"><CheckIcon className="me-2 orangetext" /> Quality Service</p>
                                    <p className="orangetext fw-medium"><CheckIcon className="me-2 orangetext" /> Customer Satisfaction</p>
                                    <p className="orangetext fw-medium"><CheckIcon className="me-2 orangetext" /> Support 24/7</p>
                                    <Link to="/services/internet/fiber" className="theme-btn theme-btn-2 mt-2">
                                        Learn More
                                        <ChevronRightIcon className="ms-2 text-light" />
                                    </Link>
                                </Box>
                                <Box className="bg-light p-4">
                                    <Box className="d-flex align-items-center justify-content-center border border-5 border-white mb-4" style={{width: "75px", height: "75px"}}>
                                        <LeasedLineIcon className="blutext" />
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
                                        Estate Connect
                                    </Typography>
                                    <p>This type of service is ideal for estates or gated communities looking to provide seamless, high-quality internet access to residents without each household requiring individual ISP contracts or setups.</p>
                                    <p className="orangetext fw-medium"><CheckIcon className="me-2 orangetext" /> Quality Service</p>
                                    <p className="orangetext fw-medium"><CheckIcon className="me-2 orangetext" /> Customer Satisfaction</p>
                                    <p className="orangetext fw-medium"><CheckIcon className="me-2 orangetext" /> Support 24/7</p>
                                    <Link to="/services/internet/estate_connect" className="theme-btn theme-btn-2 mt-2">
                                        Learn More
                                        <ChevronRightIcon className="ms-2 text-light" />
                                    </Link>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>

            <ServiceForm />
        </Box>
    );
};
