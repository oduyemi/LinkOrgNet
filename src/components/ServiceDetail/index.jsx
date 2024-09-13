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
  videoTitle,
  videoContent,
  videoBenefits,
  carouselItems,
  sidebarItems,
  additionalImages
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
                  <img src={imageSrc} alt={imageAlt} />
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
                      fontFamily: "montserrat",
                    }}
                  >
                    {title}
                  </Typography>
                  <Typography variant="body1">{description}</Typography>
                  <Typography
                    variant="h4"
                    className="blutext"
                    sx={{
                      fontSize: "20px",
                      fontWeight: "600",
                      lineHeight: "1.5",
                      fontFamily: "montserrat",
                    }}
                  >
                    {subtitle}
                  </Typography>
                  {/* Video section */}
                  <Box className="service-details-video">
                    <Box className="row g-4 align-items-center">
                      <Box className="col-lg-6">
                        <Box className="details-video-content">
                          <Typography
                            variant="h3"
                            className="blutext"
                            sx={{
                              fontSize: "20px",
                              fontWeight: "600",
                              lineHeight: "1.5",
                              fontFamily: "montserrat",
                            }}
                          >
                            {videoTitle}
                          </Typography>
                          <Typography variant="body1">{videoContent}</Typography>
                          <ul>
                            {videoBenefits.map((benefit, index) => (
                              <li key={index}>
                                <i className="far fa-check"></i> {benefit}
                              </li>
                            ))}
                          </ul>
                        </Box>
                      </Box>
                      <Box className="col-lg-6">
                        <Box className="video-image">
                          <Box className="video-box"></Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  {/* Additional description */}
                  <Typography variant="body1">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat qui ducimus illum modi? Perspiciatis accusamus soluta perferendis...
                  </Typography>
                  {/* Additional images */}
                  <Box className="details-image-2">
                    <Box className="row g-4">
                      {additionalImages.map((image, index) => (
                        <Box className="col-lg-6" key={index}>
                          <img src={image.src} alt={image.alt} />
                        </Box>
                      ))}
                    </Box>
                  </Box>
                </Box>
                {/* Carousel section */}
                <Box className="section">
                  <Box className="container">
                    <Typography variant="h2" className="blutext">
                      VOIP Services
                    </Typography>
                    <Box className="image-carousel style2">
                      <Box className="grid-container">
                        {carouselItems.map((item, index) => (
                          <Box className="grid-item" key={index}>
                            <article className="box">
                              <figure>
                                <Link to="#" className="hover-effect popup-gallery">
                                  <img src={item.imgSrc} alt={item.title} />
                                </Link>
                              </figure>
                              <Box className="details">
                                <span className="price">
                                  <small>avg/night</small> $188
                                </span>
                                <h4 className="box-title">
                                  {item.title} <small>{item.location}</small>
                                </h4>
                                <Box className="feedback">
                                  <Box className="fa fa-star" style={{ width: "80%" }}></Box>
                                  <span className="review">{item.reviews} reviews</span>
                                </Box>
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
                <Box className="single-sidebar-widget">
                  <img src={require("../../assets/images/why.jpg")} alt="why" width="90%" />
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
