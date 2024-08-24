import React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import RemoveIcon from '@mui/icons-material/Remove';
import voipHero from "../../assets/images/voipHero.png";


export const VoipBanner = () => {
    return(
        <Box className="breadcrumb-wrapper section-padding bg-cover" style={{backgroundImage: `url(${voipHero})`}}>
            <Box class="container">
                <Box class="page-heading">
                    <Typography
                        variant="h1" 
                        className="wow fadeInUp" 
                        data-wow-delay=".3s">
                            VoIP Services
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
                            Voip Services
                        </li>
                    </ul>
                </Box>
            </Box>
        </Box>
    )
}