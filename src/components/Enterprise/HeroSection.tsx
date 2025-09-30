import {useState} from "react";
import { Box, Typography, Button, Grid, Paper, List, ListItem , ListItemIcon, ListItemText} from '@mui/material';
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import GoogleLogo from "/images/svg/google_logo.svg"
import Star from "/images/svg/star.svg"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Badge from "/images/svg/Badge.svg"
import Frame1 from "/images/icons/frame1.svg";
import Frame3 from "/images/icons/frame3.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css"; 
import { Pagination, Autoplay } from "swiper/modules";
import Enterprise1 from "/images/Hero/enterprise1.png";
import Enterprise2 from "/images/Hero/enterprise2.png";
import Enterprise3 from "/images/Hero/enterprise3.png";
import Enterprise4 from "/images/Hero/enterprise4.png";
import Enterprise5 from "/images/Hero/enterprise5.png";
import Enterprise6 from "/images/Hero/enterprise6.png";
import Line1 from "/images/lines/hero-line1.svg";
import Line2 from "/images/lines/hero-line2.svg";
import NewBadge from "/images/icons/new-badge.svg"
import MobileBadge from "/images/icons/mobileBadge.svg"
import ArrorRight from "/images/icons/right.svg"
import Dialog from '@mui/material/Dialog';
import { useMediaQuery, useTheme } from "@mui/material";
import { useDispatch, useSelector } from 'react-redux';
import { openModal, closeModal, setFlowType } from '../../Service/features/serviceFlow/serviceFlowSlice';
import { RootState } from "../../Service/store";
import { FlowType } from "../../Service/features/serviceFlow/types";
import ServiceFlow from "../Modal/serviceFlow";
import "../../App.css";


interface DiscoverSectionProps {
  onOpen: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const DiscoverSection: React.FC<DiscoverSectionProps> = ({onOpen}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));


  return (
    <>
         <Box sx={{display:"flex", justifyContent:{xs:"center", sm:"center", md:"left"},}}>
      <Box 
       component="button"
       onClick={onOpen}
        display="flex" 
        alignItems="center" 
        sx={{
          borderRadius: "120px", 
          border: "1px solid #D4D5DF", 
          padding: "16px", 
          marginBottom: "16px", 
          height: {xs:"43.9px", sm:"54px"}, 
          marginTop:{xs:"-50px", sm:"0px"}, 
          width: {xs:"90%", sm:"60%",md:"80%"},
          background: "linear-gradient(90deg, #FFF7FC 0%, #FFE9F7 100%)",
          cursor: "pointer"
        }}
      >
        <Box sx={{ paddingRight: isMobile ? "10px" : "16px" }}>
          <img src={isMobile ? MobileBadge : NewBadge} alt="New" />
        </Box>
        <Typography
          sx={{
            fontSize: { xs: "13px", sm: "16px", md:"15px", xl:"18px", xxl:"25px" },
            fontFamily: 'Inter',
            fontWeight: 500,
            color: "#707284",
            letterSpacing: {xs:"-0.75px", sm:"-0.79px"},
          }}
        >
          Get your custom enterprise solution today
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingLeft: "10px" }}>
          <img src={ArrorRight} alt="Arrow Right" />
        </Box>
      </Box>
      </Box>

    </>
  );
};




const features = [
  "Dedicated high-speed Internet for maximum performance",
  "Robust network security to safe guard critical data",
  "Scalable solutions to support growth",
   "Custom solutions tailored to your enterprise needs"
];

