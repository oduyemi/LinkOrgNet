import React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import CheckIcon from "@mui/icons-material/Check";
import { ServiceForm } from "./ServiceForm";
import PhoneCallbackIcon from "@mui/icons-material/PhoneCallback";

export const CloudStorageComp = () => {
  return (
    <Box>
      <Box className="container-xxl py-5">
        <Box className="container">
          <Box className="row g-5">
            <Box className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <Box className="section-title">
                <span
                  className="wow fadeInUp"
                  style={{ textDecoration: "none" }}
                >
                  Storage Solutions
                </span>
                <Typography
                  variant="h1"
                  className="mb-4 blutext"
                  sx={{
                    fontFamily: "montserrat",
                    fontSize: "32px",
                    fontWeight: 700,
                  }}
                >
                  Cloud Storage
                </Typography>
                <Typography
                  variant="body1"
                  className="mb-4"
                  sx={{
                    fontFamily: "montserrat",
                  }}
                >
                  Cloud storage refers to a service model where data is stored,
                  managed, and accessed remotely over the internet rather than
                  on local servers or personal devices.
                  <br />
                  <br />
                  It allows users and organizations to store data on third-party
                  servers maintained by cloud storage providers like Amazon Web
                  Services (AWS), Google Cloud, or Microsoft Azure.
                  <br />
                  <br />
                  Key Features of Cloud Storage:
                </Typography>
                <p className="fw-medium blutext">
                  <CheckIcon /> Remote Access
                </p>
                <p className="fw-medium blutext">
                  <CheckIcon /> Scalability
                </p>
                <p className="fw-medium blutext">
                  <CheckIcon /> Data Redundancy
                </p>
                <p className="fw-medium blutext">
                  <CheckIcon /> Backup and Recovery
                </p>
                <p className="fw-medium blutext">
                  <CheckIcon /> Cost-Efficiency
                </p>
                <p className="fw-medium blutext">
                  <CheckIcon /> Collaboration
                </p>
                <p className="fw-medium blutext">
                  <CheckIcon /> Data Security and Encryption
                </p>
                <p className="fw-medium blutext">
                  <CheckIcon /> Automatic Syncing
                </p>

                <Box className="blu d-flex align-items-center p-4 mt-5">
                  <Box
                    className="d-flex flex-shrink-0 align-items-center justify-content-center bg-white"
                    style={{ width: "60px", height: "60px" }}
                  >
                    <PhoneCallbackIcon className="blutext" />
                  </Box>
                  <Box className="ms-3">
                    <p className="fs-5 fw-medium mb-2 text-secondary">
                      Call Us Today{" "}
                    </p>
                    <Typography
                      variant="h3"
                      className="m-0 text-light"
                      sx={{
                        fontSize: "20px",
                      }}
                    >
                      +234 916 000 LINK (5465)
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box className="col-lg-6 pt-4" style={{ minHeight: "300px" }}>
              <Box
                className="position-relative h-100 wow fadeInUp"
                data-wow-delay="0.5s"
                sx={{
                  width: "100%",
                  height: "fitContent",
                }}
              >
                <img
                  className="position-absolute img-fluid"
                  src={require("../../assets/images/subservice/cloud_storage.gif")}
                  style={{
                    width: "100%",
                    objectFit: "contain",
                    paddingTop: "50px",
                  }}
                  alt=""
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box className="container-fluid fact orange my-5 py-5">
        <Box className="container">
          <Box className="row g-4">
            <Box
              className="col-md-6 col-lg-3 text-center wow fadeIn"
              data-wow-delay="0.1s"
            >
              <Box className="counter-items text-light">
                <h2>
                  <span className="count">50</span>+
                </h2>
                <p>
                  YEARS OF <br />
                  <span className="d-inline" style={{ fontSize: "10px" }}>
                    combined
                    <br />
                  </span>
                  EXPERIENCE
                </p>
              </Box>
            </Box>
            <Box
              className="col-md-6 col-lg-3 text-center wow fadeIn text-light"
              data-wow-delay="0.3s"
            >
              <h2>
                <span className="count">30</span>+
              </h2>
              <p>
                GLOBAL <br />
                CLIENTS
              </p>
            </Box>
            <Box
              className="col-md-6 col-lg-3 text-center wow fadeIn text-light"
              data-wow-delay="0.5s"
            >
              <h2>
                <span className="count">2.5</span>k
              </h2>
              <p>
                KILOMETERS <br />
                OF FIBERS
              </p>
            </Box>
            <Box
              className="col-md-6 col-lg-3 text-center wow fadeIn text-light"
              data-wow-delay="0.7s"
            >
              <p>
                <br />
                SATELLITE <br />
                CHANNELS
              </p>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box className="container-fluid py-5 px-4 px-lg-0">
        <Box className="row g-0">
          <Box className="col-lg-3 d-none d-lg-flex">
            <Box className="d-flex align-items-center justify-content-center blu w-100 h-100">
              <h1
                className="display-3 text-white m-0"
                style={{ transform: "rotate(-90deg)" }}
              >
                Feel Connected
              </h1>
            </Box>
          </Box>
          <Box className="col-md-12 col-lg-9">
            <Box className="ms-lg-5 ps-lg-5">
              <Box
                className="text-center text-lg-start wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <Box className="section-title">
                  <span
                    className="wow fadeInUp"
                    style={{ textDecoration: "none" }}
                  >
                    Specialised services
                  </span>
                  <Typography
                    variant="h1"
                    className="mb-4 blutext"
                    sx={{
                      fontFamily: "montserrat",
                      fontSize: "32px",
                      fontWeight: 700,
                    }}
                  >
                    Storage Solutions
                  </Typography>
                </Box>
              </Box>
              {/* Carousel section */}
              <Box className="section">
                <Box className="container">
                  <Box className="image-carousel style2">
                    <Box
                      className="grid-container box"
                      sx={{
                        // border: "1px solid #010156",
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "space-between",
                        paddingBottom: "0px",
                        // Responsive behavior
                        flexDirection: { xs: "column", md: "row" },
                      }}
                    >
                      {/* Static grid item 1 */}
                      <Box
                        className="grid-item"
                        sx={{
                          width: { xs: "100%", sm: "48%", md: "32%" },
                          marginBottom: "20px",
                          height: "500px",
                        }}
                      >
                        <article className="box">
                          <figure>
                            <Box
                              sx={{
                                height: "270px",
                              }}
                            >
                              <img
                                src={require("../../assets/images/subservice/san.jpg")}
                                alt="Title 1"
                                style={{
                                  height: "100%",
                                  width: "100%",
                                  objectFit: "contain",
                                }}
                              />
                            </Box>
                          </figure>
                          <Box
                            className="details"
                            sx={{
                              marginTop: "20px",
                              height: "170px",
                            }}
                          >
                            <h4
                              className="box-title"
                              style={{ color: "#010156" }}
                            >
                              SAN
                            </h4>
                            <p className="description">
                              High-performance on-premises storage.
                            </p>

                            <Box
                              className="col-lg-12 wow fadeInUp"
                              data-wow-delay=".4s"
                            >
                              <Link to="/services/storage-solutions/san">
                                <button
                                  type="submit"
                                  className="theme-btn theme-btn-2"
                                >
                                  <span>
                                    Learn More
                                    <i className="fas fa-chevron-right"></i>
                                  </span>
                                </button>
                              </Link>
                            </Box>
                          </Box>
                        </article>
                      </Box>

                      {/* Static grid item 2 */}
                      <Box
                        className="grid-item"
                        sx={{
                          width: { xs: "100%", sm: "48%", md: "32%" },
                          marginBottom: "20px",
                          height: "500px",
                        }}
                      >
                        <article className="box">
                          <figure>
                            <Box
                              sx={{
                                height: "270px",
                              }}
                            >
                              <img
                                src={require("../../assets/images/subservice/nas.jpg")}
                                alt="Title 2"
                                style={{
                                  height: "100%",
                                  width: "100%",
                                  objectFit: "contain",
                                }}
                              />
                            </Box>
                          </figure>
                          <Box
                            className="details"
                            sx={{
                              marginTop: "20px",
                              height: "170px",
                            }}
                          >
                            <h4
                              className="box-title"
                              style={{ color: "#010156" }}
                            >
                              NAS
                            </h4>
                            <p className="description">
                              Scalable, easy-to-use networked storage.
                            </p>
                            <Box
                              className="col-lg-12 wow fadeInUp"
                              data-wow-delay=".4s"
                            >
                              <Link to="/services/storage-solutions/nas">
                                <button
                                  type="submit"
                                  className="theme-btn theme-btn-2"
                                >
                                  <span>
                                    Learn More
                                    <i className="fas fa-chevron-right"></i>
                                  </span>
                                </button>
                              </Link>
                            </Box>
                          </Box>
                        </article>
                      </Box>

                      {/* Static grid item 3 */}
                      <Box
                        className="grid-item"
                        sx={{
                          width: { xs: "100%", sm: "48%", md: "32%" },
                          marginBottom: "20px",
                          height: "500px",
                        }}
                      >
                        <article className="box">
                          <figure>
                            <Box
                              sx={{
                                height: "270px",
                              }}
                            >
                              <img
                                src={require("../../assets/images/subservice/cloud_storage.gif")}
                                alt="Title 3"
                                style={{
                                  height: "100%",
                                  width: "100%",
                                  objectFit: "contain",
                                }}
                              />
                            </Box>
                          </figure>
                          <Box
                            className="details"
                            sx={{
                              marginTop: "20px",
                              height: "170px",
                            }}
                          >
                            <h4
                              className="box-title"
                              style={{ color: "#010156" }}
                            >
                              Cloud Storage
                            </h4>
                            <p className="description">
                              Secure, flexible access to data anytime, anywhere.
                            </p>

                            <Box
                              className="col-lg-12 wow fadeInUp"
                              data-wow-delay=".4s"
                            >
                              <Link to="/services/storage-solutions/cloud_storage">
                                <button
                                  type="submit"
                                  className="theme-btn theme-btn-2"
                                >
                                  <span>
                                    Learn More
                                    <i className="fas fa-chevron-right"></i>
                                  </span>
                                </button>
                              </Link>
                            </Box>
                          </Box>
                        </article>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <ServiceForm />
    </Box>
  );
};
