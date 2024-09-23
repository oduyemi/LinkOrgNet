import React from "react";
import ServiceDetail from "../ServiceDetail";

const serviceData = {
  title: "Software Services",
  imageSrc: require("../../assets/images/services/software.jpg"),
  imageAlt: "Custom software development or integration.",
  description: `<p>Custom development, integration, and maintenance services are vital for businesses looking to create tailored software solutions that meet their specific needs. Custom development ensures that software is built to match unique business processes, providing flexibility and functionality that off-the-shelf solutions cannot offer.</p> 
                <p>Integration services connect disparate systems, allowing for seamless data flow and improving overall operational efficiency. Maintenance ensures that these solutions remain up-to-date, secure, and functioning optimally over time, with regular updates, bug fixes, and performance enhancements. Together, these services help businesses stay competitive and efficient in an ever-evolving digital landscape.</p>`,
  subtitle: "Software Service we offer",

  carouselItems: [
    { imgSrc: require("../../assets/images/services/soft1.jpg"), title: "Custom Development", description: "Build software tailored to your specific needs." },
    { imgSrc: require("../../assets/images/services/soft2.jpg"), title: "Seamless Integration", description: "Smooth integration with existing infrastructure." },
    { imgSrc: require("../../assets/images/services/soft3.jpg"), title: "Maintenance", description: "Continuous support and improvements to keep systems running." }
],

  sidebarItems: [
    { name: "VoIP Solutions", link: "/services/voip-services", active: true },
    { name: "Satellite Solution", link: "/services/satellite" },
    { name: "VPN Solutions", link: "/services/vpn-solutions" },
    { name: "IT & Network Solutions", link: "/services/it-networks" },
    { name: "Storage Solutions", link: "/services/storage-solutions" },
    { name: "Internet Services", link: "/services/internet_services" },
    { name: "Collocation & Datacenter Services", link: "/services/collocation-and-data-center" },
  ],

};

const App = () => (
  <ServiceDetail {...serviceData} />
);

export default App;
