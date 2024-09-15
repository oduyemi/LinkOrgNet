import React from "react";
import { Box } from "@mui/material";
import SoftwareDetails from "../../components/ServiceDetail/SoftwareDetails";
import Footer from "../../components/Footer";

const SoftwarePage = () => {
    return(
        <Box>
            <Box>
                <SoftwareDetails />
            </Box>
            <Box>
                <Footer />
            </Box>
        </Box>
    )
}

export default SoftwarePage