import React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import CheckIcon from "@mui/icons-material/Check";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { ServiceForm } from "./ServiceForm";
import VpnLockIcon from "@mui/icons-material/VpnLock";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import PhoneCallbackIcon from "@mui/icons-material/PhoneCallback";
import LeasedLineIcon from "@mui/icons-material/SettingsInputHdmi";

export const VpnLeasedLine = () => {
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
                  VPN Solutions
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
                  Leased Line
                </Typography>
                <Typography
                  variant="body1"
                  className="mb-4"
                  sx={{
                    fontFamily: "montserrat",
                  }}
                >
                  A leased line in relation to a VPN (Virtual Private Network)
                  is a private, dedicated circuit that provides a direct, secure
                  connection between two or more locations.
                  <br />
                  <br />
                  When combined with a VPN, a leased line enhances security and
                  performance for businesses needing to transmit sensitive data
                  across geographically distributed offices.
                  <br />
                  <br />
                  Key features of Leased include:
                </Typography>
                <p className="fw-medium blutext">
                  <CheckIcon /> Dedicated Connection
                </p>
                <p className="fw-medium blutext">
                  <CheckIcon /> High-Speed Connectivity
                </p>
                <p className="fw-medium blutext">
                  <CheckIcon /> Reliability
                </p>
                <p className="fw-medium blutext">
                  <CheckIcon /> Low Latency
                </p>
                <p className="fw-medium blutext">
                  <CheckIcon /> Enhanced Security
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
                      Speak To Our Team Now{" "}
                    </p>
                    <Typography
                      variant="h3"
                      className="m-0 text-light"
                      sx={{
                        fontSize: "20px",
                      }}
                    >
                      +234 803 406 0434
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
                  src={require("../../assets/images/subservice/leased-line.jpg")}
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
                    specialised services
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
                    VPN
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
                                src={require("../../assets/images/subservice/mplsL3vpn.png")}
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
                              MPLS L3VPN
                            </h4>
                            <p className="description">
                              Secure your business with scalable private network
                              solutions.
                            </p>

                            <Box
                              className="col-lg-12 wow fadeInUp"
                              data-wow-delay=".4s"
                            >
                              <Link to="/services/vpn-solutions/mpls3">
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
                                src={require("../../assets/images/subservice/mplsL2vpn.png")}
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
                              MPLS L2VPN
                            </h4>
                            <p className="description">
                              Connect multiple locations seamlessly and
                              securely.
                            </p>
                            <Box
                              className="col-lg-12 wow fadeInUp"
                              data-wow-delay=".4s"
                            >
                              <Link to="/services/vpn-solutions/mpls2">
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
                                src={require("../../assets/images/subservice/leased-line.jpg")}
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
                              Leased Line{" "}
                            </h4>
                            <p className="description">
                              Dedicated high-speed internet for demanding
                              businesses.
                            </p>

                            <Box
                              className="col-lg-12 wow fadeInUp"
                              data-wow-delay=".4s"
                            >
                              <Link to="/services/vpn-solutions/leased">
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
