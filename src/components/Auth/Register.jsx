import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  CircularProgress,
  IconButton,
  InputAdornment,
} from "@mui/material";
import {
  Email as EmailIcon,
  Lock as LockIcon,
  Person as PersonIcon,
  Phone as PhoneIcon,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import { toast } from "material-react-toastify";
import "../../ReactToastify.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        "https://linkorgnet.vercel.app/api/v1/admin/register",
        formData
      );
      toast.success("Registration successful!");
      navigate("/login"); 
    } catch (err) {
        toast.error("Registration failed. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        maxWidth: "400px",
        margin: "auto",
        mt: 4,
        p: 3,
        boxShadow: 3,
        borderRadius: 2,
        marginBottom: "100px"
      }}
    >
      <Typography variant="h4" mb={3} textAlign="center">
        Register
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box mb={2}>
          <TextField
            fullWidth
            name="fname"
            label="First Name"
            variant="outlined"
            value={formData.fname}
            onChange={handleChange}
            sx={{
                input: { color: "black" },
              }}
            InputProps={{
              startAdornment: <PersonIcon sx={{ mr: 1 }} />,
            }}
          />
        </Box>
        <Box mb={2}>
          <TextField
            fullWidth
            name="lname"
            label="Last Name"
            variant="outlined"
            value={formData.lname}
            onChange={handleChange}
            sx={{
                input: { color: "black" },
              }}
            InputProps={{
              startAdornment: <PersonIcon sx={{ mr: 1 }} />,
            }}
          />
        </Box>
        <Box mb={2}>
          <TextField
            fullWidth
            name="email"
            label="Email"
            variant="outlined"
            type="email"
            value={formData.email}
            onChange={handleChange}
            sx={{
                input: { color: "black" },
              }}
            InputProps={{
              startAdornment: <EmailIcon sx={{ mr: 1 }} />,
            }}
          />
        </Box>
        <Box mb={2}>
          <TextField
            fullWidth
            name="phone"
            label="Phone Number"
            variant="outlined"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            sx={{
                input: { color: "black" },
              }}
            InputProps={{
              startAdornment: <PhoneIcon sx={{ mr: 1 }} />,
            }}
          />
        </Box>
        <Box mb={2}>
          <TextField
            fullWidth
            name="password"
            label="Password"
            variant="outlined"
            type={showPassword ? "text" : "password"}
            value={formData.password}
            onChange={handleChange}
            sx={{
                input: { color: "black" },
              }}
            InputProps={{
              startAdornment: <LockIcon sx={{ mr: 1 }} />,
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={togglePasswordVisibility}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <Box mb={2}>
          <TextField
            fullWidth
            name="confirmPassword"
            label="Confirm Password"
            variant="outlined"
            type={showConfirmPassword ? "text" : "password"}
            value={formData.confirmPassword}
            onChange={handleChange}
            sx={{
                input: { color: "black" },
              }}
            InputProps={{
              startAdornment: <LockIcon sx={{ mr: 1 }} />,
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={toggleConfirmPasswordVisibility}>
                    {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          disabled={loading}
        >
          {loading ? <CircularProgress size={24} /> : "Register"}
        </Button>
      </form>
    </Box>
  );
};

export default Register;
