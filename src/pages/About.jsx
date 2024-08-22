import React from "react";
import { Hero } from "../components/About/Hero";
import { Intro } from "../components/About/Intro";
import { AboutServices } from "../components/About/AboutServices";
import { Guide } from "../components/About/Guide";
import { Ad } from "../components/About/Ad";
import { Testimonials } from "../components/About/Testimonials";
import Footer from "../components/Footer";
import Brand from "../components/About/Brand";
import LinkOrg from "../components/About/LinkOrg";




const About = () => {
    return(
        <>
            <Hero />
            <Intro />
            <AboutServices />
            <Guide />
            <Ad />
            <Testimonials />
            <Brand/>
            <Footer />
        </>
    )
}


export default About;