import React from "react";
import { Box } from "@mui/material";
import { RetailBanner } from "../../components/Internet/Retail/Banner";
import Footer from "../../components/Footer";
import { RetailPricingTable } from "../../components/Internet/Retail/PricingTable";

const Retail = () => {
    return(
        <Box>
            <RetailBanner />
            <RetailPricingTable />
            <Box>
                <Footer />
            </Box>
        </Box>
    )
}


export default Retail;