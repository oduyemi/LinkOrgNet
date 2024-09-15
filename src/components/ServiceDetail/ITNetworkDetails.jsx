import React from "react";
import ServiceDetail from "../ServiceDetail";

const serviceData = {
  title: "IT & Network Solutions",
  imageSrc: require("../../assets/images/services/it.jpg"),
  imageAlt: "A network architecture or security image",
  description: "Security solutions are critical for safeguarding business operations and data against cyber threats. These include firewalls, intrusion detection systems, VPNs (Virtual Private Networks), and encryption protocols designed to protect sensitive information and ensure secure access to networks. Alongside security, LAN (Local Area Network) and WAN (Wide Area Network) management are essential for optimizing the flow of information within and between office locations. Effective LAN/WAN management ensures high-performance networking, efficient data transmission, and reliable communication across geographically dispersed areas. IT infrastructure, which encompasses hardware, software, and networking resources, forms the backbone of business operations. Properly designed and maintained IT infrastructure allows companies to scale their operations, boost efficiency, and support innovation while ensuring resilience and continuity. Together, these elements create a secure, well-managed, and high-performance digital environment that meets modern business needs.",
  // subtitle: "Sed ut perspiciatis unde omnis iste natus et",
  videoTitle: "IT & Network Solutions we offer",
  videoContent: "Highlight protection, performance, and tailored IT services.",
  videoBenefits: [
    "Application Security: Protect apps from cyber threats.",
    "Managed LAN/WAN: Comprehensive management ensures optimal performance.",
    "Endpoint Security: Safeguard network devices across your business.",
  ],
//   carouselItems: [
//     { imgSrc: require("../../assets/images/products/yealink0.png"), title: "Hotel Hilton", location: "Albufeira", reviews: "170", description: "For what reason would it be advisable for me to think about business content?" },
//     { imgSrc: require("../../assets/images/products/yealink-T48U.jpg"), title: "Double", location: "New Delhi", reviews: "485", description: "For what reason would it be advisable for me to think about business content?" },
//     { imgSrc: require("../../assets/images/products/yealink2.png"), title: "Hotel Hilton", location: "Albufeira", reviews: "170", description: "For what reason would it be advisable for me to think about business content?" }
// ],
  sidebarItems: [
    { name: "VoIP Solutions", link: "/services/voip-services", active: true },
    { name: "Connectivity Services", link: "/services/connectivity"},
    { name: "VPN Solutions", link: "/services/vpn-solutions" },
    { name: "Satellite Solution", link: "/services/satellite"},
    { name: "Storage Solutions", link: "/services/storage-solutions" },
    { name: "Collocation $ Datacenter Services", link: "/services/collocation-and-data-center" },
    { name: "Software Services", link: "/services/software-services" },
  ],
  // additionalImages: [
  //   { src: require("../../assets/images/products/Cisco-6841-sip.png"), alt: "Cisco 6841" },
  //   { src: require("../../assets/images/products/packages.jpg"), alt: "Packages" },
  // ],
};

const App = () => (
  <ServiceDetail {...serviceData} />
);

export default App;
