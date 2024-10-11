import React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Satellite from "../../assets/images/subservice/satelliteHero.jpg";
import RemoveIcon from "@mui/icons-material/Remove";
import Footer from "../../components/Footer";
import { Terrestrial } from "../../components/SubServices/Terrestrial";

const TerrestrialPage = () => {
  return (
    <Box>
      <Box>
        <Box
          className="breadcrumb-wrapper section-padding bg-cover"
          style={{
            backgroundImage: `url(${Satellite}`,
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
                Terrestrial Satellite
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
                  <Link to="/services/satellite">Satellite Solutions</Link>
                </li>
                <li>Terrestrial Satellite</li>
              </ul>
            </Box>
          </Box>
        </Box>
      </Box>
      <Terrestrial />
      <Footer />
    </Box>
  );
};

export default TerrestrialPage;
