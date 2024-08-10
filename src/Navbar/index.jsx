import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "../components/Header";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Contact from "../pages/Contact";
import Admin from "../pages/Admin";
import AdminContactList from "../pages/AdminContactList";
import { SendMail } from "../components/Admin/SendMail";
import Error404 from "../pages/404";

export const Navbar = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/services" element={<Services />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/admin/contacts" element={<AdminContactList/>} />
                <Route path="/admin/send-email" element={<SendMail/>} />
                {/* Fallback route */}
                <Route path="*" element={<Error404 />} />
            </Routes>
        </BrowserRouter>
    );
};
