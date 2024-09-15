import React from "react";
import ServiceDetail from "../ServiceDetail";

const serviceData = {
  title: "Software Services",
  imageSrc: require("../../assets/images/services/software.jpg"),
  imageAlt: "Custom software development or integration.",
  description: "Custom development, integration, and maintenance services are vital for businesses looking to create tailored software solutions that meet their specific needs. Custom development ensures that software is built to match unique business processes, providing flexibility and functionality that off-the-shelf solutions cannot offer. Integration services connect disparate systems, allowing for seamless data flow and improving overall operational efficiency. Maintenance ensures that these solutions remain up-to-date, secure, and functioning optimally over time, with regular updates, bug fixes, and performance enhancements. Together, these services help businesses stay competitive and efficient in an ever-evolving digital landscape.",
  // subtitle: "Sed ut perspiciatis unde omnis iste natus et",
  videoTitle: "Software Service we offer",
  videoContent: "Tailored software solutions for seamless business operations..",
  videoBenefits: [
    "Custom Development: Build software tailored to your specific needs.",
    "Seamless Integration: Smooth integration with existing infrastructure.",
    "Maintenance: Continuous support and improvements to keep systems running.",
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
    { name: "Collocation $ Datacenter Services", link: "/services/collocation-and-data-center" },
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
