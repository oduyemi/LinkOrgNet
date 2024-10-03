import React from "react";
import { Box, Typography } from "@mui/material";


export const ServiceForm = () => {
    return(
        <Box className="container position-relative wow fadeInUp" data-wow-delay="0.1s" style={{marginTop: "4rem"}}>
            <Box className="row justify-content-center">
                <Box className="col-lg-8">
                    <Box className="bg-light text-center p-5">
                        <Typography
                            variant="h1" 
                            className="mb-4 blutext"
                            sx={{
                                fontSize: "36px",
                                fontWeight: 800,
                                fontFamily: "montserrat"
                            }}
                        >
                            Book Our Services
                        </Typography>
                        <form>
                            <Box className="row g-3">
                                <Box className="col-12 col-sm-6">
                                    <input 
                                        type="text" 
                                        className="form-control border-0" 
                                        placeholder="Your Name" 
                                        style={{height: "55px"}}
                                    />
                                </Box>
                                <Box className="col-12 col-sm-6">
                                    <input 
                                        type="text" 
                                        className="form-control border-0" 
                                        placeholder="Company Name"  
                                        style={{height: "55px"}}
                                    />
                                </Box>
                                <Box className="col-12 col-sm-6">
                                    <input 
                                        type="email" 
                                        className="form-control border-0" 
                                        placeholder="Your Email" 
                                        style={{height: "55px"}}
                                    />
                                </Box>
                                <Box className="col-12 col-sm-6">
                                    <input 
                                        type="text" 
                                        className="form-control border-0" 
                                        placeholder="Full Address" 
                                        style={{height: "55px"}}
                                    />
                                </Box>
                                <Box className="col-12 col-sm-6">
                                    <select className="form-select border-0" style={{height: "55px"}}>
                                        <option selected>Select A Service</option>
                                        <option value="1">VPN MPLS L2VPN</option>
                                        <option value="2">VPN MPLS L3VPN</option>
                                        <option value="3">Internet Enterprise</option>
                                        <option value="3">Internet Retail</option>
                                        <option value="3">VOIP</option>
                                        <option value="3">Application Security</option>
                                    </select>
                                </Box>
                                <Box className="col-12 col-sm-6">
                                    <Box className="date" id="date1" data-target-input="nearest">
                                        <input 
                                            type="text"
                                            className="form-control border-0 datetimepicker-input"
                                            placeholder="How did you hear about us?" 
                                            data-target="#date1" 
                                            style={{height: "55px"}}
                                        />
                                    </Box>
                                </Box>
                                <Box className="col-12">
                                    <textarea className="form-control border-0" placeholder="Special Request"></textarea>
                                </Box>
                                <Box className="col-12">
                                    <button className="theme-btn w-100 py-3" type="submit">Book Now</button>
                                </Box>
                            </Box>
                        </form>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}