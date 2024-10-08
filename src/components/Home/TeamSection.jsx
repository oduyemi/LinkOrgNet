import React, { useEffect } from 'react';
import WOW from 'wowjs';
import { Link } from 'react-router-dom';
import { Box, Typography } from "@mui/material";
import TeamMember from "../../assets/images/team5.jpg"

const TeamSection = () => {
  useEffect(() => {
    new WOW.WOW({ live: false }).init();
  }, []);

  return (
    <Box className="team-section section-padding pt-0" style={{ backgroundColor: "#34113F"}}>
      <Box className="container">
        <Box className="section-title text-center">
          <span className="wow fadeInUp" style={{ textDecoration: "none", marginTop: "30px" }}>IT Support Help</span>
          <Typography
            variant="h2" 
            className="text-white wow fadeInUp" 
            data-wow-delay=".3s"
          >
            We’ve Exclusive real <br />
            Team member
          </Typography>
        </Box>
        <Box className="row">
          <Box className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".3s">
            <Box className="team-card-items">
              <Box className="team-content">
                <h4>
                  <Link to="/team-details">Tommie J.</Link>
                </h4>
                <p style={{color:"white"}}>Senior Consultant</p>
              </Box>
              <Box className="team-image">
               <img src={TeamMember} alt="team-img" />
                <Box className="social-profile">
                  <span className="plus-btn"><i className="fas fa-share-alt"></i></span>
                  <ul>
                    <li><Link to="#"><i className="fab fa-facebook-f"></i></Link></li>
                    <li><Link to="#"><i className="fab fa-twitter"></i></Link></li>
                    <li><Link to="#"><i className="fab fa-youtube"></i></Link></li>
                    <li><Link to="#"><i className="fab fa-instagram"></i></Link></li>
                  </ul>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".5s">
            <Box className="team-card-items active">
              <Box className="team-content">
                <h4>
                  <Link to="/team-details">Jackson Saruman</Link>
                </h4>
                <p style={{color:"white"}}>Senior Development</p>
              </Box>
              <Box className="team-image">
                <img src={TeamMember} alt="team-img" />
                <Box className="social-profile">
                  <span className="plus-btn"><i className="fas fa-share-alt"></i></span>
                  <ul>
                    <li><Link to="#"><i className="fab fa-facebook-f"></i></Link></li>
                    <li><Link to="#"><i className="fab fa-twitter"></i></Link></li>
                    <li><Link to="#"><i className="fab fa-youtube"></i></Link></li>
                    <li><Link to="#"><i className="fab fa-instagram"></i></Link></li>
                  </ul>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".7s">
            <Box className="team-card-items">
              <Box className="team-content">
                <h4>
                  <Link to="/team-details">Wesley Colton</Link>
                </h4>
                <p style={{color:"white"}}>Senior Developer</p>
              </Box>
              <Box className="team-image">
              <img src={TeamMember} alt="team-img" />
                <Box className="social-profile">
                  <span className="plus-btn"><i className="fas fa-share-alt"></i></span>
                  <ul>
                    <li><Link to="#"><i className="fab fa-facebook-f"></i></Link></li>
                    <li><Link to="#"><i className="fab fa-twitter"></i></Link></li>
                    <li><Link to="#"><i className="fab fa-youtube"></i></Link></li>
                    <li><Link to="#"><i className="fab fa-instagram"></i></Link></li>
                  </ul>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".9s">
            <Box className="team-card-items">
              <Box className="team-content">
                <h4>
                  <Link to="/team-details">David Suarez</Link>
                </h4>
                <p style={{color:"white"}}>Team Leader</p>
              </Box>
              <Box className="team-image">
             <img src={TeamMember} alt="team-img" />
                <Box className="social-profile">
                  <span className="plus-btn"><i className="fas fa-share-alt"></i></span>
                  <ul>
                    <li><Link to="#"><i className="fab fa-facebook-f"></i></Link></li>
                    <li><Link to="#"><i className="fab fa-twitter"></i></Link></li>
                    <li><Link to="#"><i className="fab fa-youtube"></i></Link></li>
                    <li><Link to="#"><i className="fab fa-instagram"></i></Link></li>
                  </ul>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className="team-button text-center mt-5 wow fadeInUp" data-wow-delay=".4s">
          <Link to="/team" className="theme-btn theme-btn-2">
            <span>
              Explore more team
              <i className="fas fa-chevron-right"></i>
            </span>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default TeamSection;
