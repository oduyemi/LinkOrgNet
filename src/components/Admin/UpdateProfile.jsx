import React, { useState, useEffect } from "react";
import { Box, Button, TextField } from "@mui/material";
import { DashboardContent } from "./DashboardContent";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "material-react-toastify";
import {jwtDecode} from "jwt-decode";

export const UpdateProfile = () => {
  const [fname, setFirstname] = useState("");
  const [lname, setLastname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [updated, setUpdated] = useState(false);
  const [adminId, setAdminId] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      try {
        const decoded = jwtDecode(token);
        setAdminId(decoded.adminId);

        // Fetch user details to prefill the form
        const fetchUserDetails = async () => {
          try {
            const response = await axios.get(
              `https://linkorgnet.vercel.app/api/v1/admin/${decoded.adminId}`
            );
            const { fname, lname, phone, email } = response.data.data;
            setFirstname(fname || "")
            setLastname(lname || "")
            setPhone(phone || "");
            setEmail(email || "");
          } catch (error) {
            console.error("Error fetching user details:", error);
            toast.error("Failed to load user details.");
          }
        };

        fetchUserDetails();
      } catch (error) {
        console.error("Error decoding token:", error);
        toast.error("Failed to authenticate user.");
      }
    }
  }, []);

  const handleUpdateProfile = async () => {
    const payload = {
      fname,
      lname,
      phone,
      email,
    };

    try {
      const response = await axios.put(
        `https://linkorgnet.vercel.app/api/v1/admin/${adminId}`,
        payload
      );
      if (response.data.status === "success") {
        setUpdated(true);
        toast.success("Profile updated successfully!");
      } else {
        toast.error(response.data.message || "Failed to update profile.");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error("Failed to update profile. Please try again.");
    }
  };

  return (
    <DashboardContent title="Update Profile">
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
              label="First Name"
              variant="outlined"
              fullWidth
              value={fname}
              onChange={(e) => setFirstname(e.target.value)}
              sx={{ input: { color: "black" } }}
            />
             <TextField
              label="Last Name"
              variant="outlined"
              fullWidth
              value={lname}
              onChange={(e) => setLastname(e.target.value)}
              sx={{ input: { color: "black" } }}
            />
            <TextField
              type="tel"
              label="Phone Number"
              variant="outlined"
              fullWidth
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              sx={{ input: { color: "black" } }}
            />
            <TextField
              type="email"
              label="Email"
              variant="outlined"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{ input: { color: "black" } }}
            />

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: "1rem",
                marginTop: "1rem",
              }}
            >
              <Button variant="contained" color="primary" onClick={handleUpdateProfile}>
                Update Profile
              </Button>
              <Link to="/dashboard">
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
            <h2>Profile Updated Successfully!</h2>
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
