import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { DashboardContent } from "./DashboardContent";
import { Link } from "react-router-dom";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { toast } from "material-react-toastify";

export const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [updated, setUpdated] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChangePassword = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("Authentication token not found.");
      return;
    }

    try {
      const decodedToken = jwtDecode(token);
      const adminId = decodedToken.adminId;

      if (newPassword !== confirmNewPassword) {
        toast.error("New passwords do not match.");
        return;
      }

      const payload = {
        oldPassword,
        newPassword,
        confirmNewPassword,
      };


      const response = await axios.put(
        `https://linkorgnet.vercel.app/api/v1/admin/${adminId}/reset-password`,
        payload
      );

      if (response.data.status === "success") {
        toast.success("Password changed successfully!");
        setUpdated(true);
      } else {
        toast.error(response.data.message || "Password change failed.");
      }
    } catch (error) {
      console.error("Error changing password:", error);
      toast.error(
        error.response?.data?.message || "An error occurred. Please try again."
      );
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
              label="Old Password"
              variant="outlined"
              type={showPassword ? "text" : "password"}
              fullWidth
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              sx={{ input: { color: "black" } }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={togglePasswordVisibility}>
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              label="New Password"
              variant="outlined"
              type={showPassword ? "text" : "password"}
              fullWidth
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              sx={{ input: { color: "black" } }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={togglePasswordVisibility}>
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              label="Confirm New Password"
              variant="outlined"
              type={showPassword ? "text" : "password"}
              fullWidth
              value={confirmNewPassword}
              onChange={(e) => setConfirmNewPassword(e.target.value)}
              sx={{ input: { color: "black" } }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={togglePasswordVisibility}>
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
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
