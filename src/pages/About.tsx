import { Box } from "@mui/material";
import TopNav from "../navigation/TopNav";
import { AboutHero } from "../components/About/Hero";
import { PreFooter } from "../components/Home/PreFooter";
import { Footer } from "../navigation/Footer";
import { ValueGrid } from "../components/About/ValueGrid";
import { TeamSection } from "../components/About/Team";
import { Discover } from "../components/About/Discover";
import GlobalCustomers from "../components/Home/GlobalCustomers";

const About = () => {
  return (
    <Box 
      sx={{ 
        // backgroundColor: "#f8f9fa", 
        minHeight: "100vh", 
        width: "100%" 
      }}
    >
      <TopNav backgroundColor="#fff" />
      <Box mt={6}>
        <AboutHero />
      </Box>
      <Box sx={{ mt:{xs:-1, sm:-6} }}>
        <ValueGrid />
      </Box>
      <Box sx={{ mt: {xs:4, sm:2} }}>
        <Discover />
      </Box>
      <Box>
        <TeamSection />
      </Box>
      <Box mt={-10}>
        <GlobalCustomers />
      </Box>
      <Box mt={12}>
        <PreFooter />
      </Box>
      <Footer />
    </Box>
  );
};

export default About;
