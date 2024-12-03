import React, { useEffect, useState } from "react";
import { DashboardContent } from "./DashboardContent";
import axios from "axios";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
} from "@mui/material";

export const BookingList = () => {
    const [bookingRows, setBookingRows] = useState([]);

  const [pageBooking, setPageBooking] = useState(0);
  const [rowsPerPageBooking, setRowsPerPageBooking] = useState(5);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get(
          "https://linkorgnet.vercel.app/api/v1/bookings/"
        );
        setBookingRows(response.data);
      } catch (error) {
        console.error("Error fetching enquiries:", error);
      }
    };
    fetchBookings();
  }, []);

  const handleChangePageBooking = (event, newPage) => setPageBooking(newPage);
  const handleChangeRowsPerPageBooking = (event) => {
    setRowsPerPageBooking(parseInt(event.target.value, 10));
    setPageBooking(0);
  };

  // Paginate data
  const currentRowsBooking = bookingRows.slice(
    pageBooking * rowsPerPageBooking,
    pageBooking * rowsPerPageBooking + rowsPerPageBooking
  );
  return (
    <DashboardContent title="Booking List">
      <div className="d-flex flex-column">
        <div className="table-responsive">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>S/N</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Company</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Address</TableCell>
                <TableCell>Service</TableCell>
                <TableCell>How</TableCell>
                <TableCell>Phone Number</TableCell>
                <TableCell>State</TableCell>
                <TableCell>LGA</TableCell>
                <TableCell>Subject</TableCell>
                <TableCell>Special Request</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {currentRowsBooking.map((row, index) => (
                <TableRow key={row.id || index}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.company}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.address}</TableCell>
                  <TableCell>{row.service}</TableCell>
                  <TableCell>{row.how}</TableCell>
                  <TableCell>{row.phone}</TableCell>
                  <TableCell>{row.state}</TableCell>
                  <TableCell>{row.lga}</TableCell>
                  <TableCell>{row.specialRequest}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={bookingRows.length}
            rowsPerPage={rowsPerPageBooking}
            page={pageBooking}
            onPageChange={handleChangePageBooking}
            onRowsPerPageChange={handleChangeRowsPerPageBooking}
          />
        </div>
      </div>
    </DashboardContent>
  );
};
