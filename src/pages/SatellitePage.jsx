import React from "react";
import { Box } from "@mui/material";
import SatelliteDetails from "../components/ServiceDetail/SatelliteDetail";
import Footer from "../components/Footer";

const SatellitePage = () => {
    return(
        <Box>
            <Box>
                <SatelliteDetails />
            </Box>
            <Box>
                <Footer />
            </Box>
        </Box>
    )
}

export default SatellitePage