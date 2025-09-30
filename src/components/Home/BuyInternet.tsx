import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Typography, 
  Button, 
  Tabs, 
  Tab, 
  useMediaQuery, 
  useTheme,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Dialog
} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import House from "/images/icons/house.svg";
import CourtHouse from "/images/icons/courthouse.svg";
import Flag from "/images/icons/flag.svg";
import Wallet from "/images/icons/wallet.svg";
import Naira from "/images/icons/naira.svg";
import BuyLine1 from "/images/lines/buy-line1.svg";
import BuyLine2 from "/images/lines/buy-line2.svg";
import Chain from "/images/gif/chain.gif";


import FiberIcon from "/images/icons/enterprise/fiber.svg";
import VoipIcon from "/images/icons/enterprise/voip.svg";
import SatelliteIcon from "/images/icons/enterprise/satellite.svg";
import StorageIcon from "/images/icons/enterprise/storage.svg";
import DataCenterIcon from "/images/icons/enterprise/datacenter.svg";
import ItIcon from "/images/icons/enterprise/it.svg";

import { 
  selectSelectedItem,
  selectPlans,
  selectEnterpriseServices
} from '../../Service/features/serviceFlow/selectors';
import { 
  setFlowType,
  selectItem,
  setResidentialStep,
  setEnterpriseStep,
  openModal,
  closeModal,
  updateFormValues,
  resetServiceFlow
} from '../../Service/features/serviceFlow/serviceFlowSlice';
import { AppDispatch } from '../../Service/store';
import type { Plan, EnterpriseService as EnterpriseServiceType } from '../../Service/features/serviceFlow/types';
import { SelectChangeEvent } from '@mui/material';
import { initializePlans } from '../../Service/features/serviceFlow/serviceFlowThunks';
import { RootState } from '../../Service/store';
import ServiceFlow from "../Modal/serviceFlow";

interface DataPlan extends Plan {
  devices: number;
}

interface EnhancedEnterpriseService extends EnterpriseServiceType {
  description: string;
}

interface ResidentialPlansProps {
  plans: DataPlan[];
  selectedPlan: DataPlan | null;
  onPlanSelect: (plan: DataPlan | null) => void;
  getDisplayName: (name: string) => string;
}

interface EnterpriseServiceComponentProps {
  services: EnhancedEnterpriseService[];
  selectedService: EnhancedEnterpriseService | null;
  onServiceSelect: (service: EnhancedEnterpriseService | null) => void;
  getEnterpriseDisplayName: (name: string) => string;
  serviceDescriptions: Record<string, string[]>;
  isMobile: boolean;
}

