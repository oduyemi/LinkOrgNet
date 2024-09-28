import React from "react";
import Slider from "react-slick";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import borderShape from "../../assets/images/borderShape.png";
import Front from "../../assets/images/front.png";
import fieldImage from "../../assets/images/field.png";
import Mast from "../../assets/images/mast.png";
// Import slick carousel styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Intro = () => {
    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <section className="about-section fix section-padding">
            <Box className="container">
                <Box className="about-wrapper">
                    <Box className="row">
                        <Box className="col-lg-6">
                            <Box className="about-image-items">
                                <Box className="border-shape">
                                    {/* <img src={sysImage} alt="shape-img" /> */}
                                </Box>
                                <Box
                                    className="about-image bg-cover wow fadeInLeft"
                                    data-wow-delay=".3s"
                                    style={{
                                        backgroundImage: `url(${borderShape})`,
                                    }}
                                >
                                    <Box className="wow fadeInUp" data-wow-delay=".5s">
                                        <Slider {...sliderSettings}>
                                            <Box>
                                                <img src={Front} alt="about-img" style={{ width: "100%"}} />
                                            </Box>
                                            <Box>
                                                <img src={fieldImage} alt="about-img-2" style={{ width: "100%"}} />
                                            </Box>
                                            <Box>
                                                <img src={Mast} alt="about-img-2" style={{ width: "100%"}} />
                                            </Box>
                                            {/* <Box>
                                                <img src={fieldImage} alt="about-img-2" style={{ width: "100%"}} />
                                            </Box>
                                            <Box>
                                                <img src={fieldImage} alt="about-img-2" style={{ width: "100%"}} />
                                            </Box> */}
                                        </Slider>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>

                        <Box className="col-lg-6 mt-3 mt-lg-0">
                            <Box className="about-content">
                                <Box className="section-title">
                                    <span
                                        className="wow fadeInUp"
                                        style={{ textDecoration: "none" }}
                                    >
                                        Why Choose us?
                                    </span>
                                    <Typography
                                        variant="h2"
                                        className="wow fadeInUp"
                                        data-wow-delay=".3s"
                                        sx={{
                                            fontSize: "32px",
                                            fontWeight: 300,
                                            lineHeight: "1.3",
                                            fontFamily: "Montserrat",
                                            color: "#010156",
                                        }}
                                    >
                                        Trusted Network solutions
                                    </Typography>
                                </Box>
                                <Typography
                                    variant="body1"
                                    className="wow fadeInUp"
                                    data-wow-delay=".5s"
                                    sx={{
                                        fontFamily: "Montserrat",
                                        lineHeight: "1.5",
                                        fontWeight: 400,
                                    }}
                                    gutterBottom
                                    >
                                    LinkOrg Networks, established in 2009, is a leading provider of satellite communication services, specializing in connecting ships, vessels, jack-up barges, and offshore bases. Leveraging our advanced teleport infrastructure in collaboration with trusted partners, we offer cutting-edge remote internet solutions via Fixed VSAT, as well as Marine/offshore internet services, video broadcasting, IT, and telecommunications.
                                    <br /><br />
                                    What sets us apart is our commitment to deploying the latest technologies, including LEO and GEO satellites, Fibre Optics, IP-PBX, and Terrestrial solutions, ensuring that our clients receive tailored, reliable communication systems to meet their diverse needs across Africa and beyond.
                                    <br /><br />
                                    Our mission is to provide dependable communication solutions, especially for clients in offshore industries, where safety and reliability are paramount. Our team of engineers, located in Lagos, Port-Harcourt, and the UK, are highly skilled in the design, installation, and maintenance of various satellite and communication systems.
                                    <br /><br />
                                    Let us help you stay connected and productive, no matter where you are. Choose LinkOrg Networks for the best internet and communication experience, where reliability meets excellence!
                                    </Typography>

                                <Box className="about-author">
                                    <Box className="">
                                        <Link to="/contact">
                                            <button
                                                className="theme-btn d-inline about-button wow fadeInUp"
                                                data-wow-delay=".8s"
                                            >
                                                Contact Us
                                                <ChevronRightIcon
                                                    sx={{
                                                        fontSize: 40,
                                                    }}
                                                    className="d-inline"
                                                />
                                            </button>
                                        </Link>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </section>
    );
};
