import React, { useState, useEffect } from 'react';
import { Snackbar, Typography, Box, Button } from '@mui/material';

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

    // Update consent when the user accepts
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }

    // Update consent for granted permissions
    gtag('consent', 'update', {
      'ad_user_data': 'granted',
      'ad_personalization': 'granted',
      'ad_storage': 'granted',
      'analytics_storage': 'granted',
    });
  };

  const handleDecline = () => {
    // Store user's decline choice in localStorage to prevent showing the banner again
    localStorage.setItem('cookieConsent', 'declined');
  
    // Update consent when the user reject
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
  
    // Set all ad and analytics consents to 'denied'
    gtag('consent', 'update', {
      'ad_user_data': 'denied',
      'ad_personalization': 'denied',
      'ad_storage': 'denied',
      'analytics_storage': 'denied',
    });
  
    // Close the consent banner
    setOpen(false);
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
          <Button 
            className="theme-btn theme-btn-2" 
            onClick={handleAccept} 
            style={{ marginRight: "8px" }}
          >
            Accept
          </Button>
          <Button 
            className="theme-btn theme-btn-2" 
            onClick={handleDecline}
            style={{ backgroundColor: "#f44336", color: "#fff" }}
          >
            Decline
          </Button>
        </Box>
      }
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      sx={{
        backgroundColor: "#fff",
        color: "#000", 
        padding: "16px",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)"
      }}
    />
  );
};

export default ConsentBanner;