const BuyInternet: React.FC = () => {  
  const dispatch = useDispatch<AppDispatch>();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [isHovered, setIsHovered] = useState(false);
  const [selectedTab, setSelectedTab] = useState(0);

  const selectedItem = useSelector(selectSelectedItem);
  const plans = useSelector(selectPlans);
  const enterpriseServices = useSelector(selectEnterpriseServices);
  const isModalOpen = useSelector((state: RootState) => state.serviceFlow.isModalOpen);

  useEffect(() => {
    dispatch(resetServiceFlow());
    dispatch(initializePlans()); 
    dispatch(setFlowType(selectedTab === 0 ? 'residential' : 'enterprise'));
  }, [dispatch, selectedTab]);

  const dataPlans: DataPlan[] = plans.map(plan => ({
    ...plan,
    devices: getDeviceCount(plan.name)
  }));

  const enhancedEnterpriseServices: EnhancedEnterpriseService[] = enterpriseServices.map(service => ({
    ...service,
    description: getServiceDescription(service.name, isMobile)
  }));

  const handleOpenModal = () => {
    dispatch(openModal());
  };
    
  const handleCloseModal = () => {  
    dispatch(closeModal());
    dispatch(resetServiceFlow());
  }; 

  function getDeviceCount(planName: string): number {
    const deviceMap: Record<string, number> = {
      'Express': 5,
      'Super': 8,
      'Gold': 10,
      'Linkorg VIP1': 15,
      'Linkorg VIP2': 20
    };
    return deviceMap[planName] || 5;
  }

  function getServiceDescription(serviceName: string, isMobile: boolean): string {
    const descriptions: Record<string, string> = {
      'fiber to office': isMobile ? "fiber optic connection for offices" : "Standard, decentralized, compliant cabling for offices",
      'voip': isMobile ? "crystal clear calls over internet" : "Crystal clear calls over internet built for offices",
      'vsat': isMobile ? "stay connected in harsh weather": "VSAT technology to deliver connectivity in harsh weather",
      'storage': isMobile ? "for enterprise data management" : "SAN, NAS and Cloud Storage for enterprise data management",
      'data center': isMobile ? "virtual hosting" : "Virtual hosting of applications and websites",
      'it': isMobile ? "safeguard business ops" : "Safeguard business operations against attacks and leaks"
    };
    return descriptions[serviceName] || '';
  }

  const serviceDescriptions: Record<string, string[]> = {  
    'fiber to office': [  
      'Almost no length limitations (10 km for single mode fiber)',  
      'Only one or two wiring cabinets needed',  
      'No EMI susceptibility, very high network reliability',  
      'High bandwidth per user',  
    ],  
    'voip': [  
      'Save costs on international/long distance calls',  
      'Add or remove lines without complex procedures',  
      'Crystal clear internet calls from anywhere',  
      'Supports multiple office branches',  
    ],  
    'vsat': [  
      'Stay connected to internet in remote locations with terrestrial satellites',  
      'Expand mobile coverage to remote areas with cellular backhauling',  
      'Broadcast or transmit audio and video content to large audiences',  
      'Stay connected even in harsh weather conditions',  
    ],  
    'storage': [  
      'Key solutions for modern data management',  
      'High performance on-site storage infrastructure',  
      'File-based storage accessible over a network',  
      'Flexible pay as you use storage options',  
    ],  
    'data center': [
      'Endpoint security to safeguard network devices',
      'Intrusion detection systems',
      'LAN & WAN management between office locations',
      'Protection against cyber threats to operations',
    ],
    'it': [
      'Endpoint security to safeguard network devices',
      'Intrusion detection systems',
      'LAN & WAN management between office locations',
      'Protection against cyber threats to operations',
    ]
  };

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
    const flowType = newValue === 0 ? 'residential' : 'enterprise';
    dispatch(setFlowType(flowType));
    dispatch(selectItem(null));
  };

  const handlePlanSelect = (plan: DataPlan | null) => {
    dispatch(selectItem(plan));
  };

  const handleServiceSelect = (service: EnhancedEnterpriseService | null) => {
    dispatch(selectItem(service));
  };

  const handleContinue = () => {
    if (!selectedItem) return;
    
    dispatch(updateFormValues({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      company: '',
      jobTitle: '',
      address: '',
      grandPlan: '',
      message: ''
    }));

    if (selectedTab === 0) {
      dispatch(setResidentialStep(1));
    } else {
      dispatch(setEnterpriseStep(1));
    }
    handleOpenModal();
  };

  const getDisplayName = (name: string) => {
    const displayNames: Record<string, string> = {
      'Express': 'Express',
      'Super': 'Super',
      'Gold': 'Gold',
      'Linkorg VIP1': 'VIP (I)',
      'Linkorg VIP2': 'VIP (II)'
    };
    return displayNames[name] || name;
  };

  const getEnterpriseDisplayName = (name: string) => {
    const displayNames: Record<string, string> = {
      'fiber to office': 'Fiber to Office',
      'voip': 'VOIP Service',
      'vsat': 'Satellite Solutions',
      'storage': 'Storage Solutions',
      'data center': 'Data Centers & Collocation',
      'it': 'IT and Network Solutions'
    };
    return displayNames[name] || name;
  };

  return (  
    <>
            {/* Background elements */}
         {/* Floating Line Section */}
        <Box sx={{
          position: "absolute",
          left: "1.5%",
          right: "0px",
          top: {md:"1066px", xl:"1300px"},
          zIndex:"1",
          display:{xs:"none", sm:"none", md:"none", lg:"flex"},
        }}>
          <img src={BuyLine1} alt="Decorative line"  />
        </Box>

        <Box sx={{ 
          position: "absolute",
          left: "83%",
          right: "0px",
          top: {md:"1280px", xl:"1530px"},
          width: '100px', 
          height: '90px',
          display:{xs:"none", sm:"none", md:"none", lg:"flex"},
          zIndex:"10",
       
        }}>
          <img style={{ width: '70%', height: '70%' }} src={Chain} alt="Chain animation" loading="lazy" />
        </Box>


      <Box sx={{
          position: "absolute",
          left: "80%",
          right: "0px",
          top: {md:"1270px", xl:"1525px"},
          zIndex:"1",
          display:{xs:"none", sm:"none", md:"none", lg:"flex"},
        }}>
          <img src={BuyLine2} alt="Decorative line" />
        </Box>

        
        <Box sx={{
          position: "absolute",
          left: "0px",
          right: "0px",
          top: "1730px",
          zIndex:"1",
          width:"100%",
          height:"1500px",
          backgroundImage: 'url("/images/lines/vector-frame1.svg")', 
          display:{xs:"none", sm:"none", md:"flex"},
        }} />

        {/* Main Components */}
      <Box sx={{ 
        width: {xs:"95%", sm:"90%"}, 
        height: "fit-content", 
        borderRadius: "32px", 
        paddingTop: "64px", 
        gap: "80px", 
        display: "flex", 
        marginLeft: {xs:"2.5%", sm:"5%"}, 
        background: "#F9FAFB", 
        justifyContent: "center", 
        border: "1px solid #D4D5DF", 
        marginTop:{xs:"40px", sm:"120px"},
        flexDirection: "column",
        alignItems: "center",
        position:"relative",
        zIndex:"1",
      }}>  

        {/* Main content */}
        <Box sx={{ 
          width: {xs:"95%", sm:"75%"}, 
          textAlign: "center", 
          justifyContent: "center", 
          flexDirection: "column", 
          marginBottom:"24px", 
          marginTop:{xs:"-40px", sm:"0px"}, 
          zIndex:"1000",
        }}>  
          <Typography sx={{ 
            fontFamily: "Museo Slab Medium", 
            fontWeight: "600", 
            fontSize: {xs:"22px", sm:"35px", md:"52px"}, 
            lineHeight: "100%", 
            color: "#E65D0F", 
            padding: "0px 16px", 
            letterSpacing: "-1px", 
            mb:{xs:3, sm:4}
          }}>  
             Skip the wait!  <br/> <span style={{ color: "#010156" }}> Get your retail or enterprise network plan in</span>  <br/> 2 minutes
          </Typography> 

          <Box sx={{ width: "100%", marginTop:"50px" }}>
            {/* Tab selection */}
            <Box sx={{ 
              marginBottom: "36.35px", 
              backgroundColor: "#ffffff", 
              borderRadius: "8px", 
              height:{xs:"48px", sm:"56px"}, 
              display: "flex", 
              width: "100%", 
              justifyContent: "space-between", 
              alignItems: "center" 
            }}>
              <Tabs 
                value={selectedTab} 
                onChange={handleTabChange} 
                variant="fullWidth" 
                sx={{ 
                  borderRadius: "8px", 
                  width: "100%", 
                  minHeight: {xs:"48px", sm:"56px"}, 
                  height:{xs:"48px", sm:"56px"}, 
                  display: "flex", 
                  justifyContent:"center", 
                  alignItems:"center" 
                }}
              >  
                <Tab 
                  label={isMobile ? "Retail Plans" : "Residential/SME Data Plans"} 
                  icon={<img 
                    src={House} 
                    alt="House Icon" 
                    style={{
                      width: isMobile ? "18px" : "24px", 
                      height: isMobile ? "18px" : "24px", 
                      filter: selectedTab === 0 ? "invert(0%)" : "invert(100%)" 
                    }}  
                  />} 
                  iconPosition="start"  
                  sx={{ 
                    width: "50%", 
                    fontFamily:  selectedTab === 0 ? "Helvetica Neue" : "Helvetica Neue Lt",
                    fontSize:{xs:"13.5px", sm:"20px"},
                    lineHeight: "100%",
                    letterSpacing: "0%",
                    textTransform: "none",
                    background: selectedTab === 0 ? "linear-gradient(to bottom, #010157, #060633)" : "inherit",
                    color: selectedTab === 0 ? "#ffffff" : "#292D32",
                    "&.Mui-selected": {
                      background: "linear-gradient(to bottom, #010157, #060633)",
                      color: "#ffffff",
                    },
                  }} 
                />  
                <Tab 
                  label={isMobile ? "Enterprise Plans" : "Enterprise Network Services"} 
                  icon={<img 
                    src={CourtHouse} 
                    alt="CourtHouse Icon" 
                    style={{ 
                      width: isMobile ? "18px" : "24px", 
                      height: isMobile ? "18px" : "24px", 
                      filter: selectedTab === 1 ? "invert(100%) brightness(200%)" : "invert(0%)"
                    }}
                  />} 
                  iconPosition="start"  
                  sx={{ 
                    width: "50%", 
                    fontFamily: selectedTab === 1 ? "Helvetica Neue" : "Helvetica Neue Lt",
                    fontSize:{xs:"13.5px", sm:"20px"},
                    lineHeight: "100%",
                    letterSpacing: "0%",
                    textTransform: "none",
                    background: selectedTab === 1 ? "linear-gradient(to bottom, #010157, #060633)" : "inherit",
                    color: selectedTab === 1 ? "#ffffff" : "#292D32",
                    "&.Mui-selected": {
                      background: "linear-gradient(to bottom, #010157, #060633)",
                      color: "#ffffff",
                    },
                    paddingLeft:"5px"
                  }} 
                />  
              </Tabs> 
            </Box>

            {/* Dynamic content based on tab selection */}
            {selectedTab === 0 ? (
              <ResidentialPlans 
                plans={dataPlans} 
                selectedPlan={selectedItem as DataPlan | null}
                onPlanSelect={handlePlanSelect}
                getDisplayName={getDisplayName}
              />
            ) : (
              <EnterpriseServiceComponent 
                services={enhancedEnterpriseServices}
                selectedService={selectedItem as EnhancedEnterpriseService | null}
                onServiceSelect={handleServiceSelect}
                getEnterpriseDisplayName={getEnterpriseDisplayName}
                serviceDescriptions={serviceDescriptions}
                isMobile={isMobile}
              />
            )}  

            {/* Purchase total section */}
            {selectedTab === 0 && (  
              <Box sx={{
                p: 2, 
                marginTop:{xs:"-8px", sm:""},
                height:{xs:"108px", sm:"155.89px"}, 
                border:"1px solid #D4D5DF", 
                borderRadius:"8px", 
                display: "flex", 
                justifyContent: "space-between", 
                alignItems: "center", 
                mb: 3, 
                backgroundColor: "#F9F9FC"
              }}>   
                <Box sx={{
                  display:"flex", 
                  flexDirection:"column", 
                  alignItems:"flex-start", 
                  padding:"20px 0px", 
                  marginLeft:"2%"
                }}>
                  <Box sx={{
                    marginBottom:{xs:"15px", sm:"25px"}, 
                    width:{xs:"20px", sm:"30px", md:"38.89px"}, 
                    height:{xs:"20px",sm:"30px", md:"38.89px"}
                  }}>
                    <img src={Flag} alt="Flag Icon" style={{ marginRight: "8px", width:"100%" }} loading="lazy" />
                  </Box>
                  <Typography variant="h6" fontWeight={500} sx={{
                    fontSize:{xs:"14px", sm:"24px"}, 
                    color:"#8A8A94" 
                  }}>  
                    Purchase Total:  
                  </Typography>  
                </Box>
                <Box sx={{
                  padding:"15px 0px", 
                  marginTop:{xs:"35px", sm:"52px", md:"30px"}, 
                  marginRight:{xs:"0px", sm:"30px"},
                }}>
                  <Typography variant="h5" fontWeight={700} sx={{ 
                    color: "#D9D9D9", 
                    fontSize:{xs:"32px", sm:"40px", md:"64px"}, 
                    fontFamily:"Museo Slab Medium", 
                    letterSpacing:"0%", 
                    lineHeight:"100", 
                    display:"flex" ,
                     
                  }}> 
                    <Box sx={{
                      height:{xs:"32px", sm:"32px", md:"77px"}, 
                      width:{xs:"19px",sm:"22px", md:"37px"}, 
                      marginRight:"10px",
                    }}>
                      <img src={Naira} alt="Naira Icon" style={{ marginRight: "24px", width:"100%" }} loading="lazy" />
                    </Box> 
                    {selectedItem ? (selectedItem as DataPlan).price : "0000.0"}  
                  </Typography>  
                </Box> 
              </Box>  
            )} 
    
            {/* Continue button */}
            <Button  
              fullWidth  
              variant="contained"  
              startIcon={
                <img 
                  src={Wallet} 
                  alt="Wallet Icon" 
                  style={{ 
                    width: "26px", 
                    height: "26px", 
                    filter: isHovered 
                      ? "invert(1) brightness(200%)"  
                      : "invert(37%) sepia(92%) saturate(1187%) hue-rotate(-10deg) brightness(97%) contrast(96%)",
                    transition: "filter 0.3s ease-in-out" 
                  }} 
                  loading="lazy"
                />
              }   
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={handleContinue}
              // disabled={!selectedItem}
              sx={{
                p: 1.5, 
                boxShadow:"none",
                margin: {xs:"10px 0px", sm:"40px 0px"}, 
                height: {xs:"48px", sm:"80px"}, 
                borderRadius: "64px", 
                background: "#ffffff", 
                color: "#E65D0F", 
                fontSize: {xs:"16px", sm:"20px"}, 
                fontFamily: "Museo Slab Bold", 
                textTransform: "none", 
                fontWeight: "400", 
                lineHeight: "39.16px", 
                display: selectedItem ? "flex" : "none",
                border: "1px solid #D4D5DF",
                "&:hover": {
                  background: "#E65D0F", 
                  color: "#ffffff", 
                  boxShadow:"none" 
                }, 
              }}   
            > 
              {selectedTab === 0 ? "Complete Purchase" : "Book a Call-Back"}  
            </Button>
          </Box>
        </Box>  
      </Box>

      {/* Modal Dialog */}
      <Dialog
        open={isModalOpen}
        onClose={handleCloseModal}
        maxWidth="lg"
        sx={{ 
          "& .MuiPaper-root": { 
            borderRadius:"24px"
          }
        }}
      >
        <ServiceFlow onComplete={handleCloseModal}/>
      </Dialog>
    </>
  );  
};  


