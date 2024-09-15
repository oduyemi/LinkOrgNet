import React from "react";
import ServiceDetail from "../ServiceDetail";

const serviceData = {
  title: "Collocation & Datacenter Services",
  imageSrc: require("../../assets/images/services/datacenter.jpg"),
  imageAlt: " Datacenter or server racks",
  description: "Virtual hosting, collocation, and backup services are essential for businesses seeking secure and scalable infrastructure. Virtual hosting allows companies to host their websites and applications on shared servers, reducing costs while maintaining performance and flexibility. Collocation offers businesses the ability to house their servers in a secure data center, ensuring high availability, better cooling, and physical security without the need for in-house infrastructure. Backup services provide critical data protection, offering regular, automated backups that safeguard against data loss, ensuring business continuity in the event of system failures or cyber threats. These solutions work together to provide reliability, security, and scalability for businesses of all sizes.",
  // subtitle: "Sed ut perspiciatis unde omnis iste natus et",
  videoTitle: "Collocation & Datacenter Services we offer",
  videoContent: "Reliable hosting, secure backup, and minimal downtime.",
  videoBenefits: [
    "Virtual Servers: Scale your business with virtual hosting.",
    "Collocation: Secure IT infrastructure in a state-of-the-art datacenter.",
    "Data Backup: Comprehensive solutions for data protection and recovery.",
  ],
//   carouselItems: [
//     { imgSrc: require("../../assets/images/products/yealink0.png"), title: "Hotel Hilton", location: "Albufeira", reviews: "170", description: "For what reason would it be advisable for me to think about business content?" },
//     { imgSrc: require("../../assets/images/products/yealink-T48U.jpg"), title: "Double", location: "New Delhi", reviews: "485", description: "For what reason would it be advisable for me to think about business content?" },
//     { imgSrc: require("../../assets/images/products/yealink2.png"), title: "Hotel Hilton", location: "Albufeira", reviews: "170", description: "For what reason would it be advisable for me to think about business content?" }
// ],
  sidebarItems: [
    { name: "VoIP Solutions", link: "/services/voip-services", active: true },
    { name: "Satellite Solution", link: "/services/satellite" },
    { name: "VPN Solutions", link: "/services/vpn-solutions" },
    { name: "IT & Network Solutions", link: "/services/it-networks" },
    { name: "Storage Solutions", link: "/services/storage-solutions" },
    { name: "Connectivity Services", link: "/services/connectivity" },
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
