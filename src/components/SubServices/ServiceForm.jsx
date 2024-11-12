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
import { z } from "zod";
import { toast } from "material-react-toastify";
import "../../ReactToastify.css";

const schema = z.object({
  name: z.string().min(3, {
    message: "Name is required and should be at least 3 characters",
  }),
  company: z.string().min(2, {
    message: "Company is required and should be at least 2 characters",
  }),
  email: z
    .string()
    .email({ message: "Email is required or Invalid email address" }),
  address: z.string().min(2, {
    message: "Address is required and should be at least 2 characters",
  }),
  service: z.string().min(2, {
    message: "Service is required and should be at least 2 characters",
  }),
  how: z.string().min(2, {
    message: "This field is required and should be at least 2 characters",
  }),
  phone: z
    .string()
    .min(9, { message: "Phone number is required or too short" }),
  state: z.string().min(2, {
    message: "State is required or should be at least 2 characters",
  }),
  lga: z
    .string()
    .min(2, { message: "LGA is required or should be at least 2 characters" }),
  specialRequest: z.string().min(5, {
    message: "Message is required or should be at least 5 characters",
  }),
});

const states = [
  "Abia",
  "Adamawa",
  "AkwaIbom",
  "Anambra",
  "Bauchi",
  "Bayelsa",
  "Benue",
  "Borno",
  "Cross River",
  "Delta",
  "Ebonyi",
  "Edo",
  "Ekiti",
  "Enugu",
  "FCT",
  "Gombe",
  "Imo",
  "Jigawa",
  "Kaduna",
  "Kano",
  "Katsina",
  "Kebbi",
  "Kogi",
  "Kwara",
  "Lagos",
  "Nasarawa",
  "Niger",
  "Ogun",
  "Ondo",
  "Osun",
  "Oyo",
  "Plateau",
  "Rivers",
  "Sokoto",
  "Taraba",
  "Yobe",
  "Zamfara",
];

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
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validation = schema.safeParse(formData);
    if (!validation.success) {
      const fieldErrors = {};
      validation.error.errors.forEach((err) => {
        fieldErrors[err.path[0]] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setLoading(true);
    setErrors({});
    try {
      const response = await axios.post(
        "https://linkorgnet.vercel.app/api/v1/bookings/booking",
        formData
      );
      toast.success("Your form has been successfully Submitted");
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
      toast.error("An error occurred while Submitting the form");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      className="position-relative wow fadeInUp"
      data-wow-delay="0.1s"
      sx={{ marginTop: "4rem", width: "100%", backgroundColor: "#f9f9f9" }}
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
                    {/* Name and Company */}
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
                      {errors.name && (
                        <Typography variant="body2" color="error">
                          {errors.name}
                        </Typography>
                      )}
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
                      {errors.company && (
                        <Typography variant="body2" color="error">
                          {errors.company}
                        </Typography>
                      )}
                    </Grid>

                    {/* Email and Address */}
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
                      {errors.email && (
                        <Typography variant="body2" color="error">
                          {errors.email}
                        </Typography>
                      )}
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
                      {errors.address && (
                        <Typography variant="body2" color="error">
                          {errors.address}
                        </Typography>
                      )}
                    </Grid>

                    {/* Service and How */}
                    <Grid item xs={12} sm={6}>
                      <TextField
                        select
                        fullWidth
                        name="service"
                        label="Select A Service"
                        value={formData.service}
                        onChange={handleChange}
                        variant="outlined"
                      >
                        <MenuItem value="">Select A Service</MenuItem>
                        <MenuItem value="Internet Solution">
                          Internet Solution
                        </MenuItem>
                        <MenuItem value="Satellite Solution">
                          Satellite Solution
                        </MenuItem>
                        <MenuItem value="VPN">VPN</MenuItem>
                        <MenuItem value="VOIP">VOIP</MenuItem>
                        <MenuItem value="IT & Network">IT & Network</MenuItem>
                        <MenuItem value="Storage Solutions">
                          Storage Solutions
                        </MenuItem>
                        <MenuItem value="Collocation & Datacenter">
                          Collocation & Datacenter
                        </MenuItem>
                        <MenuItem value="Software Solutions">
                          Software Solutions
                        </MenuItem>
                      </TextField>
                      {errors.service && (
                        <Typography variant="body2" color="error">
                          {errors.service}
                        </Typography>
                      )}
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
                      {errors.how && (
                        <Typography variant="body2" color="error">
                          {errors.how}
                        </Typography>
                      )}
                    </Grid>

                    {/* Phone, State, LGA */}
                    <Grid item xs={12} sm={6}>
                      <TextField
                        variant="outlined"
                        fullWidth
                        placeholder="Phone Number"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                      {errors.phone && (
                        <Typography variant="body2" color="error">
                          {errors.phone}
                        </Typography>
                      )}
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        select
                        fullWidth
                        name="state"
                        label="Select State"
                        value={formData.state}
                        onChange={handleChange}
                        variant="outlined"
                      >
                        <MenuItem value="">Select State</MenuItem>
                        {states.map((state, index) => (
                          <MenuItem key={index} value={state}>
                            {state}
                          </MenuItem>
                        ))}
                      </TextField>
                      {errors.state && (
                        <Typography variant="body2" color="error">
                          {errors.state}
                        </Typography>
                      )}
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
                      {errors.lga && (
                        <Typography variant="body2" color="error">
                          {errors.lga}
                        </Typography>
                      )}
                    </Grid>

                    {/* Special Request */}
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
                      {errors.specialRequest && (
                        <Typography variant="body2" color="error">
                          {errors.specialRequest}
                        </Typography>
                      )}
                    </Grid>

                    <Grid item xs={12}>
                      <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        fullWidth
                        disabled={loading}
                      >
                        {loading ? (
                          <CircularProgress size={24} />
                        ) : (
                          "Send Message"
                        )}
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