const PurchaseSection = () => (
  <Box sx={{display:"flex", flexDirection:"column", alignItems:{xm:"center", sm:"center", md:"left"}, padding:{xs:"0px 2.5%", sm:"0px 5%", md:"0px 0%"}, width:{md:"95%"},  }}>
       <Typography variant="h2" component="div" sx={{ color: '#010156', fontWeight: 600, fontFamily: "Museo Slab Medium", fontSize: {xs:"30px", sm:"52px", md:"40px", xl:"60px", xxl:"70px"},textAlign:{xs:"center", sm:"center", md:"left"}, marginTop:"27px", letterSpacing:{xs:"-0.5px", sm:"-2.25px"}, width:{md:"100%"},}}>
        <span style={{ color: '#E65D0F' }}> Upgrade your enterprise </span> <br/>with the best network <br/>solutions
        </Typography>
        <Box sx={{display:"flex", justifyContent:{xs:"center",sm:"center", md:"left"},  alignItems:{xm:"center", sm:"center", md:"left"},width:{md:"100%"},}}>
                <List sx={{ color: "#2D2F32", textAlign: { xs: "center", sm: "center", md:"left" },letterSpacing: "-0.56px", paddingRight: { xs: "0px", sm:"0px", md:"32px" }, }}>
          {features.map((feature, index) => (
            <ListItem key={index} sx={{ padding: "10px 0px", margin: "5px 0px", marginTop: "11px", height: "32px" }}>
              <ListItemIcon sx={{ width: { xs: "20px", sm: "40px" }, minWidth: { xs: "20px", sm: "40px" } }}>
                <CheckCircleIcon sx={{ color: "#3BB752" }} />
              </ListItemIcon>
          <ListItemText
                primary={feature}
                primaryTypographyProps={{
                  fontSize: { xs: "12px", sm: "16px" },
                  fontFamily: "Inter",
                  fontWeight: 400,
                  lineHeight: "32px",
                  letterSpacing: "-0.56px",
                  color: "#333E49",
                  paddingLeft:{xs:"10px", sm:"0px"}
                }}
              />
            </ListItem>
      ))}
    </List>
    </Box>


</Box>
);

interface ActionButtonProps {
  text: string; 
  onOpen: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const ActionButton: React.FC<ActionButtonProps> = ({ text, onOpen }) => (

   <Button 
   variant="contained" 
   onClick={onOpen}
 
   sx={{   
       color: 'white',
       height:"48px",
       borderRadius: '64px',
       padding: '8px 24px',
       boxShadow:"none",
       fontSize: '16px',
       fontWeight: 600,
       textTransform: 'none',
       display: 'flex',
       width:{xs:"90%",sm:"43%", md:"fit-content"},
       alignItems: 'center',
       gap: 1,
       margin:"23px 0px 40px",
       backgroundColor: "#010156",
       letterSpacing:"-0.79px",
        "&:hover": { backgroundColor: "#e65d0f", boxShadow:"none"  },}}>
        {text}
       <ArrowForwardIcon />
       

   </Button>
);

interface StatsCardProps {
    description: string | React.ReactNode;
}

interface StatsCardProps {
    description: string | React.ReactNode;
    icon?: string; 
  }
  
const StatsCard: React.FC<StatsCardProps> = ({ description, icon }) => (
    <Paper
      sx={{
        boxShadow: "none",
        padding: {xs:1, sm:2},
        height: "55px",
        borderRadius: 2,
        border: "0.5px solid #D4D5DF",
        background: "linear-gradient(90deg, #FFF7FC 0%, #FFE9F7 100%)",
        display: "flex",
        alignItems: "center",
        marginBottom: 2,
        width: "fit-content", 
        maxWidth: "100%", 
      }}
    >
      <Box sx={{ width:{xs:18.7, sm:26}, height:{xs:29.2, sm:41} , marginRight:{xs:0.5, sm:1}}}>
        <img src={icon || Badge} alt="Icon" style={{ width: "100%", height: "100%" }} />
      </Box>
      
      <Typography
        variant="body1"
        sx={{ 
          color: "#1B1F26B8", 
          lineHeight: "1.2",
          fontSize:"12px" , 
        }}
      >
        {description}
      </Typography>
    </Paper>
  );
  

