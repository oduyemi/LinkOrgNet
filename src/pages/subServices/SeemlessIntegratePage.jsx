import React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import DevelopImage from "../../assets/images/subservice/software.jpg";
import RemoveIcon from "@mui/icons-material/Remove";
import Footer from "../../components/Footer";
import { SeemlessIntegrate } from "../../components/SubServices/SeemlessIntegration";

const SeemlessIntegratePage = () => {
  return (
    <Box>
      <Box>
        <Box
          className="breadcrumb-wrapper section-padding bg-cover"
          style={{
            backgroundImage: `url(${DevelopImage}`,
          }}
        >
          <Box className="container">
            <Box className="page-heading">
              <Typography
                variant="h1"
                className="wow fadeInUp"
                data-wow-delay=".3s"
                sx={{}}
              >
                Seamless Integration
              </Typography>
              <ul
                className="breadcrumb-items wow fadeInUp"
                data-wow-delay=".5s"
              >
                <li>
                  <Link to="/">Home Page</Link>
                </li>
                <li>
                  <RemoveIcon />
                </li>
                <li>
                  <Link to="/services/software-services">
                    Software Services
                  </Link>
                </li>
                <li>Seamless Integration</li>
              </ul>
            </Box>
          </Box>
        </Box>
      </Box>
      <SeemlessIntegrate />
      <Footer />
    </Box>
  );
};

export default SeemlessIntegratePage;
