import React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Search } from "../Search";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../assets/css/customheader.css";

export const HomeBanner = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <Box className="container-fluid header blu p-0">
            <Box className="row g-0 align-items-center flex-column-reverse flex-md-row">
                <Box className="col-md-6 p-5 mt-lg-5">
                    <Typography 
                        variant="h1"
                        sx={{
                            fontSize: "80px"
                        }} 
                        className="display-5 animated fadeIn mb-4"
                    >
                        Creating{" "}
                        <span className="orangetext">
                            A More
                        </span> Connected World
                    </Typography>
                    <Typography 
                        variant="body1" 
                        className="animated fadeIn mb-4 pb-2"
                    >
                        Stay connected with prepaid data on your 
                        tablet and hotspot devices. 
                        No annual contracts. No credit checks. 
                    </Typography>
                    <Link to="" className="theme-btn theme-btn-3 py-3 px-2 me-3 animated fadeIn">Get Started</Link>
                </Box>
                <Box className="col-md-6 animated fadeIn">
                    <Slider {...settings}>
                        <Box>
                            <img className="img-fluid" src={require("../../assets/images/a.jpg")} alt="" />
                        </Box>
                        <Box>
                            <img className="img-fluid" src={require("../../assets/images/ab.png")} alt="" />
                        </Box>
                    </Slider>
                </Box>
            </Box>
            <Search />
        </Box>
    );
};
