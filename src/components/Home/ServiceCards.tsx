import React, { useState } from "react";
import { Box, Card, CardContent, Typography, Grid } from "@mui/material";
import { motion } from "framer-motion";

const internetImages = ["/images/smalljet.png", "/images/bigjet.png"];
const connectivity = ["/images/rain1.png", "/images/rain2.png"];

export const ServiceCards: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const services = [
    {
      title: "Highspeed Internet",
      icon: "/images/icons/bluInternet.png",
      hoverIcon: "/images/icons/orangeInternet.png",
      text: "Experience lightning-fast, reliable internet tailored just for you. Whether you're streaming, working or gaming, our high-speed internet keeps you seamlessly connected to the world.",
      images: internetImages,
    },
    {
      title: "Stable Connectivity",
      icon: "/images/icons/bluConnectivity.png",
      hoverIcon: "/images/icons/whiteConnectivity.png",
      text: "Keep your team connected with reliable internet while safeguarding your critical data and maintaining seamless connectivity wherever you are.",
      images: connectivity,
    },
  ];

  return (
    <Box
      sx={{
        px: { xs: 2, sm: 3, md: 5 },
        py: { xs: 4, md: 5 },
        maxWidth: "1800px",
        mx: "auto",
        position: "relative",
        zIndex: "10",
      }}
    >
      <Grid container spacing={{ xs: 2, md: 6 }} justifyContent="center">
        {services.map((service, i) => (
          <Grid item xs={12} sm={10} md={6} lg={5} xl={4} key={i}>
            <Card
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              sx={{
                borderRadius: "16px",
                backgroundColor: "#FAFAFC",
                p: { xs: 2, sm: 3 },
                boxShadow: "none",
                height: "100%",
                transition: "background-color 0.3s ease",
                "&:hover": {
                  backgroundColor: i === 0 ? "#010156" : "#e65d0f",
                  "& .hover-text": {
                    color: "#fff",
                  },
                },
              }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "left",
                  position: "relative",
                }}
              >
                <Box sx={{ mb: 1 }}>
                  <img
                    src={hoveredIndex === i ? service.hoverIcon : service.icon}
                    alt={service.title}
                    width="50px"
                  />
                </Box>
                <Typography
                  variant="h5"
                  className="hover-text"
                  color="#010156"
                  sx={{
                    fontFamily: "Museo Slab Bold",
                    fontWeight: "800",
                    fontSize: { xs: "1.2rem", sm: "1.4rem", md: "1.6rem" },
                    mb: 0,
                    transition: "color 0.3s ease",
                  }}
                >
                  {service.title}
                </Typography>
                <Typography
                  className="hover-text"
                  sx={{
                    fontFamily: "Inter",
                    color: "#98A2B3",
                    fontSize: { xs: "0.875rem", sm: "1rem" },
                    mb: 2,
                    transition: "color 0.3s ease",
                  }}
                >
                  {service.text}
                </Typography>

                <Box
                  sx={{
                    width: "100%",
                    borderRadius: "8px",
                    overflow: "hidden",
                    position: "relative",
                    height: {
                      xs: "250px",
                      sm: "300px",
                      md: "350px",
                      lg: "400px",
                    },
                    backgroundColor: "transparent",
                  }}
                >
                  {/* Default small image (bottom-centered) */}
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      left: -4,
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                      zIndex: 2,
                      opacity: hoveredIndex === i ? 0 : 1,
                      transition: "opacity 0.4s ease",
                    }}
                  >
                    <motion.img
                      src={service.images[0]}
                      alt={`${service.title} small`}
                      style={{
                        width: "50%",
                        objectFit: "contain",
                      }}
                    />
                  </Box>

                  {/* Full hover image */}
                  <motion.img
                    src={service.images[1]}
                    alt={`${service.title} full`}
                    initial={false}
                    animate={{
                      opacity: hoveredIndex === i ? 1 : 0,
                      scale: hoveredIndex === i ? 1 : 0.95,
                    }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    style={{
                      width: "60%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "8px",
                      position: "absolute",
                      top: 0,
                      right: "25%",
                      transform: "translateX(-50%)",
                      zIndex: 1,
                    }}
                  />
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
