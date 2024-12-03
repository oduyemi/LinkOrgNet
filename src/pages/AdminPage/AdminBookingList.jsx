import React from "react";
import { Box } from "@mui/material";
import { Sidebar } from "../../components/Admin/Sidebar";
import { BookingList } from "../../components/Admin/BookingList";




const AdminBookingList = () => {
    return(
        <Box display="flex">
            <Sidebar />
            <BookingList />
        </Box>
    )
}


export default AdminBookingList;