import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "../components/Header";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Contact from "../pages/Contact";
import Admin from "../pages/Admin";
import AdminContactList from "../pages/AdminContactList";
import AdminProfile from "../pages/AdminProfile";
import AdminUpdateProfile from "../pages/AdminUpdateProfile"
import AdminChangePassword from "../pages/AdminChangePassword"
import { SendMail } from "../components/Admin/SendMail";
import  AdminSentMails  from "../pages/AdminSentMails";
import Error404 from "../pages/404";
import Voip from "../pages/Voip";
// import { ServiceDetail } from "../components/ServiceDetail";
import VoipPage from "../pages/VoipPage";
import ConnectPage from "../pages/ConnectPage";
import SatellitePage from "../pages/SatellitePage";

export const Navbar = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/voip-services" element={<VoipPage />} />
                <Route path="/services/connectivity" element={<ConnectPage />} />
                <Route path="/products/voip-hardware" element={<Voip />} />
                <Route path="/services/satellite" element={<SatellitePage />} />
                SatellitePage
                <Route path="/admin" element={<Admin />} />
                <Route path="/admin/contacts" element={<AdminContactList/>} />
                <Route path="/admin/profile" element={<AdminProfile/>} />
                <Route path="/update_profile" element={<AdminUpdateProfile/>} />
                <Route path="/update-password" element={<AdminChangePassword/>} />
                <Route path="/admin/send-email" element={<SendMail/>} />
                <Route path="/admin/sent-mails" element={<AdminSentMails/>} />
                {/* Fallback route */}
                <Route path="*" element={<Error404 />} />
            </Routes>
        </BrowserRouter>
    );
};
