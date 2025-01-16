import React from "react";
import { Box, Typography } from "@mui/material";

export const HomeIntro = () => {
    return (
        <section className="py-4">
            <Box className="container">
                <Box className="row">
                    <Box className="col-12">
                        <Box 
                            className="card mb-3 rounded-3"
                            sx={{
                                backgroundColor: "#EEE5E9",
                                boxShadow: 3,
                                overflow: "hidden"
                            }}
                        >
                            <Box className="row g-0 align-items-center">
                                <Box className="col-md-5 col-lg-6 text-md-center">
                                    <Box 
                                        component="img" 
                                        src={require("../../assets/images/int.png")} 
                                        alt="System" 
                                        className="img-fluid"
                                        sx={{
                                            maxWidth: "100%",
                                            height: "auto",
                                            padding: 2,
                                        }}
                                    />
                                </Box>
                                <Box className="col-md-7 col-lg-6 px-md-2 px-xl-6 text-center text-md-start">
                                    <Box className="card-body px-4 py-5 p-lg-3 p-md-4">
                                        <Typography 
                                            variant="h2" 
                                            className="mb-4 fw-bold"
                                            sx={{
                                                fontWeight: "bold",
                                                marginBottom: 2,
                                                color: "#333",
                                                fontSize: { xs: "1.5rem", md: "2rem" }
                                            }}
                                        >
                                            We are a high-level 
                                            <br className="d-md-none d-xxl-block" />
                                            Internet Service Provider
                                        </Typography>
                                        <Typography 
                                            variant="body1" 
                                            className="card-text"
                                            sx={{
                                                color: "#555",
                                                lineHeight: 1.8,
                                                marginBottom: 2,
                                                fontSize: "1rem"
                                            }}
                                        >
                                            LinkOrg Networks Ltd specializes in 
                                            information technology and telecommunications services. 
                                            <br className="d-none d-xxl-block" />
                                            We are dedicated to delivering dependable and efficient 
                                            field telecommunication engineering support services.
                                            <br className="d-none d-xxl-block" />
                                            Through the internet with a high level of security, 
                                            to enter into your own data you must enter the password
                                            <br className="d-none d-xxl-block" />
                                            that you created when you registered in this Data 
                                            <br className="d-none d-xxl-block" />
                                            Warehouse.
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </section>
    );
}
