import React from "react";
import { Box } from "@mui/material";
import callcentre from "../../assets/images/callcentre.png"




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
                            <a href="pricing.html" className="theme-btn"><span>Learn More <i className="fas fa-chevron-right"></i></span></a>
                            <span className="or">or</span>
                            <a href="tel:+1718-904-4450" className="theme-btn bg-white"><span>+1234-567-4450 <i className="fas fa-chevron-right"></i></span></a>
                        </Box>
                    </Box>
                </Box>
            </Box>

            <section className="counter-section">
                <Box className="container">
                    <Box className="counter-wrapper">
                        <Box className="counter-items">
                            <h2><span className="count">15</span>+</h2>
                            <p>
                                YEARS OF <br />
                                EXPERIENCE
                            </p>
                        </Box>
                        <Box className="counter-items">
                            <h2><span className="count">100</span>k</h2>
                            <p>
                                GLOBAL  <br />
                                CLIENTS
                            </p>
                        </Box>
                        <Box className="counter-items">
                            <h2><span className="count">2,5</span>k</h2>
                            <p>
                                KILOMETERS <br />
                                OF FIBERS
                            </p>
                        </Box>
                        <Box className="counter-items">
                            <h2><span className="count">991</span></h2>
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