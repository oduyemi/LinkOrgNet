import React, { useState } from "react";
import axios from "axios";
import { Box, Button, TextField } from "@mui/material";
import { DashboardContent } from "./DashboardContent";
import { EmailTemplate } from "./EmailTemplate";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const SendMail = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState();
  const [message, setMessage] = useState();
  const [sent, setSent] = useState(false);

  const handleSendEmail = async () => {
    try {
      const response = await axios.post(
        "https://linkorgnet.vercel.app/api/v1/email/send",
        {
          email,
          subject,
          message,
        }
      );
      toast.success("Email sent successfully!");
      setSent(true);
      console.log("Email sent:", response.data);
    } catch (error) {
      console.error("Failed to send email:", error);
      toast.error("Failed to send email. Please try again.");
    }
  };

  return (
    <DashboardContent title="Send Email">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
          padding: "2rem",
        }}
      >
        {!sent ? (
          <>
            <TextField
              type="email"
              label="Recipient's Email"
              variant="outlined"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{ input: { color: "black" } }}
            />
            <TextField
              label="Subject"
              variant="outlined"
              fullWidth
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              sx={{ input: { color: "black" } }}
            />
            <TextField
              label="Message"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
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
              <Button
                variant="contained"
                color="primary"
                onClick={handleSendEmail}
              >
                Send Email
              </Button>
              <Link to="/admin">
                <Button variant="contained" color="secondary">
                  Dashboard Home
                </Button>
              </Link>
            </Box>
          </>
        ) : (
          <EmailTemplate
            subject={subject}
            email={email}
            message={message}
          />
        )}
      </Box>
    </DashboardContent>
  );
};
