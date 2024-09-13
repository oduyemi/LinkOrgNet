import React from "react";
import { Box } from "@mui/material";
import VPNDetails from "../../components/ServiceDetail/VPNDetails";
import Footer from "../../components/Footer";





const VPNPage = () => {
    return(
        <Box>
            <Box>
                <VPNDetails />
            </Box>
            <Box>
                <Footer />
            </Box>
        </Box>
    )
}

export default VPNPage;