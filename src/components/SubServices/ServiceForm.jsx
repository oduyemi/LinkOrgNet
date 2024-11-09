import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  TextField,
  MenuItem,
  Button,
  CircularProgress,
} from "@mui/material";
import axios from "axios";

export const ServiceForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    address: "",
    service: "",
    how: "",
    phone: "",
    state: "",
    lga: "",
    specialRequest: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        "https://linkorgnet.vercel.app/api/v1/bookings/booking",
        formData
      );
      alert(response.data.message || "Message sent successfully!");

      setFormData({
        name: "",
        company: "",
        email: "",
        address: "",
        service: "",
        how: "",
        phone: "",
        state: "",
        lga: "",
        specialRequest: "",
      });
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "An error occurred while sending the message."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      className="position-relative wow fadeInUp"
      data-wow-delay="0.1s"
      sx={{
        marginTop: "4rem",
        width: "100%",
        backgroundColor: "#f9f9f9",
      }}
    >
      <Grid container justifyContent="center" spacing={4}>
        <Grid item xs={12}>
          <Box className="bg-light p-5">
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Box sx={{ marginTop: "70px" }}>
                  <img
                    src={require("../../assets/images/subservice/form.jpg")}
                    alt="Service Illustration"
                    style={{
                      width: "100%",
                      height: "auto",
                      borderRadius: "8px",
                    }}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography
                  variant="h1"
                  className="mb-4 blutext"
                  sx={{
                    fontSize: "36px",
                    fontWeight: 800,
                    fontFamily: "montserrat",
                  }}
                >
                  Book Our Services
                </Typography>
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                       type="text"
                        variant="outlined"
                        fullWidth
                        placeholder="Your Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                       type="text"
                        variant="outlined"
                        fullWidth
                        placeholder="Company Name"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        type="email"
                        variant="outlined"
                        fullWidth
                        placeholder="Your Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                       type="text"
                        variant="outlined"
                        fullWidth
                        placeholder="Full Address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        select
                        fullWidth
                        name="service"
                        label="Select A Service" 
                        value={formData.service}
                        onChange={handleChange}
                        variant="outlined"
                        placeholder="Select A Service"
                        sx={{
                          color: "#010156",
                        }}
                      >
                        <MenuItem value="">Select A Service</MenuItem>
                        <MenuItem value="1">VPN MPLS L2VPN</MenuItem>
                        <MenuItem value="2">VPN MPLS L3VPN</MenuItem>
                        <MenuItem value="3">Internet Enterprise</MenuItem>
                        <MenuItem value="4">Internet Retail</MenuItem>
                        <MenuItem value="5">VOIP</MenuItem>
                        <MenuItem value="6">Application Security</MenuItem>
                      </TextField>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        select
                        fullWidth
                        name="how"
                        label="How did you hear about us" 
                        value={formData.how}
                        onChange={handleChange}
                        variant="outlined"
                        placeholder="How did you hear about us?"
                      >
                        <MenuItem value="" disabled>
                          How did you hear about us?
                        </MenuItem>
                        <MenuItem value="Search Engine">Search Engine</MenuItem>
                        <MenuItem value="Website">Website</MenuItem>
                        <MenuItem value="Social Media">Social Media</MenuItem>
                        <MenuItem value="Email">Email</MenuItem>
                        <MenuItem value="Friend">Friend</MenuItem>
                      </TextField>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        variant="outlined"
                        fullWidth
                        placeholder="Phone Number"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        variant="outlined"
                        fullWidth
                        placeholder="State"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        variant="outlined"
                        fullWidth
                        placeholder="Local Government"
                        name="lga"
                        value={formData.lga}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        variant="outlined"
                        fullWidth
                        placeholder="Special Request"
                        name="specialRequest"
                        value={formData.specialRequest}
                        onChange={handleChange}
                        multiline
                        minRows={3}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        fullWidth
                        disabled={loading}
                        startIcon={loading && <CircularProgress size={20} />}
                      >
                        {loading ? "Booking..." : "Book Now"}
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
