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
// import { ServiceDetail } from "../components/ServiceDetail";
import VoipPage from "../pages/servicesDetails/VoipPage";
import ConnectPage from "../pages/servicesDetails/ConnectPage";
import SatellitePage from "../pages/servicesDetails/SatellitePage";
import VPNPage from "../pages/servicesDetails/VPNPage";
import ITNetworkPage from "../pages/servicesDetails/ITNetworkPage";
import StoragePage from "../pages/servicesDetails/StoragePage";
import CollocationPage from "../pages/servicesDetails/CollacationPage";
import SoftwarePage from "../pages/servicesDetails/SoftwarePage";
import { GeneralQuestions } from "../components/FAQs/General";

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
                <Route path="/services/satellite" element={<SatellitePage />} />
                <Route path="/services/vpn-solutions" element={<VPNPage />} />
                <Route path="/services/it-networks" element={<ITNetworkPage />} />
                <Route path="/services/storage-solutions" element={<StoragePage />} />
                <Route path="/services/collocation-and-data-center" element={<CollocationPage />} />
                <Route path="/services/software-services" element={<SoftwarePage />} />

                {/* FAQs */}
                <Route path="/faqs" element={<GeneralQuestions />} />
                
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
