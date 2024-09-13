import React from "react";
import { Box } from "@mui/material";
import ConnectDetails from "../../components/ServiceDetail/ConnectDetails";
import Footer from "../../components/Footer";

const ConnectPage = () => {
    return(
        <Box>
            <Box>
                <ConnectDetails />
            </Box>
            <Box>
                <Footer />
            </Box>
        </Box>
    )
}

export default ConnectPage