import React from "react";
import { FAQ } from "../FAQ";
import CircularProgressWithLabel from "../Services/CircularProgressWithLabel";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import faq5  from "../../assets/images/faq5.jpg";
import RemoveIcon from '@mui/icons-material/Remove';




const faqData = [
    {
      question: "What types of storage options do you offer (cloud, physical, hybrid)?",
      answer: "We offer a variety of storage options, including cloud storage, on-premises physical storage, and hybrid models that combine the best of both worlds.",
    },
    {
        question: "How secure is the data stored on your platform, and what backup options are available?",
        answer: "Our storage solutions come with encryption, secure access controls, and automated backup systems to ensure that your data is always protected and recoverable.",
    },
    {
        question: "Can you assist with migrating my data to your storage solutions without downtime?",
        answer: "Yes, we offer seamless data migration services to ensure that your data can be moved to our platform without any significant downtime or disruptions.",
    },
    {
        question: "Do you offer disaster recovery services as part of your storage solutions?",
        answer: "Yes, we offer disaster recovery services that include offsite backups and rapid restoration processes, ensuring your data is always recoverable in case of emergencies.",
    },
    {
        question: "How scalable are your storage solutions as my data storage needs grow?",
        answer: "Our storage solutions are fully scalable, allowing you to expand your storage capacity as your data needs grow, without compromising on performance or security."
    }
  ];

export const StorageQuestions = () => {
    return(
        <Box>
            <Box className="breadcrumb-wrapper section-padding bg-cover" 
            style={{
                backgroundImage: `url(${faq5}`
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
                                Storage Questions
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

