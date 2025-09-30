import { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  IconButton,
  Snackbar,
  Alert,
} from "@mui/material";
import { ArrowForward, Facebook, Instagram, LinkedIn, X } from "@mui/icons-material";
import logoWhite from "/images/logo/logo_white.svg";
import { Link } from "react-router-dom";
import tiktok from "/images/tiktok.png"
import axios from "axios";


export const Footer = () => {
  const [agree, setAgree] = useState(false);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [snackbar, setSnackbar] = useState({ open: false, message: "", severity: "success" });

  const handleSubmit = async () => {
    try {
      if (!email) {
        setSnackbar({ open: true, message: "Email is required", severity: "warning" });
        return;
      }
  
      if (!agree) {
        setSnackbar({ open: true, message: "You must agree to receive emails.", severity: "warning" });
        return;
      }
  
      const response = await axios.post("https://linkorgnet.vercel.app/api/v1/mailinglist", {
        email,
        phone,
      });
  
      if (response.status === 201) {
        setSnackbar({ open: true, message: "Subscribed successfully!", severity: "success" });
        setEmail("");
        setPhone("");
        setAgree(false); 
      }
    } catch (error: any) {
      const msg = error.response?.data?.message || "Something went wrong";
      setSnackbar({ open: true, message: msg, severity: "error" });
    }
  };
  return (
    <Box sx={{ backgroundColor: "#010156", color: "#fff", p: 6, minHeight: "400px" }}>
      <Box sx={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", p: 2 }}>
        <Box sx={{ width: "200px", height: "80px" }} ml={{xs:-2, md:6}} className="shapen">
          <img src={logoWhite} alt="site logo" width="90%" />
        </Box>
        <Box sx={{ width: "200px", height: "90px" }}>
          <img src="/images/logo/badges.png" alt="ISO badges" width="90%" className="badge smallerBadge" />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
        pl={{md:6}}
      >
        {/* Newsletter Subscription */}
        <Box sx={{ maxWidth: 500 }} className="footer_subscribe">
          <Typography variant="h5" fontFamily="Museo Slab Normal" fontWeight={600} sx={{ marginTop: "30px" }}>
            Subscribe to our newsletter
          </Typography>
          <Typography
            variant="body1"
            sx={{ my: 1, opacity: 0.7, fontFamily:"Inter", fontSize: { xs: "small", sm: "medium" }, fontWeight: 100 }}
          >
            Only important stuff, no spam. We promise!
          </Typography>
          <TextField
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            variant="standard"
            placeholder="Enter your email address"
            sx={{ mt: 2, borderBottom: "1px solid #e65d0f" }}
            InputProps={{ disableUnderline: true, sx: { color: "white" } }}
          />
          <TextField
            fullWidth
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            variant="standard"
            placeholder="Enter your phone number (optional)"
            sx={{ mt: 4, borderBottom: "1px solid #e65d0f" }}
            InputProps={{ disableUnderline: true, sx: { color: "white" } }}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
                sx={{
                  color: "#fff",
                  '&.Mui-checked': { color: "#e65d0f" }
                }}
              />
            }
            label="I agree to receive emails from LinkOrgNet"
            sx={{ 
              mt: 2,
              fontFamily: "Inter",
              fontSize: 8,
              color: "white" 
            }}
          />

          <Button
            variant="contained"
            onClick={handleSubmit}
            sx={{
              mt: 3,
              backgroundColor: "white",
              color: "#e65d0f",
              fontWeight: "bold",
              fontSize:"12px",
              fontFamily: "Inter",
              borderRadius: "20px",
              textTransform: "none",
              padding: "6px 20px",
              '&:hover': { backgroundColor: "#f5f5f5" },
            }}
            endIcon={<ArrowForward />}
          >
            Subscribe
          </Button>
        </Box>

        {/* Contact Info */}
        <Box sx={{ maxWidth: 300 }} className="footer_contact">
          <Typography variant="h5" sx={{ mt: { xs: 5,  opacity: 0.7 } }} fontFamily="Museo Slab Medium" fontWeight="bold">
            Contact Us
          </Typography>
          <hr className="footer_line" />
          <Typography variant="body2" color="#ccc" sx={{ my: 2, opacity: 0.9 }}>
              For Enquiries:
          </Typography>
          <ul style={{ marginLeft:"22px" }}>
            <li>
              <Typography variant="body2" sx={{ my: 2, width:"70%" }} fontFamily="Inter" fontSize={14} fontWeight={500}>
                  177B, Sinari Daranijo Street, Victoria Island Lagos
              </Typography>
            </li>
            <li>
              <Typography variant="body2" sx={{ mb: 2, width:"70%" }}>
                  info@linkorgnet.com
              </Typography>
            </li>
            <li>
              <Typography variant="body2" sx={{ mb: 2, width:"70%" }}>
                +234 916 000 5465
              </Typography>
            </li>
            <li>
              <Typography variant="body2" sx={{ mb: 2, width:"70%" }}>
                +234 904 142 3631
              </Typography>
            </li>
          </ul>
        </Box>
      </Box>

      {/* Footer Bottom Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: { xs: "column", md: "row" },
          mt: 6,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
          <img src="/images/arrow_footer.png" alt="arrow" width="7%" style={{ marginRight: "30px" }} />
          <Typography variant="body2" sx={{ opacity: 0.7 }}>
            &copy; 2025 — Copyright LinkOrgNet. All rights reserved.
          </Typography>
        </Box>
        <Box 
          className="footsocials"
          sx={{ 
            marginRight: "100px",
            alignContent:"flex-end"  
          }}
        >
          <Link to="https://www.linkedin.com/company/linkorgnet" target="_blank" rel="noopener noreferrer">
            <IconButton aria-label="LinkedIn" sx={{ color: "white", '&:hover':{color:"#e65d0f"} }}>
              <LinkedIn />
            </IconButton>
          </Link>
          <Link to="https://www.facebook.com/profile.php?id=61568155119100" target="_blank" rel="noopener noreferrer">
            <IconButton aria-label="Facebook" sx={{ color: "white", '&:hover':{color:"#e65d0f"} }}>
              <Facebook />
            </IconButton>
          </Link>
          <Link to="https://www.instagram.com/linkorgnet" target="_blank" rel="noopener noreferrer">
            <IconButton aria-label="Instagram" sx={{ color: "white", '&:hover':{color:"#e65d0f"} }}>
              <Instagram />
            </IconButton>
          </Link>
          <Link to="https://www.x.com/linkorgnet" target="_blank" rel="noopener noreferrer">
            <IconButton aria-label="X" sx={{ color: "white", '&:hover':{color:"#e65d0f"} }}>
              <X />
            </IconButton>
          </Link>
          <Link to=" https://www.tiktok.com/@linkorgnet" target="_blank" rel="noopener noreferrer">
            <IconButton aria-label="TikTok" sx={{ color: "white", '&:hover':{color:"#e65d0f"} }}>
            <img src={tiktok} alt="TikTok" width="24px" height="24px" className="tiktok-icon" />
            </IconButton>
          </Link>
        </Box>
      </Box>

      {/* Snackbar for feedback */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert onClose={() => setSnackbar({ ...snackbar, open: false })} severity={snackbar.severity as any}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};
