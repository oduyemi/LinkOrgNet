import React from "react";
import { Box } from "@mui/material";
import callcentre from "../../assets/images/callcentre.jpg";
import { Link } from "react-router-dom";
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';



export const Ad = () => {
    return(
        <Box>
            <Box className="cta-parallax-section bg-cover" 
                style={{
                    backgroundImage: `url(${callcentre})` 
                }}>
                <Box className="container">
                    <Box className="cta-parallax-wrapper text-center">
                        <h2 className="text-white">
                            Make Every Interaction Count <br /> With LinkOrg VOIP Services
                        </h2>
                        <Box className="button-items">
                            <Link to="" className="theme-btn">
                                <span>
                                    Learn More 
                                    <i className="fas fa-chevron-right"></i>
                                </span></Link>
                            <span className="or">or</span>
                            <Link to="tel:+2348034060434" 
                                className="theme-btn bg-white"
                            >
                                <span>
                                    Call Support &nbsp;
                                    <PhoneEnabledIcon />
                                </span>
                            </Link>
                        </Box>
                    </Box>
                </Box>
            </Box>

            <section className="counter-section">
                <Box className="container">
                    <Box className="counter-wrapper">
                        <Box className="counter-items">
                            <h2><span className="count">50</span>+</h2>
                            <p>
                                YEARS OF <br />
                                <span className="d-inline" style={{ fontSize: "10px" }}>combined<br/></span>EXPERIENCE
                            </p>
                        </Box>
                        <Box className="counter-items">
                            <h2><span className="count">30</span>+</h2>
                            <p>
                                GLOBAL  <br />
                                CLIENTS
                            </p>
                        </Box>
                        <Box className="counter-items">
                            <h2><span className="count">2.5</span>k</h2>
                            <p>
                                KILOMETERS <br />
                                OF FIBERS
                            </p>
                        </Box>
                        <Box className="counter-items">
                            <p>
                                SATELLITE <br />
                                CHANNELS
                            </p>
                        </Box>
                    </Box>
                </Box>
            </section>

        </Box>
    )
}