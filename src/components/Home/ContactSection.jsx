import React, { useEffect } from 'react';
import WOW from 'wowjs';
import { Link } from 'react-router-dom';

const ContactSection = () => {
  useEffect(() => {
    new WOW.WOW({ live: false }).init();
  }, []);

  return (
    <section 
      className="contact-section-2 fix section-padding bg-cover"
      style={{ backgroundImage: 'url(assets/img/contact-bg.jpg)' }}
    >
      <div className="contact-image">
        <img src="assets/img/contact-2.png" alt="Contact" />
      </div>
      <div className="container">
        <div className="contact-wrapper-2">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="contact-content">
                <div className="section-title style-2">
                  <span className="wow fadeInUp">IT Support Help</span>
                  <h2 className="wow fadeInUp" data-wow-delay=".3s">Let's Work Together</h2>
                </div>
                <p className="mt-4 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                  We denounce with righteous indignation and like men <br />
                  beguiled and demoralized by the charms
                </p>
                <div className="contact-info-area">
                  <div className="contact-info-items mb-4 wow fadeInUp" data-wow-delay=".7s">
                    <div className="icon">
                      <i className="far fa-phone"></i>
                    </div>
                    <div className="content">
                      <p>Call For Inquiry</p>
                      <h3>
                        <Link to="tel:+23645689622">
                        +236 (456) 896 22
                        </Link>
                      </h3>
                    </div>
                  </div>
                  <div className="contact-info-items mb-4 wow fadeInUp" data-wow-delay=".8s">
                    <div className="icon">
                      <i className="fal fa-envelope"></i>
                    </div>
                    <div className="content">
                      <p>Send Us Email</p>
                      <h3>
                      <Link to="mailto:info@example.com">
                         info@example.com
                      </Link>
                      </h3>
                    </div>
                  </div>
                  <div className="contact-info-items wow fadeInUp" data-wow-delay=".9s">
                    <div className="icon">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <div className="content">
                      <p>Location</p>
                      <h3>734 H, Bryan Burlington, NC 27215</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-5 mt-lg-0">
              <div className="contact-box">
                <div className="contact-title">
                  <h3 className="wow fadeInUp" data-wow-delay=".3s">Need Help For Project!</h3>
                  <p className="wow fadeInUp" data-wow-delay=".5s">
                    We are ready to help with your next project. Let’s work together!
                  </p>
                </div>
                <div className="contact-form-items">
                  <form action="#" id="contact-form" method="POST">
                    <div className="row g-3">
                      <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                        <div className="form-clt">
                          <input type="text" name="name" id="name" placeholder="Name" />
                          <div className="icon">
                            <i className="far fa-user"></i>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 wow fadeInUp" data-wow-delay=".5s">
                        <div className="form-clt">
                          <input type="text" name="email" id="email" placeholder="Email" />
                          <div className="icon">
                            <i className="far fa-envelope"></i>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12 wow fadeInUp" data-wow-delay=".3s">
                        <div className="form-clt">
                          <div className="nice-select" tabIndex="0">
                            <span className="current">Choose Services</span>
                            <ul className="list">
                              <li data-value="1" className="option selected focus">Default sorting</li>
                              <li data-value="1" className="option">Sort by popularity</li>
                              <li data-value="1" className="option">Sort by average rating</li>
                              <li data-value="1" className="option">Sort by latest</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12 wow fadeInUp" data-wow-delay=".5s">
                        <div className="form-clt">
                          <textarea name="message" id="message" placeholder="Write Your Message"></textarea>
                        </div>
                      </div>
                      <div className="col-lg-12 wow fadeInUp" data-wow-delay=".4s">
                        <button type="submit" className="theme-btn theme-btn-2">
                          <span>Send Us Messages <i className="fas fa-chevron-right"></i></span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
