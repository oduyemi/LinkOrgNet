import React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import SpeakerPhoneIcon from '@mui/icons-material/SpeakerPhone';
import CellTowerIcon from '@mui/icons-material/CellTower';
import SettingsInputAntennaIcon from '@mui/icons-material/SettingsInputAntenna';
import StreamIcon from '@mui/icons-material/Stream';

export const ServicesSection = () => {
    return(
        <Box className="service-section-3 fix section-padding pt-0">
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
                            fontFamily: "Museo Sans"
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
                                <Typography
                                variant="body1" 
                                sx={{
                                     fontSize: "16px",
                                     fontWeight: "300",
                                     lineHeight: "1.5", 
                                     fontFamily: "Museo Sans"    
                                }}
                                >
                                    Stay Connected, Even Off-Grid
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
                                <Typography
                                variant="body1" 
                                sx={{
                                     fontSize: "16px",
                                     fontWeight: "300",
                                     lineHeight: "1.5", 
                                     fontFamily: "Museo Sans"    
                                }}
                                >
                                    Crystal Clear Calls, Anywhere
                                </Typography>
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
                                    <Link to="">
                                        Maritime VSAT
                                    </Link>
                                </h3>
                                <Typography
                                variant="body1" 
                                sx={{
                                     fontSize: "16px",
                                     fontWeight: "300",
                                     lineHeight: "1.5", 
                                     fontFamily: "Museo Sans"    
                                }}
                                >
                                    Seamless Connectivity at Sea
                                </Typography>
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
                                <Typography
                                variant="body1" 
                                sx={{
                                     fontSize: "16px",
                                     fontWeight: "300",
                                     lineHeight: "1.5", 
                                     fontFamily: "Museo Sans"    
                                }}
                                >
                                    Reliable Networks, Anytime, Anywhere
                                </Typography>
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
                                <Typography
                                variant="body1" 
                                sx={{
                                     fontSize: "16px",
                                     fontWeight: "300",
                                     lineHeight: "1.5", 
                                     fontFamily: "Museo Sans"    
                                }}
                                >
                                    Stay Connected, Even Off-Grid
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
                                <Typography
                                variant="body1" 
                                sx={{
                                     fontSize: "16px",
                                     fontWeight: "300",
                                     lineHeight: "1.5", 
                                     fontFamily: "Museo Sans"    
                                }}
                                >
                                    Crystal Clear Calls, Anywhere
                                </Typography>
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
                                    <Link to="">
                                        Maritime VSAT
                                    </Link>
                                </h3>
                                <Typography
                                variant="body1" 
                                sx={{
                                     fontSize: "16px",
                                     fontWeight: "300",
                                     lineHeight: "1.5", 
                                     fontFamily: "Museo Sans"    
                                }}
                                >
                                    Seamless Connectivity at Sea
                                </Typography>
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
                                <Typography
                                variant="body1" 
                                sx={{
                                     fontSize: "16px",
                                     fontWeight: "300",
                                     lineHeight: "1.5", 
                                     fontFamily: "Museo Sans"    
                                }}
                                >
                                    Reliable Networks, Anytime, Anywhere
                                </Typography>
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

    )
}