import React, { useEffect, useState } from 'react';
import WOW from 'wowjs';
import { Link } from 'react-router-dom';
import { Box, Typography } from "@mui/material";
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';
import ShareLocationIcon from '@mui/icons-material/ShareLocation';



const ContactSection = () => {
  useEffect(() => {
    new WOW.WOW({ live: false }).init();
  }, []);

  const [states] = useState([
    'Abia', 'Adamawa', 'AkwaIbom', 'Anambra', 'Bauchi', 'Bayelsa', 'Benue', 'Borno', 
    'Cross River', 'Delta', 'Ebonyi', 'Edo', 'Ekiti', 'Enugu', 'FCT', 'Gombe', 'Imo',
    'Jigawa', 'Kaduna', 'Kano', 'Katsina', 'Kebbi', 'Kogi', 'Kwara', 'Lagos', 
    'Nasarawa', 'Niger', 'Ogun', 'Ondo', 'Osun', 'Oyo', 'Plateau', 'Rivers', 'Sokoto',
    'Taraba', 'Yobe', 'Zamfara'
  ]);

  const [selectedState, setSelectedState] = useState('');
  const [lgas, setLgas] = useState([]);
  const [selectedLga, setSelectedLga] = useState('');
  
  const [isStateOpen, setIsStateOpen] = useState(false);
  const [isLgaOpen, setIsLgaOpen] = useState(false);
  const [isTopicOpen, setIsTopicOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState('Choose Topic');

  const toggleDropdown = (dropdown) => {
    if (dropdown === 'state') setIsStateOpen(!isStateOpen);
    if (dropdown === 'lga') setIsLgaOpen(!isLgaOpen);
    if (dropdown === 'topic') setIsTopicOpen(!isTopicOpen);
  };

  const selectOption = (option, dropdown) => {
    if (dropdown === 'state') {
      setSelectedState(option);
      fetchLgas(option);  // Fetch LGAs after selecting state
      setIsStateOpen(false);
    } else if (dropdown === 'lga') {
      setSelectedLga(option);
      setIsLgaOpen(false);
    } else if (dropdown === 'topic') {
      setSelectedTopic(option);
      setIsTopicOpen(false);
    }
  };

  const fetchLgas = (state) => {
    // In the future, connect this to your API. For now, use dummy LGAs
    const dummyLgas = {
      Lagos: ['Ikeja', 'Surulere', 'Epe'],
      Abia: ['Aba North', 'Aba South', 'Arochukwu'],
      // Add more dummy LGAs for other states...
    };
    setLgas(dummyLgas[state] || []);
  };


    return (
    <Box 
      className="contact-section-2 fix section-padding bg-cover"
      style={{ backgroundImage: 'url(assets/img/contact-bg.jpg)' }}
    >
      <Box className="container">
        <Box className="contact-wrapper-2">
          <Box className="row align-items-center">
            <Box className="col-lg-6">
              <Box className="contact-content">
                <Box className="section-title">
                  <span className="wow fadeInUp" style={{ textDecoration: "none", position: "relative", top:"-60px" }}>Contact Us</span>
                  <Typography
                    variant="h2" 
                    className="wow fadeInUp" 
                    data-wow-delay=".3s"
                    sx={{
                      color: "#010156",
                      fontSize: "24px",
                      fontWeight: "600",
                      position: "relative",
                      top:"-50px"
                    }}
                  >
                    We&apos;d Love To Hear From You
                  </Typography>
                </Box>
                <Typography
                  variant="body1" 
                  className="mt-4 mt-md-0 wow fadeInUp" 
                  data-wow-delay=".5s"
                  sx={{
                    fontSize: "16px",
                     position: "relative",
                      top:"-50px"
                  }}
                >
                  Whether you&apos;re curious about features,
                  a free trial, or even press - we&apos;re 
                  ready to answer any and all quetions. 
                </Typography>
                <Box className="contact-info-area mt-0">
                  <Box className="contact-info-items mb-4 wow fadeInUp" data-wow-delay=".7s">
                    <Box className="icon">
                      <CallIcon
                        sx={{
                          fontSize: 16,
                          color: "#010156"
                          
                        }}
                      />
                    </Box>
                    <Box className="content">
                      <Typography
                        variant="body1"
                        sx={{
                          fontSize: "18px",
                          fontWeight: "700"
                        }}
                      >
                        Call For Inquiry
                      </Typography>
                      <Typography
                        variant="h3"
                      >
                          <Link to="tel: +01 368 567 894" style={{ color: "#4E4A59", fontSize: "14px"}}>
                            +123456789
                          </Link>
                          <br/>
                          <Link to="tel: +01 368 567 8942" style={{ color: "#4E4A59", fontSize: "14px"}}>
                          +01 368 567 894
                          </Link>
                       
                      </Typography>
                    </Box>
                  </Box>
                  <Box className="contact-info-items mb-4 wow fadeInUp" data-wow-delay=".8s">
                    <Box className="icon">
                      <MailIcon
                        sx={{
                          fontSize: 16,
                          color: "#010156"
                        }}
                      />
                    </Box>
                    <Box className="content">
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: "18px",
                        fontWeight: "700"
                      }}
                    >
                      Send Us Email
                    </Typography>
                      <h3>
                      <Link to="mailto:info@linkorgnet.com" style={{ color: "#4E4A59", fontSize: "14px"}}>
                      info@linkorgnet.com
                      </Link>
                      <br/>
                      <Link to="mailto:support@linkorgnet.com" style={{ color: "#4E4A59", fontSize: "14px"}}>
                      support@linkorgnet.com
                      </Link>
                      </h3>
                    </Box>
                  </Box>
                  <Box className="contact-info-items wow fadeInUp" data-wow-delay=".9s">
                    <Box className="icon">
                      <ShareLocationIcon
                        sx={{
                          fontSize: 16,
                          color: "#010156"
                        }}
                      />
                    </Box>
                    <Box className="content">
                      <Typography
                        variant="body1"
                        sx={{
                          fontSize: "18px",
                          fontWeight: "700"
                        }}
                      >Location
                      </Typography>
                      <Typography
                        variant="h5"
                        sx={{ 
                          color: "#4E4A59", 
                          fontSize: "14px"
                        }}
                      >
                        177B Sinari Daranijo Street, 
                        <br/> Victoria Island, Lagos
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box className="col-lg-6 mt-5 mt-lg-0">
              <Box className="contact-box">
                <Box className="contact-title">
                  <Typography 
                    variant="h3" 
                    className="wow fadeInUp" 
                    data-wow-delay=".3s"
                    sx={{
                      color: "#010156",
                      fontWeight: 800,
                      fontSize: "30px"
                    }}
                  >
                    Make an Enquiry
                  </Typography>
                  <Typography
                    variant="body1" 
                    className="wow fadeInUp" 
                    data-wow-delay=".5s"
                  >
                    We are ready to help with your next project. Let&apos;s work together on it.
                  </Typography>
                </Box>
                <Box className="contact-form-items">
                  <form action="#" id="contact-form" method="POST">
                    <Box className="row g-3">
                      <Box className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                        <Box className="form-clt">
                          <input type="text" name="Firstname" id="Firstname" placeholder="Firstname" />
                          <Box className="icon">
                            <i className="far fa-user"></i>
                          </Box>
                        </Box>
                      </Box>
                      <Box className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                        <Box className="form-clt">
                          <input type="text" name="Lastname" id="Lastname" placeholder="Lastname" />
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
                      <Box className="col-lg-6 wow fadeInUp" data-wow-delay=".5s">
                        <Box className="form-clt">
                          <input type="text" name="Companyname" id="Companyname" placeholder="Company Name" />
                          <Box className="icon">
                            <i className="far fa-envelope"></i>
                          </Box>
                        </Box>
                      </Box>
                      <Box className="col-lg-6 wow fadeInUp" data-wow-delay=".5s">
                        <Box className="form-clt">
                          <input type="text" name="Address" id="Address" placeholder="Address" />
                          <Box className="icon">
                            <i className="far fa-envelope"></i>
                          </Box>
                        </Box>
                      </Box>
                      <Box className="col-lg-6 wow fadeInUp" data-wow-delay=".5s">
                        <Box className="form-clt">
                          <input type="text" name="PhoneNumber" id="PhoneNumber" placeholder="Phone Number" />
                          <Box className="icon">
                            <i className="far fa-envelope"></i>
                          </Box>
                        </Box>
                      </Box>
                      
                      <Box className="col-lg-6">
                        <Box className="form-clt">
                          <Box className={`nice-select ${isStateOpen ? 'open' : ''}`} tabIndex="0" onClick={() => toggleDropdown('state')}>
                            <span className="current">{selectedState || "Select State"}</span>
                            {isStateOpen && (
                              <ul className="list">
                                {states.map((state, index) => (
                                  <li key={index} className="option" onClick={() => selectOption(state, 'state')}>
                                    {state}
                                  </li>
                                ))}
                              </ul>
                            )}
                          </Box>
                        </Box>
                      </Box>

                      {/* LGA Dropdown */}
                      {lgas.length > 0 && (
                        <Box className="col-lg-6">
                          <Box className="form-clt">
                            <Box className={`nice-select ${isLgaOpen ? 'open' : ''}`} tabIndex="0" onClick={() => toggleDropdown('lga')}>
                              <span className="current">{selectedLga || "Select LGA"}</span>
                              {isLgaOpen && (
                                <ul className="list">
                                  {lgas.map((lga, index) => (
                                    <li key={index} className="option" onClick={() => selectOption(lga, 'lga')}>
                                      {lga}
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </Box>
                          </Box>
                        </Box>
                      )}

                      {/* Topic Dropdown */}
                      <Box className="col-lg-12">
                        <Box className="form-clt">
                          <Box className={`nice-select ${isTopicOpen ? 'open' : ''}`} tabIndex="0" onClick={() => toggleDropdown('topic')}>
                            <span className="current">{selectedTopic}</span>
                            {isTopicOpen && (
                              <ul className="list">
                                {['VSAT', 'VOIP', 'Maritime VSAT', 'Network Services', 'Terrestrial Comm.', 'Packaging'].map((topic, index) => (
                                  <li key={index} className="option" onClick={() => selectOption(topic, 'topic')}>
                                    {topic}
                                  </li>
                                ))}
                              </ul>
                            )}
                          </Box>
                        </Box>
                      </Box>

                      <Box className="col-lg-12 wow fadeInUp" data-wow-delay=".5s">
                        <Box className="form-clt">
                          <textarea name="Description" id="Description" placeholder="Write Your Message"></textarea>
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
