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

export const EnquiryList = () => {
  const [enquiryRows, setEnquiryRows] = useState([]);

  const [pageEnquiry, setPageEnquiry] = useState(0);
  const [rowsPerPageEnquiry, setRowsPerPageEnquiry] = useState(5);

  useEffect(() => {
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
    fetchEnquiries();
  }, []);

  // Paginate data
  const handleChangePageEnquiry = (event, newPage) => setPageEnquiry(newPage);
  const handleChangeRowsPerPageEnquiry = (event) => {
    setRowsPerPageEnquiry(parseInt(event.target.value, 10));
    setPageEnquiry(0);
  };

  const currentRowsEnquiry = enquiryRows.slice(
    pageEnquiry * rowsPerPageEnquiry,
    pageEnquiry * rowsPerPageEnquiry + rowsPerPageEnquiry
  );

  return (
    <DashboardContent title="Enquiry List">
      <div className="d-flex flex-column">
        <div className="table-responsive">
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
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={enquiryRows.length}
            rowsPerPage={rowsPerPageEnquiry}
            page={pageEnquiry}
            onPageChange={handleChangePageEnquiry}
            onRowsPerPageChange={handleChangeRowsPerPageEnquiry}
          />
        </div>
      </div>
    </DashboardContent>
  );
};
