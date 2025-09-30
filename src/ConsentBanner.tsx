import React, { useState, useEffect } from 'react';
import {
  Snackbar,
  Typography,
  Box,
  Button,
  Slide,
  SlideProps,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

declare global {
  interface Window {
    dataLayer: Record<string, any>[];
    gtag?: (...args: any[]) => void;
  }
}

const SlideUp = (props: SlideProps) => <Slide {...props} direction="up" />;

export const ConsentBanner: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) setOpen(true);
  }, []);

  const gtag = (...args: any[]) => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(args);
  };

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setOpen(false);
    gtag('consent', 'update', {
      ad_user_data: 'granted',
      ad_personalization: 'granted',
      ad_storage: 'granted',
      analytics_storage: 'granted',
    });
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setOpen(false);
    gtag('consent', 'update', {
      ad_user_data: 'denied',
      ad_personalization: 'denied',
      ad_storage: 'denied',
      analytics_storage: 'denied',
    });
  };

  return (
    <Snackbar
      open={open}
      TransitionComponent={SlideUp}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      sx={{ maxWidth: '100vw' }}
    >
      <Box
        sx={{
          backdropFilter: 'blur(10px)',
          backgroundColor: 'rgba(255, 255, 255, 0.75)',
          borderRadius: '50px',
          px: 3,
          py: 2,
          mx: 2,
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: 'center',
          gap: 2,
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
          border: '1px solid rgba(0,0,0,0.05)',
          animation: 'fadeIn 0.6s ease-out',
          '@keyframes fadeIn': {
            from: { opacity: 0, transform: 'translateY(20px)' },
            to: { opacity: 1, transform: 'translateY(0)' },
          },
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <InfoOutlinedIcon fontSize="small" sx={{ color: '#010156' }} />
          <Typography
            variant="body2"
            sx={{
              color: '#333',
              fontSize: '0.875rem',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 400,
              lineHeight: "-2px",
            }}
          >
            We use cookies to improve your experience.<br />
            By clicking "Accept", you agree to our cookie policy.
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            gap: 1,
            flexShrink: 0,
            justifyContent: 'center',
          }}
        >
          <Button
            onClick={handleDecline}
            variant="outlined"
            size="small"
            sx={{
              borderRadius: '30px',
              textTransform: 'none',
              borderColor: '#bbb',
              color: '#010156',
              fontWeight: 500,
              px: 2.5,
              '&:hover': {
                borderColor: '#010156',
              },
            }}
          >
            Decline
          </Button>
          <Button
            onClick={handleAccept}
            variant="contained"
            size="small"
            sx={{
              borderRadius: '30px',
              textTransform: 'none',
              backgroundColor: '#010156',
              color: '#fff',
              fontWeight: 500,
              px: 2.5,
              '&:hover': {
                backgroundColor: '#e65d0f',
              },
            }}
          >
            Accept
          </Button>
        </Box>
      </Box>
    </Snackbar>
  );
};
