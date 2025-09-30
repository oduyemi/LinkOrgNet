import { useState } from "react";
import {Box, Typography, Button, Grid, Paper  } from "@mui/material";
import { motion } from "framer-motion";
import { FAQAccordion } from "../Home/FAQAccordion";
import Cards1 from "/images/svg/cards1.svg";
import Cards2 from "/images/svg/Cards2.svg";
import Cards3 from "/images/svg/Cards3.svg";
import Cards4 from "/images/svg/Cards4.svg";
import Cards5 from "/images/svg/Cards5.svg";
import Cards6 from "/images/svg/Cards6.svg";
import BuyLine3 from "/images/lines/buy-line3.svg";
import BuyLine2 from "/images/lines/buy-line2.svg";
import CourtHouse from "/images/icons/courthouse.svg";
import HomeWifi from "/images/icons/home-wifi.svg";
import ITSetting from "/images/icons/cpu-setting.svg";
import Storage from "/images/icons/storage.svg";
import SatelliteIcon from "/images/icons/global-search.svg";
import Telephone from "/images/icons/voip.svg";
import DataCenter from "/images/icons/cloud-add.svg";
import Arrow1 from "/images/icons/arrow1.svg";
import Arrow2 from "/images/icons/arrow2.svg";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Dialog from '@mui/material/Dialog';
import ServiceFlow from "../Modal/serviceFlow";
import "../../App.css";



interface Feature {
  title: string;
  detail: string | React.ReactNode; 
}

interface FAQ {
  question: string;
  answer: string;
}

interface Service {
  id: string;
  name: string;
  description: string;
  icon:string;
  image:string;
  features: Feature[];
  faqs: FAQ[];
}

interface ActionButtonProps {
  text: string; 
  onOpen: () => void;
}

// Update the ActionButton component to handle links
const ActionButton: React.FC<ActionButtonProps & { isVoip?: boolean }> = ({ text, onOpen, isVoip = false }) => (
  isVoip ? (
    <Button 
      component="a"
      href="https://www.linkorgvoip.com/"
      target="_blank"
      rel="noopener noreferrer"
      variant="contained"
      sx={{   
        color: 'white',
        height:"48px",
        borderRadius: "64px",
        padding: '8px 24px',
        fontSize: '16px',
        width:{xs:"100%", sm:"fit-content"},
        fontWeight: 600,
        textTransform: 'none',
        display: 'flex',
        alignItems: 'center',
        gap: 1,
        margin:"80px 0px 40px",
        backgroundColor: "#010156",
        boxShadow:"none",
        "&:hover": { backgroundColor: "#e65d0f",  boxShadow:"none", },
      }}  
    >
      {text}
      <ArrowForwardIcon />
    </Button>
  ) : (
    <Button 
      variant="contained" 
      onClick={onOpen}
      sx={{   
        color: 'white',
        height:"48px",
        borderRadius: '64px',
        padding: '8px 24px',
        fontSize: '16px',
        fontWeight: 600,
        textTransform: 'none',
        display: 'flex',
        width:{xs:"100%", sm:"fit-content"},
        alignItems: 'center',
        gap: 1,
        margin:"80px 0px 40px",
        backgroundColor: "#010156",
        boxShadow:"none",
        "&:hover": { backgroundColor: "#e65d0f",  boxShadow:"none", },
      }}
    >
      {text}
      <ArrowForwardIcon />
    </Button>
  )
);



