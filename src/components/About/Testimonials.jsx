import React from "react";
import Slider from "react-slick";
import { Box } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Testimonials = () => {
    const testimonialSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <Box className="testimonial-nav-prev"><i className="fas fa-chevron-left"></i></Box>,
        nextArrow: <Box className="testimonial-nav-next"><i className="fas fa-chevron-right"></i></Box>,
    };

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
        <Box>
            <section className="testimonial-section-4 fix section-padding">
                <Box className="client-1">
                    <img src="assets/img/testimonial/08.png" alt="client" />
                </Box>
                <Box className="client-2">
                    <img src="assets/img/testimonial/09.png" alt="client" />
                </Box>
                <Box className="container">
                    <Slider {...testimonialSettings} className="testimonial-carousel-active-4">
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

            <Box className="brand-section-3 fix section-padding pt-0">
                <Box className="container">
                    <Slider {...brandSettings} className="brand-carousel-active">
                        <Box className="brand-image center">
                            <img src="assets/img/brand/01.png" alt="brand-img" />
                        </Box>
                        <Box className="brand-image center">
                            <img src="assets/img/brand/01.png" alt="brand-img" />
                        </Box>
                        <Box className="brand-image center">
                            <img src="assets/img/brand/01.png" alt="brand-img" />
                        </Box>
                        <Box className="brand-image center">
                            <img src="assets/img/brand/01.png" alt="brand-img" />
                        </Box>
                        <Box className="brand-image center">
                            <img src="assets/img/brand/01.png" alt="brand-img" />
                        </Box>
                    </Slider>
                </Box>
            </Box>
        </Box>
    );
};