const ResidentialPlans: React.FC<ResidentialPlansProps> = ({ 
  plans,  
  selectedPlan,
  onPlanSelect, 
  getDisplayName 
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [selectedPlanName, setSelectedPlanName] = useState(selectedPlan?.name || "");  


   const availablePlans = plans.filter(plan => !('comingSoon' in plan) || !plan.comingSoon);

  const handlePlanChange = (event: SelectChangeEvent<string>) => {  
    const planName = event.target.value as string;  
    setSelectedPlanName(planName);  
    const selected = availablePlans.find(plan => plan.name === planName) || null;
    onPlanSelect(selected);  
  };  
  
  return (  
   <FormControl fullWidth 
        sx={{
          mb: 2,
          marginTop: {xs:"-5px", sm:""},
          color:"#8A8A94",
          background: "#F9F9FC",
          height: "68px",
          fontSize:"24px",
          "& .MuiOutlinedInput-notchedOutline": { borderColor: "#D4D5DF" },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: "#D4D5DF !important" }, 
        }}

      >
      <InputLabel 
        shrink={false}  
        sx={{
          fontFamily: "Helvetica Neue", 
          color:"#8A8A94",
          padding:"0px 10px",
          fontSize:{xs:"14px", sm:"20px"}, 
          "&.Mui-focused": { color: "#D4D5DF !important" }, 
          transition: "all 0.3s ease-in-out",
          display: selectedPlanName ? "none" : "block",  
        }}
      >
        Select preferred data plan
      </InputLabel> 
      <Select 
        value={selectedPlanName} 
        onChange={handlePlanChange} 
        displayEmpty 
        sx={{
          width: "100%",
          "& .MuiSelect-select": { padding: "16px", borderColor: "#D4D5DF !important"  },
          "&.Mui-focused": { borderColor: "#D4D5DF !important" }, 
        }}
      >  
        {availablePlans.map((plan) => (  
          <MenuItem 
            key={`plan-${plan.id}`} 
            value={plan.name} 
            sx={{
              background:"#F9F9FC",
              fontSize:{xs:"12px", sm:"24px"}, 
              padding:"10px 20px", 
              gap:"2", 
              color: "#8A8A94 !important", 
              display:"flex", 
              alignItems:"flex-start"
            }}
          >  
           <Box sx={{ 
  display: "flex", 
  alignItems: "center", 
  width: "100%",
  gap: { xs: 0.2, sm: 0.2 } 
}}>
  {/* Plan Name */}
  <Typography component="span" sx={{ 
    fontSize: { xs: "12px", sm: "14px", md: "24px" },
    flex: { xs: "0.18 0 0", sm: "0.18 0 0", md: "0.15 0 0" },
    minWidth: 0,
    overflow: "hidden",
    whiteSpace: "nowrap",
    color: "#292D32",
  }}>
    {getDisplayName(plan.name)}
  </Typography>
  
  {/* Separator */}
  <Typography component="span" sx={{ 
    fontSize: { xs: "10px", sm: "12px", md: "24px" },
    flex: "0 0 auto",
    px: { xs: 0.2, sm: 0.3, md: 0.3 },
    color: "#8A8F98"
  }}>
    ||
  </Typography>
  
  {/* Plan Speed */}
  <Typography component="span" sx={{ 
    fontSize: { xs: "10px", sm: "12px", md: "24px" },
    flex: { xs: "0.2 0 0", sm: "0.2 0 0", md: "0.14 0 0"  },
    minWidth: 0,
    textAlign: "left",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    color: "#8A8F98"
  }}>
    {plan.speed}
  </Typography>
  
  {/* Separator */}
  <Typography component="span" sx={{ 
    fontSize: { xs: "10px", sm: "12px", md: "24px" },
    flex: "0 0 auto",
    px: { xs: 0.2, sm: 0.3, md: 0.3 },
    color: "#8A8F98"
  }}>
    ||
  </Typography>
  
 
  <Typography component="span" sx={{ 
    fontSize: { xs: "10px", sm: "12px", md: "24px" },
    flex: { xs: "0.37 0 0", sm: "0.3 0 0", md: "0.42 0 0" },
    minWidth: 0,
    textAlign: "left",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    color: "#8A8F98"
  }}>
    {isMobile ? `up to ${plan.devices} devices` : `recommended for ${plan.devices} devices`}
  </Typography>
  
  {/* Separator */}
  <Typography component="span" sx={{ 
    fontSize: { xs: "10px", sm: "12px", md: "24px" },
    flex: "0 0 auto",
    px: { xs: 0.2, sm: 0.3, md: 0.5 },
    color: "#8A8F98"
  }}>
    ||
  </Typography>
  
  {/* Price - Also using isSmOrMd */}
  <Typography component="span" sx={{ 
    fontSize: { xs: "10px", sm: "12px", md: "24px" },
    flex: { xs: "0.25 0 0", sm: "0.3 0 0" },
    minWidth: 0,
    textAlign: "left",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    color: "#8A8F98"
  }}>
    {isMobile ? `${plan.price}/mo` : `from ${plan.price}/month`}
  </Typography>
</Box>

               
          </MenuItem>  
        ))}  
      </Select>  
    </FormControl>  
  );  
};