// Services Data
const services: Service[] = [
  {
    id: "fiber",
    name: "Fiber-to-Office",
    description:
      "Enjoy decentralized standard fiber optic cabling technology that provides high-speed internet to modern office environments.",
      icon:HomeWifi,
      image:Cards1,
    features: [
      { title: "Almost no Length Limits", detail: "About 10km for single mode fiber optic cable connections ensuring everyone gets connected" },
      { title: "High Bandwidth", detail: "High transmission bandwidth for every connected user in the office premises" },
      { title: "High Capacity Transmission", detail: "High capacity data transmission for every connected user for optimal online work" },
      { title: "Low Latency", detail: "Recommended for up to 20 devices, unlimited downloads starting at ₦50,000 every month" },
      { title: "Limited Wiring Needed", detail: "Only about 1 or 2 wiring cabinets are needed for installation making it easy and fast" },
      { title: "No EMI Susceptibility", detail: "Reliable internet connectivity with about zero downtime even with multiple users" },
    ],
    faqs: [
      { question: "What internet speed does LinkOrgNet offer enterprise clients?", answer: "We provide a range of internet speeds ranging from 35mbps to 150mbps+ through our fiber, Radio Lastmile and VSAT" },
      { question: "How do you ensure reliable internet connectivity in remote areas?", answer: "We use a combination of cutting-edge VSAT and LEO satellite technology to provide reliable internet services in remote areas. This ensures continuous connectivity even in challenging environments, such as rural locations." },
      { question: "Are there any data caps or limitations with your internet plans??", answer: "No, our internet services come with unlimited data usage, ensuring that you have access to high-speed internet without worrying about exceeding any data limits." },
      { question: "Can Your Internet Services Support Heavy Video Conferencing And Cloud Usage?", answer: "Yes, our internet services are designed to handle bandwidth-heavy tasks like video conferencing and cloud usage. We ensure high-speed, low-latency connectivity, even during peak hours." },
      { question: "Do You Offer Redundancy Solutions To Prevent Internet Downtime?", answer: "Yes, we provide redundancy options through backup satellite connections and fiber-optic setups to ensure that your home stays connected in case of an internet outage." },
      { question: "What specific perks do enterprise clients enjoy from LinkOrgNet?", answer: "We provide stable, high-speed internet which creates increased value and quality of life for the residents or tenants in your residences." },
    ],
  },
  {
    id: "voip",
    name: "VOIP",
    description:
      "Experience crystal clear calls across multiple office locations or internationally without blowing holes in your budget.",
      icon:Telephone,
      image:Cards2,
    features: [
      { title: "Cost Reduction", detail: "Our VOIP plans save you a ton of money on long distance or international calls." },
      { title: "Easy Scalability", detail: "Add or remove phone lines easily without the use of extensive infrastructure." },
      { title: "Flexible Communication", detail: "Communicate with anyone from anywhere with our stable and easy to use VOIP service." },
      { title: "Amazing Call Clarity", detail: "Communicate with people audibly over any distance without significant difficulties" },
      { title: "Affordable VOIP Hardware", detail: "We have affordable state-of-the-art business VOIP equipment to help you stay connected " },
      { title: "Dedicated VOIP Website", 
        detail: (
          <>
            Website for all your VOIP hardware purchases <br />
            <a href="https://www.linkorgvoip.com/" target="_blank" rel="noopener noreferrer" style={{ color: "#010156", textDecoration: "underline", fontWeight: "bold" }}>
              Visit →
            </a>
          </>
        )
      },
    ],
    faqs: [
      { question: "What Are The Benefits Of Using LinkOrgNet' VolP Solutions Over Traditional Phone Lines?", answer: "Our VolP solutions offer greater flexibility, lower costs, and advanced features like call forwarding, video conferencing, and multi-device integration. It's an efficient alternative to traditional phone systems." },
      { question: "Can Your VolP Services Be Integrated With Our Existing IT Infrastructure?", answer: "Yes, our VolP solutions are designed to seamlessly integrate with your existing IT and network infrastructure, minimizing disruptions during deployment." },
      { question: "How Scalable Are Your VolP Systems For Growing Businesses?", answer: " Our VolP systems are highly scalable, allowing you to easily add new users, extensions, and features as your business expands." },
      { question: "Do You Offer Call Encryption For Secure Voice Communication?", answer: "Yes, all VolP communications are encrypted end-to-end to ensure your voice communications remain private and secure from unauthorized access." },
      { question: "Are Your VolP Solutions Suitable For Remote Workers Or Teams Across Multiple Locations?", answer: "Yes, our VolP solutions are perfect for remote teams and businesses with multiple locations. We provide seamless communication across all locations, no matter where your team is." },
    ],
  },
  {
    id: "Satellite (VSAT)",
    name: "Satellite (VSAT)",
    description:
      "Get stable, high-speed broadband connectivity in all weather conditions with the latest state-of-the-art VSAT technology.",
      icon:SatelliteIcon,
      image:Cards3,
    features: [
      { title: "Terrestrial Satellites", detail: "Stay connected to high-speed internet even in remote locations." },
      { title: "Cellular Backhauling", detail: "Expand mobile coverage to remote areas with satellite technology." },
      { title: "Broadcast Transmission", detail: "Transmit or broadcast audio and video content to wide audiences." },
      { title: "Adaptive TDMA", detail: "We use TDMA technology on both uplink and downlink directions for broadband efficiency." },
      { title: "Velocity VSAT", detail: "One of the latest and most advanced enterprise grade satellite technology." },
      { title: "iDirect Evolution", detail: "We also offer great industry-standard satellite technology used to deliver with more efficiency." },
    ],
    faqs: [
      { question: "What Is VSAT And How Does it Work?", answer: "VSAT (Very Small Aperture Terminal) is a satellite communication system that uses small dish antennas to provide reliable data, voice, and internet connectivity, especially in remote areas. It works by sending and receiving data via satellite, ensuring connectivity even in regions without traditional infrastructure." },
      { question: "Can VSAT Support High-Speed Internet For Businesses And Large Operations?", answer: "Yes, VSAT can support high-speed internet for both small and large-scale operations, providing low-latency connections and enough bandwidth for data-heavy applications like video conferencing, file transfers, and cloud services." },
      { question: "How Do You Ensure Reliable Satellite Connectivity In Harsh Environments?", answer: "Our VSAT solutions use advanced satellite technology (LEO and GEO satellites) combined with redundant systems to ensure continuous connectivity. Our equipment is also built to withstand extreme weather and environmental conditions, ensuring uninterrupted service." },
      { question: "What Type Of Support And Maintenance Do You Offer For VSAT Installations? ", answer: "We provide 24/7 technical support and remote monitoring to ensure your VSAT system operates smoothly. Our team of engineers also offers regular maintenance and on-site support as needed to prevent and resolve any issues." },
      { question: "How Does LinkOrgNet' VSAT Solution Compare To Traditional Internet Services?", answer: "VSAT solutions provide internet access in regions where traditional services like fiber or cable are unavailable. While traditional services may offer higher speeds in well-connected areas, VSAT excels in delivering reliable, low-latency internet." },
      { question: "What Are The Installation Requirements For A VSAT System?", answer: "Installing a VSAT system typically requires a small satellite dish, a modem, and clear line-of-sight to the satellite. Our team handles all aspects of installation, including site surveys, equipment setup, and network configuration." },
      { question: "Can VSAT Be Used As A Backup Connection For Terrestrial Networks?", answer: "Yes, VSAT can be configured as a reliable backup solution for terrestrial networks. In case of network outages or disruptions, the VSAT connection ensures continuous connectivity." },
    ],
  },
  {
    id: "Storage Services",
    name: "Storage Services",
    description:
      "Get high performance storage infrastructure suitable for all your modern enterprise data management needs.",
      icon:Storage,
      image:Cards4,
    features: [
      { title: "Storage Area Networks (SAN)", detail: "High performance on-site data storage infrastructure." },
      { title: "Network Attached Storage", detail: "A file based storage system that can accessed and shared over a secure network." },
      { title: "Cloud Storage", detail: "Affordable and flexible pay-as-you-use remote storage option for enterprises." },
      { title: "Disaster RecBackup Functionalityovery", detail: "Deploy strategies, processes and tools to protect and restore data after disruptions." },
      { title: "Cost-Effective", detail: "Adjust resources to optimise costs based on data needs and usage." },
      { title: "Backup Functionality", detail: "Create and maintain data copies to insure against loss of precious data." },
    ],
    faqs: [
      { question: "What Types Of Storage Options Do You Offer (Cloud, Physical, Hybrid)?", answer: "We offer a variety of storage options, including cloud storage, on-premises physical storage, and hybrid models that combine the best of both worlds." },
      { question: "How Secure Is The Data Stored On Your Platform, And What Backup Options Are Available?", answer: "Our storage solutions come with encryption, secure access controls, and automated backup systems to ensure that your data is always protected and recoverable." },
      { question: "Can You Assist With Migrating My Data To Your Storage Solutions Without Downtime?", answer: "Yes, we offer seamless data migration services to ensure that your data can be moved to our platform without any significant downtime or disruptions. observing change management process through assessment, preparation, data transfer, testing, cutover " },
      { question: "Do You Offer Disaster Recovery Services As Part Of Your Storage Solutions?", answer: "Yes, we offer disaster recovery services that include offsite backups and rapid restoration processes, ensuring your data is always recoverable in case of emergencies." },
      { question: "How Scalable Are Your Storage Solutions As My Data Storage Needs Grow?", answer: "Our storage solutions are fully scalable, allowing you to expand your storage capacity as your data needs grow, without compromising on performance or security." },
    ],
  },
  {
    id: "Data Centres",
    name: "Data Centres",
    description:
      "Host websites and apps on shared servers to reduce costs exponentially without impacting efficiency using data centres.",
      icon:DataCenter,
      image:Cards5,
    features: [
      { title: "Virtual Hosting", detail: "Scalable, cloud-based hosting solutions for reliable and secure application deployment." },
      { title: "Collocation", detail: "Secure, high-performance data center space for housing your critical IT infrastructure." },
      { title: "Data Backups", detail: "Automated and secure backup solutions to prevent data loss and ensure quick recovery." },
      { title: "Cooling Infrastructure", detail: "Advanced cooling systems to maintain optimal temperatures for IT equipment efficiency." },
      { title: "Physical Security Costs", detail: "Comprehensive security measures to protect data from unauthorized access and threats." },
      { title: "Shared Servers", detail: "Cost-effective hosting solutions with optimized resource allocation for multiple users." },
    ],
    faqs: [
      { question: "What Security Measures Does Your Data Center Offer To Protect My Data?", answer: "Our data centers employ state-of-the-art security protocols, including 24/7 surveillance, biometric access controls, and advanced fire suppression systems to ensure the highest level of data protection." },
      { question: "How Scalable Are Your Collocation Services For Growing Businesses?", answer: "Our collocation services are highly scalable, allowing businesses to easily expand their infrastructure as their needs grow. We offer flexible space options to accommodate everything from small setups to enterprise-level deployments." },
      { question: "Do You Provide 24/7 Monitoring And Technical Support For Data Center Clients?", answer: "Yes, we offer round-the-clock monitoring and technical support from our network monitoring centre (NMC) to ensure that your infrastructure remains operational and secure at all times." },
      { question: "Can I Easily Migrate My Existing Infrastructure Into Your Data Center?", answer: "Yes, our team of experts will assist you in migrating your existing infrastructure into our data center with minimal disruption to your business operations." },
      { question: "What Uptime Guarantee Do You Provide For Collocation Services?", answer: "We offer a 99.99% uptime guarantee for our collocation services, ensuring that your business-critical applications and data are always accessible." },
    ],
  },
  {
    id: "IT Solutions",
    name: "IT Solutions",
    description:
      "Safeguard your business operations against cyber threats, information leaks and intrusion.",
      icon:ITSetting,
      image:Cards6,
    features: [
      { title: "Firewalls", detail: "Protect business communications, data transmission and operations from threats." },
      { title: "Intrusion Detection Systems", detail: "Advanced security solutions to monitor, detect, and prevent unauthorized access." },
      { title: "LAN Management", detail: "Seamless setup and optimization of local networks for fast, secure, and stable network." },
      { title: "WAN Management", detail: "Connect multiple office branches in various locations with highly efficient internet." },
      { title: "Endpoint Security", detail: "Safeguard all company network devices to prevent data leaks or loss." },
      { title: "Hardware Management", detail: "Managing hardware resources to promote optimal performance." },
    ],
    faqs: [
      { question: "How Can LinkOrgNet Help Improve The Security Of My Corporate Network?", answer: "We provide comprehensive network security solutions, including firewalls, intrusion detection systems, and encryption to protect your business from cyber threats." },
      { question: "Do You Offer Managed IT Services For Small To Medium-Sized Businesses?", answer: "Linkorg Network provides tailored managed IT services for small to medium-sized businesses, including: 24/7 IT support, network security,cloud solutions,data backup and recovery." },
      { question: "Can You Assist With Setting Up Both Wired And Wireless Networks For Businesses?", answer: "Absolutely! We specialize in designing and setting up wired and wireless networks tailored to your business needs, ensuring seamless connectivity across your office locations. We also can provide hybrid solution combining the best of both wired and wireless networks for optimal performance." },
      { question: "What Network Infrastructure Solutions Do You Provide For Companies With Multiple Offices?", answer: "We offer secure WAN setups, VPNs, and high-speed fiber optic solutions to connect multiple offices with reliable communication and data transfer." },
      { question: "How Do You Ensure The Reliability And Performance Of Your Network Solutions?", answer: "We conduct regular monitoring, maintenance, and performance optimization of your network to ensure reliable, high-speed, and uninterrupted connectivity." },
    ],
  },
];

