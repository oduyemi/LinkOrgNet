import { Box } from "@mui/material";
import { FAQs } from "../components/Home/FAQs";
import { AboutSection } from "../components/Home/About";
import { ServiceCards } from "../components/Home/ServiceCards"
import { PreFooter } from "../components/Home/PreFooter";
import { Footer } from "../navigation/Footer";
import TopNav from "../navigation/TopNav"
import HeroSection from "../components/Home/HeroSection"
import { ClearCalls } from "../components/Home/ClearCalls";
import { OffGrid } from "../components/Home/OffGrid";
import GlobalCustomers from "../components/Home/GlobalCustomers";
import BuyInternet from "../components/Home/BuyInternet";
import ExploreInternet from "../components/Home/ExploreInternet";
import { Testimonials } from "../components/Home/Testimonials";



const Home = () => {
  return (
    <Box>
      <TopNav  backgroundColor="#F2F7F8"/>
      <HeroSection />
      <GlobalCustomers />
      <Box mt={{xs: 4, md: 2}}>
        <BuyInternet />
      </Box>
      <Box mt={{xs:-24, md:-14}}>
        <ExploreInternet />
      </Box>
      <Box mt={-10}>
        <ServiceCards />
      </Box>
      <Box mt={-4}>
        <ClearCalls />
      </Box>
      <Box mt={-2}>
        <OffGrid />
      </Box>
      <Box>
        <Testimonials />
      </Box>
      <Box mt={{ xs:4, md:-24 }}>
        <FAQs />
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

export default Home;