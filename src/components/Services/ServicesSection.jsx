import React from 'react';
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import LanguageIcon from '@mui/icons-material/Language';
import VpnLockIcon from '@mui/icons-material/VpnLock';
import SpeakerPhoneIcon from '@mui/icons-material/SpeakerPhone';
import SettingsInputAntennaIcon from '@mui/icons-material/SettingsInputAntenna';
import SettingsIcon from '@mui/icons-material/Settings';
import StorageIcon from '@mui/icons-material/Storage';
import DataUsageIcon from '@mui/icons-material/DataUsage';
import CodeIcon from '@mui/icons-material/Code';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const ServicesSection = () => {
    return (
        <Box className="service-section-3 fix section-padding pt-0">
            <Box className="container">
                <Box className="section-title text-center">
                    <span className="wow fadeInUp" style={{ textDecoration: "none" }}>Empower Your Digital Transformation</span>
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
                        Comprehensive IT And <br />
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
                        Our wide range of services is designed to address the unique needs of both individuals and businesses. Whether you need high-speed internet, secure VPNs, or advanced VoIP solutions, LinkOrg Networks has you covered. We offer tailored services that not only meet but exceed industry standards, ensuring that you have the tools you need to stay ahead in a digital world.
                    </Typography>
                </Box>
                <Box className="row">
                    <Link to="/services/connectivity" className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
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
                                <h3 className="blutext whitaker">Connectivity Services</h3>
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
                                <ChevronRightIcon
                                    sx={{
                                        fontSize: 70,
                                        color: "#010156"
                                    }}
                                    className="arrow-icon"
                                />
                            </Box>
                        </Box>
                    </Link>

                    <Link to="/services/vpn-solutions" className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                        <Box className="service-box-items">
                            <Box className="icon">
                                <VpnLockIcon
                                    sx={{
                                        fontSize: 70,
                                        color: "#ffffff"
                                    }}
                                    className="d-inline"
                                />
                            </Box>
                            <Box className="content">
                                <h3 className="blutext whitaker">VPN</h3>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        fontSize: "14px",
                                        fontWeight: "300",
                                        lineHeight: "1.5",
                                        fontFamily: "Montserrat"
                                    }}
                                >
                                    Private & Secure Internet Access
                                </Typography>
                                <ChevronRightIcon
                                    sx={{
                                        fontSize: 70,
                                        color: "#010156"
                                    }}
                                    className="arrow-icon"
                                />
                            </Box>
                        </Box>
                    </Link>

                    <Link to="/services/voip-services" className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
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
                                <h3 className="blutext whitaker">VOIP Solutions</h3>
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
                                <ChevronRightIcon
                                    sx={{
                                        fontSize: 70,
                                        color: "#010156"
                                    }}
                                    className="arrow-icon"
                                />
                            </Box>
                        </Box>
                    </Link>

                    <Link to="/services/satellite" className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".9s">
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
                                <h3 className="blutext whitaker">Satellite Solution</h3>
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
                                <ChevronRightIcon
                                    sx={{
                                        fontSize: 70,
                                        color: "#010156"
                                    }}
                                    className="arrow-icon"
                                />
                            </Box>
                        </Box>
                    </Link>

                    <Link to="/services/it-networks" className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="1.1s">
                        <Box className="service-box-items">
                            <Box className="icon">
                                <SettingsIcon
                                    sx={{
                                        fontSize: 70,
                                        color: "#E65D0F"
                                    }}
                                />
                            </Box>
                            <Box className="content">
                                <h3 className="blutext whitaker">IT & Network Solutions</h3>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        fontSize: "14px",
                                        fontWeight: "300",
                                        lineHeight: "1.5",
                                        fontFamily: "Montserrat"
                                    }}
                                >
                                    Seamless IT Infrastructure and Network Management
                                </Typography>
                                <ChevronRightIcon
                                    sx={{
                                        fontSize: 70,
                                        color: "#010156"
                                    }}
                                    className="arrow-icon"
                                />
                            </Box>
                        </Box>
                    </Link>

                    <Link to="/services/storage-solutions" className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="1.3s">
                        <Box className="service-box-items">
                            <Box className="icon">
                                <StorageIcon
                                    sx={{
                                        fontSize: 70,
                                        color: "#E65D0F"
                                    }}
                                />
                            </Box>
                            <Box className="content">
                                <h3 className="blutext whitaker">Storage Solutions</h3>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        fontSize: "14px",
                                        fontWeight: "300",
                                        lineHeight: "1.5",
                                        fontFamily: "Montserrat"
                                    }}
                                >
                                    Secure and Scalable Data Storage
                                </Typography>
                                <ChevronRightIcon
                                    sx={{
                                        fontSize: 70,
                                        color: "#010156"
                                    }}
                                    className="arrow-icon"
                                />
                            </Box>
                        </Box>
                    </Link>

                    <Link to="/services/collocation-and-data-center" className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="1.5s">
                        <Box className="service-box-items">
                            <Box className="icon">
                                <DataUsageIcon
                                    sx={{
                                        fontSize: 70,
                                        color: "#E65D0F"
                                    }}
                                />
                            </Box>
                            <Box className="content">
                                <h3 className="blutext whitaker">Colocation & Datacenter Services</h3>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        fontSize: "14px",
                                        fontWeight: "300",
                                        lineHeight: "1.5",
                                        fontFamily: "Montserrat"
                                    }}
                                >
                                    Secure, Reliable Hosting for Your Critical Data
                                </Typography>
                                <ChevronRightIcon
                                    sx={{
                                        fontSize: 70,
                                        color: "#010156"
                                    }}
                                    className="arrow-icon"
                                />
                            </Box>
                        </Box>
                    </Link>

                    <Link to="/services/software-services" className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="1.7s">
                        <Box className="service-box-items">
                            <Box className="icon">
                                <CodeIcon
                                    sx={{
                                        fontSize: 70,
                                        color: "#E65D0F"
                                    }}
                                />
                            </Box>
                            <Box className="content">
                                <h3 className="blutext whitaker">Software Services</h3>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        fontSize: "14px",
                                        fontWeight: "300",
                                        lineHeight: "1.5",
                                        fontFamily: "Montserrat"
                                    }}
                                >
                                    Tailored Solutions for Your Unique Needs
                                </Typography>
                                <ChevronRightIcon
                                    sx={{
                                        fontSize: 70,
                                        color: "#010156"
                                    }}
                                    className="arrow-icon"
                                />
                            </Box>
                        </Box>
                    </Link>
                </Box>
            </Box>
        </Box>
    );
};

export default ServicesSection;
