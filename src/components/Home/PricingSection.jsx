import React, { useEffect } from 'react';
import WOW from 'wowjs';
import { Link } from 'react-router-dom';

const PricingSection = () => {
  useEffect(() => {
    new WOW.WOW({ live: false }).init();
  }, []);

  return (
    <section className="pricing-section-3 fix section-padding">
      <div className="container">
        <div className="section-title style-2 text-center">
          <span className="wow fadeInUp">pricing plan</span>
          <h2 className="wow fadeInUp" data-wow-delay=".3s">Your Perfect Plans</h2>
        </div>
        <div className="row">
          <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
            <div className="pricing-card-items-2">
              <ul className="pricing-icon">
                <li className="icon">
                  <i className="flaticon-wi-fi"></i>
                </li>
              </ul>
              <div className="pricing-header">
                <h5>Internet</h5>
                <h2>
                  <sub>$</sub>39.99 <span>/mo</span>
                </h2>
                <p>
                  For 12 mos when bundled, <br /> + taxes & equip fee
                </p>
              </div>
              <ul className="pricing-list">
                <li>
                  <i className="far fa-check"></i>
                  Internet with a 1000 Mbps
                </li>
                <li>
                  <i className="far fa-check"></i>
                  Connect multiple users at once
                </li>
                <li>
                  <i className="far fa-check"></i>
                  Virus scanning & prevention
                </li>
                <li>
                  <i className="far fa-check"></i>
                  Internet with a 1000 Mbps
                </li>
              </ul>
              <Link to="/contact" className="theme-btn theme-btn-2">
                <span>Choose Plan</span>
              </Link>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
            <div className="pricing-card-items-2 active">
              <ul className="pricing-icon">
                <li className="icon">
                  <i className="flaticon-television-1"></i>
                </li>
              </ul>
              <div className="pricing-header">
                <h5>TV Box</h5>
                <h2>
                  <sub>$</sub>49.99 <span>/mo</span>
                </h2>
                <p>
                  For 12 mos when bundled, <br /> + taxes & equip fee
                </p>
              </div>
              <ul className="pricing-list">
                <li>
                  <i className="far fa-check"></i>
                  Internet with a 1000 Mbps
                </li>
                <li>
                  <i className="far fa-check"></i>
                  Connect multiple users at once
                </li>
                <li>
                  <i className="far fa-check"></i>
                  Virus scanning & prevention
                </li>
                <li>
                  <i className="far fa-check"></i>
                  Internet with a 1000 Mbps
                </li>
              </ul>
              <Link to="/contact" className="theme-btn theme-btn-2">
                <span>Choose Plan</span>
              </Link>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
            <div className="pricing-card-items-2">
              <ul className="pricing-icon">
                <li className="icon">
                  <i className="flaticon-wi-fi"></i>
                </li>
                <li className="icon">
                  <i className="flaticon-television-1"></i>
                </li>
              </ul>
              <div className="pricing-header">
                <h5>Internet + TV Box</h5>
                <h2>
                  <sub>$</sub>99.99 <span>/mo</span>
                </h2>
                <p>
                  For 12 mos when bundled, <br /> + taxes & equip fee
                </p>
              </div>
              <ul className="pricing-list">
                <li>
                  <i className="far fa-check"></i>
                  Internet with a 1000 Mbps
                </li>
                <li>
                  <i className="far fa-check"></i>
                  Connect multiple users at once
                </li>
                <li>
                  <i className="far fa-check"></i>
                  Virus scanning & prevention
                </li>
                <li>
                  <i className="far fa-check"></i>
                  Internet with a 1000 Mbps
                </li>
              </ul>
              <Link to="/contact" className="theme-btn theme-btn-2">
                <span>Choose Plan</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
