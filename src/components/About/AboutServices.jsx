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
                    <span className="wow fadeInUp" style={{ textDecoration: "none"}}>our services</span>  
                    <Typography
                        variant="h2" 
                        className="wow fadeInUp" 
                        data-wow-delay=".3s"
                        sx={{
                            fontSize: "30px",
                            fontWeight: "400",
                            color: "#010156"
                        }}
                    >
                        How do we work to help you <br />
                        in Startup Business
                    </Typography>  
                </Box>
                <Box className="row">
                    <Box className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                        <Box className="service-box-items">
                            <Box className="icon">
                                <CellTowerIcon 
                                        sx={{
                                            fontSize: 40,
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
                                            fontSize: 40,
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
                                        fontSize: 30,
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
                                            fontSize: 40,
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
                                        fontSize: 30,
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
                                            fontSize: 40,
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
                                        fontSize: 30,
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
                                            fontSize: 40,
                                            color: "#010156"
                                        }}
                                    />
                                </Link>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </section>
    )
}