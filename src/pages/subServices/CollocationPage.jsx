import React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import CollocateImage from "../../assets/images/subservice/colo_datacenter.jpg";
import RemoveIcon from "@mui/icons-material/Remove";
import Footer from "../../components/Footer";
import { Collocation } from "../../components/SubServices/Collocation";

const CollocationSubPage = () => {
  return (
    <Box>
      <Box>
        <Box
          className="breadcrumb-wrapper section-padding bg-cover"
          style={{
            backgroundImage: `url(${CollocateImage}`,
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
                Collocation
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
                  <Link to="/services/collocation-and-data-center">
                  Collocation & Datacenter Services
                  </Link>
                </li>
                <li>Collocation</li>
              </ul>
            </Box>
          </Box>
        </Box>
      </Box>
      <Collocation />
      <Footer />
    </Box>
  );
};

export default CollocationSubPage;
