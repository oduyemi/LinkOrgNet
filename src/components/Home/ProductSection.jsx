import React, { useEffect } from 'react';
import WOW from 'wowjs';
import { Link } from 'react-router-dom';
import { Box } from "@mui/material";
import Voip from "../../assets/images/products/voip.jpg";
import Package from "../../assets/images/products/packages.jpg"

const ProductSection = () => {
  useEffect(() => {
    new WOW.WOW({ live: false }).init();
  }, []);

  return (
    <Box className="product-section fix section-padding">
      <Box className="container">
        <Box className="title-section-area">
          <Box className="section-title">
            <span className="wow fadeInUp" style={{ textDecoration: "none"}}>Top Sales</span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s" style={{ color: "#010156", fontWeight: 800 }}>Our Top Products</h2>
          </Box>
        </Box>
        <Box className="row">
          <Box className="col-xl-6 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
            <Box className="product-card-items">
              <Box className="product-image"  sx={{ height: "400px" }}>
                <img src={Voip} alt="Product" />
                <Box className="product-badge">
                  <span className="product-badge-item">sale</span>
                </Box>
                <Box className="product-content">
                  <h6>
                    <Link to="/shop-details" className="blutext">Voip</Link>
                  </h6>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className="col-xl-6 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".4s">
            <Box className="product-card-items">
              <Box className="product-image"  sx={{ height: "400px" }}>
              <img src={Package} alt="Product" />
                <Box className="product-badge">
                  <span className="product-badge-item">sale</span>
                </Box>
              </Box>
              <Box className="product-content">
                <h6>
                  <Link to="/shop-details" className="blutext">Packages</Link>
                </h6>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ProductSection;
