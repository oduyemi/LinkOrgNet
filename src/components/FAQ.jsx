import React, { useState } from "react";
import { Box, Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import { BiSolidMinusCircle } from "react-icons/bi";
import { BsFillPlusCircleFill } from "react-icons/bs";


const FaqItem = ({ question, answer, isOpen, toggleAccordion }) => {
  return (
    <Accordion expanded={isOpen} onChange={toggleAccordion} className="wow fadeInUp">
      <AccordionSummary
        expandIcon={
          isOpen ? (
            <BiSolidMinusCircle size={"20px"} color={"#E65D0F"} />
          ) : (
            <BsFillPlusCircleFill size={"20px"} color={"#010156"} />
          )
        }
      >
        <Typography
          variant="h6"
          className="accordion-header"
          sx={{
            fontSize: "18px",
            fontWeight: "500",
            fontFamily: "Montserrat",
            color: "black",
            transition: "color 0.3s ease",
          }}
        >
          {question}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{answer}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export const FAQ = ({ faqData }) => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box className="col-lg-6 mt-5 mt-lg-0">
      <Box className="faq-content style-2 style-color">
        <Box className="faq-accordion">
          {faqData.map((item, index) => (
            <FaqItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={expanded === `panel${index}`}
              toggleAccordion={handleChange(`panel${index}`)}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};
