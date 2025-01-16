import React from "react";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";

const plans = [
  { 
    name: "Express", 
    monthly: "16,020.00", 
    installation: "50,000", 
    color: "#e3f2fd"
  },
  { 
    name: "Super", 
    monthly: "18,500.00", 
    installation: "50,000", 
    color: "#fff3e0"
  },
  { 
    name: "Gold", 
    monthly: "30,000.00", 
    installation: "50,000", 
    color: "#f9fbe7"
  },
  { 
    name: "LinkOrg VIP 1", 
    monthly: "60,000.00", 
    installation: "100,000", 
    color: "#e8f5e9"
  },
  { 
    name: "LinkOrg VIP 2", 
    monthly: "80,000.00", 
    installation: "100,000", 
    color: "#ffcdd2"
  },
];

export const DataPlan = () => {
  return (
    <Box sx={{ py: 5, backgroundColor: "#f5f5f5", overflowX: "auto" }}>
      <Grid container spacing={4} justifyContent="center">
        {plans.map((plan, index) => (
          <Grid item key={index} xs={12} sm={6} md={2.4} lg={2.4} sx={{ display: "flex", justifyContent: "center" }}>
            <Card
              sx={{
                minWidth: 200, // Reduced the width of the card to fit 5 in a row
                borderRadius: 10,
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                textAlign: "center",
                backgroundColor: plan.color,
                border: `1px solid ${plan.name === 'Gold' ? '#ffd700' : '#010156'}`,
                transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0 8px 12px rgba(0, 0, 0, 0.2)",
                  cursor: "pointer",
                },
                padding: 4,
                position: "relative",
              }}
            >
              <CardContent>
                <Typography
                  variant="h5"
                  component="div"
                  sx={{
                    fontWeight: "bold",
                    mb: 1,
                    color: "#010156",
                    textTransform: "uppercase",
                    letterSpacing: 1.5,
                    fontSize: "1.1rem", // Adjusted font size for better fit
                  }}
                >
                  {plan.name}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#e65d0f",
                    fontWeight: "bold",
                    mb: 1,
                    letterSpacing: 1,
                    fontSize: "1rem", // Adjusted font size for better fit
                    textTransform: "capitalize",
                  }}
                >
                  Monthly Recurring: <strong>{plan.monthly}</strong>
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    letterSpacing: 0.5,
                    fontSize: "0.85rem", // Adjusted font size for better fit
                  }}
                >
                  One-time Installation fee: <strong>{plan.installation}</strong>
                </Typography>
              </CardContent>
              {/* Badge for Plan Types */}
              <Box
                sx={{
                  position: "absolute",
                  top: 10,
                  right: 10,
                  backgroundColor: "#010156",
                  color: "white",
                  padding: "5px 10px",
                  borderRadius: 15,
                  fontWeight: "bold",
                  fontSize: "0.8rem",
                  letterSpacing: 0.5,
                }}
              >
                {plan.name === 'Gold' ? "Premium" : "Standard"}
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
