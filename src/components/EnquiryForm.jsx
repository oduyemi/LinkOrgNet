import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  CircularProgress,
  Button,
  Grid,
  TextField,
  MenuItem,
} from "@mui/material";
import WOW from "wowjs";
import axios from "axios";
import { z } from "zod";
import { toast } from "material-react-toastify";
import "../ReactToastify.css";

const schema = z.object({
  fname: z.string().min(3, {
    message: "First name is required and should be at least 3 characters",
  }),
  lname: z.string().min(3, {
    message: "Last name is required and should be at least 3 characters",
  }),
  email: z
    .string()
    .email({ message: "Email is required or Invalid email address" }),
  company: z.string().min(3, {
    message: "Company name is required and should be at least 3 characters",
  }),
  address: z.string().min(3, {
    message: "Address is required and should be at least 3 characters",
  }),
  phone: z
    .string()
    .min(9, { message: "Phone number is required or is too short" }),
  state: z.string().min(2, { message: "State is required" }),
  topic: z.string().min(2, { message: "Topic is required" }),
  message: z.string().min(5, {
    message: "Message is required and should be at least 5 characters",
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

export const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    company: "",
    address: "",
    phone: "",
    state: "",
    topic: "",
    message: "",
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
        "https://linkorgnet.vercel.app/api/v1/enquiries/enquiry",
        formData
      );
      toast.success("Your form has been successfully Submitted");
      setFormData({
        fname: "",
        lname: "",
        email: "",
        company: "",
        address: "",
        phone: "",
        state: "",
        topic: "",
        message: "",
      });
    } catch (error) {
      toast.error("An error occurred while Submitting the form");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    new WOW.WOW({ live: false }).init();
  }, []);

  return (
    <Box className="contact-box">
      <Box className="contact-title">
        <Typography
          variant="h3"
          className="wow fadeInUp"
          data-wow-delay=".3s"
          sx={{ color: "#010156", fontWeight: 800, fontSize: "30px" }}
        >
          Make an Enquiry
        </Typography>
        <Typography
          variant="body1"
          className="wow fadeInUp"
          data-wow-delay=".5s"
        >
          We are ready to help with your next project. Let&apos;s work together
          on it.
        </Typography>
      </Box>
      <Box className="contact-form-items">
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                type="text"
                // variant="outlined"
                fullWidth
                placeholder="Your First Name"
                sx={{
                  input: { color: "black" },
                }}
                name="fname"
                value={formData.fname}
                onChange={handleChange}
              />
              {errors.fname && (
                <Typography variant="body2" color="error">
                  {errors.fname}
                </Typography>
              )}
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                type="text"
                variant="outlined"
                fullWidth
                placeholder="Your Last Name"
                sx={{
                  input: { color: "black" },
                }}
                name="lname"
                value={formData.lname}
                onChange={handleChange}
              />
              {errors.lname && (
                <Typography variant="body2" color="error">
                  {errors.lname}
                </Typography>
              )}
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                type="email"
                variant="outlined"
                fullWidth
                placeholder="Your Email"
                sx={{
                  input: { color: "black" },
                }}
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
                placeholder="Company Name"
                sx={{
                  input: { color: "black" },
                }}
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
            <Grid item xs={12} sm={6}>
              <TextField
                type="text"
                variant="outlined"
                fullWidth
                placeholder="Full Address"
                sx={{
                  input: { color: "black" },
                }}
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
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                fullWidth
                placeholder="Phone Number"
                sx={{
                  input: { color: "black" },
                }}
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
                select
                fullWidth
                name="topic"
                label="Choose a topic"
                value={formData.topic}
                onChange={handleChange}
                variant="outlined"
              >
                <MenuItem value="">Select A Service</MenuItem>
                <MenuItem value="Internet Solution">Internet Solution</MenuItem>
                <MenuItem value="Satellite Solution">
                  Satellite Solution
                </MenuItem>
                <MenuItem value="VPN">VPN</MenuItem>
                <MenuItem value="VOIP">VOIP</MenuItem>
                <MenuItem value="IT & Network">IT & Network</MenuItem>
                <MenuItem value="Storage Solutions">Storage Solutions</MenuItem>
                <MenuItem value="Collocation & Datacenter">
                  Collocation & Datacenter
                </MenuItem>
                <MenuItem value="Software Solutions">
                  Software Solutions
                </MenuItem>
              </TextField>
              {errors.topic && (
                <Typography variant="body2" color="error">
                  {errors.topic}
                </Typography>
              )}
            </Grid>
            <Grid item xs={12} className="form-clt">
              <textarea
                variant="outlined"
                fullWidth
                placeholder="What can we do for you"
                name="message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              {errors.message && (
                <Typography variant="body2" color="error">
                  {errors.message}
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
                {loading ? <CircularProgress size={24} /> : "Send Message"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Box>
  );
};
