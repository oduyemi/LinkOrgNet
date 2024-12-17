import React, { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

export const DashboardContent = ({ title, children }) => {
  const [userName, setUserName] = useState("Loading...");

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      try {
        const decoded = jwtDecode(token);
        console.log("Decoded Token:", decoded);
        const decodedToken = jwtDecode(token);
        const adminId = decodedToken.adminId;
        console.log("Admin ID:", adminId);

        const fetchUserDetails = async () => {
          try {
            const response = await axios.get(`https://linkorgnet.vercel.app/api/v1/admin/${adminId}`);
            console.log("API Response:", response.data);
            const { fname, lname } = response.data.data; 
            console.log("Setting user name:", `${fname} ${lname}`); 
            setUserName(`${fname} ${lname}`);
          } catch (error) {
            console.error("Error fetching user details:", error);
            setUserName("User");
          }
        };

        fetchUserDetails();
      } catch (error) {
        console.error("Error decoding token:", error);
        setUserName("User");
      }
    } else {
      setUserName("Guest");
    }
  }, []);

  return (
    <main className="min-h-screen w-100 ">
      <nav className="d-flex justify-content-between grey py-4 px-5 mb-4 shadow-xl">
        <div className="input-group w-50">
          <input type="text" placeholder="Search" className="form-control" />
          <button className="btn" type="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
        <div className="d-flex align-items-center dashboardImg">
          <p className="mb-0">{userName}</p>
        </div>
      </nav>
      <div className="container-fluid">
        <h1 className="h4 text-primary fw-semibold mb-4">{title}</h1>
        {/* Content passed from parent component */}
        {children}
      </div>
    </main>
  );
};
