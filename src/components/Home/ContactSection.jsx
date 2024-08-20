import React, { useEffect, useState } from 'react';
import WOW from 'wowjs';
import { Link } from 'react-router-dom';
import { Box } from "@mui/material";

const ContactSection = () => {
  useEffect(() => {
    new WOW.WOW({ live: false }).init();
  }, []);

      const [isOpen, setIsOpen] = useState(false);
      const [selectedOption, setSelectedOption] = useState('Choose Services');
    
      const toggleDropdown = () => {
        setIsOpen(!isOpen);
      };
    
      const selectOption = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
      };

    return (
    <Box 
      className="contact-section-2 fix section-padding bg-cover"
      style={{ backgroundImage: 'url(assets/img/contact-bg.jpg)' }}
    >
      <Box className="contact-image">
        <img src="assets/img/contact-2.png" alt="Contact" />
      </Box>
      <Box className="container">
        <Box className="contact-wrapper-2">
          <Box className="row align-items-center">
            <Box className="col-lg-6">
              <Box className="contact-content">
                <Box className="section-title style-2">
                  <span className="wow fadeInUp">IT Support Help</span>
                  <h2 className="wow fadeInUp" data-wow-delay=".3s">Let's Work Together</h2>
                </Box>
                <p className="mt-4 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                  We denounce with righteous indignation and like men <br />
                  beguiled and demoralized by the charms
                </p>
                <Box className="contact-info-area">
                  <Box className="contact-info-items mb-4 wow fadeInUp" data-wow-delay=".7s">
                    <Box className="icon">
                      <i className="far fa-phone"></i>
                    </Box>
                    <Box className="content">
                      <p>Call For Inquiry</p>
                      <h3>
                        <Link to="tel: +01 368 567 894">
                        +09 354 587 874
                        </Link>
                        <br/>
                        <Link to="tel: +01 368 567 8942">
                         +01 368 567 894
                        </Link>
                       
                      </h3>
                    </Box>
                  </Box>
                  <Box className="contact-info-items mb-4 wow fadeInUp" data-wow-delay=".8s">
                    <Box className="icon">
                      <i className="fal fa-envelope"></i>
                    </Box>
                    <Box className="content">
                      <p>Send Us Email</p>
                      <h3>
                      <Link to="mailto:info@linkorgnet.com">
                      info@linkorgnet.com
                      </Link>
                      <br/>
                      <Link to="mailto:support@linkorgnet.com">
                      support@linkorgnet.com
                      </Link>
                      </h3>
                    </Box>
                  </Box>
                  <Box className="contact-info-items wow fadeInUp" data-wow-delay=".9s">
                    <Box className="icon">
                      <i className="fas fa-map-marker-alt"></i>
                    </Box>
                    <Box className="content">
                      <p>Location</p>
                      <h3>177B Sinari Daranijo Street, <br/> Victoria Island, Lagos</h3>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box className="col-lg-6 mt-5 mt-lg-0">
              <Box className="contact-box">
                <Box className="contact-title">
                  <h3 className="wow fadeInUp" data-wow-delay=".3s">Need Help For Project!</h3>
                  <p className="wow fadeInUp" data-wow-delay=".5s">
                    We are ready to help with your next project. Let’s work together!
                  </p>
                </Box>
                <Box className="contact-form-items">
                  <form action="#" id="contact-form" method="POST">
                    <Box className="row g-3">
                      <Box className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                        <Box className="form-clt">
                          <input type="text" name="name" id="name" placeholder="Name" />
                          <Box className="icon">
                            <i className="far fa-user"></i>
                          </Box>
                        </Box>
                      </Box>
                      <Box className="col-lg-6 wow fadeInUp" data-wow-delay=".5s">
                        <Box className="form-clt">
                          <input type="text" name="email" id="email" placeholder="Email" />
                          <Box className="icon">
                            <i className="far fa-envelope"></i>
                          </Box>
                        </Box>
                      </Box>
                      <Box className="col-lg-12 wow fadeInUp" data-wow-delay=".3s">
                        <Box className="form-clt">
                        <Box className={`nice-select ${isOpen ? 'open' : ''}`} tabIndex="0" onClick={toggleDropdown}>
                          <span className="current">{selectedOption}</span>
                          {isOpen && (
                            <ul className="list">
                              <li data-value="1" className="option" onClick={() => selectOption('Default sorting')}>VSAT</li>
                              <li data-value="2" className="option" onClick={() => selectOption('Sort by popularity')}>VOIP Services</li>
                              <li data-value="3" className="option" onClick={() => selectOption('Sort by average rating')}>Maritime VSAT</li>
                              <li data-value="4" className="option" onClick={() => selectOption('Sort by latest')}>Network Services</li>
                            </ul>
                          )}
                        </Box>
                        </Box>
                      </Box>
                      <Box className="col-lg-12 wow fadeInUp" data-wow-delay=".5s">
                        <Box className="form-clt">
                          <textarea name="message" id="message" placeholder="Write Your Message"></textarea>
                        </Box>
                      </Box>
                      <Box className="col-lg-12 wow fadeInUp" data-wow-delay=".4s">
                        <button type="submit" className="theme-btn theme-btn-2">
                          <span>Send Us Messages <i className="fas fa-chevron-right"></i></span>
                        </button>
                      </Box>
                    </Box>
                  </form>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactSection;
