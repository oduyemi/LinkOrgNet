import React from "react";
import { Box } from "@mui/material";




export const Map = () => {
    return(
        <Box className="map-section">
            <Box className="google-map wow fadeInUp" data-wow-delay=".7s">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7329492541344!2d3.4380289749471094!3d6.428344524261895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf51458c3d6af%3A0x3d281204deb44d3d!2sLinkOrg%20Networks!5e0!3m2!1sen!2sng!4v1727446298795!5m2!1sen!2sng" 
                style={{ border:"0",}} allowfullscreen="" title="LinkOrg Networks" loading="lazy"></iframe>
            </Box>
        </Box>
    )
}