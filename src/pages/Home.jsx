import React from "react";
import { Box} from "@mui/material"
import Footer from "../components/Footer"
import ServiceSection from "../components/Home/ServiceSection"
import HeroSection from "../components/Home/HeroSection";
import AboutSection from "../components/Home/AboutSection"
import FeatureIconSection from "../components/Home/FeatureIconSection";
import CounterSection from "../components/Home/CounterSection";
import GrowSection from "../components/Home/GrowSection";
// import ProductSection from "../components/Home/ProductSection";
import ContactSection from "../components/Home/ContactSection";
import Brand from "../components/About/Brand";
import FaqSection from "../components/Services/FaqSection";
// import { ThreeDCard } from "../components/Home/ThreeDCard";



const Home = () => {
    return(
        <Box>
            <HeroSection/>
            <Box className="mt-5">
            <ServiceSection/>
            </Box>
            <AboutSection/>
            <FeatureIconSection/>
            <FaqSection />
            <CounterSection/>
            <GrowSection/>
            <ContactSection/>
            <Brand/>
            <Footer />

        </Box>
    )
}


export default Home;