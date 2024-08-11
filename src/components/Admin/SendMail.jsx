import React, { useState } from 'react';
import axios from 'axios';
import { Box, Button, TextField } from '@mui/material';
import { DashboardContent } from './DashboardContent';
import { EmailTemplate } from './EmailTemplate'; 
import { Link } from 'react-router-dom';




export const SendMail = () => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('Test Subject'); // Set appropriate initial values
  const [name, setName] = useState('John Doe'); // Set appropriate initial values
  const [message, setMessage] = useState('Test Message'); // Set appropriate initial values
  const [sent, setSent] = useState(false);

  const handleSendEmail = async () => {
    try {
      await axios.post('/api/send-email', { email, subject, name, message });
      setSent(true); // Set sent status to true on successful email sending
    } catch (error) {
      console.error('Failed to send email:', error);
      // Handle the error case
    }
  };

  return (
    <DashboardContent title="Send Email">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem',
          padding: '2rem',
        }}
      >
        {!sent ? (
          <>
            <TextField
              type="email"
              label="Enter recipient's email"
              variant="outlined"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="Subject"
              variant="outlined"
              fullWidth
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              label="Message"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                gap: '1rem',
                marginTop: '1rem',
              }}
            >
              <Button variant="contained" color="primary" onClick={handleSendEmail}>
                Send Email
              </Button>
              <Link to="/admin">
              <Button variant="contained" color="secondary" onClick={() => setSent(false)}>
                Dashboard Home
              </Button>
              </Link>
            </Box>
          </>
        ) : (
          <EmailTemplate subject={subject} name={name} email={email} message={message} />
        )}
      </Box>
    </DashboardContent>
  );
};
