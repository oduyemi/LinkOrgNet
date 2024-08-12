import React from 'react'
import { Box } from "@mui/material";
import { Sidebar } from "../components/Admin/Sidebar";
import { SentEmail } from "../components/Admin/SentEmail";

const AdminSentMails = () => {
  return (
<Box display="flex">
    <Sidebar />
    <SentEmail />
 </Box>
  )
}

export default AdminSentMails