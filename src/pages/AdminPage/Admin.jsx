import React, { useEffect } from "react";
import { Box } from "@mui/material";
import { Sidebar } from "../../components/Admin/Sidebar";
import { Dashboard } from "../../components/Admin/Dashboard";


const Admin = () => {
    useEffect(() => {
        document.body.classList.add("admin");
        return () => {
          document.body.classList.remove("admin");
        };
      }, []);
    return(
        <Box display="flex">
            <Sidebar />
            <Dashboard />
        </Box>
    )
}


export default Admin;