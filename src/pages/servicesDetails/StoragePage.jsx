import React from "react";
import { Box } from "@mui/material";
import StorageDetails from "../../components/ServiceDetail/StorageDetails";
import Footer from "../../components/Footer";

const StoragePage = () => {
    return(
        <Box>
            <Box>
                <StorageDetails />
            </Box>
            <Box>
                <Footer />
            </Box>
        </Box>
    )
}

export default StoragePage