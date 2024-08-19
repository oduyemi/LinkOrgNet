import React from 'react';
import Slider from "react-slick";
import { Box } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialSection = () => {
  return (
    <section className="testimonial-section-3 fix section-padding pt-0">
      <div className="container-fluid">
        <div className="testimonial-wrapper-3">
          <div className="testimonial-carousel-active-3">
            {/* Testimonial Item 1 */}
            <div className="testimonial-items">
              <div className="testimonial-image-area">
                <div
                  className="testimonial-image bg-cover"
                  style={{ backgroundImage: "url('assets/img/testimonial/06.jpg')" }}
                >
                  <div className="icon">
                    <svg
                      width="33"
                      height="25"
                      viewBox="0 0 33 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M29.1964 1.98168C30.9987 3.96415 32.08 6.12685 32.08 9.73134C32.08 16.0392 27.5744 21.6262 21.2665 24.5098L19.6445 22.1668C25.5919 18.9228 26.8535 14.7776 27.2139 12.0743C26.3128 12.6149 25.0513 12.7952 23.7897 12.6149C20.5456 12.2545 18.0225 9.73134 18.0225 6.30707C18.0225 4.68505 18.7434 3.06303 19.8247 1.80146C21.0863 0.539885 22.5281 -0.000789642 24.3304 -0.000789642C26.3128 -0.000789642 28.1151 0.900331 29.1964 1.98168ZM11.1739 1.98168C12.9762 3.96415 14.0575 6.12685 14.0575 9.73134C14.0575 16.0392 9.55192 21.6262 3.24406 24.5098L1.62204 22.1668C7.56945 18.9228 8.83102 14.7776 9.19147 12.0743C8.29035 12.6149 7.02878 12.7952 5.7672 12.6149C2.52316 12.2545 0.0000152588 9.73134 0.0000152588 6.30707C0.0000152588 4.68505 0.720913 3.06303 1.80226 1.80146C2.88361 0.539885 4.50563 -0.000789642 6.30788 -0.000789642C8.29035 -0.000789642 10.0926 0.900331 11.1739 1.98168Z"
                        fill="#ff1749"
                      />
                    </svg>
                  </div>
                </div>
                <div className="star">
                  <span className="fas fa-star"></span>
                  <span className="fas fa-star"></span>
                  <span className="fas fa-star"></span>
                  <span className="fas fa-star"></span>
                  <span className="fas fa-star"></span>
                </div>
              </div>
              <div className="testimonial-content">
                <h3>
                  Climb the mountain not to plant your flag but to embrace the
                  ways challenge, enjoy the air, and behold the. Climb it see
                  the world, not so the world can see you. This is due to their
                  excellent service competitive pricing
                </h3>
                <div className="athor-name">
                  <h4>Robert J. Hare/</h4>
                  <p>Graphics Designer</p>
                </div>
              </div>
            </div>

            {/* Testimonial Item 2 */}
            <div className="testimonial-items">
              <div className="testimonial-image-area">
                <div
                  className="testimonial-image bg-cover"
                  style={{ backgroundImage: "url('assets/img/testimonial/07.jpg')" }}
                >
                  <div className="icon">
                    <svg
                      width="33"
                      height="25"
                      viewBox="0 0 33 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M29.1964 1.98168C30.9987 3.96415 32.08 6.12685 32.08 9.73134C32.08 16.0392 27.5744 21.6262 21.2665 24.5098L19.6445 22.1668C25.5919 18.9228 26.8535 14.7776 27.2139 12.0743C26.3128 12.6149 25.0513 12.7952 23.7897 12.6149C20.5456 12.2545 18.0225 9.73134 18.0225 6.30707C18.0225 4.68505 18.7434 3.06303 19.8247 1.80146C21.0863 0.539885 22.5281 -0.000789642 24.3304 -0.000789642C26.3128 -0.000789642 28.1151 0.900331 29.1964 1.98168ZM11.1739 1.98168C12.9762 3.96415 14.0575 6.12685 14.0575 9.73134C14.0575 16.0392 9.55192 21.6262 3.24406 24.5098L1.62204 22.1668C7.56945 18.9228 8.83102 14.7776 9.19147 12.0743C8.29035 12.6149 7.02878 12.7952 5.7672 12.6149C2.52316 12.2545 0.0000152588 9.73134 0.0000152588 6.30707C0.0000152588 4.68505 0.720913 3.06303 1.80226 1.80146C2.88361 0.539885 4.50563 -0.000789642 6.30788 -0.000789642C8.29035 -0.000789642 10.0926 0.900331 11.1739 1.98168Z"
                        fill="#ff1749"
                      />
                    </svg>
                  </div>
                </div>
                <div className="star">
                  <span className="fas fa-star"></span>
                  <span className="fas fa-star"></span>
                  <span className="fas fa-star"></span>
                  <span className="fas fa-star"></span>
                  <span className="fas fa-star"></span>
                </div>
              </div>
              <div className="testimonial-content">
                <h3>
                  Climb the mountain not to plant your flag but to embrace the
                  ways challenge, enjoy the air, and behold the. Climb it see
                  the world, not so the world can see you. This is due to their
                  excellent service competitive pricing
                </h3>
                <div className="athor-name">
                  <h4>Robert J. Hare/</h4>
                  <p>Graphics Designer</p>
                </div>
              </div>
            </div>

            {/* Additional Testimonial Items */}
            {/* Repeat similar structure for additional testimonials */}

          </div>
          <div className="slider-button">
            <div className="testimonial-nav-prev">
              <i className="fas fa-chevron-left"></i>
            </div>
            <div className="testimonial-nav-next">
              <i className="fas fa-chevron-right"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
