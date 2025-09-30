import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import Question from "/images/icons/question.svg";
import House from "/images/icons/house1.svg";
import CourtHouse from "/images/icons/courthouse.svg";
import Shop from "/images/icons/shop.svg";
import HomeWifi from "/images/icons/home-wifi.svg";
import ITSetting from "/images/icons/cpu-setting.svg";
import Storage from "/images/icons/storage.svg";
import SatelliteIcon from "/images/icons/global-search.svg";
import Telephone from "/images/icons/telephone.png";
import DataCenter from "/images/icons/cloud-plus.svg";
import { Link } from "react-router-dom";

interface ServiceDescription {
  title: string;
  icon: string;
  key: string;

}

const services: ServiceDescription[] = [
  { title: "Residential Services", icon: House, key: "residential" },
  { title: "Business (SME) Services", icon: Shop, key: "business" },
  { title: "Enterprise Services", icon: CourtHouse, key: "enterprise" }
];

interface ServiceDetail {
  title: string;
  icon: string;
  link: string;
}

const serviceDetails: Record<string, ServiceDetail[]> = {
  residential: [
    { title: "Fiber-to-Home", icon: HomeWifi, link:"residential" },
    { title: "Estate Connect", icon: HomeWifi, link:"residential" }
  ],
  business: [
    { title: "Express Data Plans (20mbps)", icon: HomeWifi,  link:"business" },
    { title: "Super Data Plans (30mbps)", icon: HomeWifi, link:"business" },
    { title: "Gold Data Plans (60mbps)", icon: HomeWifi, link:"business" },
    { title: "VIP 1 Data Plan (70mbps)", icon: HomeWifi, link:"business" },
    { title: "VIP 2 Data Plan (100mbps)", icon: HomeWifi, link:"business" },
    { title: "IT & Network Solutions", icon: ITSetting, link:"business" }
  ],
  enterprise: [
    { title: "Fiber-to-Office", icon: HomeWifi, link:"enterprise" },
    { title: "VOIP Solutions", icon: Telephone, link:"enterprise" },
    { title: "Satellite Solutions", icon: SatelliteIcon, link:"enterprise" },
    { title: "Storage Solutions", icon: Storage, link:"enterprise" },
    { title: "Collocation & Data Centres", icon: DataCenter, link:"enterprise" },
    { title: "IT & Network Solutions", icon: ITSetting, link:"enterprise" }
  ]
};

