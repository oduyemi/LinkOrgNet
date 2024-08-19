import React from "react";
import { Box } from "@mui/material";
import { AboutServices } from "../components/About/AboutServices";
import { Testimonials } from "../components/About/Testimonials";
import Footer from "../components/Footer";
import ContactSection from "../components/Home/ContactSection";




const Services = () => {
    return(
        <Box>
        <AboutServices />
        <Testimonials />
        <ContactSection/>
        <Footer />
        </Box>
      

    )
}


export default Services;