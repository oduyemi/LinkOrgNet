import React, { useState, useEffect } from 'react';
import { Snackbar, Typography, Box } from '@mui/material';


const ConsentBanner = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const consentGiven = localStorage.getItem('cookieConsent');
    if (!consentGiven) {
      setOpen(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', true);
    setOpen(false);

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'G-VVZEL3WEX0');
  };
  

  return (
    <Snackbar
      open={open}
      message={
        <Typography>
          We use cookies to enhance your experience. By continuing to visit this site, you agree to our use of cookies.
        </Typography>
      }
      action={
        <Box>
          <button 
            className="theme-btn theme-btn-2" 
            onClick={handleAccept}
          >
            Accept
          </button>
        </Box>
      }
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      sx={{
        backgroundColor: "#fff",
        color: "#fff", 
        padding: "16px",
      }}
    />
  );
};

export default ConsentBanner;