const ExploreInternet: React.FC<{ onServiceSelect?: (service: ServiceDescription | null) => void }> = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  return (
    <Box sx={{height: '100%',  display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' , gap: 3, padding: '0', margin: "234px 0 100px 0", marginLeft:{xs:"2.5%", sm:"5%", md:"10%"}, width:{xs:"95%", sm:"90%", md:"80%"}, position:"relative", zIndex:"10"}}>
      {/* First Section */}
      <Box sx={{ padding:{xs:"4px 8px", sm:"8px 16px"}, background: '#F9F9FC', borderRadius: 80, border: '1px #D4D5DF solid', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1, width:"fit-contents" }}>
       <Box sx={{width:{xs:"16px", sm:"24px"}, height:{xs:"16px", sm:"24px"}}}>
       <img src={Question} alt="Question Icon" style={{width:"100%"}}/>
        </Box> 
        <Typography sx={{ color: '#010156', fontSize:{xs:"12px", sm:"20px"}, fontFamily: 'Helvetica', fontWeight: 400, textAlign: 'center' }}>
          What’s in it for you
        </Typography>
      </Box>
      
      {/* Title Section */}
      <Typography sx={{width: {xs:"100%", sm:"90%"}, textAlign: 'center', color: '#010156', fontSize:{xs:"22px", sm:"30px",md:"52px", xl:"75px"}, fontFamily: 'Museo Slab Medium', fontWeight: 600, lineHeight: '117%', letterSpacing: "-3%", wordWrap: 'break-word' }}>
        Explore our premium <span style={{ color: '#E65D0F' }}>internet <br/> services</span> designed to meet your needs <br/>
        —plus  <span style={{ color: '#E65D0F' }}>exclusive benefits</span>
      </Typography>
      
        <Box 
          sx={{  
            height: { xs: "24px", sm: "44px" }, 
            width:{sm:"100%"},
            display: {xs:"none", sm:"none", md:"flex"}, 
            justifyContent: { xs: "flex-start", sm: "center" }, 
            alignItems: "center", 
            gap: {sm:1, md:2}, 
            marginTop: "20px",
            overflowX: "auto",  
            whiteSpace: "nowrap", 
            scrollbarWidth: "none", 
            "&::-webkit-scrollbar": { display: "none" },
            WebkitOverflowScrolling: "touch", 
          }}
        >
        {services.map(service => (
          <ServiceCard 
            key={service.key} 
            title={service.title} 
            icon={service.icon} 
            selected={selectedService === service.key} 
            onClick={() => setSelectedService(service.key)}
          />
        ))}
      </Box>
    

      {/* Sub-section based on selection */}
{/* Sub-section based on selection */}
{selectedService && serviceDetails[selectedService] && (
  <Box sx={{
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    gap: 2, 
    flexWrap: 'wrap', 
    marginTop: {xs: 1, sm: 3}
  }}>
    {serviceDetails[selectedService].map((detail, index) => (
      <Link 
        to={detail.link}
        style={{ textDecoration: "none" }}
        key={index} 
      >
        <Box 
          sx={{ 
            display: "flex",
            alignItems: "center",
            height: {xs: "24px", sm: "44px"},
            padding: {xs: "5px 8px", sm: "10px 16px"},
            background: '#F9FAFB', 
            borderRadius: 20, 
            border: '1px solid #D4D5DF', 
            color: '#010156',
            '&:hover': {
              background: '#F0F0F5'
            }
          }}
        >
          <Box sx={{
            display: "flex",
            justifyContent: "space-between", 
            alignItems: "center", 
            gap: 1.5
          }}>
            <Box sx={{
              width: {xs: "10.8px", sm: "24px"}, 
              height: {xs: "10.8px", sm: "24px"},   
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center'
            }}>
              <img 
                src={detail.icon} 
                alt={detail.title} 
                style={{ width: "100%", height: "100%" }}  
              />  
            </Box>
            <Typography
              sx={{ 
                fontSize: {xs: "10px", sm: "20px"},
                fontFamily: 'Helvetica', 
                fontWeight: 400, 
              }}
            >
              {detail.title}
            </Typography>
          </Box>
        </Box>
      </Link>
    ))}
  </Box>
)}
    </Box>
  );
};

interface ServiceCardProps {
  title: string;
  icon: string;
  selected: boolean;
  onClick: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, icon, selected, onClick }) => {
  return (
    <Box 
      sx={{
        height:{xs:"24px",sm:"44px" },
        padding: {xs:"0px 8px", sm:"0px 16px"},
        background: selected ? '#010156' : 'white',
        color: selected ? 'white' : '#161619',
        boxShadow: '6px 6px 10px rgba(120, 132, 149, 0.05)',
        borderRadius: 64,
        border: '1px #D8DEE4 solid',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 1,
        cursor: 'pointer',
      }}
      onClick={onClick}
    >
      <Box sx={{width:{xs:"10.8px", sm:"28px"}, height:{xs:"10.8px", sm:"28px"},   display: 'flex', justifyContent: 'center', alignItems: 'center',}}>
      <img src={icon} alt={title} style={{ width:"100%", height:"100%", filter: selected ? 'invert(1)' : 'none' }} />  
      </Box>
      <Typography 
        sx={{ 
          fontSize: {xs:"12px", sm:"24px"}, 
          fontFamily: 'Helvetica', 
          fontWeight: 400, 
          whiteSpace: 'nowrap',
        }}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default ExploreInternet;

