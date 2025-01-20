import React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import RemoveIcon from '@mui/icons-material/Remove';
import retailHero from "../../../assets/images/retailHero.jpg";


export const RetailBanner = () => {
    return(
        <Box className="breadcrumb-wrapper section-padding bg-cover" 
            style={{
                backgroundImage: `url(${retailHero}`,
                backgroundPositionY: "62%", 
            }}
        >
            <Box className="container">
                <Box className="page-heading">
                    <Typography 
                        variant="h1" 
                        className="wow fadeInUp" 
                        data-wow-delay=".3s"
                    >
                        Retail &amp; SME
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
                            <Link to="/services">
                            Services
                            </Link>
                        </li>
                        <li>
                            <RemoveIcon />
                        </li>
                        <li>
                            Retail & SME
                        </li>
                    </ul>
                </Box>
            </Box>
        </Box>
    )
}