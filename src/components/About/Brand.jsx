import React from 'react'
import { Box } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Brand = () => {
    const brandSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

  return (
    <Box className="brand-section-3 fix section-padding pt-0">
    <Box className="container">
    <Slider {...brandSettings} 
                    className="brand-carousel-active"
                    sx={{ marginTop: "100px" }}
                >  
            <Box className="brand-image center">
                <img src={require("../../assets/images/brands/cambium.png")} 
                    width="40%" 
                    alt="cambium" 
                    className="mt-4"
                />
            </Box>
            <Box className="brand-image center">
                <img src={require("../../assets/images/brands/cisco.png")} 
                    width="40%" 
                    alt="cisco" 
                    className="mt-2"
                />
            </Box>
            <Box className="brand-image center">
                <img src={require("../../assets/images/brands/telesat.png")} 
                    width="40%" 
                    alt="telesat" 
                    className="mt-4"
                />
            </Box>
            <Box className="brand-image center">
                <img src={require("../../assets/images/brands/intellian.png")} width="40%" alt="intellian" />
            </Box>
            {/* <Box className="brand-image center">
                <img src={require("../../assets/images/brands/fortnite.png")} width="40%" alt="fortnite" />
            </Box> */}
        </Slider>
    </Box>
</Box>
  )
}

export default Brand