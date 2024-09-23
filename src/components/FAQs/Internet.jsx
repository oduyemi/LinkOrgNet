import React from "react";
import { FAQ } from "../FAQ";
import CircularProgressWithLabel from "../Services/CircularProgressWithLabel";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import faq2  from "../../assets/images/faq2.jpg";
import RemoveIcon from '@mui/icons-material/Remove';




const faqData = [
    {
      question: "What internet speed options does LinkOrg Networks offer for businesses and individuals?",
      answer: "LinkOrg Networks provides a range of internet speeds to suit the needs of both businesses and individuals. Our offerings include high-speed broadband, with options for faster connections based on your requirements and location.",
    },
    {
        question: "How do you ensure reliable internet connectivity in remote areas?",
        answer: "We use a combination of cutting-edge VSAT and LEO satellite technology to provide reliable internet services in remote areas. This ensures continuous connectivity even in challenging environments, such as offshore or rural locations.",
    },
    {
        question: "Are there any data caps or limitations with your internet plans?",
        answer: "No, our internet services come with unlimited data usage, ensuring that you have access to high-speed internet without worrying about exceeding any data limits.",
    },
    {
        question: "Can your internet services support heavy video conferencing and cloud usage?",
        answer: "Yes, our internet services are designed to handle bandwidth-heavy tasks like video conferencing and cloud usage. We ensure high-speed, low-latency connectivity, even during peak usage times.",
    },
    {
        question: "Do you offer redundancy solutions to prevent internet downtime?",
        answer: "Yes, we provide redundancy options through backup satellite connections and fiber-optic setups to ensure that your business stays connected in case of an internet outage."
    }
  ];

export const InternetQuestions = () => {
    return(
        <Box>
            <Box className="breadcrumb-wrapper section-padding bg-cover" 
            style={{
                backgroundImage: `url(${faq2}`
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
                                Internet Questions
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

