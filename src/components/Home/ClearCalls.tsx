import { Box, Grid, Card, CardContent, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";

export const ClearCalls: React.FC = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <Box sx={{ p: { xs: 2, md: 4 } }}>
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={11} md={11} lg={10}>
          <Card
            component={motion.div}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            sx={{
              borderRadius: "16px",
              p: 3,
              width: "100%",
              backgroundColor: hovered ? "#010156" : "#FAFAFC",
              transition: "background-color 0.5s ease",
              boxShadow: "none",
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              gap: 3,
            }}
          >
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: 2,
                flex: 1,
                transition: "all 0.5s ease",
              }}
            >
              <Box mb={2}>
                <img
                  src={
                    hovered
                      ? "/images/icons/orangecall.png"
                      : "/images/icons/blucall.png"
                  }
                  alt="clear calls"
                  className="smallerIcons"
                  width="50px"
                  style={{ maxWidth: "100%" }}
                />
                <Typography
                  variant="h5"
                  color={hovered ? "#ffffff" : "#010156"}
                  mt={1}
                  sx={{
                    fontFamily: "Museo Slab Bold",
                    fontWeight: "400",
                    transition: "color 0.5s ease",
                  }}
                >
                  Crystal-Clear Internet Calls
                </Typography>
              </Box>

              <Typography
                sx={{
                  fontFamily: "Inter",
                  color: hovered ? "#ffffff" : "#98A2B3",
                  fontSize: { xs: "14px", md: "16px" },
                  maxWidth: { xs: "100%", md: "80%" },
                  transition: "color 0.5s ease",
                }}
              >
                Say goodbye to traditional phone lines and enjoy cost-effective,
                feature-rich calls that enhance your personal or business communication.
              </Typography>
            </CardContent>

            <Box
              sx={{
                width: { xs: "100%", md: hovered ? "60%" : "40%" },
                height: { xs: "200px", sm: "250px", md: "350px" },
                mt: { xs: 2, md: 0 },
                borderRadius: "8px",
                overflow: "hidden",
                position: "relative",
                transition: "width 0.5s ease",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src="/images/profiles.png"
                alt="profiles"
                width="80%"
                className="profiles"
                style={{
                  transition: "transform 0.5s ease",
                  transform: hovered ? "scale(1.1)" : "scale(1)",
                }}
              />
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};
