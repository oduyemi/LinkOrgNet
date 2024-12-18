import React, { useState, useEffect } from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { DashboardContent } from './DashboardContent'; 
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

export const SentEmail = () => {
  const [emails, setEmails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [page, setPage] = useState(0); 
  const [rowsPerPage, setRowsPerPage] = useState(10);

  useEffect(() => {
    const fetchSentEmails = async () => {
      try {
        const response = await fetch('https://linkorgnet.vercel.app/api/v1/email/sent');
        if (!response.ok) {
          throw new Error('Failed to fetch emails');
        }
        const data = await response.json();
        setEmails(data);
        setLoading(false);
        toast.success('Emails loaded successfully!'); 
      } catch (err) {
        setError('Failed to fetch emails');
        setLoading(false);
        toast.error('Failed to load emails!');
      }
    };

    fetchSentEmails();
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); 
  };

  if (loading) return <Typography>Loading...</Typography>;
  if (error) return <Typography color="error">{error}</Typography>;

  const visibleEmails = emails.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <DashboardContent title="Sent Emails">
      <Box sx={{ padding: '2rem' }}>
        {emails.length === 0 ? (
          <Typography>No emails found.</Typography>
        ) : (
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>S/N</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Subject</TableCell>
                  <TableCell>Message</TableCell>
                  <TableCell>Date And Time Sent</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                  {visibleEmails.map((email, index) => (
                    <TableRow key={email.id}>
                      <TableCell>{page * rowsPerPage + index + 1}</TableCell>
                      <TableCell>{email.email}</TableCell>
                      <TableCell>{email.name}</TableCell>
                      <TableCell>{email.subject}</TableCell>
                      <TableCell>{email.message}</TableCell>
                      <TableCell>{new Date(email.sentAt).toLocaleString()}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
            </Table>
          </TableContainer>
        )}
      </Box>
      {/* Toast Container to display toast notifications */}
      <ToastContainer />
    </DashboardContent>
  );
};
