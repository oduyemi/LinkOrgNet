import { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Avatar,
  useTheme,
  Paper,
  useMediaQuery,
} from "@mui/material";

const content = [
  {
    text: "The past, the present and the future of LinkOrgNet",
    author: "Anjorin Samson, CEO/MD",
    image: "/images/gallery/md_new2.jpg",
  },
  {
    text: "The relentless race towards excellence as our motivation",
    author: "Sarah Scott, COO",
    image: "/images/gallery/coo.jpg",
  },
  {
    text: "A workforce that embodies the culture of excellence everyday",
    author: "Mobolaji Bolarinwa, GM",
    image: "/images/gallery/gm.png",
  },
];

export const Discover = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      width="100%"
      padding={isMobile ? 1 : 2}
      sx={{ minHeight: "100vh" }}
    >
      {/* Header Section with Navigation */}
      <Box
        display="flex"
        flexDirection={isTablet ? "column" : "row"}
        alignItems="center"
        marginBottom={3}
        justifyContent="left"
        width="100%"
        maxWidth="1200px"
        textAlign={isTablet ? "center" : "left"}
      >
        <Typography
          variant={isMobile ? "h5" : "h4"}
          fontFamily="Museo Slab Bold"
          fontSize={isMobile ? "20px" : "38px"}
          color="#010156"
          gutterBottom
          sx={{ 
            width:{sm:"70%"}, 
            pl:{sm:10},
            lineHeight: "116.865%",
            letterSpacing: "-1.2px",
            fontWeight: 400,
            fontSize: { xs: "20px", sm: "40px" },
          }}
        >
          Discover our{" "}
          <Box component="span" 
            color="#E65D0F"
            sx={{
              fontFamily:"Museo Slab Bold",
              lineHeight: "116.865%",
              letterSpacing: "-1.2px",
              fontSize: { xs: "20px", sm: "40px" },
              fontWeight: 400,
            }}
          >
            culture, heritage
          </Box>{" "}
          and what fuels our drive to deliver{" "}
          <Box component="span" color="#E65D0F">
            quality service
          </Box>
        </Typography>

        {/* Navigation Icons */}
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          mt={isTablet ? 2 : 0}
          gap={1}
          sx={{ ml: { sm: 5 }, mt: 2 }}
        >
          {/* Arrows */}
          <Box
            display="flex"
            flexDirection="row"
            gap={1}
            alignItems="center"
            justifyContent="center"
          >
            <img
              src="/images/icons/arrow-left.png"
              alt="Previous"
              width={isMobile ? "20%" : "30%"}
              style={{
                cursor: "pointer",
                opacity: activeIndex === 0 ? 0.4 : 1,
              }}
              onClick={() =>
                setActiveIndex((prev) => (prev > 0 ? prev - 1 : prev))
              }
            />
            <img
              src="/images/icons/arrow-right.png"
              alt="Next"
              width={isMobile ? "20%" : "30%"}
              style={{
                cursor: "pointer",
                opacity: activeIndex === content.length - 1 ? 0.4 : 1,
              }}
              onClick={() =>
                setActiveIndex((prev) =>
                  prev < content.length - 1 ? prev + 1 : prev
                )
              }
            />
          </Box>

          {/* Dots underneath arrows */}
          <Box display="flex" flexDirection="row" gap={1} mt={1}>
            {content.map((_, index) => (
              <Box
                key={index}
                sx={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  backgroundColor:
                    index === activeIndex ? "#010156" : "#D4D5DF",
                  transition: "all 0.3s ease-in-out",
                }}
              />
            ))}
          </Box>
        </Box>

      </Box>

      {/* Main Content Section */}
      <Grid
        container
        spacing={2}
        alignItems="center"
        justifyContent="center"
        width="100%"
        sx={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Left Section: Image */}
        <Grid item xs={12} sm={7} display="flex" justifyContent="center" sx={{ borderRadius: "24px" }}>
          <Avatar
            src={content[hoverIndex !== null ? hoverIndex : activeIndex].image}
            alt="About Section"
            variant="rounded"
            sx={{
              width: isMobile ? "70%" : "90%", 
              height: isMobile ? "auto" : "480px", 
              // borderRadius: theme.shape.borderRadius,
              borderRadius: "24px",
            }}
          />
        </Grid>

        {/* Right Section: Content Cards */}
        <Grid item xs={12} sm={4.5} textAlign="center">
          {content.map((item, index) => (
            <Paper
              key={index}
              elevation={3}
              onMouseEnter={() => setHoverIndex(index)} // Hover effect
              onMouseLeave={() => setHoverIndex(null)} // Revert back on mouse leave
              onClick={() => setActiveIndex(index)}
              sx={{
                padding: "16px",
                marginBottom: "12px",
                borderRadius: "24px",
                cursor: "pointer",
                border: "1px solid var(#D4D5DF)",
                boxShadow: "none",
                width: "100%",
                maxWidth: isMobile ? "100%" : "80%",
                height: "auto",
                background: index === activeIndex ? "#010156" : "#F9FAFB",
                color: index === activeIndex ? "#ffffff" : "#333E49",
                transition: "all 0.3s ease-in-out",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "flex-start",
                "&:hover": {
                  background: "#010156",
                  color: "#ffffff",
                },
              }}
            >
              {/* Dot Indicator Inside the Card */}
              <Box
                sx={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  backgroundColor:
                    index === activeIndex ? "#E65D0F" : theme.palette.grey[300],
                  marginBottom: "10px",
                }}
              />
              <Typography
                variant="h6"
                fontWeight={400}
                fontSize={isMobile ? "14px" : "17px"}
                textAlign="left"
                fontFamily="Helvetica"
                lineHeight="28px"
                letterSpacing="-0.6px"
                width="70%"

              >
                {item.text}
              </Typography>
              {item.author && (
                <Typography
                  variant="body2"
                  color="inherit"
                  fontSize={isMobile ? "12px" : "14px"}
                  fontFamily="Helvetica"
                  letterSpacing= "-0.48px"
                  lineHeight="normal"
                  mt={3}
                >
                  - {item.author}
                </Typography>
              )}
            </Paper>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};
