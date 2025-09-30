import { Box } from "@mui/material";
import TopNav from "../navigation/TopNav";
import { ResidentialHero } from "../components/Residential/Hero";
import { ResidentialPlan } from "../components/Residential/Plan";
import { InternetFAQs } from "../components/Residential/FAQs";
import { AboutSection } from "../components/Home/About";
import { PreFooter } from "../components/Home/PreFooter";
import { Footer } from "../navigation/Footer";



const Residential = () => {
  return (
    <Box
      sx={{ 
        // backgroundColor: "#F7F9FC", 
        minHeight: "100vh", 
        width: "100%" 
      }}
    >
      <TopNav  backgroundColor="#F7F9FC"/>
      <ResidentialHero />
      <Box mt={{ xs: 2, md: 12 }}>
        <ResidentialPlan />
      </Box>
      <Box mt={{ xs:4, md:-18}}>
        <InternetFAQs />
      </Box>
      <Box mt={-3}>
        <AboutSection />
      </Box>
      <Box marginTop="30px">
        <PreFooter />
      </Box>
      <Footer />
    </Box>
  )
}

export default Residential;