


import { Box, Button, Paper, Grid, Typography } from "@mui/material";
import { useDispatch, useSelector } from 'react-redux';
import { 
  openModal, 
  closeModal, 
  setResidentialStep, 
  selectItem, 
  setFlowType,
  resetServiceFlow
} from "../../Service/features/serviceFlow/serviceFlowSlice";
import { RootState } from "../../Service/store";
import Shop from "/images/icons/shop.svg";
import Business from "/images/icons/business.svg";
import Cards from "/images/svg/cards.svg";
import Wifi from "/images/icons/wifi-square.svg";
import Arrow from "/images/icons/arrow-text.svg";
import Flash from "/images/icons/flash.svg";
import BuyLine3 from "/images/lines/buy-line3.svg";
import BuyLine2 from "/images/lines/buy-line2.svg";
import Globe from "/images/gif/globe.gif";
import ServiceFlow from "../Modal/serviceFlow";
import Dialog from '@mui/material/Dialog';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


const plans = [  
  { id: 1, price: "₦18,500/month", name: "Express", title: "Express Plan", speed: "up 35mbps", devices: "5 devices connected, unlimited downloads", displayPrice: "starting at ₦18,500 every month" },  
  { id: 2, price: "₦24,000/month", name: "Super", title: "Super Plan", speed: "up 50mbps", devices: "8 devices connected, unlimited downloads", displayPrice: "starting at ₦24,000 every month" },  
  { id: 3, price: "₦30,000/month", name: "Gold", title: "Gold Plan", speed: "up 75mbps", devices: "10 devices connected, unlimited downloads", displayPrice: "starting at ₦30,000 every month" },  
  { id: 4, price: "₦50,000/month", name: "Linkorg VIP1", title: "VIP (I) Plan", speed: "up 100mbps", devices: "15 devices connected, unlimited downloads", displayPrice: "starting at ₦50,000 every month" },  
  { id: 5, price: "₦57,000/month", name: "Linkorg VIP2", title: "VIP (II) Plan", speed: "up 150mbps", devices: "20 devices connected, unlimited downloads", displayPrice: "starting at ₦57,000 every month" },  
  { id: 6, price: "₦57,000/month", name: "Linkorg VIP3", title: "99% Uptime", speed: "in coverage areas", devices: "Stable internet connectivity with zero downtime", displayPrice: "at home for your network needs", isUnique: true },  
];

