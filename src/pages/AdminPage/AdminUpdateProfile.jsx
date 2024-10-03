import React from 'react'
import { Box } from "@mui/material";
import { Sidebar } from "../../components/Admin/Sidebar";
import { UpdateProfile } from "../../components/Admin/UpdateProfile";

const AdminUpdateProfile = () => {
  return (
  
    <Box display="flex">
                <Sidebar />
                <UpdateProfile />
            </Box>
      )
}

export default AdminUpdateProfile