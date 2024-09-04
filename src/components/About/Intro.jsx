import React from "react";
import { Box, Typography } from "@mui/material";
import {Link} from "react-router-dom";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import borderShape from "../../assets/images/borderShape.png";





export const Intro = () => {
    return(
        <section className="about-section fix section-padding">
        <Box className="container">
            <Box className="about-wrapper">
                <Box className="row">
                    <Box className="col-lg-6">
                        <Box className="about-image-items">
                            <Box className="border-shape">
                                <img 
                                    src={require("../../assets/images/guide.png")} 
                                    alt="shape-img" 
                                    // width="95%"
                                />
                            </Box>
                            <Box className="about-image bg-cover wow fadeInLeft" data-wow-delay=".3s" 
                                style={{
                                    backgroundImage: `url(${borderShape})`
                                }}
                            >
                                <Box className="about-image-2 wow fadeInUp" data-wow-delay=".5s">
                                    <img src={require("../../assets/images/field.png")} alt="about-img" />
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box className="col-lg-6 mt-5 mt-lg-0">
                        <Box className="about-content">
                            <Box className="section-title">
                                <span 
                                    className="wow fadeInUp"
                                    style={{ textDecoration: "none"}}
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
                                        color: "#010156"
                                    }}
                                >
                                    Trusted Network solutions
                                </Typography>
                            </Box>
                            <Typography
                                variant="body1" 
                                className=" mt-4 mt-md-0 wow fadeInUp" 
                                data-wow-delay=".5s"
                                sx={{
                                    fontFamily: "Montserrat",
                                }}
                                gutterBottom
                            >
                                LinkOrg Networks, founded in 2009, is an Engineering Solution 
                                company dedicated to offering satellite communication services 
                                to ships, vessels, jack-up barges, and other offshore bases 
                                from our collocated teleport infrastructure with one of 
                                our partners.
                                Our expertise includes Fixed VSAT remote internet solutions, 
                                Marine/offshore internet services, Video broadcasting, 
                                Information Technology, and Telecommunications.
                                <br/><br/>
                                What distinguishes us is our unwavering focus on utilizing 
                                state-of-the-art technology to provide seamless connectivity 
                                solutions. Combining LEO and GEO Satellite technology, 
                                Fibre Optics, IP-PBX and Terrestrial technologies to deliver 
                                tailored professional solutions that meet the diverse 
                                requirements of our valued clients in Africa and beyond.
                                <br/><br/>
                                Our focus is on delivering reliable communication 
                                solutions, particularly for clients with offshore safety 
                                needs. Our engineers are proficient in installing and 
                                maintaining various satellite systems and have expertise in 
                                design, implementation, and customer service.
                                We operate with a team of engineers in Lagos, Port-Harcourt, 
                                and the United Kingdom, and our main operations and business 
                                development are located in the UK.
                                ​
                            </Typography>
                            
                            <Box className="about-author">
                                <Box className="">
                                    <Link to="/contact">
                                        <button className="theme-btn d-inline about-button wow fadeInUp" data-wow-delay=".8s">
                                            Contact Us
                                            <ChevronRightIcon
                                                sx={{
                                                    fontSize: 40
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
    )
}