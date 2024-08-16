import React from 'react';
import { Link } from "react-router-dom"; // Import React Router's Link for navigation

const HeroSection = () => {
  return (
    <section className="hero-section hero-1 style-hero-3">
      <div className="array-button-2">
        <button className="array-prev">
          <i className="fas fa-chevron-left"></i>
        </button>
        <button className="array-next">
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
      <div className="swiper hero-slider">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div
              className="hero-image bg-cover"
              style={{ backgroundImage: "url('assets/img/hero/hero-5.jpg')" }}
            ></div>
            <div className="container">
              <div className="row justify-content-between align-items-center">
                <div className="col-xl-8 col-lg-9">
                  <div className="hero-content">
                    <h6 data-animation="fadeInUp" data-delay="1.3s">
                      Best Solution
                    </h6>
                    <h1
                      className="text-white"
                      data-animation="fadeInUp"
                      data-delay="1.5s"
                    >
                      Enjoy Fast Internet <br /> Solution
                    </h1>
                    <div className="price-item">
                      <h2 data-animation="fadeInUp" data-delay="1.7s">
                        <sub>$</sub>99 <span>/ Month</span>
                      </h2>
                      <div
                        className="icon"
                        data-animation="fadeInUp"
                        data-delay="1.7s"
                      >
                        <i className="flaticon-wifi-router-1"></i> Subscribed &
                        get 1 month WIFi Free
                      </div>
                    </div>
                    <Link
                      to="/"
                      className="theme-btn theme-btn-2"
                      data-animation="fadeInUp"
                      data-delay="1.9s"
                    >
                      <span>
                        Learn More <i className="fas fa-chevron-right"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div
              className="hero-image bg-cover"
              style={{ backgroundImage: "url('assets/img/hero/hero-6.jpg')" }}
            ></div>
            <div className="container">
              <div className="row justify-content-between align-items-center">
                <div className="col-xl-8 col-lg-9">
                  <div className="hero-content">
                    <h6 data-animation="fadeInUp" data-delay="1.3s">
                      Best Solution
                    </h6>
                    <h1
                      className="text-white"
                      data-animation="fadeInUp"
                      data-delay="1.5s"
                    >
                      Enjoy Fast Internet <br /> Solution
                    </h1>
                    <div className="price-item">
                      <h2 data-animation="fadeInUp" data-delay="1.7s">
                        <sub>$</sub>99 <span>/ Month</span>
                      </h2>
                      <div
                        className="icon"
                        data-animation="fadeInUp"
                        data-delay="1.7s"
                      >
                        <i className="flaticon-wifi-router-1"></i> Subscribed &
                        get 1 month WIFi Free
                      </div>
                    </div>
                    <Link
                      to="/"
                      className="theme-btn theme-btn-2"
                      data-animation="fadeInUp"
                      data-delay="1.9s"
                    >
                      <span>
                        Learn More <i className="fas fa-chevron-right"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
