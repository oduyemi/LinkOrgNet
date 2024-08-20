import React from 'react';
import { Link } from "react-router-dom"; 
import { Box } from "@mui/material";
import homeHero from "../../assets/images/homeHero.jpg"

const HeroSection = () => {
  return (
    <Box className="hero-section hero-1 style-hero-3">
      <Box className="array-button-2">
        <button className="array-prev">
          <i className="fas fa-chevron-left"></i>
        </button>
        <button className="array-next">
          <i className="fas fa-chevron-right"></i>
        </button>
      </Box>
      <Box className="swiper hero-slider">
        <Box className="swiper-wrapper">
          <Box className="swiper-slide">
            <Box
              className="hero-image bg-cover"
              style={{ backgroundImage: `url(${homeHero})` }}
            ></Box>
            <Box className="container">
              <Box className="row justify-content-between align-items-center">
                <Box className="col-xl-8 col-lg-9">
                  <Box className="hero-content">
                    <h6 data-animation="fadeInUp" data-delay="1.3s">
                      Best Solution
                    </h6>
                    <h1
                      className="text-white"
                      data-animation="fadeInUp"
                      data-delay="1.5s"
                    >
                      Enjoy Fast Internet <br /> Solution
                    </h1>
                    <Link
                      to="/"
                      className="theme-btn theme-btn-2"
                      data-animation="fadeInUp"
                      data-delay="1.9s"
                    >
                      <span>
                        Learn More <i className="fas fa-chevron-right"></i>
                      </span>
                    </Link>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className="swiper-slide">
            <Box
              className="hero-image bg-cover"
              style={{ backgroundImage: "url('assets/img/hero/hero-6.jpg')" }}
            ></Box>
            <Box className="container">
              <Box className="row justify-content-between align-items-center">
                <Box className="col-xl-8 col-lg-9">
                  <Box className="hero-content">
                    <h6 data-animation="fadeInUp" data-delay="1.3s">
                      Best Solution
                    </h6>
                    <h1
                      className="text-white"
                      data-animation="fadeInUp"
                      data-delay="1.5s"
                    >
                      Enjoy Fast Internet <br /> Solution
                    </h1>
                    <Box className="price-item">
                      <h2 data-animation="fadeInUp" data-delay="1.7s">
                        <sub>$</sub>99 <span>/ Month</span>
                      </h2>
                      <Box
                        className="icon"
                        data-animation="fadeInUp"
                        data-delay="1.7s"
                      >
                        <i className="flaticon-wifi-router-1"></i> Subscribed &
                        get 1 month WIFi Free
                      </Box>
                    </Box>
                    <Link
                      to="/"
                      className="theme-btn theme-btn-2"
                      data-animation="fadeInUp"
                      data-delay="1.9s"
                    >
                      <span>
                        Learn More <i className="fas fa-chevron-right"></i>
                      </span>
                    </Link>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
