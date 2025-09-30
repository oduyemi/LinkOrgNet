import { useState } from "react";
import { 
  Box, 
  Button, 
  useMediaQuery, 
  useTheme, 
  Modal, 
  Typography, 
  TextField, 
  Grid, 
  Paper, 
  CircularProgress, 
  List, 
  ListItem,
  ListItemText,
  ListItemIcon 
} from "@mui/material";
import SearchIcon from "/images/svg/search-normal.svg";
import GoogleLogo from "/images/svg/google_logo.svg";
import Star from "/images/svg/star.svg";
import Badge from "/images/svg/Badge.svg";
import Frame1 from "/images/icons/frame1.svg";
import Frame3 from "/images/icons/frame3.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css"; 
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Pagination, Autoplay } from "swiper/modules";
import Hero1 from "/images/resiHero1.png";
import Hero2 from "/images/gaming.png";
import Hero3 from "/images/netflix.png";
import Hero4 from "/images/remote.png";
import Hero5 from "/images/aerial.png";
import Line1 from "/images/lines/hero-line1.svg";
import Line2 from "/images/lines/hero-line2.svg";
import { useDispatch, useSelector } from "react-redux";
import { openModal, closeModal } from "../../Service/features/serviceFlow/serviceFlowSlice";
import ServiceFlow from "../Modal/serviceFlow";
import { RootState } from "../../Service/store";
import {FlowType} from "../../Service/features/serviceFlow/types"
import {ActionButton} from "../Home/HeroSection"
import Dialog from "@mui/material/Dialog";

import "../../App.css";
import axios from "axios";
import { LocationOn } from "@mui/icons-material";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";


interface Area {
  name: string;
  id: number;
}


const DiscoverSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [inputValue, setInputValue] = useState("");
  const [placeholder, setPlaceholder] = useState( isMobile ? 'Check our network service availability' : 'Discover if our service is available in your area');
  const [buttonText, setButtonText] = useState("See all");
  const [isSearching, setIsSearching] = useState(false);
  const [availableAreas, setAvailableAreas] = useState<Area[]>([]);
  const [searchResult, setSearchResult] = useState<Area | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [isModalOpen1, setIsModalOpen] = useState(false);
  const [emptySearch, setEmptySearch] = useState(false);


  const handleFocus = () => {
    setPlaceholder(isMobile ? 'Enter your current location' : 'Enter your current location or neighbourhood');
    setButtonText("Search");
  };

  const handleSearch = async () => {
    if (!inputValue.trim()) {
      setEmptySearch(true);
      setIsModalOpen(true);
  
      if (availableAreas.length === 0) {
        try {
          const response = await axios.get("https://linkorgnet.vercel.app/api/v1/areas");
          console.log("API Response:", response.data); 
          const areas = Array.isArray(response.data) ? response.data : [];  
          const formattedAreas = areas.map((area: Area): Area => ({
            ...area,
            name: area.name
              .split(" ")
              .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
              .join(" "),
          }));
  
          setAvailableAreas(formattedAreas);
        } catch (error) {
          console.error("Failed to fetch areas:", error);
        }
      }
      return;
    }
  
    setIsSearching(true);
    setButtonText("Searching...");
    setErrorMessage("");
    setSearchResult(null);
    setEmptySearch(false);
  
    try {
      const response = await axios.get("https://linkorgnet.vercel.app/api/v1/areas");
      console.log("API Response:", response.data); 
      const areas = Array.isArray(response.data) ? response.data : [];   
      const formattedAreas = areas.map((area: Area): Area => ({
        ...area,
        name: area.name
          .split(" ")
          .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
          .join(" "),
      }));
  
      setAvailableAreas(formattedAreas);
  
      const foundArea = formattedAreas.find(
        (area) => area.name.toLowerCase() === inputValue.toLowerCase()
      );
  
      setSearchResult(foundArea || null);
      setIsModalOpen(true);
    } catch (error) {
      console.error("Failed to fetch areas:", errorMessage);
      setErrorMessage("Failed to fetch service areas. Please try again.");
    }
  
    setIsSearching(false);
    setButtonText("Search");
  };  
  
  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        sx={{
          borderRadius: "120px",  
          padding: "16px", 
          marginBottom: "16px",
          marginTop:{xs:"-50px", sm:"0px"}, 
          height: {xs:"43.9px", sm:"54px"}, 
          width: {xs:"100%", sm:"85%"},
          background: "linear-gradient(180deg, #F0F4F5 0%, #D1E4F8 100%)",
          border: "1px solid #D1E4F8"
        }}
      >
        <Box sx={{paddingRight:{xs:"8px", sm:"16px"},  }}>
          <img src={SearchIcon} alt="" style={{width: isMobile ? "110%" : "", paddingTop: isMobile ? "5px" : ""  }}/> 
        </Box>
        <TextField
          fullWidth
          variant="standard"
          InputProps={{ disableUnderline: true }}
          placeholder={placeholder}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onFocus={handleFocus}
          sx={{
            fontSize: "15px",
            fontFamily: "Inter",
            fontWeight: 500,
            color: "#707284",
            background: "transparent",
            border: "none",
            letterSpacing: "-0.79px",
            "& input::placeholder": {
              letterSpacing: { xs: "-0.54px", sm: "-0.79px" }, 
              fontSize: { xs: "12.8px", sm: "15px" },
              opacity: 1, 
              color: "#707284",
            }
          }}
        />
        <Button
          variant="contained"
          onClick={handleSearch}
          disabled={isSearching}
          sx={{
            borderRadius: '64px',
          ml: 4,
          background: "#333E49",
          color: 'white',
          fontSize: {xs:10, sm:16},
          fontFamily: 'Inter',
          fontWeight: 600,
          textTransform: 'none',
          padding: "5px 16px",
          whiteSpace: 'nowrap',  
          minWidth: "fit-content",     
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
          }}
        >
          {isSearching ? <CircularProgress size={20} sx={{ color: "white" }} /> : buttonText}
        </Button>
      </Box>

      {/* Search Result Modal */}
      <Modal open={isModalOpen1} onClose={() => setIsModalOpen(false)}>
  <Box
    className="searches"
    sx={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: 600,
      bgcolor: "background.paper",
      boxShadow: 24,
      p: 4,
      borderRadius: "12px",
      textAlign: "center",
    }}
  >
    {emptySearch ? (
      <>
        <img
          src="/images/svg/lagos.svg"
          alt="lagos"
          width="100%"
          className="remove"
          style={{ display: "block" }}
        />
        <Typography
          variant="h6"
          sx={{ fontFamily: "Museo Slab Bold", color: "#5D6771", marginBottom: 2, display: { xs: "block", sm: "none" } }}
        >
          <LocationOn
            sx={{ color: "#3388ff", fontSize: 17, marginTop:4, marginRight: 1 }}
          />
          Network Coverage
        </Typography>
        <Box sx={{ flexGrow: 1 }}>
  <Grid container spacing={2}>
    {availableAreas.length > 0 ? (
      availableAreas.map((area, index) => (
        <Grid item xs={6} sm={4} md={3} key={index}>
          <Box
          mt={1}
            sx={{
              display: 'flex',
              alignItems: 'center',
              background: { xs: "none", sm:'#f5f5f5'},
              color: '#010156',
              padding: '4px 4px',
              borderRadius: {xs: "none", sm:'20px'},
            }}
          >
            <img
              src="/images/icons/map.png"
              alt="map icon"
              width="16px"
              height="16px"
              style={{ marginRight: '8px' }}
            />
            <Typography variant="body2" noWrap>{area.name}</Typography>
          </Box>
        </Grid>
      ))
    ) : (
      <Typography variant="body2" color="gray">
        Loading service areas...
      </Typography>
    )}
  </Grid>
</Box>


      </>
    ) : searchResult ? (
      <>
          <img
          src="/images/gif/success.gif"
          alt="success"
          width="100%"
          className="mobileSuccess"
          style={{ display: "block" }}
        />
        <Typography
          variant="h6"
          sx={{ fontFamily: "Inter", display: "inline", color: "#010156", textAlign: { xs: "left", sm: "center" } }}
        >
          We're in your neighbourhood! {" "}
          <span>
            <Link to="">
              <Typography variant="h5" display="inline" fontWeight="700">
                Buy a Data Plan
              </Typography>
            </Link>
          </span> to enjoy high speed 
          internet connection like never before.
        </Typography>
      </>
    ) : (
      <Box mt={14}>
      <Typography
          variant="h6"
          sx={{ fontFamily: "Inter", display: "inline", color: "#010156", textAlign: { xs: "left", sm: "center" } }}
        >
          We&apos;re not in your neighbourhood yet, but 
          we&apos;re expanding soon! Stay tuned and {" "}
          <span>
            <Link to="">
              <Typography variant="h5" display="inline" fontWeight="700">
                Explore
              </Typography>
            </Link>
          </span> <ArrowForwardIcon /> the areas we currently cover
        </Typography>
        </Box>
    )}

    <Button
      variant="contained"
      sx={{ mt: 5, background: "#333E49", color: "white" }}
      onClick={() => setIsModalOpen(false)}
    >
      Close
    </Button>
  </Box>
</Modal>

    </>
  );
};

