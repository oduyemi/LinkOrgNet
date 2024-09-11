import React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import WOW from "wowjs";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { ContactForm } from "../ContactForm";



export const ServiceDetail = () => {
    return(
        <section className="service-details fix section-padding">
            <Box className="container">
                <Box className="service-details-wrapper">
                    <Box className="row g-5">
                        <Box className="col-12 col-lg-8">
                            <Box className="service-details-items">
                                <Box className="details-image">
                                    <img src="assets/img/service/details-1.jpg" alt="img" />
                                </Box>   
                                <Box className="details-content">
                                    <Typography
                                        variant="h3"
                                    >
                                        Digital Marketing
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                    >
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat qui ducimus illum modi?  perspiciatis
                                        accusamus soluta perferendis, ad illum, nesciunt, reiciendis iusto et cupidit Repudiandae provident to
                                        consectetur, sapiente, libero iure necessitatibus corporis nulla voluptate, quisquam aut perspiciatis?
                                        Fugiat labore aspernatur eius, perspiciatis ut molestiae, delectus rem.
                                    </Typography>
                                    <Typography
                                        variant="h4"
                                    >
                                        Sed ut perspiciatis unde omnis iste natus et
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                    >
                                        Need something changed or is there something not quite working the way you envisaged? Is your van a
                                        little old and tired and need refreshing? Lorem Ipsum is simply dummy text of the printing and typesetting
                                        industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an
                                        unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not
                                        only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                    </Typography>
                                    <Box className="service-details-video">
                                        <Box className="row g-4 align-items-center">
                                            <Box className="col-lg-6">
                                                <Box className="details-video-content">
                                                    <Typography
                                                        variant="h3"
                                                    >
                                                        Why Marketing Important ?
                                                    </Typography>
                                                    <Typography
                                                        variant="body1"
                                                    >
                                                        Lorem ipsum dolor sit amet, consectetur adipisici
                                                        sed do eiusmod tempor incididunt ut labore et 
                                                    </Typography>
                                                    <ul>
                                                        <li>
                                                            <i className="far fa-check"></i>
                                                            Research beyond the business plan
                                                        </li>
                                                        <li>
                                                            <i className="far fa-check"></i>
                                                            Marketing options and rates
                                                        </li>
                                                        <li>
                                                            <i className="far fa-check"></i>
                                                            The ability to turnaround consulting
                                                        </li>
                                                    </ul>
                                                </Box>
                                            </Box>
                                            <Box className="col-lg-6">
                                                <Box className="video-image">
                                                    <img src="assets/img/service/details-2.jpg" alt="img" />
                                                    <Box className="video-box">
                                                        <Link to="https://www.youtube.com/watch?v=Cn4G2lZ_g2I" className="video-btn ripple video-popup">
                                                            <i className="fas fa-play"></i>
                                                        </Link>
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Box>
                                    <Typography
                                        variant="body1"
                                    >
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat qui ducimus illum modi?  perspiciatis
                                        accusamus soluta perferendis, ad illum, nesciunt, reiciendis iusto et cupidit Repudiandae provident to
                                        consectetur, sapiente, libero iure necessitatibus corporis nulla voluptate, quisquam aut perspiciatis?
                                        Fugiat labore aspernatur eius, perspiciatis ut molestiae, delectus rem.
                                    </Typography>
                                    <Box className="details-image-2">
                                        <Box className="row g-4">
                                            <Box className="col-lg-6">
                                                <img src="assets/img/service/details-3.jpg" alt="img" />
                                            </Box>
                                            <Box className="col-lg-6">
                                                <img src="assets/img/service/details-4.jpg" alt="img" />
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                                <Box className="faq-content">
                                    <Box className="faq-accordion">
                                        <Box className="accordion" id="accordion">
                                            <Box className="accordion-item wow fadeInUp" data-wow-delay=".3s">
                                                <h4 className="accordion-header">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq1" aria-expanded="false" aria-controls="faq1">
                                                        How to learn digital marketing?
                                                    </button>
                                                </h4>
                                                <Box id="faq1" className="accordion-collapse collapse" data-bs-parent="#accordion">
                                                    <Box className="accordion-body">
                                                        Ne summo dictas pertinacia nam. Illum cetero vocent ei vim, case regione signiferumque vim te. Ex mea quem munere lobortis. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
                                                    </Box>
                                                </Box>
                                            </Box>
                                            <Box className="accordion-item wow fadeInUp" data-wow-delay=".5s">
                                                <h4 className="accordion-header">
                                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq2" aria-expanded="true" aria-controls="faq2">
                                                        Can I use the demos made by Ewebot?
                                                    </button>
                                                </h4>
                                                <Box id="faq2" className="accordion-collapse collapse show" data-bs-parent="#accordion">
                                                    <Box className="accordion-body">
                                                        Ne summo dictas pertinacia nam. Illum cetero vocent ei vim, case regione signiferumque vim te. Ex mea quem munere lobortis. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
                                                    </Box>
                                                </Box>
                                            </Box>
                                            <Box className="accordion-item wow fadeInUp" data-wow-delay=".7s">
                                                <h4 className="accordion-header">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3" aria-expanded="false" aria-controls="faq3">
                                                        Why didn’t you showcase my submission?
                                                    </button>
                                                </h4>
                                                <Box id="faq3" className="accordion-collapse collapse" data-bs-parent="#accordion">
                                                    <Box className="accordion-body">
                                                        Ne summo dictas pertinacia nam. Illum cetero vocent ei vim, case regione signiferumque vim te. Ex mea quem munere lobortis. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
                                                    </Box>
                                                </Box>
                                            </Box>
                                            <Box className="accordion-item wow fadeInUp" data-wow-delay=".9s">
                                                <h4 className="accordion-header">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq4" aria-expanded="false" aria-controls="faq4">
                                                        What everybody ought to know about digital marketing?
                                                    </button>
                                                </h4>
                                                <Box id="faq4" className="accordion-collapse collapse" data-bs-parent="#accordion">
                                                    <Box className="accordion-body">
                                                        Ne summo dictas pertinacia nam. Illum cetero vocent ei vim, case regione signiferumque vim te. Ex mea quem munere lobortis. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                        <Box className="col-12 col-lg-4">
                            <Box className="main-sidebar">
                                <Box className="single-sidebar-widget">
                                    <Box className="wid-title">
                                        <Typography
                                            variant="h3"
                                        >
                                            Other Services
                                        </Typography>
                                    </Box>
                                    <Box className="service-category">
                                        <Link to="service-details.html" className="active">
                                            Cloud Service
                                            <ArrowRightAltIcon />
                                        </Link>
                                        <Link to="">
                                            Web Development
                                            <ArrowRightAltIcon />
                                        </Link>
                                        <Link to="">
                                            Ui/Ux Designing
                                            <ArrowRightAltIcon />
                                        </Link>
                                        <Link to="">
                                            IT Management
                                            <ArrowRightAltIcon />
                                        </Link>
                                        <Link to="">
                                            Data Visualization
                                            <ArrowRightAltIcon />
                                        </Link>
                                        <Link to="">
                                            Security System
                                            <ArrowRightAltIcon />
                                        </Link>
                                    </Box>
                                </Box>
                                <Box className="single-sidebar-widget">
                                    <Box className="wid-title">
                                        <Typography
                                            variant="h3"
                                        >
                                            Any Question For Us
                                        </Typography>
                                    </Box>
                                    <ContactForm />
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </section>
    )
}