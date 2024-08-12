import React, { useState, useEffect } from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { DashboardContent } from './DashboardContent'; // Adjust import based on your file structure

const dummyEmails = [
  { id: 1, recipient: 'john.doe@example.com', subject: 'Meeting Reminder', dateSent: '2024-08-01T10:00:00Z' },
  { id: 2, recipient: 'rita.foster@example.com', subject: 'Project Update', dateSent: '2024-08-02T12:00:00Z' },
  { id: 3, recipient: 'larry.gaga@example.com', subject: 'Newsletter Subscription', dateSent: '2024-08-03T15:00:00Z' },
];

export const SentEmail = () => {
  const [emails, setEmails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    // Simulate a delay for fetching data
    const fetchSentEmails = () => {
      try {
        // Use dummy data instead of an API call
        setTimeout(() => {
          setEmails(dummyEmails);
          setLoading(false);
        }, 500); // Simulate network delay
      } catch (err) {
        setError('Failed to fetch emails');
        setLoading(false);
      }
    };

    fetchSentEmails();
  }, []);

  if (loading) return <Typography>Loading...</Typography>;
  if (error) return <Typography color="error">{error}</Typography>;

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
                  <TableCell>#</TableCell>
                  <TableCell>Recipient</TableCell>
                  <TableCell>Subject</TableCell>
                  <TableCell>Date Sent</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {emails.map((email, index) => (
                  <TableRow key={email.id}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{email.recipient}</TableCell>
                    <TableCell>{email.subject}</TableCell>
                    <TableCell>{new Date(email.dateSent).toLocaleDateString()}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Box>
    </DashboardContent>
  );
};
