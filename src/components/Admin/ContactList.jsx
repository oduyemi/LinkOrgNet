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

export const ContactList = () => {
  const [contactRows, setContactRows] = useState([]);

  const [pageContact, setPageContact] = useState(0);
  const [rowsPerPageContact, setRowsPerPageContact] = useState(5);

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
    fetchContacts();
  }, []);

  const handleChangePageContact = (event, newPage) => setPageContact(newPage);
  const handleChangeRowsPerPageContact = (event) => {
    setRowsPerPageContact(parseInt(event.target.value, 10));
    setPageContact(0);
  };

  // Paginate data
  const currentRowsContact = contactRows.slice(
    pageContact * rowsPerPageContact,
    pageContact * rowsPerPageContact + rowsPerPageContact
  );
  return (
    <DashboardContent title="Contact List">
      <div className="d-flex flex-column">
        <div className="table-responsive">

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
          <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={contactRows.length}
          rowsPerPage={rowsPerPageContact}
          page={pageContact}
          onPageChange={handleChangePageContact}
          onRowsPerPageChange={handleChangeRowsPerPageContact}
        />
        </div>
      </div>
    </DashboardContent>
  );
};
