import { Box, Button, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { FAQAccordion } from "./FAQAccordion";

const faqData = [
  { question: "Who does LinkOrgNet serve?", answer: "We serve residential estates, businesses, and individuals, looking for secure and high-speed connectivity." },
  { question: "What internet services does LinkOrgNet offer?", answer: "We provide a comprehensive range of internet services, including Fiber Optics, radio technology, and VSAT remote internet solutions, ensuring high-speed and low-latency connectivity." },
  { question: "How does LinkOrgNet prioritize customer satisfaction?", answer: "Customer satisfaction is at the heart of everything we do. We strive to understand our clients' needs and exceed expectations through exceptional service, low MTTR, and 24/7 support." },
  { question: "What sets LinkOrgNet apart from other service providers?", answer: "We leverage cutting-edge technology to deliver seamless connectivity and IT solutions at competitive prices. Our internet speeds reach up to 150Mbps with 99.9% uptime." },
  { question: "Does LinkOrgNet offer customized solutions for businesses?", answer: "Yes! We offer tailored IT solutions, including VoIP, satellite communication, storage, and security services to meet unique business needs." },
  { question: "How does LinkOrgNet benefit me as an individual?", answer: "Our high-speed broadband and VoIP solutions ensure uninterrupted browsing, streaming, and communication—all in one seamless package." },
];

export const FAQs = () => {
  return (
      <Box sx={{ p:{xs:"0px 2.5%", sm:4}, marginTop:{xs:"-50px", sm:"200px"}, width:"100%"}}>
        <Box sx={{ maxWidth:{xs:"95%", sm:"1200px"}, margin: {xs:"0px 2.5%", sm:"0 auto"} }}>
          <Grid container  justifyContent="space-between" sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, width:"100%", height:"fit-content" }}>
            {/* Left Section */}
            <Grid item xs={12} md={5.2} sx={{ display: "flex", flexDirection: "column", justifyContent: "center",height:"fit-content" }}>
              <img src="/images/faqEc.png" alt="eclipse" width="5%" />
              
              <Box sx={{display:"flex",justifyContent:{xs:"center", sm:"left"}, boxShadow: "none", marginTop:{xs:"0px", sm:"0px", height:{xs:"32px", sm:"40px"}}}}>
              <Button
                variant="contained"
                sx={{ display:"flex",justifyContent:"center", boxShadow: "none", fontFamily: "Helvetica", background: "#F1F2F7", color: "#010156", mb: 2, textTransform: "capitalize", borderRadius: "50px", width: "fit-content", '&:hover':{ boxShadow: "none"} }}
              >
                <Box sx={{width:{xs:"14px", sm:"24px"}, height:{xs:"14px", sm:"24px"}, marginRight:"8px", marginTop:{xs:"-5px", sm:"0px"}}}>
                <img src="/images/icons/message-question.png" alt="message question" width="100%" />
                </Box>
                <Typography sx={{fontSize:{xs:"14px", sm:"20px"}}}>
                Frequently Asked Questions
                </Typography> 
              </Button>
   
              </Box>
  
              <Typography variant="h3" sx={{ fontFamily: "Museo Slab Normal", fontWeight:"600", color: "#010156", fontSize:{xs:"24px", sm:"40px"}, letterSpacing:{xs:"-1px", sm:"-2.5px"},width:{xs:"100%", sm:"100%"}, lineHeight:{sm:"64px"}, marginTop:{xs:"15px", sm:"0px"}, textAlign:{xs:"center", sm:"left"}, padding:{xs:"10px", sm:"0px"}}}>
                
              Get <span style={{ color: "#E65D0F" }}>quick answers </span>to your questions so you can make informed decisions about your <span style={{ color: "#E65D0F" }}>internet services </span> 
              </Typography>
  
              <Box sx={{border:"1px solid #D4D5DF", height:{xs:"249px", sm:"423px"}, display:"flex", justifyContent:"center", alignItems:"center", background:"transparent", borderRadius:"24px", marginBottom:{xs:"30px", sm:"0px"}, marginTop:{xs:"20px", sm:"40px"}}}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <img src="/images/gif/bounceMsg.gif" alt="question icon" width="100%" style={{ maxWidth: "300px" }} />
              </motion.div>
              </Box>
  
            </Grid>
  
            {/* Right Section */}
            <Grid item xs={12} md={6.5} sx={{ display: "flex", flexDirection: "column", justifyContent: "center"}}>
              <FAQAccordion faqData={faqData} />
            </Grid>
          </Grid>
        </Box>
      </Box>
      );
    };
    