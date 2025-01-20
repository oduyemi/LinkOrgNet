import React from "react";
import { AdSection } from "../AdSection";

export const AdEnterprise = () => {
    return (
        <AdSection 
            heading="Not quite what you're looking for?"
            description="Our all-inclusive Enterprise Data Plans ensure you get fast, affordable, reliable internet virtually anywhere you do business."
            buttonText="Learn More"
            buttonLink="/services/internet/enterprise"
            imageSrc={require("../../../assets/images/office.jpg")}
            imageAlt="Office"
            imageLink="/services/internet/enterprise"
        />
    );
}

