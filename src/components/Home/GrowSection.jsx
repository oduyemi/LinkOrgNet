import React from 'react';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const GrowSection = () => {
  return (
    <section className="grow-section section-padding section-bg-3" style={{ backgroundColor: "#F9F8F8" }}>
      <Box className="container">
        <Box className="grow-wrapper">
          <Box className="title-section-area">
            <Box className="section-title">
              <span className="wow fadeInUp" style={{ textDecoration: "none" }}>
                Get Started with Linkorg Networks
              </span>
              <Typography
                variant="h2"
                className="wow fadeInUp"
                data-wow-delay=".3s"
                sx={{
                  fontSize: "30px",
                  fontWeight: 400,
                  color: "#010156",
                  textTransform: "uppercase",
                  lineHeight: "1.3",
                }}
              >
                READY TO ELEVATE YOUR <br />
                DIGITAL EXPERIENCE?
              </Typography>
              <Typography
                variant="body1"
                className="w-75"
                sx={{
                  fontSize: "16px",
                  fontFamily: "Montserrat",
                  fontWeight: 300,
                  color: "#000",
                  lineHeight: "1.5",
                  marginTop: "20px",
                  marginBottom: "20px", 
                }}
              >
                Whether you’re looking to upgrade your 
                internet connectivity, enhance your 
                communication systems, or need a 
                comprehensive IT solution, we’re here 
                to help. Reach out to us today, and 
                let’s start a conversation about how we 
                can empower your business with the latest 
                in technology and telecom services. 
                Your digital future starts here.
              </Typography>
            </Box>

            <Link to="/contact" className="theme-btn theme-btn-2 wow fadeInUp px-5 text-center mx-auto" data-wow-delay=".5s">
              <span className="">
                Talk to an Expert
              </span>
            </Link>
          </Box>
          <Box className="circle-progress-bar-wrapper" style={{marginTop:"-10px"}}>
            <Box className="single-circle-bar wow fadeInUp" data-wow-delay=".3s">
              
              <Box className="content">
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "Montserrat",
                    fontWeight: 300,
                  }}
                  className="blutext"
                >
                  Business Strategy
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: "Montserrat",
                    fontWeight: 300,
                    color: "#000",
                  }}
                >
                  End to end fiber optic cable <br />
                  connectivity for stable
                </Typography>
              </Box>
            </Box>
            <Box className="single-circle-bar wow fadeInUp" data-wow-delay=".5s">
              <Box className="circle-bar" data-percent="77" data-duration="1000">
                {/* Circle Bar Animation/Progress Code Here */}
              </Box>
              <Box className="content">
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "Montserrat",
                    fontWeight: 300,
                  }}
                  className="blutext"
                >
                  Guaranteed Uptime
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: "Montserrat",
                    fontWeight: 300,
                    color: "#000",
                  }}
                >
                  End to end fiber optic cable <br />
                  connectivity for stable
                </Typography>
              </Box>
            </Box>
            <Box className="single-circle-bar wow fadeInUp" data-wow-delay=".7s">
              <Box className="circle-bar" data-percent="85" data-duration="1000">
                {/* Circle Bar Animation/Progress Code Here */}
              </Box>
              <Box className="content">
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "Montserrat",
                    fontWeight: 300,
                  }}
                  className="blutext"
                >
                  Proactive Monitoring
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: "Montserrat",
                    fontWeight: 300,
                    color: "#000",
                  }}
                >
                  End to end fiber optic cable <br />
                  connectivity for stable
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </section>
  );
};

export default GrowSection;
