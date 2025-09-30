import { Box } from "@mui/material";
// import { FAQs } from "../components/Enterprise/FAQs";
import { AboutSection } from "../components/Home/About";
import { PreFooter } from "../components/Home/PreFooter";
import { Footer } from "../navigation/Footer";
import TopNav from "../navigation/TopNav"
import HeroSection from "../components/Enterprise/HeroSection"
import EnterpriseServices from "../components/Enterprise/EnterpriseServices";



const Enterprise = () => {
  return (
    <Box>
      <TopNav  backgroundColor="#FFF7FC"/>
      <HeroSection />
      <EnterpriseServices />
      <Box mt={-14}>
        <AboutSection />
      </Box>
      <Box marginTop="30px">
       <PreFooter />
      </Box>
      <Footer />
    </Box>
  )
}

export default Enterprise;