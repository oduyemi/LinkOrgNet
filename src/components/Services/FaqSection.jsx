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
                  Transmds is the world’s leading global logistics <br />
                  supplier — we support industry and trade the
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
                    <CircularProgressWithLabel value={68} />
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
                    question="How to learn digital marketing?"
                    answer="Ne summo dictas pertinacia nam. Illum cetero vocent ei vim, case regione signiferumque vim te."
                    isOpen={expanded === 'panel1'}
                    toggleAccordion={handleChange('panel1')}
                    style={{marginBottom: "20px"}}
                  />
                  <FaqItem
                    question="Can I use the demos made by Ewebot?"
                    answer="Ne summo dictas pertinacia nam. Illum cetero vocent ei vim, case regione signiferumque vim te."
                    isOpen={expanded === 'panel2'}
                    toggleAccordion={handleChange('panel2')}
                  />
                  <FaqItem
                    question="Why didn’t you showcase my submission?"
                    answer="Ne summo dictas pertinacia nam. Illum cetero vocent ei vim, case regione signiferumque vim te."
                    isOpen={expanded === 'panel3'}
                    toggleAccordion={handleChange('panel3')}
                  />
                  <FaqItem
                    question="Why didn’t you showcase my submission?"
                    answer="Ne summo dictas pertinacia nam. Illum cetero vocent ei vim, case regione signiferumque vim te."
                    isOpen={expanded === 'panel4'}
                    toggleAccordion={handleChange('panel4')}
                  />
                    <FaqItem
                    question="Why didn’t you showcase my submission?"
                    answer="Ne summo dictas pertinacia nam. Illum cetero vocent ei vim, case regione signiferumque vim te."
                    isOpen={expanded === 'panel5'}
                    toggleAccordion={handleChange('panel5')}
                  />
                  <FaqItem
                    question="Why didn’t you showcase my submission?"
                    answer="Ne summo dictas pertinacia nam. Illum cetero vocent ei vim, case regione signiferumque vim te."
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
