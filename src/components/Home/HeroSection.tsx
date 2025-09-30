import {useState} from "react";
import { Box, Modal, Typography, Button, Grid, Paper, TextField } from '@mui/material';
import SearchIcon from "/images/svg/search-normal.svg"
import GoogleLogo from "/images/svg/google_logo.svg"
import Star from "/images/svg/star.svg"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Badge from "/images/svg/Badge.svg"
import Frame1 from "/images/icons/frame1.svg";
import Frame2 from "/images/icons/frame2.svg";
import Frame3 from "/images/icons/frame3.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css"; 
import { Pagination, Autoplay } from "swiper/modules";
import Radio from "/images/Hero/radio2.png";
import Hero1 from "/images/Hero/hero1.png";
import Hero2 from "/images/Hero/hero2.png";
import Hero3 from "/images/Hero/hero3.png"
import Line1 from "/images/lines/hero-line1.svg";
import Line2 from "/images/lines/hero-line2.svg";
import Dialog from '@mui/material/Dialog';
import { useMediaQuery, useTheme } from "@mui/material";
import { useDispatch, useSelector } from 'react-redux';
import { openModal, closeModal } from '../../Service/features/serviceFlow/serviceFlowSlice';
import ServiceFlow from "../Modal/serviceFlow"; 
import { RootState } from '../../Service/store';
import {FlowType} from "../../Service/features/serviceFlow/types"
import "../../App.css"
import "../../App.css";
import { LocationOn } from "@mui/icons-material";
import { Link } from "react-router-dom";
import axios from "axios";


interface Area {
  name: string;
  id: number;
}

