import React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import SpeakerPhoneIcon from '@mui/icons-material/SpeakerPhone';
import CellTowerIcon from '@mui/icons-material/CellTower';
import SettingsInputAntennaIcon from '@mui/icons-material/SettingsInputAntenna';
import StreamIcon from '@mui/icons-material/Stream';

export const AboutServices = () => {
    return(
        <section className="service-section-3 fix section-padding pt-0">
            <Box className="container">
                <Box className="section-title text-center">
                    <span className="wow fadeInUp" style={{ textDecoration: "none"}}>Empower Your Digital Transformation</span>  
                    <Typography
                        variant="h2" 
                        className="wow fadeInUp" 
                        data-wow-delay=".3s"
                        sx={{
                            fontSize: "40px",
                            fontWeight: "300",
                            color: "#010156"
                        }}
                    >
                        Comprehensive IT And  <br />
                        Telecom Solutions
                    </Typography> 
                    <Typography
                        variant="body1"
                        className="wow fadeInUp w-75 mx-auto" 
                        data-wow-delay=".4s"
                        sx={{
                            fontSize: "18px",
                            fontWeight: "300",
                            fontFamily: "Montserrat"
                        }}
                    >
                        Our wide range of services is designed to 
                        address the unique needs of both individuals 
                        and businesses. Whether you need high-speed 
                        internet, secure VPNs, or advanced VoIP solutions, 
                        LinkOrg Networks has you covered. We offer 
                        tailored services that not only meet but exceed 
                        industry standards, ensuring that you have the 
                        tools you need to stay ahead in a digital world.
                    </Typography> 
                </Box>
                <Box className="row">
                    <Box className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                        <Box className="service-box-items">
                            <Box className="icon">
                                <CellTowerIcon 
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
                                        Internet
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
                    </Box>
                    <Box className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                        <Box className="service-box-items active">
                            <Box className="icon d-inline">
                                <SpeakerPhoneIcon 
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
                    </Box>
                    <Box className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
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
                                        VOIP Services
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
                    </Box>
                    <Box className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".9s">
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
                                        VSAT
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
            </Box></section>
        //     </Box>
        // </section>
    )
}