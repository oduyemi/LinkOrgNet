import React from "react";
import { Box } from "@mui/material";

export const ValueGrid: React.FC = () => {
  return (
    <Box
      className="valuegrid"
      sx={{
        mt: { xs: 0, sm: 10 },
        maxHeight: { xs: 500, sm: 600 },
        bgcolor: "#f8f9fa",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src="/images/valueGrid.png"
        alt="Value grid"
        style={{
          width: "100%",
          maxWidth: "100%", 
          height: "auto",
          display: "block",
        }}
      />
    </Box>
  );
};

