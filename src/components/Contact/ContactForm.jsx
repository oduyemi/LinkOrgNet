import React, { useState } from "react";
import { Box, Typography, CircularProgress, Button } from "@mui/material";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import CallIcon from "@mui/icons-material/Call";
import MailIcon from "@mui/icons-material/Mail";
import ShareLocationIcon from "@mui/icons-material/ShareLocation";
import Person2Icon from "@mui/icons-material/Person2";
import TopicIcon from "@mui/icons-material/Topic";
import UpcomingIcon from "@mui/icons-material/Upcoming";
import PublicIcon from "@mui/icons-material/Public";
import axios from "axios";
import { z } from "zod";
import { toast } from 'material-react-toastify';
import '../../ReactToastify.css';

const schema = z.object({
  name: z.string().min(3, {
    message: "Name is required and should be at least 3 characters",
  }),
  email: z
    .string()
    .email({ message: "Email is required or Invalid email address" }),
  phone: z
    .string()
    .min(9, { message: "Phone number is required or too short" }),
  subject: z.string().min(5, {
    message: "Subject is required or should be at least 5 characters",
  }),
  message: z.string().min(5, {
    message: "Message is required or should be at least 5 characters",
  }),
});

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
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
      // Map Zod errors to display below each input field
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
        "https://linkorgnet.vercel.app/api/v1/contacts/contact",
        formData
      );
      toast.success('Your form has been successfully Submitted');

      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      toast.error('An error occurred while Submitting the form');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact-main-area fix section-padding">
      <Box className="container">
        <Box className="contact-main-wrapper">
          <Box className="row g-4">
            <Box className="col-lg-6">
              <Box className="contact-content">
                <Box className="section-title mb-2">
                  <span
                    className="wow fadeInUp"
                    style={{ textDecoration: "none" }}
                  >
                    Get In Touch
                  </span>
                  <Typography
                    variant="h2"
                    className="wow fadeInUp"
                    data-wow-delay=".3s"
                    sx={{
                      color: "#010156",
                      fontWeight: 300,
                      fontSize: "30px",
                    }}
                  >
                    Contact Us
                  </Typography>
                </Box>
                <Typography
                  variant="body1"
                  className="mt-4 mt-md-0 wow fadeInUp w-75"
                  data-wow-delay=".4s"
                >
                  We are here! Our door is open for a good cup of coffee. Get
                  the info you&apos;re looking for right now.
                </Typography>
                <Box className="row g-4 mt-3">
                  <Box className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                    <Box className="info-items">
                      <Box className="icon">
                        <ShareLocationIcon
                          sx={{
                            color: "#010156",
                            marginTop: "-10px",
                          }}
                        />
                      </Box>
                      <Box className="content">
                        <Typography
                          variant="h5"
                          sx={{
                            color: "#010156",
                            fontSize: "18px",
                            fontWeight: 500,
                          }}
                        >
                          Location
                        </Typography>
                        <p>
                          177B Sinari Daranijo Street, <br />
                          Victoria Island, Lagos
                        </p>
                      </Box>
                    </Box>
                  </Box>
                  <Box className="col-lg-6 wow fadeInUp" data-wow-delay=".5s">
                    <Box className="info-items">
                      <Box className="icon">
                        <CallIcon
                          sx={{
                            color: "#010156",
                            marginTop: "-10px",
                          }}
                        />
                      </Box>
                      <Box className="content">
                        <Typography
                          variant="h5"
                          sx={{
                            color: "#010156",
                            fontSize: "18px",
                            fontWeight: 500,
                          }}
                        >
                          Phone
                        </Typography>
                        <Link to="tel:+2349160005465)">
                          +234 916 000 LINK (5465)
                        </Link>{" "}
                        <br />
                        <Link to="tel:tel:+2349041423631">
                          +234 904 142 3631
                        </Link>
                      </Box>
                    </Box>
                  </Box>
                  <Box className="col-lg-6 wow fadeInUp" data-wow-delay=".7s">
                    <Box className="info-items">
                      <Box className="icon">
                        <MailIcon
                          sx={{
                            color: "#010156",
                            marginTop: "-10px",
                          }}
                        />
                      </Box>
                      <Box className="content">
                        <Typography
                          variant="h5"
                          sx={{
                            color: "#010156",
                            fontSize: "18px",
                            fontWeight: 500,
                          }}
                        >
                          Email
                        </Typography>
                        <Link
                          to="mailto:info@linkorgnet.com.ng"
                          className="link"
                        >
                          info@linkorgnet.com.ng
                        </Link>{" "}
                        <br />
                        <Link
                          to="mailto:info@linkorgnet.com.ng"
                          className="link"
                        >
                          support@linkorgnet.com.ng
                        </Link>
                      </Box>
                    </Box>
                  </Box>
                  <Box className="col-lg-6 wow fadeInUp" data-wow-delay=".9s">
                    <Box className="info-items">
                      <Box className="icon">
                        <PublicIcon
                          sx={{
                            color: "#010156",
                            marginTop: "-10px",
                          }}
                        />
                      </Box>
                      <Box className="content">
                        <Typography
                          variant="h5"
                          sx={{
                            color: "#010156",
                            fontSize: "18px",
                            fontWeight: 500,
                          }}
                        >
                          Social
                        </Typography>
                        <Box className="social-icon d-flex align-items-center">
                          <Link to="" target="_blank">
                            <FacebookIcon />
                          </Link>
                          <Link
                            to="https://instagram.com/linkorgnet"
                            target="_blank"
                          >
                            <InstagramIcon />
                          </Link>
                          <Link to="" target="_blank">
                            <PinterestIcon />
                          </Link>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box
                  className="contact-image wow fadeInUp"
                  data-wow-delay=".4s"
                >
                  <img
                    src={require("../../assets/images/mail.jpg")}
                    alt="contact-us-img"
                  />
                </Box>
              </Box>
            </Box>
            <Box className="col-lg-6 mt-5 mt-lg-0">
              <Box className="contact-form-items">
                <Box className="contact-title">
                  <Typography
                    variant="h3"
                    className="wow fadeInUp"
                    data-wow-delay=".3s"
                    sx={{
                      color: "#010156",
                      fontWeight: 300,
                      fontSize: "30px",
                    }}
                  >
                    Fill In The Form
                  </Typography>
                </Box>
                <form onSubmit={handleSubmit}>
                  <Box className="row g-4">
                    <Box
                      className="col-lg-12 wow fadeInUp"
                      data-wow-delay=".3s"
                    >
                      <Box className="form-clt">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          placeholder="Your Name*"
                          value={formData.name}
                          onChange={handleChange}
                        />
                        <Box className="icon">
                          <Person2Icon
                            sx={{
                              color: "#010156",
                            }}
                          />
                        </Box>
                        {errors.name && (
                          <Typography variant="body2" color="error">
                            {errors.name}
                          </Typography>
                        )}
                      </Box>
                    </Box>

                    <Box
                      className="col-lg-12 wow fadeInUp"
                      data-wow-delay=".5s"
                    >
                      <Box className="form-clt">
                        <input
                          type="text"
                          name="email"
                          id="email"
                          placeholder="Email Address*"
                          value={formData.email}
                          onChange={handleChange}
                        />
                        <Box className="icon">
                          <MailIcon />
                        </Box>

                        {errors.email && (
                          <Typography variant="body2" color="error">
                            {errors.email}
                          </Typography>
                        )}
                      </Box>
                    </Box>
                    <Box
                      className="col-lg-12 wow fadeInUp"
                      data-wow-delay=".5s"
                    >
                      <Box className="form-clt">
                        <input
                          type="number"
                          name="phone"
                          id="phone"
                          placeholder="Phone Number*"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                        <Box className="icon">
                          <CallIcon
                            sx={{
                              color: "#010156",
                            }}
                          />
                        </Box>
                        {errors.phone && (
                          <Typography variant="body2" color="error">
                            {errors.phone}
                          </Typography>
                        )}
                      </Box>
                    </Box>
                    <Box
                      className="col-lg-12 wow fadeInUp"
                      data-wow-delay=".5s"
                    >
                      <Box className="form-clt">
                        <input
                          type="text"
                          name="subject"
                          id="subject"
                          placeholder="Subject*"
                          value={formData.subject}
                          onChange={handleChange}
                        />
                        <Box className="icon">
                          <TopicIcon
                            sx={{
                              color: "#010156",
                            }}
                          />
                        </Box>

                        {errors.subject && (
                          <Typography variant="body2" color="error">
                            {errors.subject}
                          </Typography>
                        )}
                      </Box>
                    </Box>
                    <Box
                      className="col-lg-12 wow fadeInUp"
                      data-wow-delay=".7s"
                    >
                      <Box className="form-clt">
                        <textarea
                          name="message"
                          id="message"
                          placeholder="Enter Your Messege here"
                          value={formData.message}
                          onChange={handleChange}
                        ></textarea>
                        <Box className="icon">
                          <UpcomingIcon
                            sx={{
                              color: "#010156",
                            }}
                          />
                        </Box>

                        {errors.message && (
                          <Typography variant="body2" color="error">
                            {errors.message}
                          </Typography>
                        )}
                      </Box>
                    </Box>
                    <Box
                      className="col-lg-12 wow fadeInUp"
                      data-wow-delay=".8s"
                    >
                      <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        fullWidth
                        disabled={loading}
                        startIcon={loading && <CircularProgress size={20} />}
                      >
                        {loading ? "Sending..." : "Contact Us"}
                      </Button>
                    </Box>
                  </Box>
                </form>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </section>
  );
};
