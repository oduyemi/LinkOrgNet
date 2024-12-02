import React from 'react'
import { Box, Typography } from "@mui/material";
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
    <Box   sx={{height: "180px"}} className="brand-section-3 fix section-padding pt-0">
    <Box  className="container"  sx={{ marginTop: "30px"}}>
    <Typography
          variant="h6" 
          className="text-center pb-2"
          sx={{ color: '#010156', zIndex: 1, position: 'relative', fontWeight: "800"}}
        >
         Our Partners
        </Typography>
    <Slider {...brandSettings} 
                    className="brand-carousel-active"
                   
                >  
            <Box className="brand-image center">
                <img src={require("../../assets/images/brands/cambium.png")} 
                    width="40%" 
                    alt="cambium" 
                    className="mt-4"
                />
            </Box>
            <Box className="brand-image center">
                <img src={require("../../assets/images/brands/microsoft.png")} 
                    width="40%" 
                    alt="microsoft" 
                    className="mt-2"
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
            <Box className="brand-image center">
                <img src={require("../../assets/images/brands/Fortinet.png")} width="60%" alt="fortnite" style={{marginTop:"-10px"}}/>
            </Box>
        </Slider>
    </Box>
</Box>
  )
}

export default Brand