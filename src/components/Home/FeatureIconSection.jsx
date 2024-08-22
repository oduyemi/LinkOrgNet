import { Typography } from '@mui/material';
import React from 'react';
import SpeedIcon from '@mui/icons-material/Speed';
import PhonelinkRingIcon from '@mui/icons-material/PhonelinkRing';
import PublicIcon from '@mui/icons-material/Public';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import OfflineBoltIcon from '@mui/icons-material/OfflineBolt';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';


const FeatureIconSection = () => {
  return (
    <section className="feature-icon-area section-padding pt-0">
      <div className="container custom-container-2">
        <div className="feature-icon-wrapper">
          <div className="icon-items wow fadeInUp" data-wow-delay=".2s">
            <div className="icon">
              <SpeedIcon 
                sx={{ 
                  fontSize: 50,
                  color: "#E65D0F",
                  transition: 'color 0.3s ease'
                }}
              />
            </div>
            <Typography 
              variant="h4"
              sx={{
                fontSize: "16px",
                fontWeight: "400",
                color: "#010156",
                transition: 'color 0.3s ease'
              }}
            >
              Ultra-speed Connection
            </Typography>
          </div>
          <div className="icon-items wow fadeInUp" data-wow-delay=".4s">
            <div className="icon">
              <PhonelinkRingIcon 
                sx={{ 
                  fontSize: 50,
                  color: "#E65D0F",
                  transition: 'color 0.3s ease'
                }}
              />
            </div>
            <Typography 
              variant="h4"
              sx={{
                fontSize: "16px",
                fontWeight: "400",
                color: "#010156",
                transition: 'color 0.3s ease'
              }}
            >
              Free VoIP Installation
            </Typography>
          </div>
          <div className="icon-items wow fadeInUp" data-wow-delay=".6s">
            <div className="icon">
              <ChangeCircleIcon 
                sx={{ 
                  fontSize: 50,
                  color: "#E65D0F",
                  transition: 'color 0.3s ease'
                }}
              />
            </div>
            <Typography 
              variant="h4"
              sx={{
                fontSize: "16px",
                fontWeight: "400",
                color: "#010156",
                transition: 'color 0.3s ease'
              }}
            >
              Flexible Tariff Plans
            </Typography>
          </div>
          <div className="icon-items wow fadeInUp" data-wow-delay=".7s">
            <div className="icon">
              <PsychologyAltIcon 
                sx={{ 
                  fontSize: 50,
                  color: "#E65D0F",
                  transition: 'color 0.3s ease'
                }}
              />
            </div>
            <Typography 
              variant="h4"
              sx={{
                fontSize: "16px",
                fontWeight: "400",
                color: "#010156",
                transition: 'color 0.3s ease'
              }}
            >
              24/7 Support
            </Typography>
          </div>
          <div className="icon-items wow fadeInUp" data-wow-delay=".8s">
            <div className="icon">
              <OfflineBoltIcon 
                sx={{ 
                  fontSize: 50,
                  color: "#E65D0F",
                  transition: 'color 0.3s ease'
                }}
              />
            </div>
            <Typography 
              variant="h4"
              sx={{
                fontSize: "16px",
                fontWeight: "400",
                color: "#010156",
                transition: 'color 0.3s ease'
              }}
            >
              Reliable Uptime Guarantee
            </Typography>
          </div>
          <div className="icon-items wow fadeInUp" data-wow-delay=".9s">
            <div className="icon">
              <PublicIcon 
                sx={{ 
                  fontSize: 50,
                  color: "#E65D0F",
                  transition: 'color 0.3s ease'
                }}
              />
            </div>
            <Typography 
              variant="h4"
              sx={{
                fontSize: "16px",
                fontWeight: "400",
                color: "#010156",
                transition: 'color 0.3s ease'
              }}
            >
              Cutting-Edge Technology
            </Typography>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureIconSection;
