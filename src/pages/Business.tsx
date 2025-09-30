import { Box } from "@mui/material";
import { FAQs } from "../components/Business/FAQs";
import { AboutSection } from "../components/Home/About";
import { PreFooter } from "../components/Home/PreFooter";
import { Footer } from "../navigation/Footer";
import TopNav from "../navigation/TopNav"
import HeroSection from "../components/Business/HeroSection"
import BusinessPlans from "../components/Business/BusinessPlans";



const Business = () => {
  return (
    <Box>
      <TopNav  backgroundColor="#FFF9F3"/>
      <HeroSection />
      <BusinessPlans />
      <Box marginTop="30px">
        <FAQs />
      </Box>
      <Box>
        <AboutSection />
      </Box>
      <Box marginTop="30px">
        <PreFooter />
      </Box>
      <Footer />
    </Box>
  )
}

export default Business;