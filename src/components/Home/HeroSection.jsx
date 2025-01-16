import React from 'react';
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import Slider from "react-slick";
import techy from "../../assets/images/techy.jpg";
import connected from "../../assets/images/homeHero1.jpg";
import int from "../../assets/images/int.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Search } from '../Search';

const HeroSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Box className="hero-section hero-1 style-hero-3">
      <Slider {...settings} className="hero-slider">
      <Box className="swiper-slide">
          <Box
            className="hero-image bg-cover"
            style={{ backgroundImage: `url(${connected})` }} 
          ></Box>
          <Box className="container">
            <Box className="row justify-content-between align-items-center">
              <Box className="col-xl-8 col-lg-9">
                <Box className="hero-content">
                  <Typography
                    variant="h1"
                    sx={{
                      fontSize: "24px",
                      fontWeight: 800
                    }}
                    className="blutext"
                    data-animation="fadeInUp"
                    data-delay="1.5s"
                  >
                    Get Connected
                    <br/> Feel {" "}
                    <Typography
                      variant="h1"
                      sx={{
                        color: "#E65D0F",
                        fontWeight: 800,
                        fontSize: "24px"
                      }}
                      className="d-inline"
                    >
                      Connected
                    </Typography>
                    {/* <Typography
                      variant="body1"
                      sx={{
                        fontSize: "14px",
                        color: "#fff",
                        fontFamily: "montserrat",
                      }}
                      className="text-dark fw-bold w-75"
                    >
                      Embrace the future with our cutting-edge 
                      technology designed to streamline your 
                      operations and enhance efficiency. Let 
                      us transform the way you do business.
                    </Typography> */}
                  </Typography>
                  <Link
                    to="/services"
                    className="theme-btn theme-btn-2"
                    data-animation="fadeInUp"
                    data-delay="1.9s"
                  >
                    <span className="">
                      Explore Services
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
            style={{ backgroundImage: `url(${int})` }} 
          ></Box>
          <Box className="container">
            <Box className="row justify-content-between align-items-center">
              <Box className="col-xl-8 col-lg-9">
                <Box className="hero-content">
                  <Typography
                    variant="h1"
                    sx={{
                      fontSize: "24px",
                      fontWeight: 800
                    }}
                    className="text-white"
                    data-animation="fadeInUp"
                    data-delay="1.5s"
                  >
                    Linking You
                    <br/> To {" "}
                    <Typography
                      variant="h1"
                      sx={{
                        color: "#E65D0F",
                        fontWeight: 800,
                        fontSize: "24px"
                      }}
                      className="d-inline"
                    >
                      Success
                    </Typography>
                    {/* <Typography
                      variant="body1"
                      sx={{
                        fontSize: "14px",
                        color: "#fff",
                        fontFamily: "montserrat",
                      }}
                      className="text-white fw-light w-75"
                    >
                      From small businesses to large enterprises, 
                      our comprehensive IT and internet services 
                      are built to support growth and innovation 
                      across all industries.
                    </Typography> */}
                  </Typography>
                  <Link
                    to="/about"
                    className="theme-btn theme-btn-2"
                    data-animation="fadeInUp"
                    data-delay="1.9s"
                  >
                    <span className="">
                      About Us{" "}
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
            style={{ backgroundImage: `url(${techy})` }} 
          ></Box>
          <Box className="container">
            <Box className="row justify-content-between align-items-center">
              <Box className="col-xl-8 col-lg-9">
                <Box className="hero-content">
                  <Typography
                    variant="h1"
                    sx={{
                      fontSize: "24px",
                      color: "#fff",
                      fontWeight: 800
                    }}
                    data-animation="fadeInUp"
                    data-delay="1.5s"
                  >
                    Where Technology{" "}
                    <Typography
                      variant="h1"
                      sx={{
                        color: "white",
                        fontWeight: 800
                      }}
                      className=""
                    >
                      Meets Excellence
                    </Typography>
                    {/* <Typography
                      variant="body1"
                      sx={{
                        fontSize: "14px",
                        color: "#fff",
                        fontFamily: "montserrat"

                      }}
                      className="text-white fw-light w-75 pee"
                    >
                      At the intersection of innovation and quality, 
                      our services deliver exceptional performance. 
                      Empower your business with technology that 
                      drives results.
                    </Typography> */}
                  </Typography>
                  <Link
                    to="/about"
                    className="theme-btn theme-btn-2"
                    data-animation="fadeInUp"
                    data-delay="1.9s"
                  >
                    <span>
                      About Us
                    </span>
                  </Link>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Slider>
      <Search />
    </Box>
  );
};

export default HeroSection;
