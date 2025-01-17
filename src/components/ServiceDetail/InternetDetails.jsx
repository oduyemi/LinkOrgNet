import React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import LanguageIcon from "@mui/icons-material/Language";

const InternetDetail = () => {
  const sidebarItems = [
    { name: "VoIP Solutions", link: "/services/voip-services" },
    { name: "Satellite Solution", link: "/services/satellite" },
    { name: "VPN Solutions", link: "/services/vpn-solutions" },
    { name: "IT & Network Solutions", link: "/services/it-networks" },
    { name: "Storage Solutions", link: "/services/storage-solutions" },
    {
      name: "Collocation & Datacenter Services",
      link: "/services/collocation-and-data-center",
    },
    { name: "Software Services", link: "/services/software-services" },
  ];

  return (
    <section className="service-details fix section-padding">
      <Box className="container">
        <Box className="service-details-wrapper">
          <Box className="row g-5">
            <Box className="col-12 col-lg-8">
              <Box className="service-details-items">
                <Box className="service-details-image">
                  <img
                    src={require("../../assets/images/fam.jpg")}
                    alt="telecom"
                    width="100%"
                    className="img-fluid"
                  />
                </Box>
                <Box className="details-content">
                  <Typography
                    variant="h3"
                    className="blutext"
                    sx={{
                      fontSize: "30px",
                      fontWeight: "600",
                      lineHeight: "1.5",
                      fontFamily: "montserrat",
                    }}
                  >
                    Internet Solutions
                  </Typography>
                  <Typography variant="body1" sx={{ lineHeight: "1.8" }}>
                    At LinkOrg Networks, we offer advanced Internet solutions 
                    to enhance your digital experience. Our high-speed wireless 
                    internet delivers exceptional speed and reliability, 
                    eliminating slow connections. For even faster performance, 
                    our fiber-optic speeds provide ultra-fast data transmission
                    suitable for both residential and business use.<br/><br/>

                    Our community Internet solutions improve network access across 
                    residential estates, ensuring every household benefits from a 
                    strong, high-speed connection. Our services are designed to 
                    support seamless streaming, efficient work, and robust community 
                    Internet. We offer a wide range of internet services designed to
                    meet the needs of businesses across different industries. Whether
                    you're in need of high-speed connectivity, satellite internet, or VoIP
                    services, we have a solution tailored for you.
                  </Typography>
                </Box>

                {/* Plans */}
                <Box maxWidth="lg" className="row justify-content-center mx-auto">
  <Box>
    <Typography
      variant="h2"
      sx={{
        fontSize: "24px",
        fontWeight: 600,
        textAlign: "center",
        fontFamily: "montserrat",
        color: "#010156",
        marginBottom: "10px",
      }}
      className="mt-5"
    >
      Our Internet Plans
    </Typography>
  </Box>

  {/* Retail Plan */}
  <Box className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
    <Link to="/services/internet/retail">
      <Box className="service-box-items">
        <Box className="icon">
          <LanguageIcon
            sx={{
              fontSize: 70,
              color: "#E65D0F",
            }}
            className="whitaker"
          />
        </Box>
        <Box className="mt-4">
          <img src={require("../../assets/images/person.jpg")} width="100%" className="img-responsive" alt="" />
        </Box>
        <Box className="content">
          <h3>
            <Link to="/services/internet/retail" className="blutext whitaker">
              Retail &amp; SME
            </Link>
          </h3>
          <Typography
            variant="body1"
            sx={{
              fontSize: "14px",
              fontWeight: "300",
              lineHeight: "1.5",
              fontFamily: "montserrat",
            }}
          >
            Fiber broadband straight to your door.
            Suitable for personal use.
          </Typography>
          <Link to="/services/internet/retail" className="arrow-icon">
            <ChevronRightIcon
              sx={{
                fontSize: 70,
                color: "#010156",
              }}
            />
          </Link>
        </Box>
      </Box>
    </Link>
  </Box>

  {/* Enterprise Plan */}

  <Box className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
    <Link to="/services/internet/enterprise">
      <Box className="service-box-items active">
        <Box className="icon d-inline">
          <LanguageIcon
            sx={{
              fontSize: 70,
              color: "#ffffff",
            }}
            className="d-inline"
          />
        </Box>
        <Box className="mt-4">
          <img src={require("../../assets/images/coy.jpg")} width="100%" className="img-responsive" alt="" />
        </Box>
        <Box className="content">
          <h3>
            <Link to="/services/internet/enterprise">Enterprise Solutions</Link>
          </h3>
          <Typography
            variant="body1"
            sx={{
              fontSize: "14px",
              fontWeight: "300",
              lineHeight: "1.5",
              fontFamily: "montserrat",
            }}
          >
            Reliable and scalable solutions for 
            businesses of all sizes.
          </Typography>
          <Link to="/services/internet/enterprise" className="arrow-icon">
            <ChevronRightIcon
              sx={{
                fontSize: 70,
                color: "#010156",
              }}
            />
          </Link>
        </Box>
      </Box>
    </Link>
  </Box></Box></Box></Box>

            {/* Sidebar section */}
            <Box className="col-12 col-lg-4">
              <Box className="main-sidebar">
                <Box className="single-sidebar-widget">
                  <Box className="wid-title">
                    <Typography
                      variant="h3"
                      sx={{
                        fontSize: "28px",
                        fontWeight: 800,
                        fontFamily: "montserrat",
                      }}
                      className="blutext"
                    >
                      Other Services
                    </Typography>
                  </Box>
                  <Box className="service-category">
                    {sidebarItems.map((item) => (
                      <a style={{ color:"#010156"}} href={item.link} key={item.name}>
                        {item.name}
                      </a>
                    ))}
                  </Box>
                </Box>
                <Box
                  className="single-sidebar-widget"
                  sx={{
                    height: "680px",
                  }}
                >
                  <img
                    src={require("../../assets/images/services/connect1.jpg")}
                    alt="why"
                    width="100%"
                    height="300px"
                    style={{ marginBottom: "20px" }}
                  />
                  <img
                    src={require("../../assets/images/services/connect2.jpg")}
                    alt="why"
                    width="100%"
                    height="300px"
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </section>
  );
};

export default InternetDetail;
