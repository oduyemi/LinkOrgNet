import React, { useState, useEffect } from "react";
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
import { DashboardContent } from "./DashboardContent";
import axios from "axios";

export const Dashboard = () => {
  const [contactRows, setContactRows] = useState([]);
  const [enquiryRows, setEnquiryRows] = useState([]);
  const [bookingRows, setBookingRows] = useState([]);

  const [pageContact, setPageContact] = useState(0);
  const [rowsPerPageContact, setRowsPerPageContact] = useState(5);

  const [pageEnquiry, setPageEnquiry] = useState(0);
  const [rowsPerPageEnquiry, setRowsPerPageEnquiry] = useState(5);

  const [pageBooking, setPageBooking] = useState(0);
  const [rowsPerPageBooking, setRowsPerPageBooking] = useState(5);

  // Fetch data from APIs
  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axios.get(
          "https://linkorgnet.vercel.app/api/v1/contacts/"
        );
        setContactRows(response.data);
      } catch (error) {
        console.error("Error fetching contacts:", error);
      }
    };

    const fetchEnquiries = async () => {
      try {
        const response = await axios.get(
          "https://linkorgnet.vercel.app/api/v1/enquiries/"
        );
        setEnquiryRows(response.data);
      } catch (error) {
        console.error("Error fetching enquiries:", error);
      }
    };

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

    fetchContacts();
    fetchEnquiries();
    fetchBookings();
  }, []);

  // Pagination handlers
  const handleChangePageContact = (event, newPage) => setPageContact(newPage);
  const handleChangeRowsPerPageContact = (event) => {
    setRowsPerPageContact(parseInt(event.target.value, 10));
    setPageContact(0);
  };

  const handleChangePageEnquiry = (event, newPage) => setPageEnquiry(newPage);
  const handleChangeRowsPerPageEnquiry = (event) => {
    setRowsPerPageEnquiry(parseInt(event.target.value, 10));
    setPageEnquiry(0);
  };

  const handleChangePageBooking = (event, newPage) => setPageBooking(newPage);
  const handleChangeRowsPerPageBooking = (event) => {
    setRowsPerPageBooking(parseInt(event.target.value, 10));
    setPageBooking(0);
  };

  // Paginate data
  const currentRowsContact = contactRows.slice(
    pageContact * rowsPerPageContact,
    pageContact * rowsPerPageContact + rowsPerPageContact
  );

  const currentRowsEnquiry = enquiryRows.slice(
    pageEnquiry * rowsPerPageEnquiry,
    pageEnquiry * rowsPerPageEnquiry + rowsPerPageEnquiry
  );

  const currentRowsBooking = bookingRows.slice(
    pageBooking * rowsPerPageBooking,
    pageBooking * rowsPerPageBooking + rowsPerPageBooking
  );

  return (
    <Box sx={{ padding: "2rem" }}>
      <DashboardContent title="Contact List">
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>S/N</TableCell>
                <TableCell>Full Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Phone Number</TableCell>
                <TableCell>Subject</TableCell>
                <TableCell>Message</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {currentRowsContact.map((row, index) => (
                <TableRow key={row.id || index}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.phone}</TableCell>
                  <TableCell>{row.subject}</TableCell>
                  <TableCell>{row.message}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={contactRows.length}
          rowsPerPage={rowsPerPageContact}
          page={pageContact}
          onPageChange={handleChangePageContact}
          onRowsPerPageChange={handleChangeRowsPerPageContact}
        />

<h3>Enquiry List</h3>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>S/N</TableCell>
                <TableCell>First Name</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Company Name</TableCell>
                <TableCell>Address</TableCell>
                <TableCell>Phone Number</TableCell>
                <TableCell>State</TableCell>
                <TableCell>Topic</TableCell>
                <TableCell>Message</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {currentRowsEnquiry.map((row, index) => (
                <TableRow key={row.id || index}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{row.fname}</TableCell>
                  <TableCell>{row.lname}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.company}</TableCell>
                  <TableCell>{row.address}</TableCell>
                  <TableCell>{row.phone}</TableCell>
                  <TableCell>{row.state}</TableCell>
                  <TableCell>{row.topic}</TableCell>
                  <TableCell>{row.message}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={enquiryRows.length}
          rowsPerPage={rowsPerPageEnquiry}
          page={pageEnquiry}
          onPageChange={handleChangePageEnquiry}
          onRowsPerPageChange={handleChangeRowsPerPageEnquiry}
        />

<h3>Booking List</h3>
        <TableContainer component={Paper}>
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
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={bookingRows.length}
          rowsPerPage={rowsPerPageBooking}
          page={pageBooking}
          onPageChange={handleChangePageBooking}
          onRowsPerPageChange={handleChangeRowsPerPageBooking}
        />
      </DashboardContent>


    </Box>
  );
};

