import React from "react";
import { Box } from "@mui/material";
import VoipDetails from "../components/ServiceDetail/VoipDetails";
import Footer from "../components/Footer";





const VoipPage = () => {
    return(
        <Box>
            <Box>
                <VoipDetails />
            </Box>
            <Box>
                <Footer />
            </Box>
        </Box>
    )
}

export default VoipPage;