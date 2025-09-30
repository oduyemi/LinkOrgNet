import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Excos } from "./Members/Excos";
import { Gallery } from "./Gallery";

export const TeamSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  return (
    <Box sx={{ textAlign: "center", px: isMobile ? 2 : isTablet ? 4 : 6, py: 4 }}>
      {/* Excos Image */}
      <Box className="bigger" sx={{ margin: "auto", width: isMobile ? "60%" : isTablet ? "40%" : "20%" }}>
        <img
          src="/images/meetExcos.png"
          alt="Excos"
          style={{ width: "100%", height: "auto", marginTop: "6%", marginBottom: "2%" }}
        />
      </Box>

      {/* Heading */}
      <Typography
        variant={isMobile ? "h6" : isTablet ? "h5" : "h4"}
        fontFamily="Museo Slab Bold"
        color="#010156"
        sx={{ lineHeight: "1.3", mt: { xs: 1, sm: 2 } }}
      >
        Meet our{" "}
        <Typography 
          component="span" 
          color="#E65D0F" 
          variant="inherit" 
          fontFamily="Museo Slab Bold"
          lineHeight="116.865%"
          letterSpacing="-1.2px"
        >
          leadership team
        </Typography>
      </Typography>

      {/* Excos Section */}
      <Excos />

      {/* Gallery Image */}
      <Box sx={{ margin: "auto", width: isMobile ? "60%" : isTablet ? "40%" : "20%" }}>
        <img
          src="/images/gallery.png"
          alt="Gallery"
          style={{ width: "100%", height: "auto", marginTop: "60%", marginBottom: "2%" }}
        />
      </Box>

      {/* Gallery Heading */}
      <Typography
        variant={isMobile ? "h6" : isTablet ? "h5" : "h4"}
        fontFamily="Museo Slab Bold"
        color="#010156"
        sx={{ 
            mt: 2, 
            fontSize: isMobile ? "30px" : isTablet ? "40px" : "50px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "normal" 
          }}
      >
        Our{" "}
        <Typography component="span" sx={{ color: "#E65D0F", fontFamily: "Museo Slab Bold", fontSize: "inherit" }}>
          Gallery
        </Typography>{" "}
        Showcase
      </Typography>

      {/* Subtitle */}
      <Typography 
        variant="body2" 
        fontFamily="Inter" 
        fontSize={isMobile ? "14px" : "16px"} 
        sx={{ 
          mb: 2, 
          fontStyle: "normal",
          fontWeight: 500,
          lineHeight: "32px",
          letterSpacing: "-0.32px"
        }} 
        color="#333E49">
        A slideshow about us, our people and the moments that make everyday special 
      </Typography>

      {/* Gallery Component */}
      <Box mb={5}>
        <Gallery />
      </Box>
    </Box>
  );
};
