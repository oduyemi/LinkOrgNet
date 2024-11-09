import React, { useEffect, useState } from "react";
import { Box, Typography, CircularProgress, Button } from "@mui/material";
import WOW from "wowjs";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { LocationCity, Call, Mail, ShareLocation } from "@mui/icons-material";
import axios from "axios";
// import { toast, ToastContainer } from "react-toastify";

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

  const [loading, setLoading] = useState(false);
  const [dropdowns, setDropdowns] = useState({
    state: false,
    topic: false,
  });

  const [selectedOptions, setSelectedOptions] = useState({
    state: "Select State",
    topic: "Choose Topic",
  });

  const iconStyles = {
    fontSize: 18,
    color: "#010156",
    marginLeft: "-14px",
    marginTop: "-5px",
  };

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

  const topics = [
    "Internet",
    "Satellite",
    "VPN",
    "Voip",
    "IT & Network",
    "Storage Solution",
    "Collocation & Datacenter",
    "Software Solution",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formData.fname ||
      !formData.lname ||
      !formData.email ||
      !formData.company ||
      !formData.address ||
      !formData.phone ||
      !formData.state ||
      !formData.topic ||
      !formData.message
    ) {
      alert("Please fill in all required fields.");
      return;
    }
    setLoading(true);
    try {
      const response = await axios.post(
        "https://linkorgnet.vercel.app/api/v1/enquiries/enquiry",
        formData
      );
      alert(response.data.message || "Message sent successfully!");
      // toast.success(response.data.message || "Message sent successfully!");
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
      // const errorMessage = error.response?.data?.error || "An error occurred";
      // toast.error(errorMessage);
      alert("An error occurred while sending the message.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    new WOW.WOW({ live: false }).init();
  }, []);

  const toggleDropdown = (dropdown) => {
    setDropdowns((prev) => ({ ...prev, [dropdown]: !prev[dropdown] }));
  };

  const selectOption = (option, dropdown) => {
    setSelectedOptions((prev) => ({ ...prev, [dropdown]: option }));
    setFormData((prevData) => ({ ...prevData, [dropdown]: option }));
    setDropdowns((prev) => ({ ...prev, [dropdown]: false }));
  };

  return (
    <Box className="contact-box">
      {/* <ToastContainer /> */}
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
          <Box className="row g-3">
            {[
              { name: "fname", placeholder: "Firstname", Icon: AccountBoxIcon },
              { name: "lname", placeholder: "Lastname", Icon: AccountBoxIcon },
              {
                name: "email",
                placeholder: "Email",
                Icon: Mail,
                type: "email",
              },
              {
                name: "company",
                placeholder: "Company Name",
                Icon: LocationCity,
              },
              {
                name: "address",
                placeholder: "Address",
                Icon: ShareLocation,
              },
              {
                name: "phone",
                placeholder: "Phone Number",
                Icon: Call,
                type: "tel",
              },
            ].map(({ name, placeholder, Icon, type = "text" }, index) => (
              <Box
                className="col-lg-6 wow fadeInUp"
                data-wow-delay=".3s"
                key={name}
              >
                <Box className="form-clt">
                  <input
                    type={type}
                    name={name}
                    value={formData[name]}
                    onChange={handleChange}
                    placeholder={placeholder}
                    required
                  />
                  <Box className="icon">
                    <Icon sx={iconStyles} />
                  </Box>
                </Box>
              </Box>
            ))}

            {/* State Dropdown */}
            <Box className="col-lg-6 wow fadeInUp" data-wow-delay=".5s">
              <Box className="form-clt">
                <Box
                  className={`nice-select ${dropdowns.state ? "open" : ""}`}
                  tabIndex="0"
                  aria-expanded={dropdowns.state}
                  role="listbox"
                  onClick={() => toggleDropdown("state")}
                >
                  <span className="current">{selectedOptions.state}</span>
                  {dropdowns.state && (
                    <ul className="list">
                      {states.map((state, index) => (
                        <li
                          key={index}
                          className="option"
                          onClick={() => selectOption(state, "state")}
                          role="option"
                        >
                          {state}
                        </li>
                      ))}
                    </ul>
                  )}
                </Box>
              </Box>
            </Box>

            {/* Topic Dropdown */}
            <Box className="col-lg-6 wow fadeInUp" data-wow-delay=".5s">
              <Box className="form-clt">
                <Box
                  className={`nice-select ${dropdowns.topic ? "open" : ""}`}
                  tabIndex="0"
                  aria-expanded={dropdowns.topic}
                  role="listbox"
                  onClick={() => toggleDropdown("topic")}
                >
                  <span className="current">{selectedOptions.topic}</span>
                  {dropdowns.topic && (
                    <ul className="list">
                      {topics.map((topic, index) => (
                        <li
                          key={index}
                          className="option"
                          onClick={() => selectOption(topic, "topic")}
                          role="option"
                        >
                          {topic}
                        </li>
                      ))}
                    </ul>
                  )}
                </Box>
              </Box>
            </Box>

            {/* Message Box */}
            <Box className="col-lg-12 wow fadeInUp" data-wow-delay=".5s">
              <Box className="form-clt">
                <textarea
                  name="message"
                  placeholder="Write Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </Box>
            </Box>

            {/* Submit Button */}
            <Box className="col-lg-12 wow fadeInUp" data-wow-delay=".4s">
              <Button
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
                disabled={loading}
                startIcon={loading && <CircularProgress size={20} />}
              >
                {loading ? "Sending..." : "Send a Message"}
              </Button>
            </Box>
          </Box>
        </form>
      </Box>
    </Box>
  );
};
