import { useState } from "react";
import { Accordion, AccordionSummary, AccordionDetails, Typography, Box } from "@mui/material";
import PlusIcon from "/images/icons/plus.png";
import { motion } from "framer-motion";


interface FAQAccordionProps {
  faqData: { question: string, answer: string }[];
}

export const FAQAccordion = ({ faqData }: FAQAccordionProps) => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => (_: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box sx={{ backgroundColor: "#F1F2F7", p: 2, borderTop: "1px solid #000", borderBottom: "1px solid #000", mt: {xs:0, sm:2} }}>
      {faqData.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          style={{ width: "100%" }}
        >
          <Accordion
            expanded={expanded === `panel${index}`}
            onChange={handleChange(`panel${index}`)}
            sx={{
              backgroundColor: "#FFFFFF",
              width: "100%",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              borderTop: index !== 0 ? "1px solid #D0D5DD" : "none", 
              mt: { xs: 1, sm: 2 }, 
              borderRadius: "8px", 
            }}
          >
            <AccordionSummary
              expandIcon={<img src={PlusIcon} alt="expand" width="20px" />}
              sx={{
                backgroundColor: "#FFFFFF",
                minHeight: "75px",
                display: "flex",
                alignItems: "center",
                paddingX: { xs: 1, sm: 2 },
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Helvetica",
                  color: "#010156",
                  fontSize: { xs: "16px", sm: "18px" }, 
                  fontWeight: "medium",
                }}
              >
                {item.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ backgroundColor: "#F1F2F7" }}>
              <Typography
                sx={{
                  fontFamily: "Inter",
                  color: "#98A2B3",
                  fontSize: { xs: "14px", sm: "16px" }, 
                }}
              >
                {item.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        </motion.div>
      ))}
    </Box>
  );
};
