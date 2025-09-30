import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { Box, Typography, Button } from "@mui/material";

export const AboutSection: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const imageTranslateY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.3], [0.6, 1]);
  const [imageSrc, setImageSrc] = useState("/images/girl1.png");
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/about");
  };

  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        px: { xs: 2, sm: 3, md: 6 },
        py: { xs: 8, md: 12 },
        bgcolor: "white",
        backgroundImage: "url(/images/gridlines.png)",
        backgroundSize: "90%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
        textAlign: "center",
      }}
      onMouseEnter={() => setImageSrc("/images/girl2.png")}
      onMouseLeave={() => setImageSrc("/images/girl1.png")}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "1200px",
          mx: "auto",
          textAlign: "center",
        }}
        className="moveright"
      >
        {/* Responsive Image with Scroll Animation */}
        <Box sx={{ width: "100%", mb: { xs: 6, md: 8 } }}>
          <motion.img
            src={imageSrc}
            alt="About Illustration"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "12px",
              y: imageTranslateY,
              opacity: imageOpacity,
            }}
          />
        </Box>

        {/* Heading */}
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{
            mb: 2,
            mt: {sm:-14},
            fontFamily: "Museo Slab Normal",
            fontSize: { xs: "24px", sm: "30px", md: "36px" },
            letterSpacing: "-2.201px",
            lineHeight: 1.3,
            background: "linear-gradient(180deg, #092277 0%, #092277 0.01%, #003EF2 99.99%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Get Connected <br />
          <Typography
            component="span"
            sx={{
              fontFamily: "Museo Slab Normal",
              fontSize: { xs: "24px", sm: "30px", md: "36px" },
              letterSpacing: "-2.201px",
              fontWeight: 700,
              background: "linear-gradient(135deg, #092277, #003EF2)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Feel Connected
          </Typography>
        </Typography>

        {/* Description */}
        <Typography
          variant="body1"
          color="#010156"
          fontFamily="Inter"
          fontWeight={400}
          sx={{
            mt: 2,
            mx: "auto",
            maxWidth: { xs: "90%", sm: "75%", md: "60%" },
            fontSize: { xs: "14px", sm: "15px", md: "16px" },
            lineHeight: "24px"
          }}
        >
          LinkOrgNet is a premier provider of advanced satellite
          communication and IT solutions, dedicated to empowering industries and
          supporting global connectivity.
        </Typography>

        {/* Button */}
        <motion.div whileHover={{ scale: 1.08 }}>
          <Button
            variant="contained"
            onClick={handleButtonClick}
            sx={{
              mt: 4,
              px: { xs: 3, sm: 4, md: 5 },
              py: { xs: 1.5, md: 1.8 },
              borderRadius: 12,
              fontSize: { xs: "12px", sm: "14px", md: "16px" },
              fontWeight: 400,
              background: "linear-gradient(135deg, #010156, #092277)",
              boxShadow: "none",
              textTransform: "inherit",
              fontFamily: "Inter",
              fontStyle: "normal",
              lineHeight: "normal",
              letterSpacing: "-0.695px",
              transition: "all 0.3s ease-in-out",
              "&:hover": {
                background: "linear-gradient(135deg, #e65d0f, #ff7f50)",
                boxShadow: "none",
              },
            }}
          >
            Learn more about us →
          </Button>
        </motion.div>
      </Box>
    </Box>
  );
};
