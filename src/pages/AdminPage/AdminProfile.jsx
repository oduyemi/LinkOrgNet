import React from 'react'
import { Box } from "@mui/material";
import { Sidebar } from "../../components/Admin/Sidebar";
import { Profile } from "../../components/Admin/Profile";

const AdminProfile = () => {
  return (
<Box display="flex">
            <Sidebar />
            <Profile />
        </Box>
  )
}

export default AdminProfile