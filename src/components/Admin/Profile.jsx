import React, { useEffect, useState } from "react";
import { Box, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import { DashboardContent } from "./DashboardContent";
import { Link } from "react-router-dom";
import {jwtDecode} from "jwt-decode";
import axios from "axios";

export const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        const adminId = decodedToken.adminId;

        const fetchProfile = async () => {
          try {
            const response = await axios.get(`https://linkorgnet.vercel.app/api/v1/admin/${adminId}`);
            setProfile(response.data.data); 
            setLoading(false);
          } catch (error) {
            console.error("Error fetching profile data:", error);
            setProfile(null);
            setLoading(false);
          }
        };

        fetchProfile();
      } catch (error) {
        console.error("Error decoding token:", error);
        setProfile(null);
        setLoading(false);
      }
    } else {
      setProfile(null);
      setLoading(false);
    }
  }, []);

  if (loading) {
    return (
      <DashboardContent title="Profile">
        <Box sx={{ padding: "2rem", textAlign: "center" }}>Loading...</Box>
      </DashboardContent>
    );
  }

  if (!profile) {
    return (
      <DashboardContent title="Profile">
        <Box sx={{ padding: "2rem", textAlign: "center" }}>Unable to load profile data.</Box>
      </DashboardContent>
    );
  }

  return (
    <DashboardContent title="Profile">
      <Box sx={{ padding: "2rem" }}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Field</TableCell>
                <TableCell>Details</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Full Name</TableCell>
                <TableCell>{`${profile.fname} ${profile.lname}`}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Role</TableCell>
                <TableCell>{profile.role || "Admin"}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Phone</TableCell>
                <TableCell>{profile.phone || "Not provided"}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Email</TableCell>
                <TableCell>{profile.email || "Not provided"}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: "1rem" }}>
          <Link to="/update_profile">
            <Button variant="contained" color="primary">
              Update Profile
            </Button>
          </Link>
          <Link to="/admin">
            <Button variant="contained" color="secondary">
              Dashboard Home
            </Button>
          </Link>
        </Box>
      </Box>
    </DashboardContent>
  );
};
