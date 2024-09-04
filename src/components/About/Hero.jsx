import React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import agree  from "../../assets/images/agree.jpg";



export const Hero = () => {
    return(
        <Box className="breadcrumb-wrapper section-padding bg-cover" 
            style={{
                backgroundImage: `url(${agree}`
            }}
        >
            <Box className="container">
                <Box className="page-heading">
                    <Typography 
                        variant="h1" 
                        className="wow fadeInUp" 
                        data-wow-delay=".3s"
                    >
                        about us
                    </Typography>
                    <ul className="breadcrumb-items wow fadeInUp" data-wow-delay=".5s">
                        <li>
                            <Link to="/">
                            Home Page
                            </Link>
                        </li>
                        <li>
                            <i className="fal fa-minus"></i>
                        </li>
                        <li>
                            About Us
                        </li>
                    </ul>
                </Box>
            </Box>
        </Box>
    )
}