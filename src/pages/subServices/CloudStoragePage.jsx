import React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import StorageImage from "../../assets/images/subservice/storage.jpg";
import RemoveIcon from "@mui/icons-material/Remove";
import Footer from "../../components/Footer";
import { CloudStorageComp } from "../../components/SubServices/CloudStorage";

const CloudStoragePage = () => {
  return (
    <Box>
      <Box>
        <Box
          className="breadcrumb-wrapper section-padding bg-cover"
          style={{
            backgroundImage: `url(${StorageImage}`,
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
                Cloud Storage
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
                  <Link to="/services/storage-solutions">
                    Storage Solutions
                  </Link>
                </li>
                <li>Cloud Storage</li>
              </ul>
            </Box>
          </Box>
        </Box>
      </Box>
      <CloudStorageComp />
      <Footer />
    </Box>
  );
};

export default CloudStoragePage;
