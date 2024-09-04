import React from "react";
import { ContactBanner } from "../components/Contact/ContactBanner";
import { ContactForm } from "../components/Contact/ContactForm";
import { Map } from "../components/Contact/Map";
import Footer from "../components/Footer";




const Contact = () => {
    return(
        <>
            <ContactBanner />
            <ContactForm />
            <Map />
            <Footer />
        </>
    )
}


export default Contact;