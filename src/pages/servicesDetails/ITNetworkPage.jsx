import React from "react";
import { Box } from "@mui/material";
import ITNetworkDetails from "../../components/ServiceDetail/ITNetworkDetails";
import Footer from "../../components/Footer";

const ITNetworkPage = () => {
    return(
        <Box>
            <Box>
                <ITNetworkDetails />
            </Box>
            <Box>
                <Footer />
            </Box>
        </Box>
    )
}

export default ITNetworkPage