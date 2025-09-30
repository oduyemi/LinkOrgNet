import { useState } from "react";
import { Box, Paper, Grid, Typography } from "@mui/material";

const features = [
  { src: "/images/icons/network.png", variantSrc: "/images/icons/networkLight.png", title: "Centralized Network", description: "Seamless, unified connectivity throughout your apartment building or estate for all" },
  { src: "/images/icons/connectivity.png", variantSrc: "/images/icons/connectLight.png", title: "High Speed Connectivity", description: "Lightning internet speed for seamless streaming, gaming and browsing" },
  { src: "/images/icons/infrastructure.png", variantSrc: "/images/icons/infrastructureLight.png", title: "99% Uptime", description: "Stable internet connectivity with zero downtime at home for your network needs" },
  { src: "/images/icons/plan.png", variantSrc: "/images/icons/plansLight.png", title: "Customizable Plans", description: "Tailored packages to perfectly fit your unique needs for residences" },
  { src: "/images/icons/security.png", variantSrc: "/images/icons/securityLight.png", title: "Enhanced Security", description: "Advanced protection that keeps your data safe from leaks and hackers" },
  { src: "/images/icons/convenient.png", variantSrc: "/images/icons/convenientLight.png", title: "Super Convenient", description: "Hassle-free installation and effortless connectivity. We make it a piece of cake!" }
];

export const EstateFeatures = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);


  return (
    <Grid container spacing={3} mt={0} width="94%">
      {features.map((feature, index) => (
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
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Icon Box */}
            <Box
              className="iconBox"
              sx={{
                height: "60px",
                width: "60px",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "#D4D5DF",
                transition: "background 0.3s ease-in-out",
              }}
            >
              <img 
                src={hoveredIndex === index ? feature.variantSrc : feature.src} 
                alt={feature.title} 
                width="64%" 
              />
            </Box>

            {/* Feature Title */}
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

            {/* Feature Description */}
            <Typography
              mt={1}
              sx={{
                color: "#333E49",
                fontFamily: "inter",
                fontSize: "15px",
                lineHeight: "32px",
                letterSpacing: "-0.56px",
                transition: "color 0.3s ease-in-out",
              }}
            >
              {feature.description}
            </Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};
