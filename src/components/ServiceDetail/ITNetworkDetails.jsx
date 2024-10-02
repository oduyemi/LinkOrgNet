import React from "react";
import ServiceDetail from "../ServiceDetail";

const serviceData = {
  title: "IT & Network Solutions",
  imageSrc: require("../../assets/images/services/it.jpg"),
  imageAlt: "A network architecture or security image",
  description: `<p>Security solutions are critical for safeguarding business operations and data against cyber threats. These include firewalls, intrusion detection systems, VPNs (Virtual Private Networks), and encryption protocols designed to protect sensitive information and ensure secure access to networks.</p> 
               <p>Alongside security, LAN (Local Area Network) and WAN (Wide Area Network) management are essential for optimizing the flow of information within and between office locations. Effective LAN/WAN management ensures high-performance networking, efficient data transmission, and reliable communication across geographically dispersed areas. </p>
                <p> IT infrastructure, which encompasses hardware, software, and networking resources, forms the backbone of business operations. Properly designed and maintained IT infrastructure allows companies to scale their operations, boost efficiency, and support innovation while ensuring resilience and continuity. Together, these elements create a secure, well-managed, and high-performance digital environment that meets modern business needs.</p>`,
  subtitle: "IT & Network Solutions we offer",

  carouselItems: [
    { imgSrc: require("../../assets/images/services/it1.png"), title: "Application Security", description: "Protect apps from cyber threats." },
    { imgSrc: require("../../assets/images/services/it2.png"), title: "Managed LAN/WAN", description: "Comprehensive management ensures optimal performance." },
    { imgSrc: require("../../assets/images/services/it3.jpg"), title: "Endpoint Security", description: "Safeguard network devices across your business." }
],

  sidebarItems: [
    { name: "VoIP Solutions", link: "/services/voip-services", active: true },
    { name: "Internet Solutions", link: "/services/internet" },
    { name: "VPN Solutions", link: "/services/vpn-solutions" },
    { name: "Satellite Solution", link: "/services/satellite"},
    { name: "Storage Solutions", link: "/services/storage-solutions" },
    { name: "Collocation & Datacenter Services", link: "/services/collocation-and-data-center" },
    { name: "Software Services", link: "/services/software-services" },
  ],

};

const App = () => (
  <ServiceDetail {...serviceData} />
);

export default App;
