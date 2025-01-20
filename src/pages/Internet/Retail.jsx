import React from "react";
import { Box } from "@mui/material";
import { RetailBanner } from "../../components/Internet/Retail/Banner";
import Footer from "../../components/Footer";
import { RetailPricingTable } from "../../components/Internet/Retail/PricingTable";
import { AdEnterprise } from "../../components/Internet/Retail/AdEnterprise";

const Retail = () => {
    return(
        <Box>
            <RetailBanner />
            <RetailPricingTable />
            <AdEnterprise />
            <Box>
                <Footer />
            </Box>
        </Box>
    )
}


export default Retail;