import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Offcanvas } from "react-bootstrap";
import HomeIcon from "@mui/icons-material/Home";
import EmailIcon from "@mui/icons-material/Email";
import { EventAvailable, Person2, QuestionAnswer } from "@mui/icons-material";
import SendIcon from "@mui/icons-material/Send";
import HistoryIcon from "@mui/icons-material/History";
import TuneIcon from "@mui/icons-material/Tune";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {jwtDecode} from "jwt-decode";

export const Sidebar = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };


  const isTokenExpired = (token) => {
    try {
      const { exp } = jwtDecode(token);
      return Date.now() >= exp * 1000;
    } catch (error) {
      return true;
    }
  };


  const checkAuth = () => {
    const token = localStorage.getItem("token");
    if (!token || isTokenExpired(token)) {
      logout(); 
    }
  };

  useEffect(() => {
    checkAuth();
    const interval = setInterval(checkAuth, 60000);
    return () => clearInterval(interval); 
  }, []);
  
  return (
    <>
      {/* Offcanvas (sidebar) for small screens */}
      <Offcanvas show={show} onHide={handleClose} className="">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className="list-unstyled">
            <li className="d-flex align-items-center mt-3 cursor-pointer">
              <HomeIcon
                sx={{
                  fontSize: 60,
                  color: "#100156",
                }}
              />
              &emsp;
              <Link
                to="/admin"
                className="text-dark text-decoration-none fw-semibold hover-text-danger"
              >
                Home
              </Link>
            </li>
            <li className="d-flex align-items-center mt-3 cursor-pointer">
              <EmailIcon
                sx={{
                  fontSize: 50,
                  color: "#100156",
                  marginLeft: "5px",
                }}
              />
              &emsp;
              <Link
                to="/admin/contacts"
                className="text-dark text-decoration-none fw-semibold hover-text-danger"
              >
                Contact List
              </Link>
            </li>
            <li className="d-flex align-items-center mt-3 cursor-pointer">
              <QuestionAnswer
                sx={{
                  fontSize: 50,
                  color: "#100156",
                  marginLeft: "5px",
                }}
              />
              &emsp;
              <Link
                to="/admin/enquiries"
                className="text-dark text-decoration-none fw-semibold hover-text-danger"
              >
                Enquiry List
              </Link>
            </li>
            <li className="d-flex align-items-center mt-3 cursor-pointer">
              <EventAvailable
                sx={{
                  fontSize: 50,
                  color: "#100156",
                  marginLeft: "5px",
                }}
              />
              &emsp;
              <Link
                to="/admin/bookings"
                className="text-dark text-decoration-none fw-semibold hover-text-danger"
              >
                Booking List
              </Link>
            </li>
           
            <li className="d-flex align-items-center mt-3 pl-1 cursor-pointer">
              <Person2
                sx={{
                  fontSize: 60,
                  color: "#100156",
                }}
              />
              &emsp;
              <Link
                to="/admin/profile"
                className="text-dark text-decoration-none fw-semibold hover-text-danger"
              >
                Profile
              </Link>
            </li>
            <li className="d-flex align-items-center text-light mt-3 cursor-pointer">
              <SendIcon
                sx={{
                  fontSize: 50,
                  color: "#100156",
                  marginLeft: "6px",
                }}
              />
              &emsp;
              <Link
                to="/admin/send-email"
                className="text-dark text-decoration-none fw-semibold hover-text-danger"
              >
                Send Email
              </Link>
            </li>
            <li className="d-flex align-items-center mt-3 cursor-pointer">
              <TuneIcon
                sx={{
                  fontSize: 60,
                  color: "#100156",
                  // marginLeft: "6px"
                }}
              />
              <Link
                to="/admin/update-password"
                className="text-dark text-decoration-none fw-semibold hover-text-danger"
              >
                Change Password
              </Link>
            </li>
            <li>
              <button onClick={logout} className="btn btn-primary mt-3">
                Logout
              </button>
            </li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>

      {/* Sidebar for larger screens */}
      <div className="d-none d-md-flex flex-column w-20 sidebar-full-height blu">
        {/* Toggle button for small screens */}
        <div
          className="button"
          style={{ textAlign: "right", marginLeft: "250px" }}
        >
          {/* Toggle button for small screens with Material UI Arrow icon */}
          <button
            className="btn orange h-10"
            onClick={handleShow}
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <ArrowForwardIcon
              style={{ fontSize: "24px", color: "currentColor" }}
            />
          </button>
        </div>

        <div className="mx-auto py-3">
          <ul className="list-unstyled text-light">
            <li className="d-flex align-items-center mt-3 cursor-pointer">
              <HomeIcon
                sx={{
                  fontSize: 40,
                }}
              />
              &emsp;
              <Link
                to="/admin"
                className="text-light text-decoration-none fw-semibold hover-text-danger"
              >
                Home
              </Link>
            </li>
            <li className="d-flex align-items-center mt-3 cursor-pointer">
              <EmailIcon
                sx={{
                  fontSize: 50,
                  color: "#fff",
                }}
              />{" "}
              &emsp;
              <Link
                to="/admin/contacts"
                className="text-light text-decoration-none fw-semibold hover-text-danger"
              >
                Contact List
              </Link>
            </li>
            <li className="d-flex align-items-center mt-3 cursor-pointer">
            <QuestionAnswer
                sx={{
                  fontSize: 50,
                  color: "#fff",
                }}
              />{" "}
              &emsp;
              <Link
                to="/admin/enquiries"
                className="text-light text-decoration-none fw-semibold hover-text-danger"
              >
                Enquiry List
              </Link>
            </li>
            <li className="d-flex align-items-center mt-3 cursor-pointer">
              <EventAvailable
                sx={{
                  fontSize: 50,
                  color: "#fff",
                }}
              />{" "}
              &emsp;
              <Link
                to="/admin/bookings"
                className="text-light text-decoration-none fw-semibold hover-text-danger"
              >
                Booking List
              </Link>
            </li>
            <li className="d-flex align-items-center mt-3 cursor-pointer">
              <Person2
                sx={{
                  fontSize: 65,
                  color: "#fff",
                  marginLeft: "-7px",
                }}
              />
              &emsp;
              <Link
                to="/admin/profile"
                className="text-light text-decoration-none fw-semibold hover-text-danger"
              >
                Profile
              </Link>
            </li>

            <li className="d-flex align-items-center mt-3 cursor-pointer">
              <SendIcon
                sx={{
                  fontSize: 50,
                  color: "#fff",
                }}
              />
              &emsp;
              <Link
                to="/admin/send-email"
                className="text-light text-decoration-none fw-semibold hover-text-danger"
              >
                Send Email
              </Link>
            </li>

            <li className="d-flex align-items-center mt-3 cursor-pointer">
              <HistoryIcon
                sx={{
                  fontSize: 50,
                  color: "#fff",
                }}
              />
              &emsp;
              <Link
                to="/admin/sent-mails"
                className="text-light text-decoration-none fw-semibold hover-text-danger"
              >
                Sent Email History
              </Link>
            </li>
            <li className="d-flex align-items-center mt-3 cursor-pointer">
              <TuneIcon
                sx={{
                  fontSize: 60,
                  color: "#fff",
                }}
              />
              <Link
                to="/update-password"
                className="text-light text-decoration-none fw-semibold hover-text-danger"
              >
                Change Password
              </Link>
            </li>
            <li>
              <button
                onClick={logout}
                className="btn btn-lg orange mt-3 text-white"
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
