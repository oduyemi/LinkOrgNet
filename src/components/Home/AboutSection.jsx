import React from 'react';
import { Box } from "@mui/material";
import { Link } from 'react-router-dom';
import ITSolution1 from "../../assets/images/ITSolution1.jpg"
import ITSolution2 from "../../assets/images/ITSolution2.jpg"

const AboutSection = () => {
  return (
    <Box className="about-section section-padding">
      <Box className="container">
        <Box className="about-wrapper-2">
          <Box className="row">
            <Box className="col-lg-6">
              <Box className="about-image-items">
                <Box
                  className="about-image-1 bg-cover wow fadeInLeft"
                  data-wow-delay=".3s"
                  style={{ 
                    backgroundImage: `url(${ITSolution1}`
                    }}
                >
                  <Box className="about-image-2 wow fadeInUp" data-wow-delay=".5s">
                    <img src={ITSolution2} alt="about-img" />
                  </Box>
                </Box>
                <Box className="circle-shape">
                  <img src="assets/img/about/circle-2.png" alt="img" className="text-circle" />
                  <Box className="about-title">
                    <h2>
                      <span className="count">13</span>
                    </h2>
                    <p>Years of Experience</p>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box className="col-lg-6 mt-5 mt-lg-0">
              <Box className="about-content">
                <Box className="section-title style-2">
                  <span className="wow fadeInUp">BEST IT SOLUTIONS</span>
                  <h2 className="wow fadeInUp" data-wow-delay=".3s">
                    Best Internet <span>Agency</span> For People
                  </h2>
                </Box>
                <p className="mt-4 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                  Transmds is the world’s leading global logistics provider. We support industry and trade in the global exchange of goods. 
                </p>
                <Box className="single-tab-items">
                  <ul className="nav mb-4" role="tablist">
                    <li className="nav-item wow fadeInUp" data-wow-delay=".3s" role="presentation">
                      <Link
                        to="#integrity"
                        className="nav-link active"
                        aria-selected="true"
                        role="tab"
                      >
                        Integrity
                      </Link>
                    </li>
                    <li className="nav-item wow fadeInUp" data-wow-delay=".5s" role="presentation">
                      <Link
                        to="#objectives"
                        className="nav-link"
                        aria-selected="false"
                        role="tab"
                        tabIndex="-1"
                      >
                        Objectives
                      </Link>
                    </li>
                    <li className="nav-item wow fadeInUp" data-wow-delay=".7s" role="presentation">
                      <Link
                        to="#excellence"
                        className="nav-link"
                        aria-selected="false"
                        role="tab"
                        tabIndex="-1"
                      >
                        Excellence
                      </Link>
                    </li>
                  </ul>
                </Box>
                <Box className="tab-content">
                  <Box id="integrity" className="tab-pane fade show active" role="tabpanel">
                    <Box className="about-tabs-area">
                      <Box className="about-list-items">
                        <Box className="video-image wow fadeInUp" data-wow-delay=".3s">
                          <img src="assets/img/about/video.jpg" alt="img" />
                          <Box className="video-box">
                            <a
                              href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I"
                              className="video-btn ripple video-popup"
                            >
                              <i className="fas fa-play"></i>
                            </a>
                          </Box>
                        </Box>
                        <ul className="wow fadeInUp" data-wow-delay=".4s">
                          <li>
                            <i className="far fa-check"></i>
                            Technology Growth
                          </li>
                          <li>
                            <i className="far fa-check"></i>
                            Customer Oriented Program
                          </li>
                          <li>
                            <i className="far fa-check"></i>
                            Dedicated Team Member
                          </li>
                          <li>
                            <i className="far fa-check"></i>
                            Customer Oriented Program
                          </li>
                        </ul>
                      </Box>
                      <Box className="about-author">
                        <Box className="author-image wow fadeInUp" data-wow-delay=".3s">
                          <img src="assets/img/about/client-2.png" alt="author-img" />
                          <Box className="content">
                            <h6>5m+ Customer</h6>
                          </Box>
                        </Box>
                        <Box className="author-contact wow fadeInUp" data-wow-delay=".5s">
                          <Box className="icon">
                            <img src="assets/img/contact.png" alt="img" />
                          </Box>
                          <Box className="content">
                            <p>Phone:</p>
                            <h6>
                              <a href="tel:++23645689622">+236 (456) 896 22</a>
                            </h6>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  <Box id="objectives" className="tab-pane fade" role="tabpanel">
                    <Box className="about-tabs-area">
                      <Box className="about-list-items">
                        <Box className="video-image">
                          <img src="assets/img/about/video.jpg" alt="img" />
                          <Box className="video-box">
                            <a
                              href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I"
                              className="video-btn ripple video-popup"
                            >
                              <i className="fas fa-play"></i>
                            </a>
                          </Box>
                        </Box>
                        <ul>
                          <li>
                            <i className="far fa-check"></i>
                            Technology Growth
                          </li>
                          <li>
                            <i className="far fa-check"></i>
                            Customer Oriented Program
                          </li>
                          <li>
                            <i className="far fa-check"></i>
                            Dedicated Team Member
                          </li>
                          <li>
                            <i className="far fa-check"></i>
                            Customer Oriented Program
                          </li>
                        </ul>
                      </Box>
                      <Box className="about-author">
                        <Box className="author-image">
                          <img src="assets/img/about/client-2.png" alt="author-img" />
                          <Box className="content">
                            <h6>5m+ Customer</h6>
                          </Box>
                        </Box>
                        <Box className="author-contact">
                          <Box className="icon">
                            <img src="assets/img/contact.png" alt="img" />
                          </Box>
                          <Box className="content">
                            <p>Phone:</p>
                            <h6>
                              <a href="tel:++23645689622">+236 (456) 896 22</a>
                            </h6>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  <Box id="excellence" className="tab-pane fade" role="tabpanel">
                    <Box className="about-tabs-area">
                      <Box className="about-list-items">
                        <Box className="video-image">
                          <img src="assets/img/about/video.jpg" alt="img" />
                          <Box className="video-box">
                            <a
                              href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I"
                              className="video-btn ripple video-popup"
                            >
                              <i className="fas fa-play"></i>
                            </a>
                          </Box>
                        </Box>
                        <ul>
                          <li>
                            <i className="far fa-check"></i>
                            Technology Growth
                          </li>
                          <li>
                            <i className="far fa-check"></i>
                            Customer Oriented Program
                          </li>
                          <li>
                            <i className="far fa-check"></i>
                            Dedicated Team Member
                          </li>
                          <li>
                            <i className="far fa-check"></i>
                            Customer Oriented Program
                          </li>
                        </ul>
                      </Box>
                      <Box className="about-author">
                        <Box className="author-image">
                          <img src="assets/img/about/client-2.png" alt="author-img" />
                          <Box className="content">
                            <h6>5m+ Customer</h6>
                          </Box>
                        </Box>
                        <Box className="author-contact">
                          <Box className="icon">
                            <img src="assets/img/contact.png" alt="img" />
                          </Box>
                          <Box className="content">
                            <p>Phone:</p>
                            <h6>
                              <a href="tel:++23645689622">+236 (456) 896 22</a>
                            </h6>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutSection;
