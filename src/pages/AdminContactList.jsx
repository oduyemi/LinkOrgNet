import React from "react";
import { Box } from "@mui/material";
import { Sidebar } from "../components/Admin/Sidebar";
import { ContactList } from "../components/Admin/ContactList";




const AdminContactList = () => {
    return(
        <Box display="flex">
            <Sidebar />
            <ContactList />
        </Box>
    )
}


export default AdminContactList;