import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import WOW from "wowjs";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { LocationCity } from "@mui/icons-material";
import CallIcon from "@mui/icons-material/Call";
import MailIcon from "@mui/icons-material/Mail";
import ShareLocationIcon from "@mui/icons-material/ShareLocation";



export const ContactForm = () => {
    useEffect(() => {
        new WOW.WOW({ live: false }).init();
      }, []);
    
      const [states] = useState([
        "Abia", "Adamawa", "AkwaIbom", "Anambra", "Bauchi", "Bayelsa", "Benue", "Borno", 
        "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "FCT", "Gombe", "Imo",
        "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", "Kwara", "Lagos", 
        "Nasarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo", "Plateau", "Rivers", "Sokoto",
        "Taraba", "Yobe", "Zamfara"
      ]);
    
      const [selectedState, setSelectedState] = useState("");
      const [lgas, setLgas] = useState([]);
      const [selectedLga, setSelectedLga] = useState("");
      
      const [isStateOpen, setIsStateOpen] = useState(false);
      const [isLgaOpen, setIsLgaOpen] = useState(false);
      const [isTopicOpen, setIsTopicOpen] = useState(false);
      const [selectedTopic, setSelectedTopic] = useState("Choose Topic");
    
      const toggleDropdown = (dropdown) => {
        if (dropdown === "state") setIsStateOpen(!isStateOpen);
        if (dropdown === "lga") setIsLgaOpen(!isLgaOpen);
        if (dropdown === "topic") setIsTopicOpen(!isTopicOpen);
      };
    
      const selectOption = (option, dropdown) => {
        if (dropdown === "state") {
          setSelectedState(option);
          fetchLgas(option);  // Fetch LGAs after selecting state
          setIsStateOpen(false);
        } else if (dropdown === "lga") {
          setSelectedLga(option);
          setIsLgaOpen(false);
        } else if (dropdown === "topic") {
          setSelectedTopic(option);
          setIsTopicOpen(false);
        }
      };
    
      const fetchLgas = (state) => {
        const dummyLgas = {
          Lagos: ["Ikeja", "Surulere", "Epe"],
          Abia: ["Aba North", "Aba South", "Arochukwu"],
        };
        setLgas(dummyLgas[state] || []);
      };
    
    
    return(
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
                            <AccountBoxIcon
                              sx={{
                                fontSize: 18,
                                color: "#010156",
                                marginLeft:"-14px",
                                marginTop: "-5px"
                              }}
                            />
                          </Box>
                        </Box>
                      </Box>
                      <Box className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                        <Box className="form-clt">
                          <input type="text" name="Lastname" id="Lastname" placeholder="Lastname" />
                          <Box className="icon">
                            <AccountBoxIcon
                              sx={{
                                fontSize: 18,
                                color: "#010156",
                                marginLeft:"-14px",
                                marginTop: "-5px"
                              }}
                            />
                          </Box>
                        </Box>
                      </Box>
                      <Box className="col-lg-6 wow fadeInUp" data-wow-delay=".5s">
                        <Box className="form-clt">
                          <input type="text" name="email" id="email" placeholder="Email" />
                          <Box className="icon">
                            <MailIcon
                              sx={{
                                fontSize: 18,
                                color: "#010156",
                                marginLeft:"-14px",
                                marginTop: "-5px"
                              }}
                            />
                          </Box>
                        </Box>
                      </Box>
                      <Box className="col-lg-6 wow fadeInUp" data-wow-delay=".5s">
                        <Box className="form-clt">
                          <input type="text" name="Companyname" id="Companyname" placeholder="Company Name" />
                          <Box className="icon">
                            <LocationCity
                              sx={{
                                fontSize: 18,
                                color: "#010156",
                                marginLeft:"-14px",
                                marginTop: "-5px"
                              }}
                            />
                          </Box>
                        </Box>
                      </Box>
                      <Box className="col-lg-6 wow fadeInUp" data-wow-delay=".5s">
                        <Box className="form-clt">
                          <input type="text" name="Address" id="Address" placeholder="Address" />
                          <Box className="icon">
                            <ShareLocationIcon
                              sx={{
                                fontSize: 18,
                                color: "#010156",
                                marginLeft:"-14px",
                                marginTop: "-5px"
                              }}
                            />
                          </Box>
                        </Box>
                      </Box>
                      <Box className="col-lg-6 wow fadeInUp" data-wow-delay=".5s">
                        <Box className="form-clt">
                          <input type="text" name="PhoneNumber" id="PhoneNumber" placeholder="Phone Number" />
                          <Box className="icon">
                            <CallIcon
                              sx={{
                                fontSize: 18,
                                color: "#010156",
                                marginLeft:"-14px",
                                marginTop: "-5px"
                              }}
                            />
                          </Box>
                        </Box>
                      </Box>
                      
                      <Box className="col-lg-6 wow fadeInUp" data-wow-delay=".5s">
                        <Box className="form-clt">
                          <Box className={`nice-select ${isStateOpen ? "open" : ""}`} tabIndex="0" onClick={() => toggleDropdown("state")}>
                            <span className="current">{selectedState || "Select State"}</span>
                            {isStateOpen && (
                              <ul className="list">
                                {states.map((state, index) => (
                                  <li key={index} className="option" onClick={() => selectOption(state, "state")}>
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
                            <Box className={`nice-select ${isLgaOpen ? "open" : ""}`} style={{ width: "100%"}} tabIndex="0" onClick={() => toggleDropdown("lga")}>
                              <span className="current">{selectedLga || "Select LGA"}</span>
                              {isLgaOpen && (
                                <ul className="list">
                                  {lgas.map((lga, index) => (
                                    <li key={index} className="option" onClick={() => selectOption(lga, "lga")}>
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
                    <Box className="col-lg-6" >
                        <Box className="form-clt">
                            <Box className={`nice-select ${isTopicOpen ? "open" : ""}`} style={{ width: "100%"}} tabIndex="0" onClick={() => toggleDropdown("topic")}>
                            <span className="current">{selectedTopic}</span>
                            {isTopicOpen && (
                                <ul className="list">
                                {["VSAT", "VOIP", "Maritime VSAT", "Network Services", "Terrestrial Comm.", "Packaging"].map((topic, index) => (
                                    <li key={index} className="option" onClick={() => selectOption(topic, "topic")}>
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
    )
}