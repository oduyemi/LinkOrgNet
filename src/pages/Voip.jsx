import React from "react";
import { Box } from "@mui/material";
import { VoipBanner } from "../components/Voip/Banner";
import { VoipContent } from "../components/Voip/VoipContent";
import Footer from "../components/Footer";



const Voip = () => {
    return(
        <Box>
            <VoipBanner />
            <VoipContent />
            <Footer />
        </Box>
    )
}



export default Voip;