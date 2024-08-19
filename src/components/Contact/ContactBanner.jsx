import React from "react";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import contacthero from "../../assets/images/contacthero.png";




export const ContactBanner = () => {
    return(
        <Box className="breadcrumb-wrapper section-padding bg-cover" 
            style= {{
                backgroundImage: `url(${contacthero})`
            }}
        >
            <Box className="container">
                <Box className="page-heading">
                    <h1 className="wow fadeInUp" data-wow-delay=".3s">Contact Us</h1>
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
                            Contact Us
                        </li>
                    </ul>
                </Box>
            </Box>
        </Box>
    )
}