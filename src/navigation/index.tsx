import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Residential from "../pages/Residential";
import Business from "../pages/Business";
import Enterprise from "../pages/Enterprise";
import About from "../pages/About";




export const Navigation = () => (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/residential" element={<Residential />} />
        <Route path="/business" element={<Business />} />
        <Route path="/enterprise" element={<Enterprise />} />
        <Route path="/about" element={<About />} />
    </Routes>
);

