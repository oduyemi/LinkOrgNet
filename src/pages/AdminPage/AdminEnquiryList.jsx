import React from "react";
import { Box } from "@mui/material";
import { Sidebar } from "../../components/Admin/Sidebar";
import { EnquiryList } from "../../components/Admin/EnquiryList";




const AdminEnquiryList = () => {
    return(
        <Box display="flex">
            <Sidebar />
            <EnquiryList />
        </Box>
    )
}


export default AdminEnquiryList;