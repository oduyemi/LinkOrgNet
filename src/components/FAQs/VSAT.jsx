import React from "react";
import { FAQ } from "../FAQ";
import CircularProgressWithLabel from "../Services/CircularProgressWithLabel";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import mainFaq  from "../../assets/images/mainFaq.jpg";
import RemoveIcon from '@mui/icons-material/Remove';




const faqData = [
    {
      question: "What is VSAT and how does it work?",
      answer: "VSAT (Very Small Aperture Terminal) is a satellite communication system that uses small dish antennas to provide reliable data, voice, and internet connectivity, especially in remote areas. It works by sending and receiving data via satellite, ensuring connectivity even in regions without traditional infrastructure."
    },
    {
        question: "What are the benefits of using VSAT solutions for offshore and remote locations?",
        answer: "VSAT offers reliable, high-speed connectivity in areas where terrestrial networks are unavailable. It is ideal for maritime, offshore, and remote operations, providing uninterrupted communication for data, voice, and internet services."
    },
    {
        question: "Can VSAT support high-speed internet for businesses and large operations?",
        answer: "Yes, VSAT can support high-speed internet for both small and large-scale operations, providing low-latency connections and enough bandwidth for data-heavy applications like video conferencing, file transfers, and cloud services."
    },
    {
        question: "How do you ensure reliable satellite connectivity in harsh environments?",
        answer: "Our VSAT solutions use advanced satellite technology (LEO and GEO satellites) combined with redundant systems to ensure continuous connectivity. Our equipment is also built to withstand extreme weather and environmental conditions, ensuring uninterrupted service."
    },
    {
        question: "Is VSAT suitable for mobile units like ships and vehicles?",
        answer: "Yes, our VSAT solutions are specifically designed for mobility and are ideal for ships, offshore vessels, and other moving units. We provide stable satellite connections to ensure seamless communication even while on the move."
    },
    {
        question: "What type of support and maintenance do you offer for VSAT installations?",
        answer: "We provide 24/7 technical support and remote monitoring to ensure your VSAT system operates smoothly. Our team of engineers also offers regular maintenance and on-site support as needed to prevent and resolve any issues."
    },
    {
        question: "How does LinkOrg Networks' VSAT solution compare to traditional internet services?",
        answer: "VSAT solutions provide internet access in regions where traditional services like fiber or cable are unavailable. While traditional services may offer higher speeds in well-connected areas, VSAT excels in delivering reliable, low-latency internet to remote and offshore locations."
    },
    {
        question: "What are the installation requirements for a VSAT system?",
        answer: "Installing a VSAT system typically requires a small satellite dish, a modem, and clear line-of-sight to the satellite. Our team handles all aspects of installation, including site surveys, equipment setup, and network configuration."
    },
    {
        question: "Can VSAT be used as a backup connection for terrestrial networks?",
        answer: "Yes, VSAT can be configured as a reliable backup solution for terrestrial networks. In case of network outages or disruptions, the VSAT connection ensures continuous connectivity."
    },
    {
        question: "Does LinkOrg Networks offer both LEO and GEO satellite solutions for VSAT?",
        answer: "Yes, we offer both Low Earth Orbit (LEO) and Geostationary (GEO) satellite solutions for VSAT. LEO satellites provide lower latency, while GEO satellites cover a wider area. We tailor our solutions based on your specific needs."
    }
  ];

export const VSATQuestions = () => {
    return(
        <Box>
            <Box className="breadcrumb-wrapper section-padding bg-cover" 
            style={{
                backgroundImage: `url(${mainFaq}`
            }}
        >
                <Box className="container">
                    <Box className="page-heading">
                        <Typography 
                            variant="h1" 
                            className="wow fadeInUp" 
                            data-wow-delay=".3s"
                            sx={{
                            }}
                        >
                            fAQs
                        </Typography>
                        <ul className="breadcrumb-items wow fadeInUp" data-wow-delay=".5s">
                            <li>
                                <Link to="/">
                                Home Page
                                </Link>
                            </li>
                            <li>
                                <RemoveIcon />
                            </li>
                            <li>
                                <Link to="">
                                    FAQs
                                </Link>
                            </li>
                            <li>
                                VSAT Questions
                            </li>
                        </ul>
                    </Box>
                </Box>
            </Box>
    
            {/* FAQ Section */}
            <Box className="faq-section section-padding" style={{ backgroundColor: "#FFFAFF"}}>
      <Box className="container">
        <Box className="about-wrapper">
          <Box className="row">
            <Box className="col-lg-6">
              <Box className="about-content">
                <Box className="section-title">
                  <span className="wow fadeInUp" style={{ textDecoration: "none"}}>Frequently Asked Questions</span>
                  <Typography 
                    variant="h2" 
                    className="wow fadeInUp blutext" 
                    data-wow-delay=".3s"
                    sx={{
                      fontSize: "40px",
                      fontWeight: 800,
                      color: "#010156",
                      fontFamily: "montserrat",
                    }}
                  >
                    Have a question in <br />
                    your mind?
                  </Typography>
                </Box>
                <Typography 
                  className="mt-4 mt-md-0 wow fadeInUp" 
                  data-wow-delay=".5s"
                  sx={{
                    fontSize: "16px",
                    fontFamily: "montesserat"
                  }}
                >
                  LinkOrg Networks is a premier provider of 
                  advanced satellite communication and IT 
                  solutions, dedicated to empowering industries 
                  and supporting global connectivity. 
                <br/> 
                <br/> 
                We deliver reliable, high-performance services 
                tailored to meet the unique demands of businesses 
                across various sectors.
                </Typography>

              <Box 
                  className="circle-progress-bar-wrapper" 
                  display="flex" 
                  flexDirection="row" 
                  justifyContent="space-between" 
                  mt={4}
                >
                  <Box 
                    className="single-circle-bar wow fadeInUp" 
                    data-wow-delay=".7s" 
                    textAlign="center"
                  >
                    {/* Custom Circle Progress with Value */}
                    <CircularProgressWithLabel value={88} />
                    <Box className="content" mt={2}>
                      <Typography 
                        variant="h6"
                        sx={{
                          fontSize: "18px",
                          fontWeight: "500",
                          fontFamily: "montserrat"
                        }}
                      >
                        Organizations <br />
                        work support
                      </Typography>
                    </Box>
                  </Box>
                  
                  <Box 
                    className="single-circle-bar wow fadeInUp" 
                    data-wow-delay=".9s" 
                    textAlign="center"
                    mr={5}
                  >
                    {/* Custom Circle Progress with Value */}
                    <CircularProgressWithLabel value={93} />
                    <Box className="content" mt={2}>
                      <Typography 
                        variant="h6"
                        sx={{
                          fontSize: "18px",
                          fontWeight: "500",
                          fontFamily: "montserrat"
                        }}
                      >
                        Management & <br />
                        Support Services
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                </Box>
                </Box>
                <FAQ faqData={faqData} />
          </Box>
        </Box>
      </Box>
    </Box>
        </Box>

    )
}

