import React from "react";
import { Box } from "@mui/material";
import { Sidebar } from "../../components/Admin/Sidebar";
import { SendMail } from "../../components/Admin/SendMail";




const SendEmail = () => {
    return(
        <Box display="flex">
            <Sidebar />
            <SendMail />
        </Box>
    )
}


export default SendEmail;