const EnterpriseServices: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("fiber");
  const [activeIndex, setActiveIndex] = useState(0);
  const [showFlow, setShowFlow] = useState(false);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1));
    setActiveTab(services[(activeIndex - 1 + services.length) % services.length].id);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1));
    setActiveTab(services[(activeIndex + 1) % services.length].id);
  };

  // Ensure `selectedService` is always a valid object
  const selectedService: Service = services.find((s) => s.id === activeTab) || services[0];

  return (
      <Box sx={{ margin:"120px 0px", width:{xs:"95%", sm:"85%"}, marginLeft:{xs:"2.5%", sm:"7.5%"},position:"relative", zIndex:"1000",}}>             
                       
                 {/* Absolute lines */}
                 <Box sx={{
          position: "absolute",
          left: "-10%",
          right: "0px",
          top: {md:"-20px", xl:"-40px"},
          display:{xs:"none", sm:"none", md:"none", lg:"flex"},
          zIndex:"-1",
        }}>
          <img src={BuyLine3} alt="Decorative line"  />
        </Box>

        <Box sx={{
          position: "absolute",
          // left: {xl:"86%", xxl:"120%"},
          right: "-10%",
       
          top: {md:"170px", xl:"200px"},
          zIndex:"-1",
          display:{xs:"none", sm:"none", md:"none", lg:"flex"},
        }}>
          <img src={BuyLine2} alt="Decorative line"  />
        </Box>

                {/* Floating Line Section */}
    
      <Box sx={{display:"flex", justifyContent:{xs:"center", sm:"left"},  marginTop:{xs:"-80px", sm:"0px"},}}>
      <Box sx={{ display: "flex", alignItems: 'center', gap: 2,marginTop:"20px", background:"#F2F7F8", border:"1px solid #D4D5DF", padding:{xs:"0px 8px", sm:"0px 16px"}, height:{xs:"24px", sm:"40px"}, borderRadius:"80px", width:"fit-content"}}>
              <Box sx={{ width: {xs:"16px", sm:"24px"}, height: {xs:"16px", sm:"24px"}}}>
                <img src={CourtHouse} alt=""                   
                 style={{ fill: "#010156", width: "100%",  filter: 'invert(15%) sepia(100%) saturate(7456%) hue-rotate(220deg) brightness(50%) contrast(120%)' }}
                />
               
              </Box>
          
              <Box  sx={{marginLeft:{xs:"-12px", sm:"-12px", width:"fit-content"}}}>
              <Typography sx={{color: "#010156", fontFamily:"Helvetica", fontSize:{xs:"14px", sm:"15.7px"}, fontWeight:"400", lineHeight:"100%", letterSpacing:"0%", width:"fit-content", padding:"0px"}}>
              Enterprise Services
             </Typography>
              </Box>
              </Box>
              </Box>

              <Box sx={{margin:{xs:"16px 0px", sm:"24px 0px"}, display:"flex", flexDirection:{xs:"column", sm:"row"}, justifyContent:{xs:"center", sm:"space-between"},}}>
              <Typography sx={{color:"#010156", fontFamily:"Museo Slab Medium", fontSize:{xs:"20px", sm:"30px", md:"48px"}, lineHeight:"117%",letterSpacing:"-3%", fontWeight:"600", textAlign:{xs:"center", sm:"left"}}}>
              Explore our enterprise-level network solutions <span style={{ color: "#E65D0F" }}>engineered to deliver </span>
            </Typography>

                {/* Pagination components here */}
                <Box sx={{ display: "flex", flexDirection:"column", alignItems: "center", gap: 2, marginLeft:"0.65%", marginTop:{xs:"20px", sm:"0px"}}}>
                  <Box sx={{ display: "flex",}}>
                  <Button onClick={handlePrev}>

            <Box sx={{width:{xs:"48.73px", sm:"66.67px"}, height:{xs:"48.73px", sm:"66.67px"}}}>
            <img src={Arrow2} alt="" style={{width:"100%"}}/>
            </Box>
           

          </Button>
          <Button onClick={handleNext}>
          <Box sx={{width:{xs:"48.73px", sm:"66.67px"}, height:{xs:"48.73px", sm:"66.67px"}}}>
            <img src={Arrow1} alt="" style={{width:"100%"}}/>
            </Box>
         
            </Button>
                </Box>
          

            <Box sx={{ display: "flex"}}>
                {services.map((_, index) => (
                  <Box key={index} sx={{ width: {xs:"6.74px", sm:"12px"}, margin:"0px 5px", marginTop:"50px", height: {xs:"6.74px", sm:"12px"}, borderRadius: "50%", background: index === activeIndex ? "#010156" : "#D4D5DF" }} />
                ))}
              </Box>


              </Box> 

              </Box>

              <Dialog
              open={showFlow}
              onClose={() => setShowFlow(false)}
              maxWidth="lg"
              fullWidth
              sx={{
                width:"fit-content",
                borderRadius:"24px",
                marginLeft:"10%",
              }}
              >
              <ServiceFlow 
               initialFlow="enterprise" 
               onComplete={() => setShowFlow(false)}
              />
            </Dialog>


      {/* Tabs */}
      <Grid container spacing={2} sx={{display:{xs:"none", sm:"flex"}}}>
        {services.map((service,index) => (
          <Grid item key={service.id} sx={{marginTop:"16px"}}>
            <Button
              onClick={() => {
                setActiveTab(service.id);
                setActiveIndex(index);
              }}
              sx={{
                textTransform: "capitalize",
                fontWeight: "400",
                color: activeTab === service.id ? "#ffffff" : "#333E49",
                background: activeTab === service.id ? "#E65D0F" : "none",
                border:"1px solid #D4D5DF",
                borderRadius:"80px",
                height:"40px",
                gap:"8px",
                fontSize:"20px",
                fontFamily:"Helvetica",
                lineHeight:"100%",
                letterSpacing:"0%",
                padding:"0px 12px"


              }}
            >
              <img src={service.icon} alt="" style={{ width: 24, height: 24, filter: activeTab === service.id ? 'brightness(0) invert(1)' : 'none' }} />        
              {service.name}
            </Button>
          </Grid>
        ))}
      </Grid>

      {/* Service Details*/}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <Paper 
      sx={{ 
        width:"100%",
        display:"flex",
        flexDirection:{xs:"column", sm:"row"},
        background: "#F9FAFB", 
        borderRadius: "12px", 
        boxShadow:"none", 
        marginTop:"50px", 
        height:"fit-content",
        padding:{xs:"0px 8px"}
    }}
      >
        <Box sx={{
             width:{xs:"95%", md:"45%"},
             margin:{xs:"24px 0%", sm:"54px 0%"},
             marginLeft:{xs:"2.5%", sm:"4%"},
             height:{xs:"fit-content"},
             backgroundImage: {xs:'url("/images/lines/service-line.svg")', sm:"none"},
        }}>

      <Box sx={{width:{xs:"40px", sm:"64px"}, height:{xs:"40px", sm:"64px"}, background:"#E75D11", display:"flex",justifyContent:"center", justifyItems:"center", borderRadius:"50%"}}>
                <img src={selectedService.icon} alt="" style={{width:"50%", filter: 'brightness(0) invert(1)'}} />
      </Box>

        <Typography variant="h5" fontWeight="bold" sx={{fontSize:{xs:"24px", sm:"40px"}, fontFamily:"Museo Slab Medium", fontWeight:"600", lineHeight:"117%", letterSpacing:"-3%", color:"#010156", padding:"16px 0px"}}>
          {selectedService.name}
            </Typography>
        <Typography color="textSecondary" sx={{color:"#333E49", fontFamily:"inter", fontWeight:"400", fontSize:"18px", lineHeight:"-0.56px", letterSpacing:"-0.56px", paddingTop:"8px"}}>
        {selectedService.description}
        </Typography>

      <Box sx={{marginTop:{xs:"-40px", sm:"0px"},  padding:{xs:"0px"}, height:{xs:"fit-content"}}}>
        <ActionButton 
        text={selectedService.id === "voip" ? "Visit the VOIP website" : "Get started today"} 
        onOpen={() => setShowFlow(true)} 
        isVoip={selectedService.id === "voip"}
        />
          
</Box>

        </Box>

        {/* Tags */}
        <Box  
        gap={1}
        sx={{
            display:{xs:"none", sm:"none", md:"none", lg:"flex"},
          width:"55%",
          backgroundImage: 'url("/images/lines/service-line.svg")',  
          backgroundRepeat:"no-repeat",
        }}     
        >

    <Box sx={{width:"80%", marginLeft:"15%", marginTop:"90px"}}>
        <img src={selectedService.image} alt="" style={{width:"100%"}}/>
    </Box>
        </Box>
      </Paper>
      </motion.div>


          {/* Features Section */}
    <Grid container spacing={3} mt={0}>
      {selectedService.features.map((feature, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Paper
            elevation={1}
            sx={{
              padding: "24px",
              borderRadius: "24px",
              textAlign: "left",
              background: "#F9FAFB",
              boxShadow: "none",
              height: "270px",
              transition: "all 0.3s ease-in-out",
              "&:hover": {
                background: "#010156",
                "& h6": {
                  color: "#E75D11",
                },
                "& h6 span": {
                  color: "#ffffff !important",
                },
                "& p": {
                  color: "#ffffff",
                },
                "& a": {
                  color: "#E75D11 !important", 
                  textDecorationColor: "#E75D11",
                },
                "& .iconBox": {
                  background: "#ffffff", 
                },
                "& .arrowIcon": {
                  filter: "brightness(0) saturate(100%) invert(27%) sepia(88%) saturate(2052%) hue-rotate(356deg) brightness(98%) contrast(89%)", 
                },
              },
            }}
          >
            {/* Icon Box */}
            <Box
              className="iconBox"
              sx={{
                height: "44px",
                width: "44px",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "#D4D5DF",
                transition: "background 0.3s ease-in-out",
              }}
            >
              <img src={selectedService.icon} alt="Wifi Icon" />  
        </Box>  

            {/* Plan Title and Speed */}
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Museo Slab Medium",
                fontWeight: "600",
                fontSize: "24px",
                color: "#010156",
                marginTop: "16px",
                transition: "color 0.3s ease-in-out",
              }}
            >
             {feature.title}
            </Typography>
            <Typography
              mt={1}
              sx={{
                color: "#333E49",
                fontFamily: "inter",
                fontSize: "16px",
                lineHeight: "32px",
                letterSpacing: "-0.56px",
                transition: "color 0.3s ease-in-out",
              }}
            >
                 {feature.detail}
            </Typography>
          </Paper>
        </Grid>
      ))}

    </Grid>

   

        {/* Notice Section */}
        {/* <Paper elevation={1} sx={{ display:"flex", flexDirection:{xs:"column", sm:"row"}, mt: 4, borderRadius: "10px", background: {xs:"#F9FAFB", sm:"none"}, height:"fit-content", boxShadow:"none"}}>
        <Box sx={{display:"flex",flexDirection:"column",height:{xs:"fit-content", sm:"144px"}, width:{xs:"100%", sm:"41%"}, padding:{xs:"16px", sm:"24px"}, background:"#F9FAFB", marginRight:"2%", borderRadius:"16px"}}>
        <Box sx={{width:"44px", height:"44px"}}>
          <img src={Alert} alt="" style={{width:"100%"}}/>
        </Box>
         <Box>
          <Typography sx={{fontFamily:"Museo Slab Medium", fontWeight:"600", fontSize:{xs:"16px", sm:"24px"}, color:"#010156", marginTop:"20px"}}>Please take note of the following:</Typography>
        </Box>
        </Box>
        <Box sx={{height:{xs:"fit-content", sm:"144px"}, width:{xs:"100%", sm:"57%"},borderRadius:"16px",padding:{xs:"8px 16px", sm:"8px 24px"},  background:"#F9FAFB"}}>
        <List sx={{ paddingTop:{xs:"0px", sm:"15px"}}}>
          <ListItem sx={{padding:{xs:"5px 0px", sm:"0px"}, color:"#5D6771", fontFamily:"inter", fontSize:"16px", letterSpacing:"-0.56px",lineHeight:"40px"}}>
            <ListItemText primary="* Fill the contact form to book a demo or subscribe to any enterprise" />
          </ListItem>
          <ListItem sx={{padding:{xs:"5px 0px", sm:"0px"}, color:"#5D6771", fontFamily:"inter", fontSize:"16px", letterSpacing:"-0.56px",lineHeight:"40px"}}>
            <ListItemText primary="* We charge installation fees that vary based on the size and needs of your establishment" />
          </ListItem>
          <ListItem sx={{padding:{xs:"5px 0px", sm:"0px"}, color:"#5D6771", fontFamily:"inter", fontSize:"16px", letterSpacing:"-0.56px",lineHeight:"40px"}}>
            <ListItemText primary="* We reach out to prospective customers within 48 hours of filling the forms to follow up" />
          </ListItem>
        </List>
        </Box>

      </Paper> */}

      {/* FAQ Section (Updated to Match FAQ Design) */}
      <Box sx={{ p:{xs:"0px 2.5%", sm:4}, marginTop:{xs:"-50px", sm:'50px'}, width:"100%",}}>
      <Box sx={{ maxWidth:{xs:"95%", sm:"1200px"}, margin: {xs:"0px 2.5%", sm:"0 auto"} }}>
      <Grid container  justifyContent="space-between" sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, width:"100%", height:"fit-content" }}>
            {/* Left Section */}
            <Grid item xs={12} md={5.2} sx={{ display: "flex", flexDirection: "column", justifyContent: "center",height:"fit-content" }}>
              <img src="/images/faqEc.png" alt="eclipse" width="5%" />

                 <Box sx={{display:"flex",justifyContent:{xs:"center", sm:"left"}, marginTop:{xs:"30px", sm:"0px", height:{xs:"32px", sm:"40px"}}}}>
            <Button
              variant="contained"
              sx={{ display:"flex",justifyContent:"center", fontFamily: "Helvetica", background: "#F1F2F7", color: "#010156", mb: 2, textTransform: "capitalize", borderRadius: "50px",
                 width: "fit-content",
                 boxShadow:"none",
                 "&:hover": { boxShadow:"none" },

               }}
            >
              <Box 
              sx={{width:{xs:"14px", sm:"24px"}, height:{xs:"14px", sm:"24px"}, marginRight:"8px", 
              marginTop:{xs:"-5px", sm:"0px"}, }}>
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

            <Box sx={{border:"1px solid #D4D5DF", height:{xs:"249px", sm:"423px"}, display:"flex", justifyContent:"center", alignItems:"center", background:"transparent",  borderRadius:"24px", marginBottom:{xs:"30px", sm:"0px"}, marginTop:{xs:"20px", sm:"40px"}}}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <img src="/images/gif/bounceMsg.gif" alt="question icon" width="100%" style={{ maxWidth: "240px" }} />
            </motion.div>
            </Box>


            </Grid>

            {/* Right Section (FAQ Accordion) */}
            <Grid item xs={12} md={6.5} sx={{ display: "flex", flexDirection: "column", justifyContent: "center"}}>
              <FAQAccordion faqData={selectedService.faqs} />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default EnterpriseServices;

