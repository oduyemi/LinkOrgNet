import React from "react";
import { Box } from "@mui/material";
import InternetDetails from "../../components/ServiceDetail/InternetDetails";
import Footer from "../../components/Footer";

const ConnectPage = () => {
    return(
        <Box>
            <Box>
                <InternetDetails />
            </Box>
            <Box>
                <Footer />
            </Box>
        </Box>
    )
}

export default ConnectPage