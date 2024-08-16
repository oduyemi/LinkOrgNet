import React from 'react';
import { Link } from "react-router-dom"; // Import Link from React Router

const ServiceSection = () => {
  return (
    <section className="service-section section-bg-4 fix section-padding">
      <div className="container">
        <div className="title-section-area">
          <div className="section-title style-2">
            <span className="wow fadeInUp">Our Services Area</span>  
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              Best Digital Broadband <br />
              Service For People
            </h2>  
          </div>
          <p className="wow fadeInUp" data-wow-delay=".5s">
            Transmds is the world’s leading global logistics provider <br /> supporting industry and trade in the global exchange of goods <br />
            do eiusmod tempor incididunt ut labore et simply free text dolore
          </p>
        </div>
        <div className="service-wrapper-3">
          <div className="service-box-items style-2 wow fadeInUp" data-wow-delay=".3s">
            <div className="icon">
              <i className="flaticon-wifi-router-2"></i>
            </div>
            <div className="content">
              <h6>
                <Link to="/service-details">
                  Fiber Line & Broadband Line
                </Link>
              </h6>
            </div>
          </div>
          <div className="service-box-items style-2 active wow fadeInUp" data-wow-delay=".5s">
            <div className="icon">
              <i className="flaticon-connection"></i>
            </div>
            <div className="content">
              <h6>
                <Link to="/service-details">
                  Family Internet Phone Pack
                </Link>
              </h6>
            </div>
          </div>
          <div className="service-box-items style-2 wow fadeInUp" data-wow-delay=".7s">
            <div className="icon">                              
              <i className="flaticon-smart-tv-1"></i>
            </div>
            <div className="content">
              <h6>
                <Link to="/service-details">
                  Business Smart Television
                </Link>
              </h6>
            </div>
          </div>
          <div className="service-box-items style-2 wow fadeInUp" data-wow-delay=".8s">
            <div className="icon">                              
              <i className="flaticon-server"></i>
            </div>
            <div className="content">
              <h6>
                <Link to="/service-details">
                  Internet & Cyber Security
                </Link>
              </h6>
            </div>
          </div>
          <div className="service-box-items style-2 wow fadeInUp" data-wow-delay=".9s">
            <div className="icon">                              
              <i className="flaticon-computer-networks"></i>
            </div>
            <div className="content">
              <h6>
                <Link to="/service-details">
                  Best Smart Broadband & Network
                </Link>
              </h6>
            </div>
          </div>
        </div>
        <div className="service-text-area text-center mt-5 wow fadeInUp" data-wow-delay=".4s">
          <h5>
            Bring them together and you overcome the ordinary.
            <Link to="/service" className="link-btn link-btn-2">
              <span>View More Service</span>
              <i className="fal fa-plus"></i>
            </Link>
          </h5>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
