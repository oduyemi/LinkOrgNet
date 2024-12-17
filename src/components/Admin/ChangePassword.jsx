import React, { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { DashboardContent } from "./DashboardContent";
import { Link } from "react-router-dom";

export const ChangePassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [updated, setUpdated] = useState(false);

  const handleChangePassword = () => {
    if (password === confirmPassword) {
      // Logic for handling password change

      setUpdated(true);
    } else {
      alert("Passwords do not match");
    }
  };

  return (
    <DashboardContent title="Change Password">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
          padding: "2rem",
        }}
      >
        {!updated ? (
          <>
            <TextField
              label="New Password"
              variant="outlined"
              type="password"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{
                input: { color: "black" },
              }}
            />
            <TextField
              label="Confirm Password"
              variant="outlined"
              type="password"
              fullWidth
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              sx={{
                input: { color: "black" },
              }}
            />
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: "1rem",
                marginTop: "1rem",
              }}
            >
              <Button
                variant="contained"
                color="primary"
                onClick={handleChangePassword}
              >
                Change Password
              </Button>
              <Link to="/admin">
                <Button variant="contained" color="secondary">
                  Dashboard Home
                </Button>
              </Link>
            </Box>
          </>
        ) : (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1rem",
              padding: "2rem",
            }}
          >
            <h2>Password Changed Successfully!</h2>
            <Link to="/admin">
              <Button variant="contained" color="secondary">
                Go to Dashboard
              </Button>
            </Link>
          </Box>
        )}
      </Box>
    </DashboardContent>
  );
};
