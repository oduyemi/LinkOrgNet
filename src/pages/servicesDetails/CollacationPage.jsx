import React from "react";
import { Box } from "@mui/material";
import CollocationDetails from "../../components/ServiceDetail/CollocationDetails";
import Footer from "../../components/Footer";

const CollocationPage = () => {
    return(
        <Box>
            <Box>
                <CollocationDetails />
            </Box>
            <Box>
                <Footer />
            </Box>
        </Box>
    )
}

export default CollocationPage