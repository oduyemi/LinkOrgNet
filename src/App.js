import React from "react";
import { Navbar } from "./Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import "animate.css";
import TawkToChat from './components/TawkTo';
import ConsentBanner from "./ConsentBanner";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import VoipPage from "./pages/servicesDetails/VoipPage";
import SatellitePage from "./pages/servicesDetails/SatellitePage";
import VPNPage from "./pages/servicesDetails/VPNPage";
import ITNetworkPage from "./pages/servicesDetails/ITNetworkPage";
import StoragePage from "./pages/servicesDetails/StoragePage";
import InternetPage from "./pages/servicesDetails/InternetPage";
import CollocationPage from "./pages/servicesDetails/CollacationPage";
import SoftwarePage from "./pages/servicesDetails/SoftwarePage";
import HighSpeed from "./pages/subServices/HighSpeed";
import Fiber from "./pages/subServices/Fiber";
import EstateConnectInternet from "./pages/subServices/EstateConnect";
import Mpls3 from "./pages/subServices/Mpls3";
import Mpls2 from "./pages/subServices/Mpls2";
import LeasedLine from "./pages/subServices/LeasedLine";
import { GeneralQuestions } from "./components/FAQs/General";
import { ItQuestions } from "./components/FAQs/ItQuestion";
import { SoftwareQuestions } from "./components/FAQs/Software";
import { StorageQuestions } from "./components/FAQs/Storage";
import { InternetQuestions } from "./components/FAQs/Internet";
import { VPNQuestions } from "./components/FAQs/VPN";
import { VoipQuestions } from "./components/FAQs/Voip";
import { CollationQuestions } from "./components/FAQs/Collation";
import { VSATQuestions } from "./components/FAQs/VSAT";
import Error404 from "./pages/404";
import Admin from "./pages/AdminPage/Admin";
import AdminContactList from "./pages/AdminPage/AdminContactList";
import AdminUpdateProfile from "./pages/AdminPage/AdminUpdateProfile";
import AdminProfile from "./pages/AdminPage/AdminProfile";
import AdminChangePassword from "./pages/AdminPage/AdminChangePassword";
import { SendMail } from "./components/Admin/SendMail";
import AdminSentMails from "./pages/AdminPage/AdminSentMails";
import MaritimePage from "./pages/subServices/MaritimePage";
import TerrestrialPage from "./pages/subServices/TerrestrialPage";
import BackhaulingPage from "./pages/subServices/BackhaulingPage";
import AppSecurePage from "./pages/subServices/AppSecurePage";
import WanAndLanPage from "./pages/subServices/WanAndLanPage";
import EndSecurePage from "./pages/subServices/EndSecurePage";
import SanPage from "./pages/subServices/SanPage";
import NasPage from "./pages/subServices/NasPage";
import CloudStoragePage from "./pages/subServices/CloudStoragePage";
import VirtualServerPage from "./pages/subServices/VirtualServerPage";
import DataBackupPage from "./pages/subServices/DataBackupPage";
import CollocationSubPage from "./pages/subServices/CollocationPage";

function App() {
  const location = useLocation();

  // List of admin routes
  const adminRoutes = ["/admin", "/admin/contacts", "/admin/profile", "/update_profile", "/update-password", "/admin/send-email", "/admin/sent-mails"];

  return (
    <>
      {/* Conditionally render Navbar, ConsentBanner, and TawkToChat only if not on an admin route */}
      {!adminRoutes.includes(location.pathname) && (
        <>
          <Navbar />
          <ConsentBanner />
          <TawkToChat />
        </>
      )}

      <ScrollToTop />
      <Routes>
        {/* Define your routes here */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/voip-services" element={<VoipPage />} />
        <Route path="/services/internet" element={<InternetPage />} />
        <Route path="/services/satellite" element={<SatellitePage />} />
        <Route path="/services/vpn-solutions" element={<VPNPage />} />
        <Route path="/services/it-networks" element={<ITNetworkPage />} />
        <Route path="/services/storage-solutions" element={<StoragePage />} />
        <Route path="/services/collocation-and-data-center" element={<CollocationPage />} />
        <Route path="/services/software-services" element={<SoftwarePage />} />

        {/* Subservices */}
        <Route path="/services/internet/highspeed" element={<HighSpeed />} />
        <Route path="/services/internet/fiber" element={<Fiber />} />
        <Route path="/services/internet/estate_connect" element={<EstateConnectInternet />} />
        <Route path="/services/vpn-solutions/mpls3" element={<Mpls3 />} />
        <Route path="/services/vpn-solutions/mpls2" element={<Mpls2 />} />
        <Route path="/services/vpn-solutions/leased" element={<LeasedLine />} />
        <Route path="/services/satellite/terrestrial" element={<TerrestrialPage/>} />
        <Route path="/services/satellite/maritime" element={<MaritimePage/>} />
        <Route path="/services/satellite/backhauling" element={<BackhaulingPage/>} />
        <Route path="/services/it-networks/app_security" element={<AppSecurePage/>} />
        <Route path="/services/it-networks/wan_lan" element={<WanAndLanPage/>} />
        <Route path="/services/it-networks/endpoint" element={<EndSecurePage/>} />
        <Route path="/services/storage-solutions/san" element={<SanPage/>} />
        <Route path="/services/storage-solutions/nas" element={<NasPage/>} />
        <Route path="/services/storage-solutions/cloud_storage" element={<CloudStoragePage/>} />
        <Route path="/services/collocation-and-data-center/virtual_server" element={<VirtualServerPage/>} />
        <Route path="/services/collocation-and-data-center/collocate" element={<CollocationSubPage/>} />
        <Route path="/services/collocation-and-data-center/data_backup" element={<DataBackupPage/>} />

        {/* /services/software-services/custom_develop */}
        {/* /services/software-services/seemless_integrate */}


        {/* FAQs */}
        <Route path="/faqs" element={<GeneralQuestions />} />
        <Route path="/faqs/it-networks" element={<ItQuestions />} />
        <Route path="/faqs/software-services" element={<SoftwareQuestions />} />
        <Route path="/faqs/storage-services" element={<StorageQuestions />} />
        <Route path="/faqs/internet" element={<InternetQuestions />} />
        <Route path="/faqs/voip-services" element={<VoipQuestions />} />
        <Route path="/faqs/vpn-services" element={<VPNQuestions />} />
        <Route path="/faqs/collocation-data-center" element={<CollationQuestions />} />
        <Route path="/faqs/vsat-services" element={<VSATQuestions />} />

        {/* Admin Routes */}
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/contacts" element={<AdminContactList />} />
        <Route path="/admin/profile" element={<AdminProfile />} />
        <Route path="/update_profile" element={<AdminUpdateProfile />} />
        <Route path="/update-password" element={<AdminChangePassword />} />
        <Route path="/admin/send-email" element={<SendMail />} />
        <Route path="/admin/sent-mails" element={<AdminSentMails />} />

        {/* Fallback route */}
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
}

export default App;
