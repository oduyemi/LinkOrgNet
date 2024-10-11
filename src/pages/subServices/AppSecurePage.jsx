import React from "react";
import { Box, Typography } from "@mui/material";
import {AppSecurity} from "../../components/SubServices/AppSecurity";
import { Link } from "react-router-dom";
import NetworkImage from "../../assets/images/subservice/network.jpg"
import RemoveIcon from '@mui/icons-material/Remove';
import Footer from "../../components/Footer";


const AppSecurePage = () => {
    return(
        <Box>
            <Box>
            <Box className="breadcrumb-wrapper section-padding bg-cover" 
            style={{
                backgroundImage: `url(${NetworkImage}`
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
                        Application Security
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
                            <Link to="/services/it-networks">
                            IT & Network Solutions 
                            </Link>
                        </li>
                        <li>
                        Application Security
                        </li>
                    </ul>
                </Box>
            </Box>
        </Box>
        </Box>
        <AppSecurity />
        <Footer />
    </Box>
    )
}

export default AppSecurePage;