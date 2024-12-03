import React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import CheckIcon from "@mui/icons-material/Check";
import { ServiceForm } from "./ServiceForm";
import PhoneCallbackIcon from "@mui/icons-material/PhoneCallback";

export const Collocation = () => {
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
                  Collocation & Datacenter Services
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
                  Collocation
                </Typography>
                <Typography
                  variant="body1"
                  className="mb-4"
                  sx={{
                    fontFamily: "montserrat",
                  }}
                >
                  Data Collocation refers to the practice of storing and
                  managing data in a centralized location or facility, where
                  multiple organizations or systems can house their data
                  together.
                  <br />
                  <br />
                  This term is often used in the context of cloud computing,
                  data centers, or server infrastructure, where different
                  entities store and access their data in the same physical or
                  virtual environment.
                  <br />
                  <br />
                  Key Features of Data Collocation:
                </Typography>
                <p className="fw-medium blutext">
                  <CheckIcon /> Centralized Storage
                </p>
                <p className="fw-medium blutext">
                  <CheckIcon /> Improved Data Access
                </p>
                <p className="fw-medium blutext">
                  <CheckIcon /> Shared Infrastructure
                </p>
                <p className="fw-medium blutext">
                  <CheckIcon /> Security and Compliance
                </p>
                <p className="fw-medium blutext">
                  <CheckIcon /> Cost-Effectiveness
                </p>
                <p className="fw-medium blutext">
                  <CheckIcon /> Scalability
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
                  src={require("../../assets/images/subservice/collocation.gif")}
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
                    Collocation & Datacenter Services
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
                                src={require("../../assets/images/subservice/virtual_servers.gif")}
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
                              Virtual Servers
                            </h4>
                            <p className="description">
                              Scale your business with virtual hosting.
                            </p>

                            <Box
                              className="col-lg-12 wow fadeInUp"
                              data-wow-delay=".4s"
                            >
                              <Link to="/services/collocation-and-data-center/virtual_server">
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
                                src={require("../../assets/images/subservice/collocation.gif")}
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
                              Collocation
                            </h4>
                            <p className="description">
                              Secure IT infrastructure in a state-of-the-art
                              datacenter.
                            </p>
                            <Box
                              className="col-lg-12 wow fadeInUp"
                              data-wow-delay=".4s"
                            >
                              <Link to="/services/collocation-and-data-center/collocate">
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
                                src={require("../../assets/images/subservice/data_backup.gif")}
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
                              Data Backup
                            </h4>
                            <p className="description">
                              Comprehensive solutions for data protection and
                              recovery.
                            </p>

                            <Box
                              className="col-lg-12 wow fadeInUp"
                              data-wow-delay=".4s"
                            >
                              <Link to="/services/collocation-and-data-center/data_backup">
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
