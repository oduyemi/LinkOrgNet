import React from "react";
import { FAQ } from "../FAQ";
import CircularProgressWithLabel from "../Services/CircularProgressWithLabel";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import mainFaq  from "../../assets/images/mainFaq.jpg";
import RemoveIcon from '@mui/icons-material/Remove';




const faqData = [
    {
        question: "Who does LinkOrg Networks serve?",
        answer: "LinkOrg Networks serves businesses and individuals, providing reliable internet services. We also offer IT and telecommunications, Voice over Internet Protocol (VoIP), storage solutions, and Enterprise VPN. solutions for businesses and individuals looking for secure and high-speed connectivity.",
    },
    {
        question: "What internet services does LinkOrg Networks offer?",
        answer: "LinkOrg Networks provides a comprehensive range of internet services, which includes fixed connectivity (Fibre Optics), VSAT remote internet solutions, with high speed and low latency internet for individuals and businesses. Our services are designed to ensure reliable and seamless connectivity, even in the most challenging environments.",
    },
    {
        question: "How does LinkOrg Networks prioritize customer satisfaction?",
        answer: "Customer satisfaction is at the heart of everything we do. We strive to understand our clients' needs and exceed their expectations through exceptional service and 24/7 support. Our commitment to integrity, honesty, and continuous improvement ensures long-term customer relationships and a high level of satisfaction."
    },
    {
        question: "What sets LinkOrg Networks apart from other service providers?",
        answer: "What sets LinkOrg Networks apart is our commitment to leveraging cutting-edge technology to deliver seamless connectivity and IT solutions at competitive prices. Our internet services include VoIP solutions as an added feature, providing extra value to our offerings. We also provide security solutions that meet the diverse requirements of our clients."
    },
    {
        question: "Does LinkOrg Networks offer customized solutions for businesses?",
        answer: "Yes, we offer tailored IT and telecom solutions designed to meet the unique needs of businesses. Whether you need enterprise VPN for your organization, advanced VoIP solutions, specialized satellite communication services, security and software solutions. LinkOrg Networks can customize our offerings to fit your specific requirements and ensure you stay ahead in a digital world."
    },
    {
        question: "How does Linkorg Networks benefit me as an individual?",
        answer: "LinkOrg Networks empowers you with blazing-fast broadband connectivity, ensuring seamless internet access while integrating advanced VoIP solutions for crystal-clear voice communication. With everything bundled in one, you enjoy uninterrupted browsing, streaming, and communication—all through a single, easy-to-use platform tailored to your needs."
    }
  ];

export const GeneralQuestions = () => {
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
                                General Questions
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
                    <CircularProgressWithLabel value={95} />
                    <Box className="content" mt={2}>
                      <Typography 
                        variant="h6"
                        sx={{
                          fontSize: "18px",
                          fontWeight: "500",
                          fontFamily: "montserrat"
                        }}
                      >
                        Efficient <br />
                        work delivery
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

