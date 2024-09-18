import React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const ServiceDetail = ({
  title,
  imageSrc,
  imageAlt,
  description,
  subtitle,
  carouselItems,
  sidebarItems,

}) => {
  return (
    <section className="service-details fix section-padding">
      <Box className="container">
        <Box className="service-details-wrapper">
          <Box className="row g-5">
            <Box className="col-12 col-lg-8">
              <Box className="service-details-items">
                {/* Image section */}
                <Box className="details-image">
                  <img src={imageSrc} alt={imageAlt}/>
                </Box>
                {/* Content section */}
                <Box className="details-content">
                  <Typography
                    variant="h3"
                    className="blutext"
                    sx={{
                      fontSize: "30px",
                      fontWeight: "600",
                      lineHeight: "1.5",
                      fontFamily: "montserrat"
                    }}
                  >
                    {title}
                  </Typography>
                  <Typography variant="body1" dangerouslySetInnerHTML={{ __html: description }} />
                </Box>

                <Typography
                    variant="h3"
                    className="blutext"
                    sx={{
                      fontSize: "25px",
                      marginTop: "30px",
                      fontWeight: "600",
                      lineHeight: "1.5",
                      fontFamily: "montserrat"
                    }}
                  >
                    {subtitle}
                  </Typography>
                {/* Carousel section */}
                <Box className="section">
                  <Box className="container">
                    <Box className="image-carousel style2">
                      <Box 
                      className="grid-container"
                      sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "space-between",
                        // Responsive behavior
                        flexDirection: { xs: "column", md: "row" }, 
                      }}
                      >
                        {carouselItems.map((item, index) => (
                          <Box 
                          className="grid-item" 
                          key={index} 
                          sx={{
                            height: "445px",
                            width: { xs: "100%", sm: "50%", md: "32%" }, 
                          }}
                          >
                            <article className="box">
                              <figure>
                                <Box
                               sx={{
                                height: "230px",
                              }}
                              
                                >
                                  <img 
                                  src={item.imgSrc} 
                                  alt={item.title} 
                                  style={{
                                    height: "100%", 
                                    width: "100%", 
                                    objectFit: "contain" 
                                    }} />
                                </Box>
                              </figure>
                              <Box 
                              className="details"
                              sx={{
                                height: "150px",
                                marginTop: "30px"
                              }}
                              >
                                <h4 className="box-title" style={{color: "#010156"}} >
                                  {item.title} 
                                </h4>
                                <p className="description">{item.description}</p>
                              </Box>
                            </article>
                          </Box>
                        ))}
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
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
                        fontFamily: "montesserat",
                      }}
                      className="blutext"
                    >
                      Other Services
                    </Typography>
                  </Box>
                  <Box className="service-category">
                    {sidebarItems.map((item, index) => (
                      <Link key={index} to={item.link} className={item.active ? "active" : "items"}>
                        {item.name}
                        <ArrowRightAltIcon />
                      </Link>
                    ))}
                  </Box>
                </Box>
                <Box 
                className="single-sidebar-widget"
                sx={{  
                   height: "680px",
                  }}
                
                >
                  <img src={require("../../assets/images/services/telecom.jpg")} alt="why" width="100%" height="300px" style={{marginBottom: "20px"}} />
                  <img src={require("../../assets/images/services/telecom2.jpg")} alt="why" width="100%" height="300px" />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </section>
  );
};

export default ServiceDetail;
