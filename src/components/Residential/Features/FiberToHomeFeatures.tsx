import { Box, Button, Paper, Grid, Typography } from "@mui/material";
import Wifi from "/images/icons/wifi-square.svg";
import Arrow from "/images/icons/arrow-text.svg";
import Flash from "/images/icons/flash.svg";
import { useDispatch, useSelector } from 'react-redux';
import { 
  openModal, 
  closeModal, 
  setResidentialStep, 
  selectItem, 
  setFlowType,
  resetServiceFlow
} from '../../../Service/features/serviceFlow/serviceFlowSlice';
import { RootState } from '../../../Service/store';
import Dialog from '@mui/material/Dialog';
import ServiceFlow from "../../Modal/serviceFlow";

const plans = [  
  { id: 1,  price: "₦18,500/month", name: "Express", title: "Express Plan", speed: "up 35mbps", devices: "Recommended for up to 5 devices,", displayPrice: "unlimited downloads, starting at ₦18,500 every month" },  
  { id: 2,  price: "₦24,000/month", name: "Super", title: "Super Plan", speed: "up 50mbps", devices: "Recommended for up to 8 devices connected,", displayPrice: "unlimited downloads, starting at ₦24,000 every month" },  
  { id: 3,  price: "₦30,000/month", name: "Gold", title: "Gold Plan", speed: "up 75mbps", devices: "Recommended for up to 10 devices connected,", displayPrice: "unlimited downloads, starting at ₦30,000 every month" },  
  { id: 4, price: "₦50,000/month", name: "Linkorg VIP1", title: "VIP (I) Plan", speed: "up 100mbps", devices: "Recommended for up to 15 devices connected,", displayPrice: "unlimited downloads, starting at ₦50,000 every month" },  
  { id: 5, price: "₦57,000/month", name: "Linkorg VIP2", title: "VIP (II) Plan", speed: "up 150mbps", devices: "Recommended for up to 20 devices connected,", displayPrice: "unlimited downloads, starting at ₦57,000 every month" },  
  { id: 6, price: "₦57,000/month", name: "Linkorg VIP3", title: "99% Uptime", speed: "in coverage areas", devices: "Stable internet connectivity with zero downtime", displayPrice: "at home for your network needs", isUnique: true },  
];  

export const FiberToHomeFeatures = () => { 
  const dispatch = useDispatch();
  const isModalOpen1 = useSelector((state: RootState) => state.serviceFlow.isModalOpen);

  const handleOpenModal = (event: React.MouseEvent<HTMLButtonElement>, planId: number) => {  
    event.preventDefault();
    const selectedDisplayPlan = plans.find(plan => plan.id === planId);
    
    if (selectedDisplayPlan) {
      const reduxPlan = {
        id: selectedDisplayPlan.id,
        name: selectedDisplayPlan.name,
        speed: selectedDisplayPlan.speed,
        price: selectedDisplayPlan.price
      };
      
      // Reset any previous flow state
      dispatch(resetServiceFlow());
      
      // Initialize new flow
      dispatch(setResidentialStep(1));
      dispatch(selectItem(reduxPlan));
      dispatch(setFlowType('residential'));
      dispatch(openModal());
    }
      
  };
  
  const handleCloseModal = () => {  
    dispatch(closeModal());
    dispatch(resetServiceFlow());
    console.log('Modal closed and state reset');
  }; 

  return (
    <>
      <Grid container spacing={3} mt={0} width={{xs:"98%", md:"95%"}}>
        {plans.map((plan) => (
          <Grid item xs={12} sm={6} md={4} key={plan.id}>
            <Paper
              elevation={1}
              sx={{
                padding: "24px",
                borderRadius: "24px",
                textAlign: "left",
                background: "#F9FAFB",
                boxShadow: "none",
                height: {xs:"324px", md:"300px"},
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  background: "#010156",
                  "& h6": { color: "#E75D11" },
                  "& h6 span": { color: "#ffffff !important" },
                  "& p": { color: "#ffffff" },
                  "& a": { 
                    color: "#E75D11 !important", 
                    textDecorationColor: "#E75D11",
                  },
                  "& .iconBox": { background: "#ffffff" },
                  "& .arrowIcon": { 
                    filter: "brightness(0) saturate(100%) invert(27%) sepia(88%) saturate(2052%) hue-rotate(356deg) brightness(98%) contrast(89%)", 
                  },
                },
              }}
            >
              <Box className="iconBox" sx={{
                height: "44px",
                width: "44px",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "#D4D5DF",
                transition: "background 0.3s ease-in-out",
              }}>
                {plan.isUnique ? <img src={Flash} alt="Unique Icon" /> : <img src={Wifi} alt="Wifi Icon" />}  
              </Box>  

              <Typography variant="h6" sx={{
                fontFamily: "Museo Slab Medium",
                fontWeight: "600",
                fontSize: "24px",
                color: "#010156",
                marginTop: "16px",
                transition: "color 0.3s ease-in-out",
              }}>
                {plan.title}
                <span style={{
                  fontSize: "16px",
                  paddingLeft: "10px",
                  color: "#5D6771",
                  transition: "color 0.3s ease-in-out",
                }}>
                  ({plan.speed})
                </span>
              </Typography>

              <Typography mt={1} sx={{
                color: "#333E49",
                fontFamily: "inter",
                fontSize: "14px",
                lineHeight: "32px",
                letterSpacing: "-0.56px",
                transition: "color 0.3s ease-in-out",
              }}>
                {plan.devices}
              </Typography>
              
              <Typography mt={1} sx={{
                fontSize: "14px",
                color: "#333E49",
                transition: "color 0.3s ease-in-out",
              }}>
                {plan.displayPrice}
              </Typography>

              <Button
                variant="text"
                onClick={(event) => handleOpenModal(event, plan.id)} 
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "30px",
                  textDecoration: "none",
                  transition: "color 0.3s ease-in-out",
                }}
              >
                <Typography
                  component="a"
                  sx={{
                    color: "#003EF2",
                    textDecoration: "underline",
                    fontSize: "16px",
                    fontFamily: "Helvetica",
                    lineHeight: "100%",
                    letterSpacing: "0%",
                    textDecorationColor: "#003EF2",
                    textTransform: "none",
                    transition: "color 0.3s ease-in-out",
                  }}
                >
                  Buy now
                </Typography>
                <img
                  src={Arrow}
                  alt="Arrow Icon"
                  className="arrowIcon"
                  style={{ marginLeft: "5px" }}
                />
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Dialog
        open={isModalOpen1}
        onClose={handleCloseModal}
        maxWidth="lg"
        sx={{ "& .MuiPaper-root": { borderRadius: "24px" } }}
        fullWidth
      >
        <ServiceFlow 
          onComplete={handleCloseModal}
          initialFlow="residential" 
        />
      </Dialog>
    </>
  );
};
