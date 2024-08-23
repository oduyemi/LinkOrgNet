import React from 'react';
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import Slider from "react-slick";
import hero1 from "../../assets/images/hero1.png";
import hero0 from "../../assets/images/hero0.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
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
            style={{ backgroundImage: `url(${hero1})` }} 
          ></Box>
          <Box className="container">
            <Box className="row justify-content-between align-items-center">
              <Box className="col-xl-8 col-lg-9">
                <Box className="hero-content">
                  <Typography
                    variant="h1"
                    sx={{
                      fontSize: "30px",
                      color: "#E65D0F"
                    }}
                    data-animation="fadeInUp"
                    data-delay="1.5s"
                  >
                    Where Technology Meets{" "}
                    <Typography
                      variant="h1"
                      sx={{
                        color: "white"
                      }}
                      className="d-inline"
                    >
                      Excellence
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: "16px",
                        color: "#fff",
                        fontFamily: "Museo sans"

                      }}
                      className="text-white fw-light w-75"
                    >
                      At the intersection of innovation and quality, 
                      our services deliver exceptional performance. 
                      Empower your business with technology that 
                      drives results.
                    </Typography>
                  </Typography>
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
                  <Typography
                    variant="h1"
                    sx={{
                      fontSize: "30px"
                    }}
                    className="text-white"
                    data-animation="fadeInUp"
                    data-delay="1.5s"
                  >
                    Connecting You to the{" "}
                    <Typography
                      variant="h1"
                      sx={{
                        color: "#E65D0F"
                      }}
                      className="d-inline"
                    >
                      Future
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: "16px",
                        color: "#fff",
                        fontFamily: "Museo sans",
                      }}
                      className="text-white fw-light w-75"
                    >
                      Embrace the future with our cutting-edge 
                      technology designed to streamline your 
                      operations and enhance efficiency. Let 
                      us transform the way you do business.
                    </Typography>
                  </Typography>
                  <Link
                    to="/"
                    className="theme-btn theme-btn-2"
                    data-animation="fadeInUp"
                    data-delay="1.9s"
                  >
                    <span className="">
                      Learn More
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