const DiscoverSection = () => {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [inputValue, setInputValue] = useState('');
  const [placeholder, setPlaceholder] = useState( isMobile ? 'Check our service availability' : 'Discover if our service is available in your area');
  const [buttonText, setButtonText] = useState('See all');
  const [isSearching, setIsSearching] = useState(false);
  const [availableAreas, setAvailableAreas] = useState<Area[]>([]);
  const [searchResult, setSearchResult] = useState<Area | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [emptySearch, setEmptySearch] = useState(false);



  const handleFocus = () => {
    setPlaceholder(isMobile ? 'Enter your current location' : 'Enter your current location or neighbourhood');
    setButtonText('Search');
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
    <Box sx={{display:"flex", justifyContent:{xs:"center", sm:"center", md:"left"},}}>
    <Box 
          display="flex" 
          alignItems="center" 
          sx={{
            borderRadius: "120px", 
            border: "1px solid #D4D5DF", 
            padding: "16px", 
            marginBottom: "16px",
            marginTop:{xs:"-50px", sm:"0px"}, 
            height: {xs:"43.9px", sm:"54px"}, 
            width: {xs:"90%", sm:"60%", md:"90%"},
            background: "linear-gradient(90deg, #F0F4F5 0%, #D4D5DF 100%)"
          }}
        >
            <Box sx={{paddingRight:{xs:"8px", sm:"16px"},  }}>
              <img src={SearchIcon} alt="" style={{width: isMobile ? "110%" : "", paddingTop: isMobile ? "5px" : ""  }}/> 
            </Box>
          <TextField
            fullWidth
            variant="standard"
            InputProps={{ 
              disableUnderline: true,
              sx: {
                "& input::placeholder": {
                  letterSpacing: { xs: "-0.54px", sm: "-0.79px" }, 
                  fontSize: { xs: "13px", sm: "16px", md:"15px", xl:"18px", xxl:"25px" },
                  opacity: 1, 
                  color: "#707284",
                }
              }
            }}
            placeholder={placeholder}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onFocus={handleFocus}
            sx={{
              fontSize: {xs:"13px", sm:"16px", md:"15px"},
              fontFamily: 'Inter',
              fontWeight: 500,
              color: "#707284",
              background: "transparent",
              border: "none",
              letterSpacing: {xs:"-3px", sm:"-0.5px", md:"-0.79px"},
            }}
          />
          <Button
            variant="contained"
            onClick={handleSearch}
            disabled={isSearching}
            sx={{
              borderRadius: '64px',
              ml: 2,
              background: "#333E49",
              color: 'white',
              fontSize: {xs:"10px", sm:"14px", md:"16px"},
              fontFamily: 'Inter',
              fontWeight: 600,
              textTransform: 'none',
              padding: "5px 16px",
              whiteSpace: 'nowrap',  
              minWidth: "fit-content",     
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              letterSpacing:{xs:"-0.54px", sm:"-0.64px", md:"-0.79px"}, 
              boxShadow:"none",
              "&:hover": { boxShadow:"none" },
          
            }}
          >
            {buttonText}
          </Button>
        </Box>
    </Box>

          {/* Search Result Modal */}
          <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
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
    <Box sx={{display:"flex", flexDirection:"column", alignItems:{xs:"center", sm:"center", md:"left"}, padding:{xs:"0px 2.5%", sm:"0px 5%", md:"0px 0%"}, width:{md:"103%"}}}>
        <Typography variant="h2" component="div" sx={{ color: '#E65D0F', fontWeight: 600, fontFamily: "Museo Slab Medium", fontSize: {xs:"30px", sm:"52px", md:"40px", xl:"60px", xxl:"70px"},textAlign:{xs:"center", sm:"center", md:"left"}, marginTop:"27px", letterSpacing:{xs:"-0.5px", sm:"-2.25px"},width:{md:"100%"},  }}>
        Fast, reliable, unlimited <br/>internet <span style={{ color: '#010156' }}>–built for all <br/> your needs</span>
        </Typography>
        <Typography variant="body1" color="#333E49"  sx={{fontFamily:"inter", fontWeight:"400", fontSize:{md:16, xl:20}, textAlign:{xs:"center",  sm:"center", md:"left"}, lineHeight:"26px", letterSpacing: "-0.56px", padding:"17px 0px", paddingRight: {xs:"0px", sm:"0px", md:"32px"}  }}>
        From streaming at home to enterprise growth solutions, enjoy internet connectivity built for residences, businesses and enterprises with unmatched speeds at affordable prices today
        </Typography>
    </Box>
);

interface ActionButtonProps {
  text: string; 
  onOpen: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const ActionButton: React.FC<ActionButtonProps> = ({ text, onOpen }) => (
    <Button variant="contained" 
    onClick={onOpen}
    sx={{   
        color: 'white',
        height:"48px",
        borderRadius: '64px',
        padding: '8px 24px',
        fontSize: '16px',
        fontWeight: 600,
        fontFamily:"Inter",
        boxShadow:"none",
        textTransform: 'none',
        display: 'flex',
        width:{xs:"90%",sm:"43%", md:"fit-content"},
        marginLeft:"2.5%",
        alignItems: 'center',
        gap: 1,
        margin:"23px 0px 40px",
        backgroundColor: "#010156",
        letterSpacing:"-0.79px",
        "&:hover": { backgroundColor: "#e65d0f", boxShadow:"none" },
        }}>
        {text}
        <ArrowForwardIcon />
    </Button>
);



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
        background: "linear-gradient(90deg, #F2F7F8 0%, #EAEAEA 100%)",
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
        sx={{ color: "#1B1F26B8", 
          lineHeight: "100%",
          fontSize: 12 ,
          letterSpacing:"0%"
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
        backgroundColor: "#F2F7F8",
        paddingTop: { xs: "197.4px", sm: "197.4px" },
        paddingLeft: {md:"2.5%" },
        paddingRight: {md:"2.5%" },
        height: "fit-content", 
        flexDirection: { xs: "column", sm: "column", md:"row" },
      }}
    >
    {/* Left Section */}
    <Grid item xs={12} sm={12} md={5} sx={{ marginLeft: {xs:"0%", sm:"0%", md:"5%"}, }}>
        <DiscoverSection />
        <PurchaseSection />
        <Box sx={{display:"flex", justifyContent:{xs:"center", sm:"center",md:"left"}}}>
        <ActionButton text="Get connected" onOpen={(event: React.MouseEvent<HTMLButtonElement>) => handleOpenModal(event, "initial")}  />
  
        </Box>

        {/* Stats Grid */}
        <Grid container sx={{ display: "flex", marginTop: "8px", marginBottom:"20px", }}>
          {/* First Row */}
          <Box sx={{ display: "flex", height:"55px", justifyContent:{xs:"center", sm:"center", md:"left"}, width:"100%"}}>
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
      </Grid>



   
  
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
          padding:"16px 16px",
           zIndex:"100",

          
          "&:before": {
            content: '""',
            position: "absolute",
            inset: 0, 
            padding: "0.5px", 
            borderRadius: "inherit",
            background: "linear-gradient(45deg, #092277, #003EF2, #E65D0F)", 
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
            background: "linear-gradient(45deg, #F0F4F5, #DCE4E6)", 
            backgroundImage: 'url("/images/lines/vector-frame.svg")', 
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

      
      <Box  sx={{
              position: "absolute",
              left:{sm:"-16%", md:"-25%", xl:"-16%"},
              right: 0,
              top:"10%",
              width:"266px",
              height:"64px",
              borderRadius:"16px",
              background: "linear-gradient(45deg, #F0F4F5, #DCE4E6)",
              padding: "16px",
              gap:"16px",
              border:"1px solid #D4D5DF",
              display: {xs:"none", sm:"flex"},
              zIndex:"1000"
            }}>
                <img src={Frame1} alt="" />
        <Typography
            variant="body2"
            sx={{ fontSize:"12px", lineHeight:"20px", fontFamily:"inter", fontWeight:"400", color:"#333E49", marginTop:"-5px"}} 
          >
            Experience fast internet speeds of 150Mbps and above monthly
          </Typography>
          </Box>



          <Box  sx={{
              position: "absolute",
              right: {sm:"-12%", md:"-16%", xl:"-12%"},
              top:"30%",
              width:"266px",
              height:"64px",
              borderRadius:"16px",
              background: "linear-gradient(45deg, #F0F4F5, #DCE4E6)",
              padding: "16px",
              gap:"16px",
              border:"1px solid #D4D5DF",
              display: {xs:"none", sm:"flex"},
              zIndex:"1000"
            }}>
            <img src={Frame2} alt="" />
          <Typography variant="body2" 
          sx={{ fontSize:"12px", lineHeight:"20px", fontFamily:"inter", fontWeight:"400", color:"#333E49", marginTop:"-5px"}} >
            Stay connected whether you’re at your residence or the office
          </Typography>
          </Box>

          <Box  sx={{
              position: "absolute",
              left: "-102px",
              top:"80%",
              width:"266px",
              height:"64px",
              borderRadius:"16px",
              background: "linear-gradient(45deg, #F0F4F5, #DCE4E6)",
              padding: "16px",
              gap:"16px",
              border:"1px solid #D4D5DF",
              display: {xs:"none", sm:"flex"},
              zIndex:"1000"
            }}>
                   <img src={Frame3} alt="" />
          <Typography variant="body2" 
          sx={{ fontSize:"12px", lineHeight:"20px", fontFamily:"inter", fontWeight:"400", color:"#333E49", marginTop:"-5px"}} >
            Save more with affordable data plans starting from ₦ 18,500
          </Typography>
          </Box>

        <Box sx={{ position: "relative", textAlign: "center", zIndex:"100", }}>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          style={{ borderRadius: "24px" }}
           className="hero"
        >
          <SwiperSlide>
             <img src={Radio} alt="Slide 1" className="homeHero" style={{ marginTop: "0px", borderRadius: "24px", width:"100%" }} />
           </SwiperSlide>
          <SwiperSlide>
            <img src={Hero1} alt="Slide 2" className="homeHero" style={{ borderRadius: "24px", width:"100%" }} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Hero2} alt="Slide 3" className="homeHero" style={{ borderRadius: "24px", width:"100%" }} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Hero3} alt="Slide 4" className="homeHero" style={{ borderRadius: "24px" , width:"100%"  }} />
          </SwiperSlide>
        </Swiper>
        </Box>

      </Grid>
         
      </Grid>
    </Grid>
  );
};
  
  export default HeroSection;
