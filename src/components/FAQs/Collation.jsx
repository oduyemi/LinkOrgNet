import React from "react";
import { FAQ } from "../FAQ";
import CircularProgressWithLabel from "../Services/CircularProgressWithLabel";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import faq1  from "../../assets/images/faq1.jpg";
import RemoveIcon from '@mui/icons-material/Remove';




const faqData = [
    {
      question: "What security measures does your data center offer to protect my data?",
      answer: "Our data centers employ state-of-the-art security protocols, including 24/7 surveillance, biometric access controls, and advanced fire suppression systems to ensure the highest level of data protection.",
    },
    {
        question: "How scalable are your collocation services for growing businesses?",
        answer: "Our collocation services are highly scalable, allowing businesses to easily expand their infrastructure as their needs grow. We offer flexible space options to accommodate everything from small setups to enterprise-level deployments.",
    },
    {
        question: "Do you provide 24/7 monitoring and technical support for data center clients?",
        answer: "Yes, we offer round-the-clock monitoring and technical support to ensure that your infrastructure remains operational and secure at all times.",
    },
    {
        question: "Can I easily migrate my existing infrastructure into your data center?",
        answer: "Yes, our team of experts will assist you in migrating your existing infrastructure into our data center with minimal disruption to your business operations.",
    },
    {
        question: "What uptime guarantee do you provide for collocation services?",
        answer: "We offer a 99.99% uptime guarantee for our collocation services, ensuring that your business-critical applications and data are always accessible."
    }
  ];

export const CollationQuestions = () => {
    return(
        <Box>
            <Box className="breadcrumb-wrapper section-padding bg-cover" 
            style={{
                backgroundImage: `url(${faq1}`
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
                                Collocation Questions
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

