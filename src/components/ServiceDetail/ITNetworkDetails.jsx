import React from "react";
import ServiceDetail from "../ServiceDetail";

const serviceData = {
  title: "IT & Network Solutions",
  imageSrc: require("../../assets/images/services/it.jpg"),
  imageAlt: "A network architecture or security image",
  description: "Cover security solutions, LAN/WAN management, and IT infrastructure.",
  // subtitle: "Sed ut perspiciatis unde omnis iste natus et",
  videoTitle: "IT & Network Solutions Benefits",
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
    { name: "Voip Solutions", link: "/services/voip-services", active: true },
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
