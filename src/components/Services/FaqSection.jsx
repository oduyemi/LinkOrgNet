import React from 'react';
import { Box, Typography } from "@mui/material";
import CircularProgressWithLabel from './CircularProgressWithLabel'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { FAQ } from '../FAQ';




const faqData = [
  {
      question: "What industries does LinkOrg Networks serve?",
      answer: "LinkOrg Networks primarily serves maritime and offshore industries, providing satellite communication services to ships, vessels, jack-up barges, and other offshore bases. Additionally, we offer IT and telecommunications solutions for businesses and individuals looking for secure and high-speed connectivity.",
  },
  {
      question: "What internet services does LinkOrg Networks offer?",
      answer: "LinkOrg Networks provides a comprehensive range of internet services, including Fixed VSAT remote internet solutions, marine and offshore internet services, and high-speed internet for individuals and businesses. Our services are designed to ensure reliable and seamless connectivity, even in the most challenging environments.",
  },
  {
      question: "How does LinkOrg Networks ensure reliable connectivity for offshore operations?",
      answer: "We specialize in providing reliable communication solutions for offshore safety needs by combining LEO and GEO Satellite technology, Fibre Optics, IP-PBX, and Terrestrial technologies. Our expert engineers are skilled in installing and maintaining satellite systems, ensuring that your operations stay connected at all times.",
  },
  {
      question: "How does LinkOrg Networks prioritize customer satisfaction?",
      answer: "Customer satisfaction is at the heart of everything we do. We strive to understand our clients' needs and exceed their expectations through exceptional service and support. Our commitment to integrity, honesty, and continuous improvement ensures long-term customer relationships and a high level of satisfaction."
  },
  {
      question: "What sets LinkOrg Networks apart from other service providers?",
      answer: "What distinguishes LinkOrg Networks is our unwavering focus on utilizing state-of-the-art technology to provide seamless connectivity solutions. We combine various technologies to deliver tailored professional solutions that meet the diverse requirements of our clients, particularly in challenging offshore environments."
  },
  {
      question: "What sets LinkOrg Networks apart from other service providers?",
      answer: "What distinguishes LinkOrg Networks is our unwavering focus on utilizing state-of-the-art technology to provide seamless connectivity solutions. We combine various technologies to deliver tailored professional solutions that meet the diverse requirements of our clients, particularly in challenging offshore environments."
  },
  {
      question: "Does LinkOrg Networks offer customized solutions for businesses?",
      answer: "Yes, we offer tailored IT and telecom solutions designed to meet the unique needs of businesses. Whether you need secure VPNs, advanced VoIP solutions, or specialized satellite communication services, LinkOrg Networks can customize our offerings to fit your specific requirements and ensure you stay ahead in a digital world."
  }
];


const FaqSection = () => {

  return (
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
  );
};

export default FaqSection;