const PurchaseSection = () => (
  <Box>
    <Typography variant="h2" component="div" sx={{ color: '#010156', fontWeight: 600, fontFamily: "Museo Slab Medium", fontSize: {xs:"25px", sm:"42px"}, marginTop:"27px", lineSpacing: "-2.25px", textAlign:{xs:"center", sm:"left"} }}>
      Power your home with super fast, reliable internet <span style={{ color: '#E65D0F' }}> -work, play and family time </span>
    </Typography>
    <Box sx={{display:"flex", justifyContent:{xs:"center",sm:"left"}}}>
      <List sx={{ color: "#2D2F32", textAlign: { xs: "center", sm: "left" }, paddingRight: { xs: "0px", sm: "32px" }, letterSpacing: "-0.56px", }}>
        {[
          "Super fast Internet speed - up to 150Mbps", 
          "Reliable connectivity for the ultimate entertainment experience", 
          "Quick and easy installation in no time"
        ].map((text, index) => (
          <ListItem key={index} sx={{ padding: "10px 0px", margin: "5px 0px", marginTop: "11px", height: "32px" }}>
            <ListItemIcon sx={{ width: { xs: "20px", sm: "40px" }, minWidth: { xs: "20px", sm: "40px" } }}>
              <CheckCircleIcon sx={{ color: "#3BB752" }} />
            </ListItemIcon>
          <ListItemText
            primary={text}
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

interface StatsCardProps {
  description: string | React.ReactNode;
  icon?: string; 
}

const StatsCard: React.FC<StatsCardProps> = ({ description, icon }) => (
  <Paper
    sx={{
      boxShadow: "none",
        padding: 2.4,
        height: "55px",
        borderRadius: 2,
        border: "0.5px solid #D4D5DF",
        background: "linear-gradient(180deg, #F0F4F5 0%, #D1E4F8 100%)",
        display: "flex",
        alignItems: "center",
        marginBottom: 2,
        width: "fit-content", 
        maxWidth: "100%", 
    }}
  >
    <Box sx={{ width: {xs:16, sm:26}, height: 41, marginRight: 1 }}>
      <img src={icon || Badge} alt="Icon" style={{ width: "100%", height: "100%" }} />
    </Box>

    <Typography
      variant="body1"
      sx={{ 
        fontSize:12,
        color: "#1B1F26B8", 
        lineHeight: "1.2" 
      }}
    >
      {description}
    </Typography>
  </Paper>
);

export const ResidentialHero: React.FC = () => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state: RootState) => state.serviceFlow.isModalOpen);
  const [initialFlowType, setInitialFlowType] = useState<FlowType | undefined>(undefined);

  const handleOpenModal = (event: React.MouseEvent<HTMLButtonElement>, flowType: FlowType) => {
    event.preventDefault();
    setInitialFlowType(flowType);
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
        backgroundColor: "#F7F9FC",
        padding: { xs: "0px 10px", sm: "40px 0px" },
        paddingTop: { xs: "197.4px", sm: "197.4px" },
        paddingLeft: { xs: "20px", sm: "50px" },
        paddingRight: { xs: "20px", sm: "0px" },
        height: "auto",
        flexDirection: { xs: "column", sm: "row" },
      }}
    >
      <Grid item xs={12} sm={5} sx={{ marginLeft: { xs: "0%", sm: "5%" },}}>
        <DiscoverSection />
        <PurchaseSection />
        <ActionButton text="Get Connected" onOpen={(event: React.MouseEvent<HTMLButtonElement>) => handleOpenModal(event, "residential")} />
       
       {/* Stats Grid */}
        <Grid container sx={{ display: "flex", marginTop: "8px" }}>
           {/* First Row */}
          <Box sx={{ display: "flex", height: {xs:"55px", sm:"55px"}, justifyContent:{xs:"center", sm:"left"}, width:"100%"}}>
          <Box sx={{ width: "fit-content", marginRight: "8px" }}>
            <StatsCard description={<>99% Customer <br /> Satisfaction Rate</>} />
          </Box>
          <Box sx={{ width: "fit-content"}}>
            <StatsCard description={<>300+ Enterprise <br /> Clients Worldwide</>} />
          </Box>
          
          </Box>
          {/* Second Row */}
          <Box sx={{ display: "flex", height: {xs:"55px", sm:"55px"}, marginTop: "8px", justifyContent:{xs:"center", sm:"left"},width:"100%" }}>
          <Box sx={{ width: "fit-content", marginRight: "8px" }}>
            <StatsCard description={<>99.9% Network <br /> Uptime Guarantee</>} />
          </Box>
          <Box sx={{ width: "fit-content" }}>
            <StatsCard
              description={
                <>
                   <Box display="flex" alignItems="center"sx={{ marginLeft: "8px"}}>
                    <Typography variant="h6" fontWeight={700} fontSize={12}>4.8+</Typography>
                    <Typography variant="body1" sx={{ ml: 0.5, pr: 2.6 }} fontSize={12}>rating</Typography>
                  </Box>
                  <Box display="flex" alignItems="left" ml={1}>
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
            borderRadius: "24px",
          },
        }}
      >
        <ServiceFlow initialFlow={initialFlowType} onComplete={handleCloseModal} />
      </Dialog>



      <Grid item xs={12} sm={5} sx={{ marginRight: { xs: "0.5%", sm: "5%" }, marginLeft: { xs: "2.5%", sm: "0%" }, paddingBottom: { xs: "100px", sm: "168px" } }}>
        <Grid
          item
          sx={{
            position: "relative",
            width: { xs: "100%", sm: "100%" },
            height: { xs: "fit-content", sm: "587px" },
            marginLeft: {xs:"-7px", sm:"-15px"},
            marginTop: "20px",
            borderRadius: "24px",
            background: "#DFEAFF",
            padding: "16px 18px",


            "&:before": {
              content: '""',
              position: "absolute",
              inset: 0,
              padding: "0.5px",
              borderRadius: "inherit",
              WebkitMask: "linear-gradient(white, white) content-box, linear-gradient(white, white)",
              WebkitMaskComposite: "destination-out",
              maskComposite: "exclude",
              zIndex: 1,
           
            },
            "&:after": {
              content: '""',
              position: "absolute",
              inset: "0px",
              borderRadius: "inherit",
              backgroundSize: "cover",
              backgroundBlendMode: "overlay",
              zIndex: 0,
            },
          }}
        >
          
        {/* Floating Line Section */}
        <Box sx={{position:"absolute", left:{md:"-35%", xl:"-20%"}, top:"-105px", display:{xs:"none", sm:"none", md:"flex"},  }}>
        <img src={Line1} alt="" />
      </Box>

      <Box sx={{position:"absolute",right:{md:"-20%", xl:"-10%"}, bottom:"-125px", zIndex:"-1", display:{xs:"none", sm:"none", md:"flex"},  }}>
        <img src={Line2} alt="" style={{width:"100%"}} />
      </Box>
          <Box sx={{ position: "relative", textAlign: "center", zIndex: 1 }}>
            <Swiper 
              modules={[Pagination, Autoplay]} 
              spaceBetween={50} 
              slidesPerView={1} 
              pagination={{ clickable: true }} 
              autoplay={{ delay: 3000 }} 
              style={{ borderRadius: "24px" }} 
              className="hero">
              <SwiperSlide>
                <img src={Hero1} alt="Slide 1" className="homeHero" style={{ marginTop: "0px", borderRadius: "24px" }} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Hero2} alt="Slide 2" className="homeHero" style={{ marginTop: "0px", borderRadius: "24px" }} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Hero3} alt="Slide 3" className="homeHero" style={{ marginTop: "0px", borderRadius: "24px" }} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Hero4} alt="Slide 4" className="homeHero" style={{ marginTop: "0px", borderRadius: "24px" }} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Hero5} alt="Slide 5" className="homeHero" style={{ marginTop: "0px", borderRadius: "24px" }} />
              </SwiperSlide>
            </Swiper>
          </Box>

          <Box className="remove" sx={{ position: "absolute", left: { xs: "auto", sm: "347px" }, right: { xs: "16px", sm: "0px" }, top: { xs: "16px", sm: "20px" }, width: "266px", height: "64px", borderRadius: "16px", background: "linear-gradient(180deg, #F0F4F5 0%, #D1E4F8 100%)", padding: "16px", gap: "16px", border: "1px solid #D4D5DF", display: { xs: "none", sm: "flex" }, zIndex: "1000" }}>
            <img src={Frame1} alt="" />
            <Typography variant="body2" sx={{ fontSize: "12px", lineHeight: "20px", fontFamily: "inter", fontWeight: "400", color: "#333E49", marginTop: "-5px" }}>
              Experience fast internet speeds of 150Mbps and above monthly
            </Typography>
          </Box>

          <Box className="remove" sx={{ position: "absolute", left: { xs: "16px", sm: "-142px" }, right: { xs: "auto", sm: "0px" }, top: { xs: "auto", sm: "420px" }, bottom: { xs: "16px", sm: "auto" }, width: "266px", height: "64px", borderRadius: "16px", background: "linear-gradient(180deg, #F0F4F5 0%, #D1E4F8 100%)", padding: "16px", gap: "16px", border: "1px solid #D4D5DF", display: { xs: "none", sm: "flex" }, zIndex: "1000" }}>
            <img src={Frame3} alt="" />
            <Typography variant="body2" sx={{ fontSize: "12px", lineHeight: "20px", fontFamily: "inter", fontWeight: "400", color: "#333E49", marginTop: "-5px" }}>
              Save more with affordable data plans starting from ₦ 18,500
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};
