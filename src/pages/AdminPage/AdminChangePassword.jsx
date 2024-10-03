import React from 'react'
import { Box } from "@mui/material";
import { Sidebar } from "../../components/Admin/Sidebar";
import { ChangePassword } from "../../components/Admin/ChangePassword";

const AdminChangePassword = () => {
    return (
        <Box display="flex">
            <Sidebar />
            <ChangePassword />
        </Box>
          )
}

export default AdminChangePassword