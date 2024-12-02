import React from 'react';
import Swiper from 'swiper';
import { Box, Typography } from '@mui/material';
import Brand from '../About/Brand';

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
          Trusted by the world&apos;s best
        </Typography>
        <Brand />
      </Box>
    </Box>
  );
};

export default BrandSection;
