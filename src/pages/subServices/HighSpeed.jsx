import React from "react";
import { Box, Typography } from "@mui/material";
import {HighspeedWireless} from "../../components/SubServices/HighspeedWireless";
import { Link } from "react-router-dom";
import InternetImage from "../../assets/images/subservice/internet.jpg"
import RemoveIcon from '@mui/icons-material/Remove';
import Footer from "../../components/Footer";


const HighSpeed = () => {
    return(
        <Box>
            <Box>
            <Box className="breadcrumb-wrapper section-padding bg-cover" 
            style={{
                backgroundImage: `url(${InternetImage}`
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
                        High Speed Wireless
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
                            <Link to="/services/internet">
                            Internet Solutions
                            </Link>
                        </li>
                        <li>
                            High Speed Wireless
                        </li>
                    </ul>
                </Box>
            </Box>
        </Box>
        </Box>
        <HighspeedWireless />
        <Footer />
    </Box>
    )
}

export default HighSpeed;