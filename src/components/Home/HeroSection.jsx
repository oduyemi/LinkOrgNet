import React from 'react';
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import Slider from "react-slick";
import hero0 from "../../assets/images/hero0.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <button className="slick-prev"><i className="fas fa-chevron-left"></i></button>,
    nextArrow: <button className="slick-next"><i className="fas fa-chevron-right"></i></button>,
  };

  return (
    <Box className="hero-section hero-1 style-hero-3">
      <Slider {...settings} className="hero-slider">
        <Box className="swiper-slide">
          <Box
            className="hero-image bg-cover"
            style={{ backgroundImage: `url(${hero0})` }}
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
                    Fast Internet <br /> Solution
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
            style={{ backgroundImage: `url(${hero0})` }}
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
      </Slider>
    </Box>
  );
};

export default HeroSection;
