import React from 'react';
import { Box, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { DashboardContent } from './DashboardContent';
import { Link } from 'react-router-dom';

export const Profile = () => {
  return (
    <DashboardContent title="Profile">
      <Box sx={{ padding: '2rem' }}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Full Name</TableCell>
                <TableCell>Linkorg Admin</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Phone</TableCell>
                <TableCell>+234678999949555</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Email</TableCell>
                <TableCell>admin@linkorgnet.com</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Username</TableCell>
                <TableCell>linkorgAdmin</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
          <Link to="/update_profile">
            <Button variant="contained" color="primary">
              Update Profile
            </Button>
          </Link>
          <Link to="/admin">
            <Button variant="contained" color="secondary">
              Dashboard Home
            </Button>
          </Link>
        </Box>
      </Box>
    </DashboardContent>
  );
};
