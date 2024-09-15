import React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import servicesHero  from "../../assets/images/servicesHero.png";
import RemoveIcon from '@mui/icons-material/Remove';


export const Hero = () => {
    return(
        <Box className="breadcrumb-wrapper section-padding bg-cover" 
            style={{
                backgroundImage: `url(${servicesHero}`
            }}
        >
            <Box className="container">
                <Box className="page-heading">
                    <Typography 
                        variant="h1" 
                        className="wow fadeInUp" 
                        data-wow-delay=".3s"
                    >
                        Services
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
                            Services
                        </li>
                    </ul>
                </Box>
            </Box>
        </Box>
    )
}