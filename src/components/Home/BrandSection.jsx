import React from 'react';
import Swiper from 'swiper';
import { Box, Typography } from '@mui/material';

const BrandSection = () => {
  React.useEffect(() => {
    new Swiper('.brand-slider-2', {
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      breakpoints: {
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    });
  }, []);

  return (
    <Box className="brand-section-5 section-padding">
      <Box className="container">
        <Typography
          variant="h5" 
          className="text-center pb-5"
          sx={{
            color: "#010156"
          }}
        >
          Trusted by the world’s best
        </Typography>
        <Box className="swiper brand-slider-2">
          <Box className="swiper-wrapper">
            <Box className="swiper-slide">
              <Box className="brand-img center">
                <img src="assets/img/brand/client-1.png" alt="Brand 1"/>
              </Box>
            </Box>
            <Box className="swiper-slide">
              <Box className="brand-img center">
                <img src="assets/img/brand/client-2.png" alt="Brand 2"/>
              </Box>
            </Box>
            <Box className="swiper-slide">
              <Box className="brand-img center">
                <img src="assets/img/brand/client-3.png" alt="Brand 3"/>
              </Box>
            </Box>
            <Box className="swiper-slide">
              <Box className="brand-img center">
                <img src="assets/img/brand/client-4.png" alt="Brand 4"/>
              </Box>
            </Box>
            <Box className="swiper-slide">
              <Box className="brand-img center">
                <img src="assets/img/brand/client-5.png" alt="Brand 5"/>
              </Box>
            </Box>
            <Box className="swiper-slide">
              <Box className="brand-img center">
                <img src="assets/img/brand/client-6.png" alt="Brand 6"/>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default BrandSection;
