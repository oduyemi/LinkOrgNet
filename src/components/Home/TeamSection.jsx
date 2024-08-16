import React, { useEffect } from 'react';
import WOW from 'wowjs';
import { Link } from 'react-router-dom';

const TeamSection = () => {
  useEffect(() => {
    new WOW.WOW({ live: false }).init();
  }, []);

  return (
    <section className="team-section section-padding pt-0 section-bg-3">
      <div className="dot-shape-2">
        <img src="assets/img/team/dot-shape-2.png" alt="shape-img" />
      </div>
      <div className="container">
        <div className="section-title style-2 text-center">
          <span className="wow fadeInUp">IT Support Help</span>
          <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
            We’ve Exclusive real <br />
            Team member
          </h2>
        </div>
        <div className="row">
          <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".3s">
            <div className="team-card-items">
              <div className="team-content">
                <h4>
                  <Link to="/team-details">Tommie J. Saruman</Link>
                </h4>
                <p>Senior Consultant</p>
              </div>
              <div className="team-image">
                <img src="assets/img/team/07.jpg" alt="team-img" />
                <div className="social-profile">
                  <span className="plus-btn"><i className="fas fa-share-alt"></i></span>
                  <ul>
                    <li><Link to="#"><i className="fab fa-facebook-f"></i></Link></li>
                    <li><Link to="#"><i className="fab fa-twitter"></i></Link></li>
                    <li><Link to="#"><i className="fab fa-youtube"></i></Link></li>
                    <li><Link to="#"><i className="fab fa-instagram"></i></Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".5s">
            <div className="team-card-items active">
              <div className="team-content">
                <h4>
                  <Link to="/team-details">Jackson Saruman</Link>
                </h4>
                <p>Senior Development</p>
              </div>
              <div className="team-image">
                <img src="assets/img/team/08.jpg" alt="team-img" />
                <div className="social-profile">
                  <span className="plus-btn"><i className="fas fa-share-alt"></i></span>
                  <ul>
                    <li><Link to="#"><i className="fab fa-facebook-f"></i></Link></li>
                    <li><Link to="#"><i className="fab fa-twitter"></i></Link></li>
                    <li><Link to="#"><i className="fab fa-youtube"></i></Link></li>
                    <li><Link to="#"><i className="fab fa-instagram"></i></Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".7s">
            <div className="team-card-items">
              <div className="team-content">
                <h4>
                  <Link to="/team-details">Wesley Colton</Link>
                </h4>
                <p>Senior Developer</p>
              </div>
              <div className="team-image">
                <img src="assets/img/team/09.jpg" alt="team-img" />
                <div className="social-profile">
                  <span className="plus-btn"><i className="fas fa-share-alt"></i></span>
                  <ul>
                    <li><Link to="#"><i className="fab fa-facebook-f"></i></Link></li>
                    <li><Link to="#"><i className="fab fa-twitter"></i></Link></li>
                    <li><Link to="#"><i className="fab fa-youtube"></i></Link></li>
                    <li><Link to="#"><i className="fab fa-instagram"></i></Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".9s">
            <div className="team-card-items">
              <div className="team-content">
                <h4>
                  <Link to="/team-details">David Suarez</Link>
                </h4>
                <p>Team Leader</p>
              </div>
              <div className="team-image">
                <img src="assets/img/team/10.jpg" alt="team-img" />
                <div className="social-profile">
                  <span className="plus-btn"><i className="fas fa-share-alt"></i></span>
                  <ul>
                    <li><Link to="#"><i className="fab fa-facebook-f"></i></Link></li>
                    <li><Link to="#"><i className="fab fa-twitter"></i></Link></li>
                    <li><Link to="#"><i className="fab fa-youtube"></i></Link></li>
                    <li><Link to="#"><i className="fab fa-instagram"></i></Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="team-button text-center mt-5 wow fadeInUp" data-wow-delay=".4s">
          <Link to="/team" className="theme-btn theme-btn-2 hover-white">
            <span>
              Explore more team
              <i className="fas fa-chevron-right"></i>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