// Enterprise Service Component
const EnterpriseServiceComponent: React.FC<EnterpriseServiceComponentProps> = ({
  services,
  selectedService,
  onServiceSelect,
  getEnterpriseDisplayName,
  serviceDescriptions,
  isMobile
}) => {
  const [selectedServiceName, setSelectedServiceName] = useState(selectedService?.name || "");

  const handleServiceChange = (event: SelectChangeEvent<string>) => {  
    const serviceName = event.target.value as string;  
    setSelectedServiceName(serviceName);
    const selected = services.find(service => service.name === serviceName) || null;
    onServiceSelect(selected);  
  };  

  const getServiceIcon = (serviceName: string) => {
    switch(serviceName) {
      case 'fiber to office': return FiberIcon;
      case 'voip': return VoipIcon;
      case 'vsat': return SatelliteIcon;
      case 'storage': return StorageIcon;
      case 'data center': return DataCenterIcon;
      case 'it': return ItIcon;
    }
  };

  return (  
    <Box>  
      <FormControl fullWidth 
        sx={{
          mb: 2,
          marginTop: {xs:"-5px", sm:""},
          color:"#8A8A94",
          background: "#F9F9FC",
          height: "68px",
          fontSize:"24px",
          "& .MuiOutlinedInput-notchedOutline": { borderColor: "#D4D5DF" },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: "#D4D5DF !important" }, 
        }}
      >
        <InputLabel 
          sx={{
            fontFamily: "Helvetica Neue", 
            color:"#8A8A94",
            padding:"0px 10px",
            fontSize:{xs:"14px", sm:"20px"}, 
            "&.Mui-focused": { color: "#D4D5DF !important" }, 
            transition: "all 0.3s ease-in-out",
            display: selectedServiceName ? "none" : "block",  
          }}
        >  
          Select an enterprise network service  
        </InputLabel>  
        <Select 
          sx={{
            width: "100%",
            "& .MuiSelect-select": { padding: "16px", borderColor: "#D4D5DF !important"  },
            "&.Mui-focused": { borderColor: "#D4D5DF !important" }, 
          }}
          value={selectedServiceName} 
          onChange={handleServiceChange} 
          displayEmpty
        >  
          {services.map((service) => (  
            <MenuItem 
              key={`service-${service.id}`} 
              value={service.name} 
              sx={{
                background:"#F9F9FC",
                fontSize:{xs:"12px", sm:"24px"}, 
                padding:"10px 20px", 
                gap:"2", 
                color: "#8A8A94 !important", 
                display:"flex", 
                alignItems:"flex-start"
              }}
            >  
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Typography component="span" sx={{ fontWeight: "bold", fontSize:{xs:"14px", sm:"24px"} }}>
                  {getEnterpriseDisplayName(service.name)}
                </Typography>
                <Typography component="span" sx={{ paddingLeft:"5px", fontSize:{xs:"12px", sm:"24px"}, }}>
                  ({service.description})
                </Typography>
              </Box>
            </MenuItem>  
          ))}  
        </Select>  
      </FormControl>  

      {!selectedService && (  
        <Box sx={{
          p:{xs:2, sm:3}, 
          marginTop:{xs:"-10px", sm:""}, 
          height:"fit-content", 
          border:"1px solid #D4D5DF", 
          borderRadius:"8px", 
          display: "flex", 
          justifyContent: "space-between", 
          mb: 3, 
          backgroundColor: "#F9F9FC"
        }}>   
          <Typography variant="body2" sx={{ 
            color: "grey.600", 
            fontSize: {xs:"14px", sm:"20px"}, 
            textAlign:"left", 
            lineHeight:"120%" 
          }}>  
            Explore the innovative features of our enterprise network services that are custom-made to satisfy all your business, IT, and connectivity needs.  
          </Typography> 
        </Box>
      )}   

      {selectedService && (  
        <Box sx={{
          height:"fit-content",
          border:"1px solid #D4D5DF", 
          borderRadius:"8px", 
          display: "flex", 
          flexDirection:{xs:"column", sm:"row"}, 
          justifyContent: "space-between", 
          mb: 3, 
          backgroundColor: "#F9F9FC"
        }}>

          <Box 
          sx={{
            height:"fit-content", 
            borderRadius:"8px", 
            display: "flex", 
            flexDirection:"column", 
            justifyContent: "space-between", 
             
          }}>

             <Box sx={{
            padding:"18px 0px", 
            backgroundColor: "#F9F9FC", 
            height:"fit-content",
            paddingLeft:"10px", 
            borderRadius:"8px",
            display:"flex",
            flexDirection:"column",
          }}>
            
            <Typography sx={{
              textAlign:"left", 
              fontSize:{xs:"20px", sm:"25px"}, 
              padding: "0px 10px", 
              fontFamily: "Helvetica Neue",
              fontWeight:"100", 
              color: "#8A8A94",
              display: "flex",
              alignItems: "center",
              gap: "10px"
            }}>  
              {getEnterpriseDisplayName(selectedService.name)} 
            </Typography> 

            <Typography sx={{
              textAlign:"left", 
              fontSize:{xs:"20px", sm:"25px"}, 
              padding: "0px 10px", 
              fontFamily: "Helvetica Neue",
              fontWeight:"100", 
              color: "#8A8A94",
              mt: 2,
              display: "flex",
              alignItems: "center",
              gap: "10px"
            }}>
              Features:
            </Typography>
          </Box>

          <Box
          sx={{
            height:"fit-content",
            width:"138px",
            paddingLeft:"10px", 

          }}
          >
               <img 
                src={getServiceIcon(selectedService.name)}
                width="100%"
              />
          </Box>

          </Box>
         
<Box 
    sx={{
      display:"flex",
     alignItems:"center"}}
     >
<Box sx={{
            padding: "16px 24px", 
            gap:"20px",
            borderRadius:"16px",
            margin: "20px",
            height:"fit-content",
            backgroundColor: "#F9F9FC", 
            width:"fit-content",
            border:"1px solid #D4D5DF",
            background:"#F2F7F8",
          }}>
            <Typography variant="body2" sx={{
              textAlign:"left", 
              fontSize:{xs:"14px", sm:"20px"}, 
              color: "#010156",
            }}>  
              <ul style={{listStyleType: "circle" ,  paddingLeft: 0, margin: 0 }}>  
                {serviceDescriptions[selectedService.name]?.map((feature, index) => (  
                  <li 
                    key={`feature-${index}`} 
                    style={{ 
                      display: "flex", 
                      alignItems: "center", 
                      listStyleType: "circle",
                      gap: "8px", 
                      marginBottom: "8px",
                      fontSize: isMobile ? "14px" : "16px"
                    }}
                  >
                    {feature}
                  </li>  
                ))}  
              </ul>  
            </Typography>
          </Box>

</Box>
          
        </Box>  
      )}  
    </Box>  
  );  
};

export default BuyInternet;