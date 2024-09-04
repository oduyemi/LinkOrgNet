import React from "react";
import Slider from "react-slick";
import { Box, Typography } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

export const Testimonials = () => {
    const testimonialSettings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <Box className="testimonial-nav-prev"><ChevronLeftIcon /></Box>,
        nextArrow: <Box className="testimonial-nav-next"><ChevronRightIcon /></Box>,
    };

    return (
        <Box>
            <section className="testimonial-section-4 fix section-padding">
                <Box className="client-1">
                    <img src={require("../../assets/images/defaultAvatar.png")} alt="client" />
                </Box>
                <Box className="client-2">
                    <img src={require("../../assets/images/defaultAvatar.png")} alt="client" />
                </Box>
                <Box className="container">
                    <Slider {...testimonialSettings} className="testimonial-carousel-active-4">
                        <Box className="testimonial-wrapper-4">
                            <Box className="row justify-content-center">
                                <Box className="col-lg-11">
                                    <Box className="testimonial-items">
                                        <Box className="testimonial-image bg-cover"
                                            style={{ backgroundImage: `url('assets/img/testimonial/07.png')` }}>
                                        </Box>
                                        <Box className="client-info">
                                            <h5>Mathias Herasen</h5>
                                            <h6>Founder of <span>GamerPay</span></h6>
                                        </Box>
                                        <Box className="testimonial-content">
                                            <Typography
                                                variant="h3"
                                                sx={{
                                                    fontSize: "20px",
                                                    fontWeight: 300
                                                }}
                                            >
                                                “ Lorem ipsum: The other hand we denounce with righteous indignation and dislike
                                                men who are so beguiled and demoralized by the pleasure of the
                                                moment. Dislike men who are so beguiled and demoralized by the
                                                charms of pleasure “
                                            </Typography>
                                            <Box className="star">
                                                <span className="fas fa-star"></span>
                                                <span className="fas fa-star"></span>
                                                <span className="fas fa-star"></span>
                                                <span className="fas fa-star"></span>
                                                <span className="fas fa-star"></span>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                        <Box className="testimonial-wrapper-4">
                            <Box className="row justify-content-center">
                                <Box className="col-lg-11">
                                    <Box className="testimonial-items">
                                        <Box className="testimonial-image bg-cover" 
                                            // style={{ backgroundImage: `url('assets/img/testimonial/07.png')` }}
                                        ></Box>
                                        <Box className="client-info">
                                            <h5>Mathias Herasen</h5>
                                            <h6>Founder of <span>GamerPay</span></h6>
                                        </Box>
                                        <Box className="testimonial-content">
                                        <Typography
                                                variant="h3"
                                                sx={{
                                                    fontSize: "20px",
                                                    fontWeight: 300
                                                }}
                                            >
                                                “ The other hand we denounce with righteous indignation and dislike
                                                men who are so beguiled and demoralized by the pleasure of the
                                                moment. Dislike men who are so beguiled and demoralized by the
                                                charms of pleasure “
                                            </Typography>
                                            <Box className="star">
                                                <span className="fas fa-star"></span>
                                                <span className="fas fa-star"></span>
                                                <span className="fas fa-star"></span>
                                                <span className="fas fa-star"></span>
                                                <span className="fas fa-star"></span>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>

                        <Box className="testimonial-wrapper-4">
                            <Box className="row justify-content-center">
                                <Box className="col-lg-11">
                                    <Box className="testimonial-items">
                                        <Box className="testimonial-image bg-cover" 
                                            style={{ backgroundImage: `url('assets/img/testimonial/07.png')` }}></Box>
                                        <Box className="client-info">
                                            <h5>Mathias Herasen</h5>
                                            <h6>Founder of <span>GamerPay</span></h6>
                                        </Box>
                                        <Box className="testimonial-content">
                                            <h3>
                                                “ The other hand we denounce with righteous indignation and dislike
                                                men who are so beguiled and demoralized by the pleasure of the
                                                moment. Dislike men who are so beguiled and demoralized by the
                                                charms of pleasure “
                                            </h3>
                                            <Box className="star">
                                                <span className="fas fa-star"></span>
                                                <span className="fas fa-star"></span>
                                                <span className="fas fa-star"></span>
                                                <span className="fas fa-star"></span>
                                                <span className="fas fa-star"></span>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>

                        <Box className="testimonial-wrapper-4">
                            <Box className="row justify-content-center">
                                <Box className="col-lg-11">
                                    <Box className="testimonial-items">
                                        <Box className="testimonial-image bg-cover" 
                                            style={{ backgroundImage: `url('assets/img/testimonial/07.png')` }}></Box>
                                        <Box className="client-info">
                                            <h5>Mathias Herasen</h5>
                                            <h6>Founder of <span>GamerPay</span></h6>
                                        </Box>
                                        <Box className="testimonial-content">
                                            <h3>
                                                “ The other hand we denounce with righteous indignation and dislike
                                                men who are so beguiled and demoralized by the pleasure of the
                                                moment. Dislike men who are so beguiled and demoralized by the
                                                charms of pleasure “
                                            </h3>
                                            <Box className="star">
                                                <span className="fas fa-star"></span>
                                                <span className="fas fa-star"></span>
                                                <span className="fas fa-star"></span>
                                                <span className="fas fa-star"></span>
                                                <span className="fas fa-star"></span>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>

                        <Box className="testimonial-wrapper-4">
                            <Box className="row justify-content-center">
                                <Box className="col-lg-11">
                                    <Box className="testimonial-items">
                                        <Box className="testimonial-image bg-cover" 
                                            style={{ backgroundImage: `url('assets/img/testimonial/07.png')` }}></Box>
                                        <Box className="client-info">
                                            <h5>Mathias Herasen</h5>
                                            <h6>Founder of <span>GamerPay</span></h6>
                                        </Box>
                                        <Box className="testimonial-content">
                                            <h3>
                                                “ The other hand we denounce with righteous indignation and dislike
                                                men who are so beguiled and demoralized by the pleasure of the
                                                moment. Dislike men who are so beguiled and demoralized by the
                                                charms of pleasure “
                                            </h3>
                                            <Box className="star">
                                                <span className="fas fa-star"></span>
                                                <span className="fas fa-star"></span>
                                                <span className="fas fa-star"></span>
                                                <span className="fas fa-star"></span>
                                                <span className="fas fa-star"></span>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Slider>
                </Box>
            </section>


        </Box>
    );
};
