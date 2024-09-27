import React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';
import ShareLocationIcon from '@mui/icons-material/ShareLocation';
import Person2Icon from '@mui/icons-material/Person2';
import TopicIcon from '@mui/icons-material/Topic';
import UpcomingIcon from '@mui/icons-material/Upcoming';
import PublicIcon from '@mui/icons-material/Public';



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
                                    className="mt-4 mt-md-0 wow fadeInUp w-75" 
                                    data-wow-delay=".4s"
                                >
                                    We are here! Our door is open for a good
                                    cup of coffee. Get the info you&apos;re
                                    looking for right now.
                                    
                                </Typography>
                                <Box className="row g-4 mt-3">
                                    <Box className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                                        <Box className="info-items">
                                            <Box className="icon">
                                                <ShareLocationIcon 
                                                    sx={{
                                                        color: "#010156",
                                                        marginTop: "-10px"
                                                    }}
                                                />
                                            </Box>
                                            <Box className="content">
                                                <Typography
                                                    variant="h5"
                                                    sx={{
                                                        color: "#010156",
                                                        fontSize: "18px",
                                                        fontWeight: 500
                                                    }}
                                                >
                                                    Location
                                                </Typography>
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
                                                <CallIcon 
                                                    sx={{
                                                        color: "#010156",
                                                        marginTop: "-10px"
                                                    }}
                                                />
                                            </Box>
                                            <Box className="content">
                                                <Typography
                                                    variant="h5"
                                                    sx={{
                                                        color: "#010156",
                                                        fontSize: "18px",
                                                        fontWeight: 500
                                                    }}
                                                >
                                                    Phone
                                                </Typography>
                                                <Link to="tel:+234803406 0434">+234 803 406 0434 </Link> <br />
                                                {/* <Link to="tel:+01368567894">+01 368 567 894</Link> */}
                                            </Box>
                                        </Box>
                                    </Box>
                                    <Box className="col-lg-6 wow fadeInUp" data-wow-delay=".7s">
                                        <Box className="info-items">
                                            <Box className="icon">
                                                <MailIcon
                                                    sx={{
                                                        color: "#010156",
                                                        marginTop: "-10px"
                                                    }}
                                                />
                                            </Box>
                                            <Box className="content">
                                            <Typography
                                                    variant="h5"
                                                    sx={{
                                                        color: "#010156",
                                                        fontSize: "18px",
                                                        fontWeight: 500
                                                    }}
                                                >
                                                    Email
                                                </Typography>
                                                <Link to="mailto:info@linkorgnet.com" className="link">info@linkorgnet.com</Link> <br />
                                                <Link to="mailto:info@linkorgnet.com" className="link">support@linkorgnet.com</Link>
                                            </Box>
                                        </Box>
                                    </Box>
                                    <Box className="col-lg-6 wow fadeInUp" data-wow-delay=".9s">
                                        <Box className="info-items">
                                            <Box className="icon">
                                                <PublicIcon
                                                    sx={{
                                                        color: "#010156",
                                                        marginTop: "-10px"
                                                    }}
                                                />
                                            </Box>
                                            <Box className="content">
                                                <Typography
                                                    variant="h5"
                                                    sx={{
                                                        color: "#010156",
                                                        fontSize: "18px",
                                                        fontWeight: 500
                                                    }}
                                                >
                                                    Social
                                                </Typography>
                                                <Box className="social-icon d-flex align-items-center">
                                                    <Link to=""><FacebookIcon /></Link>
                                                    <Link to=""><InstagramIcon /></Link>
                                                    <Link to=""><PinterestIcon /></Link>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                                <Box className="contact-image wow fadeInUp" data-wow-delay=".4s">
                                    <img 
                                        src={require("../../assets/images/mail.jpg")} 
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
                                            fontSize: "30px", 
                                        }}
                                    >
                                        Fill In The Form
                                    </Typography>
                                </Box>
                                <form action="contact.php" id="contact-form" method="POST">
                                    <Box className="row g-4">
                                        <Box className="col-lg-12 wow fadeInUp" data-wow-delay=".3s">
                                            <Box className="form-clt">
                                                <input type="text" name="name" id="name" placeholder="Your Name*" />
                                                <Box className="icon">
                                                    <Person2Icon 
                                                        sx={{
                                                            color: "#010156"
                                                        }}
                                                    />
                                                </Box>
                                            </Box>
                                        </Box>
                                        <Box className="col-lg-12 wow fadeInUp" data-wow-delay=".5s">
                                            <Box className="form-clt">
                                                <input type="text" name="email" id="email" placeholder="Email Address*" />
                                                <Box className="icon">
                                                    <MailIcon />
                                                </Box>
                                            </Box>
                                        </Box>
                                        <Box className="col-lg-12 wow fadeInUp" data-wow-delay=".5s">
                                            <Box className="form-clt">
                                                <input type="number" name="phone" id="phone" placeholder="Phone Number*" />
                                                <Box className="icon">
                                                    <CallIcon 
                                                     sx={{
                                                            color: "#010156"
                                                        }}
                                                    />
                                                </Box>
                                            </Box>
                                        </Box>
                                        <Box className="col-lg-12 wow fadeInUp" data-wow-delay=".5s">
                                            <Box className="form-clt">
                                                <input type="text" name="subject" id="subject" placeholder="Subject*" />
                                                <Box className="icon">
                                                    <TopicIcon 
                                                        sx={{
                                                            color: "#010156"
                                                        }}
                                                    />
                                                </Box>
                                            </Box>
                                        </Box>
                                        <Box className="col-lg-12 wow fadeInUp" data-wow-delay=".7s">
                                            <Box className="form-clt">
                                                <textarea name="message" id="message" placeholder="Enter Your Messege here"></textarea>
                                                <Box className="icon">
                                                    <UpcomingIcon  
                                                        sx={{
                                                            color: "#010156"
                                                        }}
                                                    />
                                                </Box>
                                            </Box>
                                        </Box>
                                        <Box className="col-lg-6 wow fadeInUp mt-5" data-wow-delay=".8s">
                                            <button type="submit" className="theme-btn">
                                                Get In Touch
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