  const HeroSection: React.FC = () => {
    const dispatch = useDispatch();
    const isModalOpen = useSelector((state: RootState) => state.serviceFlow.isModalOpen);
    const [initialFlowType, setInitialFlowType] = useState<FlowType | undefined>(undefined);
  

    const handleOpenModal = (event: React.MouseEvent<HTMLButtonElement>, flowType: FlowType) => {  
      event.preventDefault();
      setInitialFlowType(flowType);
      dispatch(setFlowType(flowType));
      dispatch(openModal());
    };
  
    const handleCloseModal = () => {  
      dispatch(closeModal());
      setInitialFlowType(undefined);
    };
    return (
    <Grid
      container
      spacing={2}
      justifyContent="space-between"
      sx={{
        backgroundColor: "#FFF7FC",
        paddingTop: "197.4px",
        paddingLeft: {md:"2.5%" },
        paddingRight: {md:"2.5%" },
        height: "auto", 
        flexDirection: { xs: "column", sm: "column", md:"row" },
      }}
    >
      {/* Left Section */}
      <Grid item xs={12} sm={12} md={5} sx={{ marginLeft: {xs:"0%", sm:"0%", md:"5%"}, }}>
      <DiscoverSection   onOpen={(event: React.MouseEvent<HTMLButtonElement>) => handleOpenModal(event, "enterprise")}  />
        <PurchaseSection />
      <Box sx={{display:"flex", justifyContent:{xs:"center", sm:"center",md:"left"}}}>
              <ActionButton 
          text="Get connected" 
          onOpen={(event: React.MouseEvent<HTMLButtonElement>) => handleOpenModal(event, "enterprise")} 
          />
        </Box>
       {/* Stats Grid */}
       <Grid container sx={{ display: "flex", marginTop: "8px", marginBottom:"20px", }}>
          {/* First Row */}
          <Box sx={{ display: "flex", height:"55px", justifyContent:{xs:"center",sm:"center", md:"left"}, width:"100%"}}>
            <Box sx={{ width: "fit-content", marginRight: "8px" }}>
              <StatsCard description={<>99% customer <br /> satisfaction rate</>} />
            </Box>
            <Box sx={{ width: "fit-content"}}>
              <StatsCard description={<>300+ enterprise <br /> clients worldwide</>} />
            </Box>
          </Box>
  
          {/* Second Row */}
          <Box sx={{ display: "flex", height:"55px", marginTop: "8px", justifyContent:{xs:"center", sm:"center", md:"left"},width:"100%" }}>
            <Box sx={{ width: "fit-content", marginRight: "8px" }}>
              <StatsCard description={<>99.9% network  <br /> uptime guarantee</>} />
            </Box>
            <Box sx={{ width: "fit-content" }}>
              <StatsCard
                description={
                  <>
                    <Box display="flex" alignItems="center"sx={{ marginLeft: "8px"}}>
                      <Typography variant="h6" fontWeight={700} fontSize={12}>4.8+</Typography>
                      <Typography variant="body1" sx={{ ml: 0.5 }} fontSize={12}>rating</Typography>
                    </Box>
                    <Box display="flex" ml={1} pr={2}>
                      {[...Array(4)].map((_, index) => (
                        <img key={index} src={Star} alt="Full Star" style={{ width: 12, height: 12, opacity: 1 }} />
                      ))}
                      <img src={Star} alt="Half Star" style={{ width: 12, height: 12, opacity: 0.8 }} />
                    </Box>
                  </>
                }
                icon={GoogleLogo}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
      
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
          initialFlow={initialFlowType}
          onComplete={handleCloseModal}
        />
      </Dialog>
  
      {/* Right Section - Image Container */}
      <Grid item  xs={12} sm={12} md={5}   
      sx={{
        marginRight:{xs:"0%", sm:"0%", md:"5%"}, 
        marginLeft:{xs:"0%", sm:"0%", md:"0%"}, 
        paddingBottom:{xs:"100px", sm:"168px"},
        display:"flex",
        justifyContent:"center",
      }}>
      <Grid
        item
        sx={{
          position: "relative",
          width:{xs:"90%", sm:"70%", md:"100%"},
          height: "fit-content", 
          marginTop: "20px",
          borderRadius: "24px",
          background:"#FFE9F7",
          padding:"16px 18px",
          zIndex:"100",

          
          "&:before": {
            content: '""',
            position: "absolute",
            inset: 0, 
            padding: "0.5px", 
            borderRadius: "inherit",
            WebkitMask: "linear-gradient(white, white) content-box, linear-gradient(white, white)",
            WebkitMaskComposite: "destination-out",
            maskComposite: "exclude",
            zIndex:"100",
          },
        
          "&:after": {
            content: '""',
            position: "absolute",
            inset: "0px", 
            borderRadius: "inherit",
            backgroundSize: "cover",
            backgroundBlendMode: "overlay", 
            zIndex:"100", 
          }
        }}
        
      >  
         {/* Floating Line Section */}
         <Box sx={{position:"absolute", left:{md:"-35%", xl:"-20%"}, top:"-105px", display:{xs:"none", sm:"none", md:"flex"},  }}>
        <img src={Line1} alt="" />
      </Box>

      <Box sx={{position:"absolute",right:{md:"-20%", xl:"-10%"}, bottom:"-125px", zIndex:"-1", display:{xs:"none", sm:"none", md:"flex"},  }}>
        <img src={Line2} alt="" style={{width:"100%"}} />
      </Box>

       {/* Absolute Box */}
       <Box  sx={{
              position: "absolute",
              right: {sm:"-12%", md:"-16%", xl:"-12%"},
              top:"10%",
              width:"266px",
              height:"64px",
              borderRadius:"16px",
              background: "linear-gradient(90deg, #FFF7FC 0%, #FFE9F7 100%)",
              padding: "16px",
              gap:"16px",
              border:"1px solid #D4D5DF",
              display: {xs:"none", sm:"flex"},
              zIndex:"1000"
            }}>
            <img src={Frame1} alt="" />
          <Typography variant="body2" 
          sx={{ fontSize:"12px", lineHeight:"20px", fontFamily:"inter", fontWeight:"400", color:"#333E49", marginTop:"-5px"}} >
            Experience fast internet speeds of 150Mbps and above monthly
          </Typography>
          </Box>

          <Box  sx={{
              position: "absolute",
              left: "-102px",
              right: "0px",
              top:"80%",
              width:"266px",
              height:"64px",
              borderRadius:"16px",
              background: "linear-gradient(90deg, #FFF7FC 0%, #FFE9F7 100%)",
              padding: "14px",
              gap:"16px",
              border:"1px solid #D4D5DF",
              display: {xs:"none", sm:"flex"},
              zIndex:"1000"
            }}>
                   <img src={Frame3} alt="" />
          <Typography variant="body2" 
          sx={{ fontSize:"12px", lineHeight:"20px", fontFamily:"inter", fontWeight:"400", color:"#333E49", marginTop:"-5px", marginLeft:"-6px"}} >
            Affordable and custom plans tailored to your specific needs
          </Typography>
          </Box>

        <Box sx={{position:"relative", textAlign: "center", zIndex: 1,}}>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={1}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
        style={{ borderRadius: "24px" }}
        >
          <SwiperSlide >
            <img src={Enterprise1} alt="Slide 1" className="homeHero"  style={{ borderRadius: "24px",width:"100%"  }} />
          </SwiperSlide>
          <SwiperSlide >
            <img src={Enterprise2} alt="Slide 2" className="homeHero" style={{ borderRadius: "24px", width:"100%"  }} />
          </SwiperSlide>
          <SwiperSlide >
            <img src={Enterprise3} alt="Slide 3" className="homeHero" style={{ borderRadius: "24px", width:"100%"  }}/>
          </SwiperSlide>
          <SwiperSlide >
            <img src={Enterprise4} alt="Slide 4" className="homeHero" style={{ borderRadius: "24px", width:"100%"  }} />
          </SwiperSlide>
          <SwiperSlide >
            <img src={Enterprise5} alt="Slide 5" className="homeHero" style={{ borderRadius: "24px", width:"100%"  }}/>
          </SwiperSlide>
          <SwiperSlide >
            <img src={Enterprise6} alt="Slide 6" className="homeHero" style={{ borderRadius: "24px", width:"100%"  }}/>
          </SwiperSlide>
        </Swiper>
        </Box>

             
      </Grid>
         
      </Grid>
    </Grid>
    
  );
};
  
  export default HeroSection;
  