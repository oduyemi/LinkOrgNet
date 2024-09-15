import React from "react";
import ServiceDetail from "../ServiceDetail";

const serviceData = {
  title: "Storage Solutions",
  imageSrc: require("../../assets/images/services/storage.jpg"),
  imageAlt: "Data storage or cloud infrastructure.",
  description: "SAN (Storage Area Network), NAS (Network Attached Storage), and cloud storage are three key solutions for modern data management. SAN offers high-speed, block-level storage ideal for businesses with large-scale data transfer and performance demands, such as databases and virtualization. NAS provides file-based storage that's easy to access and share over a network, making it suitable for file sharing and backups in both home and business environments. Cloud storage delivers scalable, remote storage options, allowing businesses to pay for what they use while benefiting from easy access and disaster recovery capabilities. Together, these solutions cater to diverse storage needs, from high-performance to cost-effective scalability.",
  // subtitle: "Sed ut perspiciatis unde omnis iste natus et",
  videoTitle: "Storage Solutions we offer",
  videoContent: "Here are the three Storage Solutions we have for you:",
  videoBenefits: [
    "SAN: High-performance on-premises storage.",
    "NAS: Scalable, easy-to-use networked storage.",
    "Cloud Storage: Secure, flexible access to data anytime, anywhere.",
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
    { name: "Connectivity Services", link: "/services/connectivity" },
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
