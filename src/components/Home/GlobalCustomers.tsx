import React from "react";
import { Box, Typography } from "@mui/material";
import Marquee from "react-fast-marquee";
import Navdac from "/images/Customers/NAFDAC.svg";
import Bosch from "/images/Customers/bosch-logo.svg";
import Tolaram from "/images/Customers/Tolaram.png";
import Dukes from "/images/Customers/dukes_logo.png";
import Lekki from "/images/Customers/lekki_logo.png";
import Petrocam from "/images/Customers/petrocam_logo.png";
import Globe from "/images/gif/globe.gif";

const GlobalCustomers: React.FC = () => {
  const logos = [Bosch, Navdac, Lekki, Petrocam, Dukes, Tolaram];

  return (
    <Box
      sx={{
        width: "95%",
        height: {xs:"50px", sm:"87px", xl:"100px"},
        display: "flex",
        flexDirection:{xs:"column", sm:"column", md:"row"},
        alignItems: "center",
        margin: {xs:"60px 2.5%", sm:"60px 2.5%",md:"120px 2.5%"},
        marginBottom:{xs:"100px", sm:"100px", md:"0px"},

      }}
    >
      {/* Header Section */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: {xs:"50px", sm:"87px", xl:"100px"},
          width: {xs:"100%", sm:"100%", md:"35%"},
        }}
      >
        {/* Globe Icon */}

        <Box sx={{ width: {xs:"13%", sm:"13%", md:"35%"}, height: {xs:"'50px'", sm:"87px", md:"87px", xl:"125px", xxl:"200px"}, zIndex:"2" }} >
          <img
            style={{ width: '100%', height: '100%', }}
            src={Globe}
            alt="Globe Icon"
          />
        </Box>

        {/* Title */}
        <Typography
          variant="h1"
          sx={{
            color: "#010156",
            fontSize: {xs:"18px", sm:"28px", xl:"40px"},
            fontFamily: "Museo Slab Medium",
            fontWeight: "600",
            lineHeight: {md:"32px", xl:"50px"},
            textAlign: {xs:"center", sm:"center", md:"left"},
             width:{xs:"87%", sm:"70%", md:"100%"},
          }}
        >
          Meet some of our <br/> Global Customers
        </Typography>
      </Box>

      {/* Marquee Section */}
      <Box
        sx={{
          width: "100%",
          height: {xs:"50px", sm:"87.35px", xl:"150px"},
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 2,
          padding: {xs:"24px 8px", sm:"24px 8px", md:"16px"},
          paddingLeft:"0px",
          marginTop:{xs:"10px", sm:"10px", md:"0px"},
         
        }}
      >
        <Marquee speed={130} pauseOnHover gradient={false}>
          {logos.map((logo, index) => (
            <Box key={index} sx={{ mx: {xs:2, sm:3, md:4}, height: {xs:"49.8px", sm:"87.35px"}, display: "flex", alignItems: "center", }}>
              <CustomerLogo src={logo} alt={`Logo ${index}`} />
            </Box>
          ))}
        </Marquee>
      </Box>
    </Box>
  );
};

// CustomerLogo Component
const CustomerLogo: React.FC<{ src: string; alt: string }> = ({ src, alt }) => {
  return (
    <Box
      sx={{
        width: {xs:"60px", sm:"80px", md:"120px"},
        height: {xs:"49.8px", sm:"53px", md:"87.35px"},
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        src={src}
        alt={alt}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
        }}
      />
    </Box>
  );
};

export default GlobalCustomers;


