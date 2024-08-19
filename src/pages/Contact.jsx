import React from "react";
import { ContactBanner } from "../components/Contact/ContactBanner";
import { ContactForm } from "../components/Contact/ContactForm";
import { Map } from "../components/Contact/Map";




const Contact = () => {
    return(
        <>
            <ContactBanner />
            <ContactForm />
            <Map />
        </>
    )
}


export default Contact;