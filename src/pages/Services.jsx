import React from "react";
import { Box } from "@mui/material";
import Footer from "../components/Footer";
import ContactSection from "../components/Home/ContactSection";
import { Hero } from "../components/Services/Hero";
import NeedAdvisor from "../components/Services/NeedAdvisor";
import FeatureIconBoxSection from "../components/Services/FeatureIconBoxSection";
import FaqSection from "../components/Services/FaqSection";
import  ServicesSection  from "../components/Services/ServicesSection";


const Services = () => {
    return(
        <Box>
        <Hero/>
        <Box style={{height: "100px"}}> 
        </Box>
        <ServicesSection/>
        <NeedAdvisor/>
        <FeatureIconBoxSection/>
        <FaqSection/>
        <ContactSection/>
        <Footer />
        </Box>
      

    )
}


export default Services;