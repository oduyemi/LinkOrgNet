import React from "react";
import ServiceDetail from "../ServiceDetail";

const serviceData = {
  title: "VOIP Solutions",
  imageSrc: require("../../assets/images/callcentre.png"),
  imageAlt: "VOIP Service",
  description: "•	Cut down on communication costs without compromising quality. Linkorg Network’s VoIP solutions provide crystal-clear voice calls over the internet, ensuring you stay connected with clients and colleagues effortlessly",
  // subtitle: "Sed ut perspiciatis unde omnis iste natus et",
  videoTitle: "VOIP Benefits",
  videoContent: "Here are three key benefits of VoIP (Voice over Internet Protocol):",
  videoBenefits: [
    "Cost Savings: Lower communication expenses, particularly for long-distance and international calls.",
    "Scalability: Easily adjustable to add or remove lines and features without extensive infrastructure.",
    "Flexibility and Mobility: Enables communication from any location with internet access, ideal for remote work.",
  ],
//   carouselItems: [
//     { imgSrc: require("../../assets/images/products/yealink0.png"), title: "Hotel Hilton", location: "Albufeira", reviews: "170", description: "For what reason would it be advisable for me to think about business content?" },
//     { imgSrc: require("../../assets/images/products/yealink-T48U.jpg"), title: "Double", location: "New Delhi", reviews: "485", description: "For what reason would it be advisable for me to think about business content?" },
//     { imgSrc: require("../../assets/images/products/yealink2.png"), title: "Hotel Hilton", location: "Albufeira", reviews: "170", description: "For what reason would it be advisable for me to think about business content?" }
// ],
  sidebarItems: [
    { name: "Connectivity Services", link: "/services/connectivity", active: true },
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