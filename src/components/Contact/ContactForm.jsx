import React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';




export const ContactForm = () => {
    return(
        <section className="contact-main-area fix section-padding">
            <Box className="container">
                <Box className="contact-main-wrapper">
                    <Box className="row g-4">
                        <Box className="col-lg-6">
                            <Box className="contact-content">
                                <Box className="section-title mb-2">
                                    <span className="wow fadeInUp" style={{ textDecoration: "none" }}>Get In Touch</span>
                                    <Typography 
                                        variant="h2" 
                                        className="wow fadeInUp" 
                                        data-wow-delay=".3s"
                                        sx={{
                                            color: "#010156",
                                            fontWeight: 300,
                                            fontSize: "30px"
                                        }}
                                    >
                                        Contact Us
                                    </Typography>
                                </Box>
                                <Typography
                                    variant="body1"
                                    className="mt-4 mt-md-0 wow fadeInUp" 
                                    data-wow-delay=".4s"
                                >
                                    We are here! Our door is open for a good
                                    cup of coffe. Get the info you&apos;re
                                    looking for right now.
                                    
                                </Typography>
                                <Box className="row g-4 mt-3">
                                    <Box className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                                        <Box className="info-items">
                                            <Box className="icon">
                                                <i className="fas fa-map-marker-alt"></i>
                                            </Box>
                                            <Box className="content">
                                                <h5>Location</h5>
                                                <p>
                                                    177B Sinari Daranijo Street, <br />
                                                    Victoria Island, Lagos 
                                                </p>
                                            </Box>
                                        </Box>
                                    </Box>
                                    <Box className="col-lg-6 wow fadeInUp" data-wow-delay=".5s">
                                        <Box className="info-items">
                                            <Box className="icon">
                                                <i className="far fa-phone"></i>
                                            </Box>
                                            <Box className="content">
                                                <h5>Phone</h5>
                                                <Link href="tel:+09354587874">+09 354 587 874 </Link> <br />
                                                <Link href="tel:+01368567894">+01 368 567 894</Link>
                                            </Box>
                                        </Box>
                                    </Box>
                                    <Box className="col-lg-6 wow fadeInUp" data-wow-delay=".7s">
                                        <Box className="info-items">
                                            <Box className="icon">
                                                <i className="fal fa-envelope"></i>
                                            </Box>
                                            <Box className="content">
                                                <h5>Email</h5>
                                                <Link href="mailto:info@example.com" className="link">info@linkorgnet.com</Link> <br />
                                                <Link href="mailto:info@example.com" className="link">support@linkorgnet.com</Link>
                                            </Box>
                                        </Box>
                                    </Box>
                                    <Box className="col-lg-6 wow fadeInUp" data-wow-delay=".9s">
                                        <Box className="info-items">
                                            <Box className="icon">
                                                <i className="fad fa-share-alt"></i>
                                            </Box>
                                            <Box className="content">
                                                <h5>Social</h5>
                                                <Box className="social-icon d-flex align-items-center">
                                                    <Link href=""><FacebookIcon /></Link>
                                                    <Link href=""><InstagramIcon /></Link>
                                                    <Link href=""><PinterestIcon /></Link>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                                <Box className="contact-image wow fadeInUp" data-wow-delay=".4s">
                                    <img 
                                        src={require("../../assets/images/mail.png")} 
                                        alt="contact-us-img" />
                                </Box>
                            </Box>
                        </Box>
                        <Box className="col-lg-6 mt-5 mt-lg-0">
                            <Box className="contact-form-items">
                                <Box className="contact-title">
                                    <Typography 
                                        variant="h3" 
                                        className="wow fadeInUp" 
                                        data-wow-delay=".3s"
                                        sx={{
                                            color: "#010156",
                                            fontWeight: 300,
                                            fontSize: "30px"
                                        }}
                                    >
                                        Fill Up The Form
                                    </Typography>
                                </Box>
                                <form action="contact.php" id="contact-form" method="POST">
                                    <Box className="row g-4">
                                        <Box className="col-lg-12 wow fadeInUp" data-wow-delay=".3s">
                                            <Box className="form-clt">
                                                <input type="text" name="name" id="name" placeholder="Your Name*" />
                                                <Box className="icon">
                                                    <i className="fal fa-user"></i>
                                                </Box>
                                            </Box>
                                        </Box>
                                        <Box className="col-lg-12 wow fadeInUp" data-wow-delay=".5s">
                                            <Box className="form-clt">
                                                <input type="text" name="email" id="email" placeholder="Email Address*" />
                                                <Box className="icon">
                                                    <i className="fal fa-envelope"></i>
                                                </Box>
                                            </Box>
                                        </Box>
                                        <Box className="col-lg-12 wow fadeInUp" data-wow-delay=".5s">
                                            <Box className="form-clt">
                                                <input type="text" name="subject" id="subject" placeholder="Subject*" />
                                                <Box className="icon">
                                                    <i className="fal fa-envelope"></i>
                                                </Box>
                                            </Box>
                                        </Box>
                                        <Box className="col-lg-12 wow fadeInUp" data-wow-delay=".7s">
                                            <Box className="form-clt">
                                                <textarea name="message" id="message" placeholder="Enter Your Messege here"></textarea>
                                                <Box className="icon">
                                                    <i className="fal fa-edit"></i>
                                                </Box>
                                            </Box>
                                        </Box>
                                        <Box className="col-lg-6 wow fadeInUp" data-wow-delay=".8s">
                                            <button type="submit" className="theme-btn">
                                                <span><i className="fal fa-paper-plane"></i>Get In Touch</span>
                                            </button>
                                        </Box>
                                    </Box>
                                </form>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </section>
    )
}