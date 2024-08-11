import React, { useEffect } from "react";
import { Box } from "@mui/material";
import { Sidebar } from "../components/Admin/Sidebar";
import { Inbox } from "../components/Admin/Inbox";




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
            <Inbox />
        </Box>
    )
}


export default Admin;