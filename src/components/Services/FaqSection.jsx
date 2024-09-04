import React, { useState } from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { BiSolidMinusCircle } from 'react-icons/bi';
import CircularProgressWithLabel from './CircularProgressWithLabel'; 
import 'bootstrap/dist/css/bootstrap.min.css';

// FaqItem component
const FaqItem = ({ question, answer, isOpen, toggleAccordion }) => {
  return (
    <Accordion expanded={isOpen} onChange={toggleAccordion} className="wow fadeInUp">
      <AccordionSummary
        expandIcon={isOpen ? <BiSolidMinusCircle size={"25px"} color={"#E65D0F"} /> : <BsFillPlusCircleFill size={"25px"} color={"#E65D0F"} />}
      >
        <Typography variant="h6" className="accordion-header">
          {question}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{answer}</Typography>
      </AccordionDetails>
    </Accordion> 
  );
};

const FaqSection = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box className="faq-section section-padding section-bg-2">
      <Box className="container">
        <Box className="about-wrapper">
          <Box className="row">
            <Box className="col-lg-6">
              <Box className="about-content">
                <Box className="section-title">
                  <span className="wow fadeInUp">Frequently Asked Questions</span>
                  <Typography variant="h2" className="wow fadeInUp" data-wow-delay=".3s">
                    Have a question in <br />
                    your mind?
                  </Typography>
                </Box>
                <Typography className="mt-4 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                LinkOrg Networks is a premier provider of advanced satellite communication and IT solutions, dedicated to empowering industries and supporting global connectivity. 
                <br/> 
                <br/> 
                We deliver reliable, high-performance services tailored to meet the unique demands of businesses across various sectors.
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
                      <Typography variant="h6">
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
                      <Typography variant="h6">
                        Management & <br />
                        Support Services
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                </Box>
                </Box>
                

            <Box className="col-lg-6 mt-5 mt-lg-0">
              <Box className="faq-content style-2 style-color" >
                <Box className="faq-accordion">
                  <FaqItem
                    question="What industries does LinkOrg Networks serve?"
                    answer="LinkOrg Networks primarily serves maritime and offshore industries, providing satellite communication services to ships, vessels, jack-up barges, and other offshore bases. Additionally, we offer IT and telecommunications solutions for businesses and individuals looking for secure and high-speed connectivity."
                    isOpen={expanded === 'panel1'}
                    toggleAccordion={handleChange('panel1')}
                    style={{marginBottom: "20px", fontFamily: "Montserrat"}}
                    sx={{
                        fontSize: "18px",
                        fontWeight: "300",
                        fontFamily: "Montserrat"
                    }}
                  />
                  <FaqItem
                    question="What internet services does LinkOrg Networks offer?"
                    answer="LinkOrg Networks provides a comprehensive range of internet services, including Fixed VSAT remote internet solutions, marine and offshore internet services, and high-speed internet for individuals and businesses. Our services are designed to ensure reliable and seamless connectivity, even in the most challenging environments."
                    isOpen={expanded === 'panel2'}
                    toggleAccordion={handleChange('panel2')}
                  />
                  <FaqItem
                    question="How does LinkOrg Networks ensure reliable connectivity for offshore operations?"
                    answer="We specialize in providing reliable communication solutions for offshore safety needs by combining LEO and GEO Satellite technology, Fibre Optics, IP-PBX, and Terrestrial technologies. Our expert engineers are skilled in installing and maintaining satellite systems, ensuring that your operations stay connected at all times."
                    isOpen={expanded === 'panel3'}
                    toggleAccordion={handleChange('panel3')}
                  />
                  <FaqItem
                    question="How does LinkOrg Networks prioritize customer satisfaction?"
                    answer="Customer satisfaction is at the heart of everything we do. We strive to understand our clients' needs and exceed their expectations through exceptional service and support. Our commitment to integrity, honesty, and continuous improvement ensures long-term customer relationships and a high level of satisfaction."
                    isOpen={expanded === 'panel4'}
                    toggleAccordion={handleChange('panel4')}
                  />
                    <FaqItem
                    question="What sets LinkOrg Networks apart from other service providers?"
                    answer="What distinguishes LinkOrg Networks is our unwavering focus on utilizing state-of-the-art technology to provide seamless connectivity solutions. We combine various technologies to deliver tailored professional solutions that meet the diverse requirements of our clients, particularly in challenging offshore environments."
                    isOpen={expanded === 'panel5'}
                    toggleAccordion={handleChange('panel5')}
                  />
                  <FaqItem
                    question="Does LinkOrg Networks offer customized solutions for businesses?"
                    answer="Yes, we offer tailored IT and telecom solutions designed to meet the unique needs of businesses. Whether you need secure VPNs, advanced VoIP solutions, or specialized satellite communication services, LinkOrg Networks can customize our offerings to fit your specific requirements and ensure you stay ahead in a digital world."
                    isOpen={expanded === 'panel6'}
                    toggleAccordion={handleChange('panel6')}

                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default FaqSection;
