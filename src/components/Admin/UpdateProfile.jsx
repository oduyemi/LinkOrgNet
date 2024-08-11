import React, { useState } from 'react'
import { Box, Button, TextField } from '@mui/material';
import { DashboardContent } from './DashboardContent';
import { Link } from "react-router-dom";

export const UpdateProfile = () => {

      // State to manage form fields
  const [fullname, setFullname] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [updated, setUpdated] = useState(false); 

  const handleUpdateProfile = () => {
    // Logic for handling profile update
  
    setUpdated(true);
  };

  return (
     <DashboardContent title="Update Profile">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem',
          padding: '2rem',
        }}
      >
        {!updated ? (
          <>
            <TextField
              label="Full Name"
              variant="outlined"
              fullWidth
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
            />
            <TextField
              type="tel"
              label="Phone Number"
              variant="outlined"
              fullWidth
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <TextField
              type="email"
              label="Email"
              variant="outlined"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="Username"
              variant="outlined"
              fullWidth
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                gap: '1rem',
                marginTop: '1rem',
              }}
            >
              <Button variant="contained" color="primary" onClick={handleUpdateProfile}>
                Update Profile
              </Button>
              <Link to="/dashboard">
                <Button variant="contained" color="secondary">
                  Dashboard Home
                </Button>
              </Link>
            </Box>
          </>
        ) : (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1rem',
              padding: '2rem',
            }}
          >
            <h2>Profile Updated Successfully!</h2>
            <Link to="/admin">
              <Button variant="contained" color="secondary">
                Go to Dashboard
              </Button>
            </Link>
          </Box>
        )}
      </Box>
    </DashboardContent>

  )
}

