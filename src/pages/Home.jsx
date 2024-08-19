import React from "react";
import { Box} from "@mui/material"
import Footer from "../components/Footer"
import ServiceSection from "../components/Home/ServiceSection"
import HeroSection from "../components/Home/HeroSection";
import AboutSection from "../components/Home/AboutSection"
import FeatureIconSection from "../components/Home/FeatureIconSection";
import CounterSection from "../components/Home/CounterSection";
import GrowSection from "../components/Home/GrowSection";
// import TestimonialSection from "../components/Home/TestimonialSection";
import TeamSection from "../components/Home/TeamSection";
// import PricingSection from "../components/Home/PricingSection";
// import ProductSection from "../components/Home/ProductSection";
import ContactSection from "../components/Home/ContactSection";
import { Testimonials } from "../components/About/Testimonials";
import Brand from "../components/About/Brand";




const Home = () => {
    return(
        <Box>

    <HeroSection/>
    <ServiceSection/>
    <AboutSection/>
    <FeatureIconSection/>
    <CounterSection/>
    <GrowSection/>
    <Testimonials/>
    <TeamSection/>
    {/* <PricingSection/> */}
    {/* <ProductSection/> */}
    <ContactSection/>
    <Brand/>
    <Footer />

        </Box>
    )
}


export default Home;