import React from "react";
import Advisor from "../../assets/images/advisor.jpg";

const NeedAdvisor = () => {
  return (
    <section
      className="bg-cover section-padding"
      style={{ backgroundImage: `url(${Advisor})` }}
    >
      <div className="container">
        <div className="cta-banner-wrapper section-padding pt-0">
          <div className="section-title mb-0">
            <h2 className="blutext" data-wow-delay=".3s">
              Call Us Today <br/>
              <a href="tel:+2349160005465" className="theme-color-1">
                 MTN: 091-6000-5465
              </a>
              <br/>
              <a href="tel:+2349160005465" className="theme-color-1">
              Airtel: 090-4142-3631
              </a>
            </h2>
          </div>
          <a
            href="/contact"
            className="theme-btn hover-white wow fadeInUp"
            data-wow-delay=".5s"
          >
            <span>
              Get a Free Quote
              <i className="fas fa-chevron-right"></i>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default NeedAdvisor;
