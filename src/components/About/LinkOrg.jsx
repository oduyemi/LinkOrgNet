import React from 'react';
import { Box, Typography } from '@mui/material';

const LinkOrg = () => {
  return (
    <section className="about-parallax-section section-padding" style={{ backgroundColor: "#f5f5f5" }}>
      <Box className="container">
        <Box className="parallax-content">
          {/* Vision Section */}
          <Box className="vision-section wow fadeInUp" data-wow-delay=".3s">
            <Typography variant="h2" sx={{ fontSize: "30px", fontWeight: 400, color: "#010156", textAlign: "center" }}>
              Empowering Tomorrow's Connections
            </Typography>
            <Typography variant="body1" sx={{ fontSize: "16px", fontFamily: "Museo Sans", fontWeight: 300, color: "#333", mt: 2, textAlign: "center" }}>
              At LinkOrg Networks, our vision is to be the most trusted partner in the industry. We strive to exceed expectations with integrity and honesty, driving innovation through continuous learning and development to deliver exceptional results.
            </Typography>
          </Box>

          {/* Mission Section */}
          <Box className="mission-section wow fadeInUp" data-wow-delay=".5s">
            <Typography variant="h2" sx={{ fontSize: "30px", fontWeight: 400, color: "#010156", textAlign: "center" }}>
              Driven by Integrity and Excellence
            </Typography>
            <Typography variant="body1" sx={{ fontSize: "16px", fontFamily: "Museo Sans", fontWeight: 300, color: "#333", mt: 2, textAlign: "center" }}>
              Our mission is to provide unparalleled service by prioritizing integrity and reliability. We are dedicated to achieving customer satisfaction through top-notch Internet solutions and a commitment to ongoing improvement and innovation.
            </Typography>
          </Box>

          {/* Core Values Section */}
          <Box className="core-values-section wow fadeInUp" data-wow-delay=".7s">
            <Typography variant="h2" sx={{ fontSize: "30px", fontWeight: 400, color: "#010156", textAlign: "center" }}>
              Built on Trust and Excellence
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Typography variant="body1" sx={{ fontSize: "16px", fontFamily: "Museo Sans", fontWeight: 300, color: "#333", textAlign: "center" }}>
                <strong>Integrity & Honesty:</strong> We uphold the highest standards to build lasting trust with clients and partners.
              </Typography>
              <Typography variant="body1" sx={{ fontSize: "16px", fontFamily: "Museo Sans", fontWeight: 300, color: "#333", mt: 1, textAlign: "center" }}>
                <strong>Customer Satisfaction:</strong> We exceed expectations with exceptional service, fostering loyalty and growth.
              </Typography>
              <Typography variant="body1" sx={{ fontSize: "16px", fontFamily: "Museo Sans", fontWeight: 300, color: "#333", mt: 1, textAlign: "center" }}>
                <strong>Continuous Learning & Development:</strong> We invest in our team’s growth to stay ahead in the ever-evolving IT landscape.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </section>
  );
};

export default LinkOrg;
