import React from "react";
import ServiceDetail from "../ServiceDetail";

const serviceData = {
  title: "Satellite Solutions",
  imageSrc: require("../../assets/images/services/satellite.jpg"),
  imageAlt: "Maritime or satellite infrastructure.",
  description: "Discuss terrestrial, maritime, and broadcasting connectivity solutions.",
  // subtitle: "Sed ut perspiciatis unde omnis iste natus et",
  videoTitle: "Satellite Solutions Benefits",
  videoContent: "Connectivity even in the remotest areas through satellite services.",
  videoBenefits: [
    "Terrestrial Satellite: Stay connected in remote locations",
    "Maritime Internet: Reliable connection for offshore platforms and ships.",
    "Cellular Backhauling: Expand mobile coverage to remote areas with satellite.",
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
