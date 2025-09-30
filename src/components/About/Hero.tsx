import { Box, Typography, Paper, Grid } from "@mui/material";
import { styled } from "@mui/system";
import Badge from "/images/svg/Badge.svg";
import GoogleLogo from "/images/svg/google_logo.svg";
import Star from "/images/svg/star.svg";

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
      background: "linear-gradient(90deg, #F2F7F8 0%, #EAEAEA 100%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 2,
      width: "fit-content",
      maxWidth: "100%",
    }}
  >
    <Box sx={{ width: 26, height: 41, marginRight: 1 }}>
      <img src={icon || Badge} alt="Icon" style={{ width: "100%", height: "100%" }} />
    </Box>

    <Typography variant="body1" fontSize={12} sx={{ color: "#1B1F26B8", lineHeight: "1.2" }}>
      {description}
    </Typography>
  </Paper>
);

const HeroContainer = styled(Box)(({ theme }) => ({
  textAlign: "center",
  padding: theme.spacing(8, 2),
  backgroundColor: "#fff",
}));

const HighlightedText = styled("span")({
  color: "#E65D0F",
  fontWeight: "bold",
});

export const AboutHero = () => {
  return (
    <HeroContainer>
      <Box sx={{ margin: "auto", }}>
        <img src="/images/chip.png" alt="chip" className="bigger" width="20%" style={{ marginTop: "6%", marginBottom: "2%" }} />
      </Box>
      <Box sx={{ width:{xs:"90%",  sm:"80%"}, margin: "auto"}}>
        <Typography 
          variant="h3" 
          className="mobileheading" 
          sx={{ 
            display:"inline", 
            fontFamily:"Museo Slab Bold", 
            fontSize:"xl", 
            color:"#010156", 
            fontWeight:400,
            letterSpacing: "-1px"
        
          }} 
          gutterBottom
        >
          We are Nigerian&apos;s <HighlightedText sx={{ display: "inline"}}>trusted partner</HighlightedText> for delivering
          fast, reliable, and scalable <HighlightedText sx={{ display: "inline"}}>internet solutions</HighlightedText>
        </Typography>
        <Typography 
          variant="body1" 
          fontFamily="Inter" 
          fontSize="16px" 
          fontWeight={400}
          color="text.secondary" 
          gutterBottom
          sx={{
            lineHeight:"32px",
            letterSpacing: "-o.563px",
            color: "#333E49",
          }}
        >
          Connecting homes and businesses with cutting-edge fiber and radio technology for seamless, affordable global access
        </Typography>
      </Box>
   
         {/* Stats Grid */}
             <Grid container  sx={{  display: "flex", marginTop: "40px",justifyContent:"center" }}>
          {/* First Row */}
          <Box sx={{ display: "flex", height: {xs:"55px", sm:"55px"}, justifyContent:"center", marginRight:{xs:"0px", sm:"8px"}, }}>
            <Box sx={{ width: "fit-content", marginRight: "8px" }}>
              <StatsCard description={<>99% customer <br /> satisfaction rate</>} />
            </Box>
            <Box sx={{ width: "fit-content"}}>
              <StatsCard description={<>300+ enterprise <br /> clients worldwide</>} />
            </Box>
          </Box>
  
          {/* Second Row */}
          <Box sx={{ display: "flex", height: {xs:"55px", sm:"55px"}, justifyContent:"center",marginTop:{xs:"8px", sm:"0px"},  }}>
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
                    <Box display="flex" ml={1}>
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

    </HeroContainer>
  );
};
