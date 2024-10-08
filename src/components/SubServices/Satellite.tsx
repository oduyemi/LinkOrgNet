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

export const HighspeedWireless = () => {
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
                                  High Speed Wireless
                                </Typography>
                                <Typography 
                                    variant="body1" 
                                    className="mb-4"
                                    sx={{
                                        fontFamily: "montserrat"
                                    }}
                                >
                                   High-Speed Wireless Internet refers to a type of broadband internet service that uses radio waves or other wireless technologies to 
                                   provide fast internet access without relying on physical cables, such as fiber optics or telephone lines
                                    <br/><br/>
                                    It delivers data at high speeds over the air, connecting devices like computers, smartphones, and tablets to the internet.
                                    <br/><br/>
                                    Key Features of High-Speed Wireless Internet:
                                </Typography>
                                <p className="fw-medium blutext"><CheckIcon /> Wireless Transmission: Uses radio waves or microwaves for data transmission without physical cables.</p>
                                <p className="fw-medium blutext"><CheckIcon /> High Speeds: Ranges from 25 Mbps to over 1 Gbps, depending on the technology (Wi-Fi, 4G, 5G)</p>
                                <p className="fw-medium blutext"><CheckIcon /> Various Technologies: Includes Wi-Fi, 4G LTE, 5G, and fixed wireless.</p>
                                <p className="fw-medium blutext"><CheckIcon /> Mobility and Flexibility: Offers internet access in multiple locations without being tethered by cables.</p>
                                <p className="fw-medium blutext"><CheckIcon /> Cost-Effective: Especially useful in areas where laying cables is difficult.</p>
                                <p className="fw-medium blutext"><CheckIcon /> Challenges: May face signal interference, limited coverage in remote areas, and slower speeds due to network congestion.</p>
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
                                <img className="position-absolute img-fluid" src={require("../../assets/images/subservice/highspeed.gif")} style={{width: "100%", objectFit: "contain", paddingTop: "50px"}} alt="" />
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
