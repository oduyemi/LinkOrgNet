import React from "react";
import { Box, Typography } from "@mui/material";
import {VpnMpls3} from "../../components/SubServices/VpnMpls3";
import { Link } from "react-router-dom";
import VPNImage from "../../assets/images/subservice/vpn.png"
import RemoveIcon from '@mui/icons-material/Remove';
import Footer from "../../components/Footer";


const Mpls3 = () => {
    return(
        <Box>
            <Box>
            <Box className="breadcrumb-wrapper section-padding bg-cover" 
            style={{
                backgroundImage: `url(${VPNImage}`
            }}
        >
            <Box className="container">
                <Box className="page-heading">
                    <Typography 
                        variant="h1" 
                        className="wow fadeInUp" 
                        data-wow-delay=".3s"
                        sx={{
                        }}
                    >
                        MPLS L3VPN
                    </Typography>
                    <ul className="breadcrumb-items wow fadeInUp" data-wow-delay=".5s">
                        <li>
                            <Link to="/">
                            Home Page
                            </Link>
                        </li>
                        <li>
                            <RemoveIcon />
                        </li>
                        <li>
                            <Link to="/services/vpn-solutions">
                               VPN Solutions
                            </Link>
                        </li>
                        <li>
                            MPLS L3VPN
                        </li>
                    </ul>
                </Box>
            </Box>
        </Box>
        </Box>
        <VpnMpls3 />
        <Footer />
    </Box>
    )
}

export default Mpls3;