const BusinessPlans = () => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state: RootState) => state.serviceFlow.isModalOpen);

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
      
      // Initialize new flow (step 1 for individual plans)
      dispatch(setResidentialStep(1));
      dispatch(selectItem(reduxPlan));
      dispatch(setFlowType('residential'));
      dispatch(openModal());
    }
  };
  
  const handleCloseModal = () => {  
    dispatch(closeModal());
    dispatch(resetServiceFlow());
  };

  const handleOpenGeneralFlow = () => {
    dispatch(resetServiceFlow());
    dispatch(setResidentialStep(0)); 
    dispatch(setFlowType('residential'));
    dispatch(openModal());
  };

  return (
    <>

    <Box sx={{ margin:"120px 0px", width:{xs:"95%", sm:"85%"}, marginLeft:{xs:"2.5%", sm:"7.5%"}, zIndex:"10", position:"relative" }}>
         {/* Floating Line Section */}
         <Box sx={{
                position: "absolute",
                left: "-10%",
                right: "0px",
                top: {md:"-20px", xl:"-40px"},
                zIndex:"-1",
                display:{xs:"none", sm:"none", md:"none", lg:"flex"},
              }}>
                <img src={BuyLine3} alt="Decorative line"  />
              </Box>

              <Box sx={{
                position: "absolute",
                // left: {xl:"86%", xxl:"120%"},
                right: "-10%",
                top: {md:"40px", xl:"0px"},
                zIndex:"-1",
                display:{xs:"none", sm:"none", md:"none", lg:"flex"},
              }}>
                <img src={BuyLine2} alt="Decorative line"  />
              </Box>

              <Box 
              sx={{position:"absolute", 
                left:"86%",
                top: {md:"100px", xl:"130px"}, 
              bottom:"0px", 
              zIndex:"1", width:"90px", height:"90px",   
              display:{xs:"none", sm:"none", md:"none", lg:"flex"},}}>
        <img src={Globe} alt="" style={{width:"100%"}}/>
      </Box> 

     {/* Floating Line Section */}


      <Box sx={{display:"flex", justifyContent:{xs:"center", sm:"left"},  marginTop:{xs:"-80px", sm:"0px"}}}>
        <Box sx={{ display: "flex", alignItems: 'center', gap: 2,marginTop:"20px", background:"#F2F7F8", border:"1px solid #D4D5DF", padding: {xs:"0px 8px", sm:"0px 16px"}, height:{xs:"24px", sm:"40px" }, borderRadius:"80px", width:"fit-content"}}>
          <Box sx={{ width: {xs:"16px", sm:"24px"}, height: {xs:"16px", sm:"24px"}, marginRight:"6px", }}>
            <img src={Shop} alt="" style={{ fill: "#010156", width: "100%",  filter: 'invert(15%) sepia(100%) saturate(7456%) hue-rotate(220deg) brightness(50%) contrast(120%)' }} /> 
          </Box>
    
          <Box sx={{marginLeft:{xs:"-12px", sm:"-12px", width:"fit-content",   zIndex:"1000",}}}>
            <Typography sx={{color: "#010156", fontFamily:"Helvetica", fontSize:{xs:"14px", sm:"15.7px"}, fontWeight:"400", lineHeight:"100%", letterSpacing:"0%", width:"fit-content", padding:"0px"}}>
              Business/SME Internet Plans
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box sx={{margin:{xs:"16px 0px", sm:"24px 0px"}, display:"flex", justifyContent:{xs:"center", sm:"left"}}}>
        <Typography sx={{color:"#010156", fontFamily:"Museo Slab Medium", fontSize:{xs:"20px", sm:"30px", md:"48px"}, lineHeight:"117%",letterSpacing:"-3%", fontWeight:"600" }}>
        Explore our  <span style={{ color: "#E65D0F" }}>internet</span> plans designed <br/> to fuel your <span style={{ color: "#E65D0F" }}> business growth</span>
        </Typography>
      </Box> 

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
        <ServiceFlow 
          initialFlow="residential" 
          onComplete={handleCloseModal}
        />
      </Dialog>  


      {/* Business Data Plans */}
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
          <Box sx={{width:{xs:"40px", sm:"64px"}, height:{xs:"40px", sm:"64px"}}}>
            <img src={Business} alt="" style={{width:"100%"}} />
          </Box>
           
          <Typography variant="h5" fontWeight="bold" sx={{fontSize:{xs:"24px", sm:"40px"}, fontFamily:"Museo Slab Medium", fontWeight:"600", lineHeight:"117%", letterSpacing:"-3%", color:"#010156", padding:"16px 0px"}}>
            Business Data Plans
          </Typography>
          <Typography color="textSecondary" sx={{color:"#333E49", fontFamily:"inter", fontWeight:"400", fontSize:"18px", lineHeight:"-0.56px", letterSpacing:"-0.56px", paddingTop:"8px",marginBottom:"80px"}}>
            Select a data plan for your small or medium-sized business outlet today to get high-speed connectivity up to 150mbps.
          </Typography>
          <Box sx={{marginTop:{xs:"-40px", sm:"0px"},  padding:{xs:"0px"}, height:{xs:"fit-content"}, display:"flex", justifyContent:{xs:"center", sm:"center", md:"left"}}}>
         
            <Button 
              variant="contained" 
              onClick={handleOpenGeneralFlow}
              sx={{
                height:"48px",
                borderRadius: '64px',
                padding: '8px 24px',
                fontSize: '16px',
                fontWeight: 600,
                textTransform: 'none',
                display: 'flex',
                width:{xs:"90%",sm:"60%", md:"fit-content"},
                alignItems: 'center',
                gap: 1,
                boxShadow:"none" ,
                letterSpacing:"-0.79px",
                margin:"23px 0px 40px",
                backgroundColor: "#010156",
                "&:hover": { backgroundColor: "#e65d0f", boxShadow:"none" },

              }}
            >
              Buy a business data plan
              <ArrowForwardIcon />
            </Button>
            

          </Box>
        </Box>

        {/* Tags */}
        <Box gap={1} sx={{
           display:{xs:"none", sm:"none", md:"flex"},
          width:"55%",
          backgroundImage: 'url("/images/lines/service-line.svg")',  
          backgroundRepeat:"no-repeat",
        }}>
          <Box sx={{width:"80%", marginLeft:"15%", marginTop:"90px"}}>
            <img src={Cards} alt="" style={{width:"100%"}}/>
          </Box>
        </Box>
      </Paper> 

      {/* Plans Grid */}
      <Grid container spacing={3} mt={0}>
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
                height: "fit-content",
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  background: "#010156",
                  "& h6": {
                    color: "#E65D0F",
                  },
                  "& h6 span": {
                    color: "#ffffff !important",
                  },
                  "& p": {
                    color: "#ffffff",
                  },
                  "& a": {
                    color: "#E65D0F !important", 
                    textDecorationColor: "#E65D0F",
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
                {plan.isUnique ? (  
                  <img src={Flash} alt="Different Icon" />  
                ) : (  
                  <img src={Wifi} alt="Wifi Icon" />  
                )}  
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
                {plan.title}
                <span
                  style={{
                    fontSize: "16px",
                    paddingLeft: "10px",
                    color: "#5D6771",
                    transition: "color 0.3s ease-in-out",
                  }}
                >
                  ({plan.speed})
                </span>
              </Typography>

              {/* Plan Details */}
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
                {plan.devices}
              </Typography>
              <Typography
                mt={1}
                sx={{
                  color: "#333E49",
                  transition: "color 0.3s ease-in-out",
                }}
              >
                {plan.displayPrice}
              </Typography>

              {/* Buy Now Button */}
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
                  style={{
                    marginLeft: "5px",
                    transition: "filter 0.3s ease-in-out",
                  }}
                />
              </Button>
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
              <ListItemText primary="* Fair Usage Policy (FUP) applies on internet plans after reaching max usage threshold" />
            </ListItem>
            <ListItem sx={{padding:{xs:"5px 0px", sm:"0px"}, color:"#5D6771", fontFamily:"inter", fontSize:"16px", letterSpacing:"-0.56px",lineHeight:"40px"}}>
              <ListItemText primary="* We charge a one-time installation fee of ₦50,000 for our network services" />
            </ListItem>
            <ListItem sx={{padding:{xs:"5px 0px", sm:"0px"}, color:"#5D6771", fontFamily:"inter", fontSize:"16px", letterSpacing:"-0.56px",lineHeight:"40px"}}>
              <ListItemText primary="* Plans come with a Free Netflix Subscription for your entertainment (Limited Offer)" />
            </ListItem>
          </List>
        </Box>
      </Paper> */}
    </Box>
    </>
  );
};

export default BusinessPlans;
