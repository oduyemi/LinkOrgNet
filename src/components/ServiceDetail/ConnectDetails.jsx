import React from "react";
import ServiceDetail from "../ServiceDetail";

const serviceData = {
  title: "Connectivity Services",
  imageSrc: require("../../assets/images/services/connectivity.jpg"),
  imageAlt: "Connectivity Service",
  description: "Highlight benefits like high-speed wireless internet, fiber-optic speeds, and community connectivity for residential estates.",
  // subtitle: "Sed ut perspiciatis unde omnis iste natus et",
  videoTitle: "Connectivity Services Benefits",
  videoContent: "Here are three key benefits of Connectivity Services:",
  videoBenefits: [
    "High-Speed Wireless: Stay connected with fast, reliable wireless internet.",
    "Fiber to Home: Ultra-fast fiber-optic speeds for seamless online activities.",
    "Estate Connect: Connect entire residential communities with high-speed internet access.",
  ],
//   carouselItems: [
//     { imgSrc: require("../../assets/images/products/yealink0.png"), title: "Hotel Hilton", location: "Albufeira", reviews: "170", description: "For what reason would it be advisable for me to think about business content?" },
//     { imgSrc: require("../../assets/images/products/yealink-T48U.jpg"), title: "Double", location: "New Delhi", reviews: "485", description: "For what reason would it be advisable for me to think about business content?" },
//     { imgSrc: require("../../assets/images/products/yealink2.png"), title: "Hotel Hilton", location: "Albufeira", reviews: "170", description: "For what reason would it be advisable for me to think about business content?" }
// ],
  sidebarItems: [
    { name: "Voip Solutions", link: "/services/voip-services", active: true },
    { name: "Satellite Solution", link: "/services/satellite" },
    { name: "VPN Solutions", link: "/services/vpn-solutions" },
    { name: "IT & Network Solutions", link: "/services/it-networks" },
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
