import React from "react";
import { Box} from "@mui/material"
import Footer from "../components/Footer"
import ServiceSection from "../components/Home/ServiceSection"
// import HeroSection from "../components/Home/HeroSection";
import AboutSection from "../components/Home/AboutSection"
import FeatureIconSection from "../components/Home/FeatureIconSection";
import CounterSection from "../components/Home/CounterSection";
import GrowSection from "../components/Home/GrowSection";
// import ProductSection from "../components/Home/ProductSection";
import ContactSection from "../components/Home/ContactSection";
import Brand from "../components/About/Brand";
import FaqSection from "../components/Services/FaqSection";
import { HomeBanner } from "../components/Home/Banner";
import { HomeIntro } from "../components/Home/Intro";
import { DataPlan } from "../components/Home/DataPlan";
import { InternetServices } from "../components/Home/InternetServices";
// import { ThreeDCard } from "../components/Home/ThreeDCard";



const Home = () => {
    return(
        <Box>
            <HomeBanner/>
                <InternetServices />
            <AboutSection/>
            <FaqSection />
            <CounterSection/>
            {/* <GrowSection/> */}
            <ContactSection/>
            <Brand/>
            <Footer />

        </Box>
    )
}


export default Home;